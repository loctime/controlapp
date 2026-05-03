# ControlFile Naming Refactor — Design Spec
**Date:** 2026-05-02  
**Status:** Approved

## Problema

La web mezcla dos conceptos distintos bajo el término genérico "storage global":

- **ControlFile** — el frontend "Drive" de la plataforma (explorador de archivos, UI tipo Windows, app visible al usuario).
- **ControlStorage** — la infraestructura de almacenamiento backend compartida (no visible al usuario como producto separado).

Esto confunde a usuarios y desarrolladores porque ControlFile aparece etiquetado como "Storage global" en el hero, en el MegaMenu y en descripciones de otras apps, cuando en realidad es solo el explorador que da acceso a esa infraestructura.

## Decisiones de diseño

| Pregunta | Decisión |
|----------|----------|
| ¿"ControlStorage" aparece en la UI? | No. Los usuarios ven "almacenamiento compartido" o "infraestructura centralizada" como término genérico. |
| ¿Cómo renombrar `visibleInControlFile`? | `exposedInDrive` — enfatiza que ControlFile es el "drive" de la plataforma. |
| ¿Renombrar la categoría `"storage"`? | Sí → `"drive"`. |

## Alcance (Opción B)

### 1. Tipos — `lib/platform-types.ts`

| Antes | Después |
|-------|---------|
| `PlatformAppCategory = "operations" \| "finance" \| "talent" \| "storage"` | `"storage"` → `"drive"` |
| `PlatformCapability.visibleInControlFile: boolean` | `exposedInDrive: boolean` |

### 2. App definitions — `lib/apps/*.ts`

**`control-file.ts`:**
- `category: "storage"` → `category: "drive"`
- `visibleInControlFile: true` → `exposedInDrive: true`

**Resto de apps** (bolsa-trabajo, control-doc, horarios, control-audit, control-gastos, control-ventas, control-market):
- `visibleInControlFile: true/false` → `exposedInDrive: true/false`

**Strings de texto en apps que mezclan ControlFile con "storage global":**
- Patrón: `"...en el storage global visible desde ControlFile."` → `"...en el almacenamiento compartido, accesible desde ControlFile."`
- Afecta: control-audit.ts, control-doc.ts, bolsa-trabajo.ts, control-ventas.ts, control-gastos.ts

### 3. UI Components

**`components/hero.tsx`:**
| Antes | Después |
|-------|---------|
| highlight: `"Storage global visible desde ControlFile"` | `"Almacenamiento compartido, visible desde ControlFile"` |
| badge label: `"Storage global"` | `"Drive empresarial"` |

**`components/navbar/MegaMenu.tsx`:**
| Antes | Después |
|-------|---------|
| `"...comparten autenticacion, permisos y storage global."` | `"...comparten autenticacion, permisos y almacenamiento centralizado."` |

**`components/solutions.tsx`:**
| Antes | Después |
|-------|---------|
| `"Almacenamiento en la nube profesional con integración Backblaze B2"` | `"El drive de la plataforma. Explorá, organizá y compartí archivos de todas tus apps desde un solo lugar."` |

### 4. Platform catalog — `lib/platform-catalog.ts`

| Línea | Antes | Después |
|-------|-------|---------|
| 30 | `"Storage global para documentos..."` | `"Almacenamiento centralizado para documentos..."` |
| 56 | `title: "Storage global"` | `title: "Almacenamiento centralizado"` |
| 84 | `title: "Storage global"` | `title: "Almacenamiento centralizado"` |
| 114 | `"...y storage global para evitar..."` | `"...y almacenamiento centralizado para evitar..."` |
| 170 | `"...con identidad compartida y storage global."` | `"...con identidad compartida y almacenamiento centralizado."` |

**No se tocan:**
- Línea 63: `"ControlFile ordena archivos por app y coleccion..."` — ya correcto.
- Línea 156: `"ControlFile es el explorador de archivos transversal..."` — ya correcto.

## Archivos fuera de scope

- `docs/ControlStorage.md` — documentación interna, no afecta la web.
- `docs/controlFileReadme.md` — documentación interna.
- Routes (`/control-file`), component names, IDs — no cambian.

## Criterios de éxito

1. No existen referencias a `visibleInControlFile` ni a la categoría `"storage"` en el codebase (TypeScript).
2. En la UI, "ControlFile" nunca aparece etiquetado como "Storage global".
3. Toda mención al backend de almacenamiento usa "almacenamiento centralizado" o "almacenamiento compartido".
4. TypeScript compila sin errores tras el refactor.
