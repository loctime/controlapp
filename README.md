# ControlApp Landing

Landing de ControlApp orientada a comunicar la plataforma como un ecosistema centralizado multi-app.

## Enfoque actual

La landing ya no presenta solo una "suite" de productos sueltos. Ahora comunica a ControlApp como una plataforma con:

- autenticacion compartida entre apps
- permisos por modulo
- storage global transversal
- ControlFile como capa visible para navegar archivos por app y coleccion

## Que se refactorizo

### 1. Fuente unica de verdad

Toda la informacion de plataforma y apps activas vive en [lib/platform-data.ts](./lib/platform-data.ts).

Desde ese archivo se resuelven:

- metadata editorial de la home
- apps activas
- capacidades compartidas
- contenido de las landings individuales
- links de navegacion

### 2. Home orientada a plataforma

La home en [app/page.tsx](./app/page.tsx) ahora se compone de:

- `Hero`: narrativa de cuenta unica, permisos y storage global
- `PlatformArchitecture`: flujo real de login, acceso y archivos
- `PlatformCapabilities`: capacidades heredadas por cada nueva app
- `PlatformAppGrid`: catalogo de apps activas renderizado desde el registro central

### 3. Navbar y catalogo escalables

El navbar y los menus mobile/desktop consumen el mismo registro central. Para sumar una app activa no hay que duplicar listas en varios componentes.

Archivos principales:

- [components/navbar.tsx](./components/navbar.tsx)
- [components/navbar/MegaMenu.tsx](./components/navbar/MegaMenu.tsx)
- [components/navbar/NavbarMobile.tsx](./components/navbar/NavbarMobile.tsx)

### 4. Plantilla reusable para apps

Las landings individuales usan una plantilla comun en [components/app-landing-template.tsx](./components/app-landing-template.tsx).

Cada pagina de app solo:

1. busca su configuracion por `slug`
2. expone metadata SEO
3. renderiza la plantilla

Apps activas migradas:

- [app/control-file/page.tsx](./app/control-file/page.tsx)
- [app/control-doc/page.tsx](./app/control-doc/page.tsx)
- [app/control-audit/page.tsx](./app/control-audit/page.tsx)
- [app/control-gastos/page.tsx](./app/control-gastos/page.tsx)
- [app/control-ventas/page.tsx](./app/control-ventas/page.tsx)
- [app/bolsa-trabajo/page.tsx](./app/bolsa-trabajo/page.tsx)

## Como agregar una nueva app

Para publicar una nueva app activa en la landing:

1. Agregar su configuracion a `platformApps` en [lib/platform-data.ts](./lib/platform-data.ts)
2. Definir:
   - `id`
   - `slug`
   - `name`
   - `shortDescription`
   - `category`
   - `status`
   - `icon`
   - `image`
   - `href`
   - `features`
   - `platformCapabilities`
   - `landingContent`
   - `seo`
3. Crear una ruta minima en `app/<slug>/page.tsx` que use `AppLandingTemplate`
4. Marcarla como `active`

Con eso la app aparece automaticamente en:

- navbar desktop
- menu mobile
- grilla principal de apps
- footer
- landing individual

## Estructura relevante

```text
app/
  layout.tsx
  page.tsx
  control-file/page.tsx
  control-doc/page.tsx
  control-audit/page.tsx
  control-gastos/page.tsx
  control-ventas/page.tsx
  bolsa-trabajo/page.tsx

components/
  hero.tsx
  navbar.tsx
  footer.tsx
  platform-architecture.tsx
  platform-capabilities.tsx
  platform-app-grid.tsx
  app-landing-template.tsx

lib/
  platform-data.ts
```

## Estado y decisiones

- Se muestran solo apps activas y coherentes con la narrativa actual
- `ControlFile` se comunica como explorador transversal del storage global
- La landing prioriza arquitectura de plataforma por encima del catalogo tradicional
- Las apps documentadas pero no publicadas pueden quedar en estado `hidden` o `comingSoon`

## Desarrollo

### Requisitos

- Node.js 18+
- npm o pnpm

### Comandos

```bash
npm install
npm run dev
```

o

```bash
pnpm install
pnpm dev
```

## Verificacion

En este entorno de trabajo no estuvieron disponibles `node`, `npm` ni `pnpm`, asi que no pude ejecutar build o checks automaticos desde la terminal del agente.

## Remanentes

Todavia existen algunos componentes antiguos no usados por la nueva home, como:

- `components/solutions.tsx`
- `components/integration.tsx`
- `components/clients.tsx`
- `components/pricing.tsx`

No forman parte del flujo actual de la landing principal.
