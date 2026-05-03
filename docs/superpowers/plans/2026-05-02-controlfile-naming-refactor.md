# ControlFile Naming Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar la confusión entre ControlFile (el "Drive" frontend) y ControlStorage (el backend de almacenamiento compartido), renombrando tipos, props y textos de UI en todo el codebase.

**Architecture:** Refactor de naming puro — no hay nueva funcionalidad. Cambios de tipos primero para que TypeScript guíe los errores restantes, luego consumidores, luego UI y catalog. Cero cambios de rutas, IDs ni component names.

**Tech Stack:** TypeScript, Next.js 14, React. Sin framework de tests (sitio de marketing) — verificación via `tsc --noEmit`.

---

### Task 1: Renombrar tipos en `lib/platform-types.ts`

**Files:**
- Modify: `lib/platform-types.ts`

> **Nota:** este cambio rompe TypeScript hasta completar Task 2. Es esperado — no commitear hasta terminar Task 2.

- [ ] **Step 1: Cambiar `"storage"` por `"drive"` en `PlatformAppCategory`**

En `lib/platform-types.ts` línea 4, reemplazar:
```ts
export type PlatformAppCategory = "operations" | "finance" | "talent" | "storage"
```
por:
```ts
export type PlatformAppCategory = "operations" | "finance" | "talent" | "drive"
```

- [ ] **Step 2: Renombrar `visibleInControlFile` por `exposedInDrive` en `PlatformCapability`**

En `lib/platform-types.ts` línea 9, reemplazar:
```ts
  visibleInControlFile: boolean
```
por:
```ts
  exposedInDrive: boolean
```

---

### Task 2: Actualizar todos los archivos de apps en `lib/apps/`

**Files:**
- Modify: `lib/apps/control-file.ts`
- Modify: `lib/apps/bolsa-trabajo.ts`
- Modify: `lib/apps/control-doc.ts`
- Modify: `lib/apps/horarios.ts`
- Modify: `lib/apps/control-audit.ts`
- Modify: `lib/apps/control-gastos.ts`
- Modify: `lib/apps/control-ventas.ts`
- Modify: `lib/apps/control-market.ts`

- [ ] **Step 1: Actualizar `lib/apps/control-file.ts` — 3 cambios**

  **Cambio 1** (línea 10): `category`
  ```ts
  // antes
  category: "storage",
  // después
  category: "drive",
  ```

  **Cambio 2** (línea 27): `platformCapabilities`
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 3** (línea 219): string en `relatedApps`
  ```ts
  // antes
  reason: "ControlAudit usa el storage global para evidencias y reportes.",
  // después
  reason: "ControlAudit guarda evidencias en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 2: Actualizar `lib/apps/bolsa-trabajo.ts` — 2 cambios**

  **Cambio 1** (línea 26):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 2** (línea 184):
  ```ts
  // antes
  "Publica CVs y fotos de perfil en el storage global de ControlFile.",
  // después
  "Publica CVs y fotos de perfil en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 3: Actualizar `lib/apps/control-doc.ts` — 2 cambios**

  **Cambio 1** (línea 27):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 2** (línea 228):
  ```ts
  // antes
  "Publica documentos en el storage global administrado por ControlFile.",
  // después
  "Publica documentos en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 4: Actualizar `lib/apps/horarios.ts` — 1 cambio**

  (línea 28):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

- [ ] **Step 5: Actualizar `lib/apps/control-audit.ts` — 2 cambios**

  **Cambio 1** (línea 29):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 2** (línea 235):
  ```ts
  // antes
  "Guarda evidencias dentro del storage global visible desde ControlFile.",
  // después
  "Guarda evidencias en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 6: Actualizar `lib/apps/control-gastos.ts` — 2 cambios**

  **Cambio 1** (línea 27):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 2** (línea 190):
  ```ts
  // antes
  "Guarda comprobantes dentro del storage global.",
  // después
  "Guarda comprobantes en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 7: Actualizar `lib/apps/control-ventas.ts` — 2 cambios**

  **Cambio 1** (línea 27):
  ```ts
  // antes
  visibleInControlFile: true,
  // después
  exposedInDrive: true,
  ```

  **Cambio 2** (línea 184):
  ```ts
  // antes
  "Puede publicar documentación comercial en el storage global.",
  // después
  "Puede publicar documentación comercial en el almacenamiento compartido, accesible desde ControlFile.",
  ```

- [ ] **Step 8: Actualizar `lib/apps/control-market.ts` — 1 cambio**

  (línea 27):
  ```ts
  // antes
  visibleInControlFile: false,
  // después
  exposedInDrive: false,
  ```

- [ ] **Step 9: Verificar que no quedan referencias a `visibleInControlFile`**

  ```bash
  grep -r "visibleInControlFile" lib/
  ```
  Esperado: sin output.

- [ ] **Step 10: Commit Tasks 1 + 2**

  ```bash
  git add lib/platform-types.ts lib/apps/
  git commit -m "refactor: rename visibleInControlFile→exposedInDrive and storage→drive category"
  ```

---

### Task 3: Actualizar UI components

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/navbar/MegaMenu.tsx`
- Modify: `components/solutions.tsx`

