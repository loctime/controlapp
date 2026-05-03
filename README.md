# ControlApp Landing

Landing de ControlApp orientada a comunicar la plataforma como un ecosistema centralizado multi-app.

---

## Enfoque de comunicación

El copy está escrito desde la perspectiva del usuario, no de la plataforma. El primer nivel siempre es el trabajo concreto que resuelve cada app. La integración (auth compartida, storage global) es el argumento de cierre, no de apertura.

Patrón aplicado en cada landing:
1. Headline = el problema concreto que resuelve
2. Features = verbos de acción ("Diseñá formularios", "Completá desde el celular")
3. Funcionalidades = descripciones tipo "así funciona", no definiciones
4. Cierre = "Todo dentro de ControlApp — archivos, permisos y usuarios ya están resueltos"

---

## Apps activas

| App | Slug | Archivo de datos |
|---|---|---|
| ControlFile | `/control-file` | `lib/apps/control-file.ts` |
| ControlDoc | `/control-doc` | `lib/apps/control-doc.ts` |
| ControlAudit | `/control-audit` | `lib/apps/control-audit.ts` |
| Horarios Simple | `/horarios` | `lib/apps/horarios.ts` |
| ControlGastos | `/control-gastos` | `lib/apps/control-gastos.ts` |
| ControlVentas | `/control-ventas` | `lib/apps/control-ventas.ts` |
| Bolsa de Trabajo | `/bolsa-trabajo` | `lib/apps/bolsa-trabajo.ts` |
| ControlMarket | `/control-market` | `lib/apps/control-market.ts` |

---

## Arquitectura de datos

### Fuente única de verdad

```
lib/
  platform-types.ts       → interfaces TypeScript de toda la plataforma
  platform-catalog.ts     → array platformApps, platformOverview, FAQ homepage
  platform-data.ts        → barrel export (re-exporta platform-catalog.ts)
  apps/
    control-audit.ts
    control-doc.ts
    control-file.ts
    control-gastos.ts
    control-market.ts
    control-ventas.ts
    horarios.ts
    bolsa-trabajo.ts
```

Cada archivo en `lib/apps/` exporta un objeto `PlatformApp` completo. Al agregarlo al array `platformApps` en `platform-catalog.ts` aparece automáticamente en navbar, grilla de apps, footer y sitemap.

### Estructura de PlatformApp

```typescript
{
  id, slug, name, shortDescription,
  category,   // "operations" | "finance" | "talent" | "storage"
  status,     // "active" | "comingSoon" | "hidden"
  icon,       // LucideIcon
  image,      // URL de imagen del hero
  color,      // clases Tailwind para el gradiente ("from-X to-Y")
  href,       // ruta de la landing ("/control-audit")
  features,   // array de strings — pills con verbos de acción en el hero
  cardBadges, // [string, string] — dos badges en la card del homepage
  platformCapabilities: { sharedAuth, sharedStorage, visibleInControlFile, requiresPermissions },
  seo:        { title, description, canonicalPath, socialImage, categoryLabel, keywords },
  landingContent: { ... }  // ver sección siguiente
}
```

### Estructura de landingContent

```typescript
{
  mediaGallery?,         // galería split-screen web/móvil (ver sección "Galería de medios")
  heroLabel,             // eyebrow pill del hero
  heroTitle,             // título H1
  heroDescription,       // párrafo principal — foco en el trabajo concreto
  heroStats?,            // { value, label } — stat flotante sobre la imagen
  valueProposition,      // párrafo de cierre del hero — incluye nota de integración
  audiences,             // array { title, description } — para qué empresas sirve
  problems,              // array de strings — qué problemas resuelve
  benefits,              // array de strings — beneficios concretos
  functionalities,       // array { title, description, icon } — funcionalidades clave
  useCases,              // array { title, description } — flujos reales de uso
  faq,                   // array { question, answer }
  finalCta:              { primaryLabel, primaryHref, secondaryLabel, secondaryHref },
  platformIntegration?,  // { title, description, bullets[] } — sección dark de integración
  relatedApps,           // array { slug, anchor, reason }
}
```

---

## Badges del homepage

Los badges en las cards del homepage (`platform-app-grid.tsx`) se renderizan desde `app.cardBadges: [string, string]`. Cada app define sus propios textos — ya no son genéricos ("Auth central · Storage global").

Valores actuales:

| App | Badge 1 | Badge 2 |
|---|---|---|
| ControlAudit | Offline completo | PWA instalable |
| ControlDoc | OCR de fechas | Semáforo de vencimientos |
| ControlFile | Links con expiración | Storage desde 5 GB gratis |
| Horarios Simple | Horarios + Stock + Remitos | Firma digital |
| ControlGastos | Gastos recurrentes | Comprobantes en ControlFile |
| ControlVentas | Caja diaria · Offline-first | 3 métodos de pago |
| Bolsa de Trabajo | CVs + Dashboard admin | Notificaciones email |
| ControlMarket | Escáner de barras | Multi-tenant |

