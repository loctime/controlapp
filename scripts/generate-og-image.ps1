Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root 'public'
$srcPath = Join-Path $publicDir 'logos\uXQbD.jpg'
$dstPath = Join-Path $publicDir 'og-image.jpg'

$src = [System.Drawing.Bitmap]::FromFile($srcPath)

$targetW = 1200
$targetH = 630

# Scale source so that the SMALLER dimension matches target, then center-crop.
$srcRatio = $src.Width / $src.Height
$targetRatio = $targetW / $targetH

if ($srcRatio -gt $targetRatio) {
    # source is wider — fit height, crop sides
    $scale = $targetH / $src.Height
    $scaledW = [int]($src.Width * $scale)
    $scaledH = $targetH
    $cropX = [int](($scaledW - $targetW) / 2)
    $cropY = 0
} else {
    # source is taller — fit width, crop top/bottom
    $scale = $targetW / $src.Width
    $scaledW = $targetW
    $scaledH = [int]($src.Height * $scale)
    $cropX = 0
    $cropY = [int](($scaledH - $targetH) / 2)
}

$canvas = New-Object System.Drawing.Bitmap $targetW, $targetH
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$destRect = New-Object System.Drawing.Rectangle (-$cropX), (-$cropY), $scaledW, $scaledH
$g.DrawImage($src, $destRect)
$g.Dispose()

# Save as JPG with quality 88
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 88L)
$canvas.Save($dstPath, $encoder, $params)

$src.Dispose()
$canvas.Dispose()
Write-Host "OK $dstPath ($targetW x $targetH)"