- [ ] **Step 1: Actualizar `components/hero.tsx` — 2 cambios**

  **Cambio 1** (línea 14): highlight text
  ```tsx
  // antes
  { icon: FolderOpen, text: "Storage global visible desde ControlFile" },
  // después
  { icon: FolderOpen, text: "Almacenamiento compartido, visible desde ControlFile" },
  ```

  **Cambio 2** (línea 140): badge label del hero flotante
  ```tsx
  // antes
  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Storage global</p>
  // después
  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Drive empresarial</p>
  ```

- [ ] **Step 2: Actualizar `components/navbar/MegaMenu.tsx` — 1 cambio**

  (línea 32):
  ```tsx
  // antes
  Todos los modulos publicados comparten autenticacion, permisos y storage global.
  // después
  Todos los modulos publicados comparten autenticacion, permisos y almacenamiento centralizado.
  ```

- [ ] **Step 3: Actualizar `components/solutions.tsx` — 1 cambio**

  (línea 28): descripción de la card de ControlFile
  ```tsx
  // antes
  description: "Almacenamiento en la nube profesional con integración Backblaze B2",
  // después
  description: "El drive de la plataforma. Explorá, organizá y compartí archivos de todas tus apps desde un solo lugar.",
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add components/hero.tsx components/navbar/MegaMenu.tsx components/solutions.tsx
  git commit -m "fix: update UI text — ControlFile as drive, not storage global"
  ```

---

### Task 4: Actualizar `lib/platform-catalog.ts`

**Files:**
- Modify: `lib/platform-catalog.ts`

- [ ] **Step 1: Reemplazar los 5 strings con "storage global"**

  **Cambio 1** (línea 30): en `heroHighlights`
  ```ts
  // antes
  "Storage global para documentos, evidencias y comprobantes",
  // después
  "Almacenamiento centralizado para documentos, evidencias y comprobantes",
  ```

  **Cambio 2** (línea 56): título del paso de arquitectura — incluir la description para que el Edit sea único
  ```ts
  // antes
      {
        title: "Storage global",
        description:
          "Los archivos viven en una capa comun. Documentos, evidencias y comprobantes no quedan encerrados en silos por producto.",
      },
  // después
      {
        title: "Almacenamiento centralizado",
        description:
          "Los archivos viven en una capa comun. Documentos, evidencias y comprobantes no quedan encerrados en silos por producto.",
      },
  ```

  **Cambio 3** (línea 84): título de la capacidad compartida — incluir la description para que el Edit sea único
  ```ts
  // antes
      {
        title: "Storage global",
        description: "Archivos, fotos y adjuntos viven en una capa comun lista para reutilizacion.",
        icon: FolderOpen,
      },
  // después
      {
        title: "Almacenamiento centralizado",
        description: "Archivos, fotos y adjuntos viven en una capa comun lista para reutilizacion.",
        icon: FolderOpen,
      },
  ```

  **Cambio 4** (línea 114): descripción de `appsSection` — reemplazar el string completo
  ```ts
  // antes
      "Cada landing compite por su propia necesidad de busqueda, pero todas las apps comparten autenticacion, permisos y storage global para evitar sistemas aislados.",
  // después
      "Cada landing compite por su propia necesidad de busqueda, pero todas las apps comparten autenticacion, permisos y almacenamiento centralizado para evitar sistemas aislados.",
  ```

  **Cambio 5** (línea 170): descripción del footer
  ```ts
  // antes
  "Plataforma multi-app para gestion documental, auditorias, archivos, finanzas, horarios y talento con identidad compartida y storage global.",
  // después
  "Plataforma multi-app para gestion documental, auditorias, archivos, finanzas, horarios y talento con identidad compartida y almacenamiento centralizado.",
  ```

- [ ] **Step 2: Verificar que no quedan "storage global" en archivos .ts/.tsx**

  ```bash
  grep -ri "storage global" lib/ components/
  ```
  Esperado: sin output.

- [ ] **Step 3: Commit**

  ```bash
  git add lib/platform-catalog.ts
  git commit -m "fix: replace 'storage global' with 'almacenamiento centralizado' in platform catalog"
  ```

---

### Task 5: Verificación TypeScript

**Files:** ninguno (solo verificación)

- [ ] **Step 1: Correr TypeScript en modo check**

  ```bash
  npx tsc --noEmit
  ```
  Esperado: sin errores. Si hay errores relacionados con `exposedInDrive` o `"drive"`, significa que algún archivo consumidor quedó sin actualizar — buscar con:
  ```bash
  grep -r "visibleInControlFile\|\"storage\"" lib/ components/
  ```

- [ ] **Step 2: Verificación manual rápida en dev server** *(opcional pero recomendado)*

  ```bash
  npm run dev
  ```
  Navegar a `/` y verificar:
  - Hero badge dice "Drive empresarial" (no "Storage global")
  - Highlight dice "Almacenamiento compartido, visible desde ControlFile"
  - MegaMenu dice "almacenamiento centralizado"
  - Card de ControlFile en Solutions dice "El drive de la plataforma..."
