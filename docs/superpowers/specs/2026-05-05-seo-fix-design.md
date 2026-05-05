# SEO Fix — Aparecer en Google como "ControlApps"

**Fecha:** 2026-05-05  
**Objetivo:** Corregir los tres problemas técnicos que impiden que el sitio `apps.controldoc.app` rankeé en Google para búsquedas de la marca "ControlApps".

---

## Contexto

El sitio tiene infraestructura SEO técnica bien construida (metadata, JSON-LD, sitemap, robots.txt), pero tres problemas bloquean la indexación correcta:

1. **Brand name incorrecto** — el código usa "ControlApp" (sin 's') en todos los textos públicos, pero el nombre oficial de la plataforma es "ControlApps".
2. **URL canónica equivocada** — la variable `NEXT_PUBLIC_APP_URL` no está configurada en Vercel. El código cae al fallback `https://controlapp.vercel.app`, un dominio que no existe como destino real. Esto hace que el sitemap, canonical tags y JSON-LD apunten al dominio incorrecto.
3. **Google Search Console no configurado** — Google no tiene señal explícita de que el sitio existe ni de cuál es su sitemap.

---

## Solución

### 1. Corrección del brand name en el código

Renombrar "ControlApp" → "ControlApps" como nombre de la plataforma en los siguientes archivos:

- `lib/seo.ts` — `siteConfig.name`, `siteConfig.legalName`, títulos OG/Twitter, meta description
- `app/layout.tsx` — `applicationName`, títulos metadata globales, OG tags
- `lib/platform-catalog.ts` — `heroTitle`, `heroDescription`, `heroHighlights`, textos generales de la plataforma
- `lib/apps/control-audit.ts` — keyword "ControlApp" en seo.keywords
- `lib/apps/control-doc.ts` — ídem
- `lib/apps/control-file.ts` — ídem
- `lib/apps/control-gastos.ts` — ídem
- `lib/apps/control-ventas.ts` — ídem
- `lib/apps/horarios.ts` — ídem
- `lib/apps/bolsa-trabajo.ts` — ídem
- `lib/apps/control-market.ts` — ídem

**Regla:** Solo cambia el nombre de la plataforma contenedora. Los nombres de las apps individuales (ControlDoc, ControlAudit, ControlFile, etc.) no se modifican.

### 2. Variable de entorno en Vercel

Configurar via Vercel API:

```
NEXT_PUBLIC_APP_URL = https://apps.controldoc.app
Target: production + preview
```

Esto corrige las URLs en sitemap.xml, canonical tags y todos los schemas JSON-LD (Organization, WebSite, SoftwareApplication, BreadcrumbList).

### 3. Google Search Console (paso manual)

El usuario debe completar estos pasos en el browser (requiere cuenta Google):

1. Ir a https://search.google.com/search-console
2. Agregar propiedad → "Prefijo de URL" → `https://apps.controldoc.app`
3. Verificar con método "Etiqueta HTML" — el `<meta name="google-site-verification">` resultante se agrega al `<head>` del layout vía la metadata de Next.js
4. Una vez verificado: Sitemaps → enviar `https://apps.controldoc.app/sitemap.xml`

El código para el meta tag de verificación se agrega en `app/layout.tsx` dentro del objeto `metadata`:

```ts
verification: {
  google: "TOKEN_QUE_DA_GSC",
},
```

---

## Archivos que cambian

| Archivo | Tipo de cambio |
|---|---|
| `lib/seo.ts` | Brand name, descriptions |
| `app/layout.tsx` | Brand name, metadata, GSC verification |
| `lib/platform-catalog.ts` | Brand name en textos de la plataforma |
| `lib/apps/*.ts` (8 archivos) | Keyword "ControlApp" → "ControlApps" |
| Vercel (API) | Env var `NEXT_PUBLIC_APP_URL` |

---

## Lo que NO cambia

- Nombres de apps individuales (ControlDoc, ControlAudit, ControlFile, etc.)
- Slugs de rutas (`/control-doc`, `/control-audit`, etc.)
- Estructura de componentes
- Estilos

---

## Resultado esperado

- Sitemap y canonical URLs correctas en `apps.controldoc.app`
- Nombre de marca correcto en todos los títulos, descriptions y structured data
- Google Search Console activo y con sitemap enviado
- En 2-4 semanas: indexación visible en Google para búsquedas de "ControlApps"
