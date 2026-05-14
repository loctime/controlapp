# ControlApps

Web institucional de ControlApps, orientada a presentar la empresa como un estudio de software a medida enfocado en resolver problemas operativos, automatizar tareas repetitivas y ordenar flujos de trabajo.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Componentes UI utilitarios en `components/ui`

## Arquitectura actual

La web pública nueva vive sobre una capa institucional simple:

```text
app/
  page.tsx
  metodologia/page.tsx

components/site/
  header.tsx
  footer.tsx
  home-page.tsx
  methodology-page.tsx
  contact-form.tsx

lib/
  site-content.ts
  seo.ts
```

### Fuente de verdad de contenido

`lib/site-content.ts` concentra:

- navegación
- mensajes de marca
- problemas que resolvemos
- servicios
- metodología
- FAQ
- datos de contacto

La idea es evitar copy disperso dentro de componentes.

## Desarrollo

```bash
pnpm install
pnpm dev
pnpm build
```

## Variables útiles

- `NEXT_PUBLIC_APP_URL`: URL base del sitio
- `NEXT_PUBLIC_CONTACT_EMAIL`: email usado por el formulario de contacto

Si `NEXT_PUBLIC_CONTACT_EMAIL` no está configurado, se usa `contacto@controldoc.app` como fallback.

## Estado del legacy

Queda contenido legacy en `lib/apps` y archivos relacionados que no forman parte del flujo público actual. No se reutilizan en navegación ni SEO del nuevo sitio.
