Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root 'public'
$logosDir = Join-Path $publicDir 'logos'
$brandDir = Join-Path $publicDir 'brand'
$isotypeSrc = Join-Path $logosDir 'isotype-ca.png'

if (-not (Test-Path $brandDir)) { New-Item -ItemType Directory -Path $brandDir | Out-Null }

# --- Step 1: Build a transparent-bg version of the isotype from the white-bg source.
# Source is opaque black-on-white. We compute luminance and turn the white into alpha.
function New-TransparentIsotype {
    param([string]$srcPath)

    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $w = $src.Width
    $h = $src.Height

    $dst = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
    $srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $dstData = $dst.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $size = $srcData.Stride * $h
    $srcBytes = New-Object byte[] $size
    $dstBytes = New-Object byte[] $size
    [System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $srcBytes, 0, $size)

    # Threshold-based mask: high lum → transparent, low lum → opaque ink, soft edge between.
    $hiThresh = 215.0  # above this is treated as pure white (alpha 0)
    $loThresh = 60.0   # below this is treated as pure black (alpha 255)
    $range = $hiThresh - $loThresh
    for ($i = 0; $i -lt $size; $i += 4) {
        $b = $srcBytes[$i]
        $g = $srcBytes[$i + 1]
        $r = $srcBytes[$i + 2]
        $lum = (0.299 * $r) + (0.587 * $g) + (0.114 * $b)
        if ($lum -ge $hiThresh) {
            $a = 0
        } elseif ($lum -le $loThresh) {
            $a = 255
        } else {
            $a = [byte]([math]::Round((1.0 - (($lum - $loThresh) / $range)) * 255))
        }
        $dstBytes[$i]     = 0
        $dstBytes[$i + 1] = 0
        $dstBytes[$i + 2] = 0
        $dstBytes[$i + 3] = $a
    }

    [System.Runtime.InteropServices.Marshal]::Copy($dstBytes, 0, $dstData.Scan0, $size)
    $src.UnlockBits($srcData)
    $dst.UnlockBits($dstData)
    $src.Dispose()
    return $dst
}

Write-Host "Extracting transparent isotype..."
$transparentIsotype = New-TransparentIsotype -srcPath $isotypeSrc

# Save the cleaned brand assets
$transparentIsotype.Save((Join-Path $brandDir 'isotype-light.png'), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "OK brand/isotype-light.png"

# Build a white variant by recoloring the alpha mask
function New-RecoloredIsotype {
    param(
        [System.Drawing.Bitmap]$alphaSource,
        [System.Drawing.Color]$color
    )
    $w = $alphaSource.Width
    $h = $alphaSource.Height
    $dst = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
    $srcData = $alphaSource.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $dstData = $dst.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $size = $srcData.Stride * $h
    $srcBytes = New-Object byte[] $size
    $dstBytes = New-Object byte[] $size
    [System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $srcBytes, 0, $size)
    for ($i = 0; $i -lt $size; $i += 4) {
        $a = $srcBytes[$i + 3]
        $dstBytes[$i]     = $color.B
        $dstBytes[$i + 1] = $color.G
        $dstBytes[$i + 2] = $color.R
        $dstBytes[$i + 3] = $a
    }
    [System.Runtime.InteropServices.Marshal]::Copy($dstBytes, 0, $dstData.Scan0, $size)
    $alphaSource.UnlockBits($srcData)
    $dst.UnlockBits($dstData)
    return $dst
}

$white = [System.Drawing.Color]::FromArgb(255, 248, 246, 241)
$whiteIsotype = New-RecoloredIsotype -alphaSource $transparentIsotype -color $white
$whiteIsotype.Save((Join-Path $brandDir 'isotype-dark.png'), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "OK brand/isotype-dark.png"

# --- Step 2: Compose final icons (fg over solid bg).
function New-IconPng {
    param(
        [int]$size,
        [string]$outputPath,
        [System.Drawing.Bitmap]$fg,
        [System.Drawing.Color]$bgColor,
        [double]$padPercent = 0.18
    )
    $canvas = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($canvas)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    if ($bgColor.A -gt 0) {
        $brush = New-Object System.Drawing.SolidBrush $bgColor
        $g.FillRectangle($brush, 0, 0, $size, $size)
        $brush.Dispose()
    }

    $inner = [int]($size * (1 - 2 * $padPercent))
    $offset = [int](($size - $inner) / 2)
    $destRect = New-Object System.Drawing.Rectangle $offset, $offset, $inner, $inner
    $g.DrawImage($fg, $destRect)

    $g.Dispose()
    $canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $canvas.Dispose()
    Write-Host "OK $outputPath"
}

$navy = [System.Drawing.Color]::FromArgb(255, 20, 29, 45)

New-IconPng -size 192 -outputPath (Join-Path $publicDir 'icon-192.png') -fg $whiteIsotype -bgColor $navy -padPercent 0.18
New-IconPng -size 512 -outputPath (Join-Path $publicDir 'icon-512.png') -fg $whiteIsotype -bgColor $navy -padPercent 0.18
New-IconPng -size 180 -outputPath (Join-Path $publicDir 'apple-icon.png') -fg $whiteIsotype -bgColor $navy -padPercent 0.18
New-IconPng -size 512 -outputPath (Join-Path $publicDir 'icon-maskable-512.png') -fg $whiteIsotype -bgColor $navy -padPercent 0.24

$transparentIsotype.Dispose()
$whiteIsotype.Dispose()

Write-Host "Done."
