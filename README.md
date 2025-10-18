# 🎯 ControlApp - Suite de Gestión Empresarial

<div align="center">

![ControlApp Logo](public/placeholder-logo.svg)

**Una suite completa de aplicaciones para gestión empresarial moderna**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

[Demo en Vivo](#) · [Documentación](./docs/) · [Reportar Bug](#) · [Solicitar Feature](#)

</div>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Aplicaciones Incluidas](#-aplicaciones-incluidas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Deploy en Vercel](#-deploy-en-vercel)
- [Documentación](#-documentación)

---

## ✨ Características

- 🚀 **PWA (Progressive Web App)** - Instálala como app nativa en cualquier dispositivo
- 📱 **100% Responsive** - Diseño optimizado para móvil, tablet y desktop
- ⚡ **Super Rápida** - Next.js 15 con App Router y React Server Components
- 🎨 **UI Moderna** - Componentes Shadcn/ui + Tailwind CSS
- 🌐 **Multi-idioma** - Preparado para internacionalización
- 🔒 **Segura** - Mejores prácticas de seguridad implementadas
- 📊 **Analytics Ready** - Preparado para Google Analytics y tracking
- 🎯 **SEO Optimizado** - Metadata y OpenGraph configurados

---

## 🛠️ Stack Tecnológico

### Core
- **Framework:** [Next.js 15.2.4](https://nextjs.org/)
- **React:** 19.2.0 con hooks modernos
- **TypeScript:** 5.9.3 para type safety
- **Node.js:** >= 18.17.0 recomendado

### UI/UX
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

### Tooling
- **Package Manager:** pnpm
- **Linting:** ESLint + eslint-config-next
- **Code Quality:** Prettier (configurar según necesidad)

---

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
node >= 18.17.0
pnpm >= 8.0.0
```

### Instalación

```bash
# Clonar el repositorio
git clone [tu-repo-url]
cd readmes-apps

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Ver .env.example para todas las variables disponibles
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📦 Aplicaciones Incluidas

La suite ControlApp incluye las siguientes aplicaciones de gestión:

| Aplicación | Descripción | Documentación |
|------------|-------------|---------------|
| 📄 **ControlDoc** | Gestión de documentos empresariales | [Ver docs](./docs/controlDoc.md) |
| 🔍 **ControlAudit** | Sistema de auditorías y control | [Ver docs](./docs/controlAudit.md) |
| 📁 **ControlFile** | Gestión de archivos y documentos | [Ver docs](./docs/controlFileReadme.md) |
| 💰 **ControlGastos** | Control de gastos y finanzas | [Ver docs](./docs/controlGastos.md) |
| 📦 **ControlRemito** | Gestión de remitos y envíos | [Ver docs](./docs/controlRemito.md) |
| 👷 **ControlTrabajo** | Control de trabajos y proyectos | [Ver docs](./docs/controlTrabajo.md) |
| 💵 **ControlVentas** | Sistema de ventas y facturación | [Ver docs](./docs/controlVentas.md) |

---

## 📁 Estructura del Proyecto

```
readmes-apps/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
│   ├── ui/                 # Componentes Shadcn/ui
│   ├── navbar.tsx          # Navegación
│   ├── hero.tsx            # Sección hero
│   ├── solutions.tsx       # Sección soluciones
│   ├── integration.tsx     # Sección integraciones
│   ├── clients.tsx         # Sección clientes
│   ├── pricing.tsx         # Sección precios
│   └── footer.tsx          # Footer
├── docs/                    # Documentación de apps
├── hooks/                   # Custom React hooks
├── lib/                     # Utilidades y helpers
├── public/                  # Assets estáticos
│   ├── icon-192.jpg        # PWA icon
│   ├── icon-512.jpg        # PWA icon
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service Worker
└── styles/                  # Estilos adicionales
```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Iniciar servidor de desarrollo

# Build
pnpm build            # Crear build de producción
pnpm start            # Iniciar servidor de producción

# Calidad de código
pnpm lint             # Ejecutar ESLint
pnpm type-check       # Verificar tipos TypeScript (agregar script)

# Utilidades
pnpm clean            # Limpiar caché y node_modules (agregar script)
```

---

## 🌐 Deploy en Vercel

### Deploy Automático

1. **Push a GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"

### Deploy Manual

```bash
# Instalar Vercel CLI
pnpm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración en Vercel

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## 📚 Documentación

- **[Guía de Usuario](./docs/)** - Documentación para usuarios finales
- **[API Reference](#)** - Documentación de APIs (próximamente)
- **[Guía de Contribución](#)** - Cómo contribuir al proyecto
- **[Changelog](#)** - Historial de cambios

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 License

Copyright © 2025 ControlApp. Todos los derechos reservados.

Este proyecto es privado y de uso exclusivo.

---

## 👨‍💻 Soporte

¿Necesitas ayuda? Contáctanos:

- 📧 Email: support@controlapp.com
- 💬 Discord: [Únete a nuestra comunidad](#)
- 📖 Docs: [Documentación completa](./docs/)

---

<div align="center">

**Hecho con ❤️ usando Next.js y Shadcn/ui**

⭐ Dale una estrella si te gusta el proyecto

</div>