---

## Galería de medios (split-screen)

Cada landing tiene una sección `"En acción"` con comparativa web/móvil y thumbnail carousel.

### Componente

`components/app-media-gallery.tsx` — componente client-side con:
- Split screen: frame de browser (izquierda, ratio 16:10) + frame de teléfono (derecha, ratio 9:19)
- Caption + flechas de navegación entre items
- Tira de thumbnails clickeables debajo

### Estructura de datos

```typescript
mediaGallery: {
  items: [
    {
      caption: "Descripción del item",
      web:    { type: "image" | "video", src: "" },
      mobile: { type: "image" | "video", src: "" },
    },
    // ...
  ]
}
```

**`src: ""`** = slot placeholder (muestra icono y caption mientras no haya captura real).

### Cómo agregar capturas

Reemplazá el `src: ""` por la URL real:

```typescript
// Imagen
web:    { type: "image", src: "/screenshots/mi-captura-web.png" },
mobile: { type: "image", src: "/screenshots/mi-captura-mobile.png" },

// Video de YouTube (embed automático)
web:    { type: "video", src: "https://youtu.be/XXXXXXXXXXX" },
mobile: { type: "video", src: "https://youtu.be/XXXXXXXXXXX" },

// Video directo (mp4)
web:    { type: "video", src: "/videos/demo.mp4" },
mobile: { type: "video", src: "/videos/demo-mobile.mp4" },
```

Los items con `src: ""` se muestran como placeholder con borde punteado y el caption como guía — se pueden dejar así hasta tener el contenido listo.

### Slots definidos por app

Cada app tiene sus slots pre-configurados con captions descriptivos:

**ControlAudit** (6 items): demo completo · constructor de formularios · inspector en campo · reporte generado · dashboard HSE · matriz de capacitaciones

**ControlDoc** (5 items): demo OCR · semáforo de vencimientos · visor con OCR · flujo de aprobación · dashboard por entidad

**ControlFile** (4 items): demo explorador · vista principal · link con expiración · archivos por módulo

**Horarios** (5 items): demo completo · grilla semanal · link público empleados · panel de stock · remito con firma

**ControlGastos** (4 items): demo recurrente · dashboard · historial con gráfico · modo oscuro

**ControlVentas** (4 items): demo cobro · pantalla principal · historial filtrado · PWA en Android

**Bolsa de Trabajo** (4 items): demo notificación · dashboard admin · formulario público · vista de perfil

**ControlMarket** (5 items): demo escanear · pantalla de venta · escáner con cámara · dashboard stock · historial por vendedor

---

## Cómo agregar una nueva app

1. Crear `lib/apps/<slug>.ts` con el objeto `PlatformApp` completo
2. Importarlo y agregarlo al array `platformApps` en `lib/platform-catalog.ts`
3. Crear `app/<slug>/page.tsx`:

```typescript
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AppLandingTemplate } from "@/components/app-landing-template"
import { getPlatformAppBySlug } from "@/lib/platform-data"
import { createAppMetadata } from "@/lib/seo"

const app = getPlatformAppBySlug("<slug>")
export const metadata: Metadata = app ? createAppMetadata(app) : {}

export default function MiAppPage() {
  if (!app) notFound()
  return <AppLandingTemplate appSlug="<slug>" />
}
```

Con eso aparece automáticamente en navbar, grilla, footer y sitemap.

---

## Estructura de archivos relevante

```
app/
  page.tsx                   → homepage
  control-audit/page.tsx
  control-doc/page.tsx
  control-file/page.tsx
  control-gastos/page.tsx
  control-market/page.tsx    → nueva
  control-ventas/page.tsx
  bolsa-trabajo/page.tsx
  horarios/page.tsx

components/
  app-landing-template.tsx   → plantilla compartida de todas las landings
  app-media-gallery.tsx      → galería split-screen web/móvil
  platform-app-grid.tsx      → grilla de apps en homepage (usa cardBadges)
  hero.tsx
  navbar.tsx
  footer.tsx
  platform-architecture.tsx
  platform-capabilities.tsx
  platform-audiences.tsx
  platform-entity.tsx
  platform-faq.tsx

lib/
  platform-types.ts          → interfaces: PlatformApp, MediaGalleryItem, etc.
  platform-catalog.ts        → platformApps[], platformOverview, FAQ
  platform-data.ts           → barrel export
  apps/                      → un archivo por app
```

---

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # verificar TypeScript y build de producción
```

---

## Notas

- El campo `status: "hidden"` excluye una app del catálogo sin borrarla
- `activePlatformApps` filtra automáticamente por `status === "active"`
- La homepage FAQ tiene 6 preguntas: las 4 originales + "¿Puedo usar solo una app?" + "¿Las apps funcionan en el celular?"
- `ControlMarket` es la app más reciente — no tiene capturas reales todavía
