# 🧱 Nombre de la App

**ControlGastos** (también conocida como GastosApp)

---

## 🎯 Descripción general

ControlGastos es una aplicación web moderna y elegante diseñada para gestionar gastos fijos mensuales de forma inteligente. Dirigida a personas y familias que buscan controlar sus finanzas personales, la app permite registrar, organizar y hacer seguimiento de pagos recurrentes con notificaciones automáticas, integración de comprobantes y análisis visual de datos. Funciona como una PWA (Progressive Web App) instalable en cualquier dispositivo.

---

## ⚙️ Principales funcionalidades

1. **Gestión de gastos fijos recurrentes**
   - Registro de gastos con diferentes tipos de recurrencia (diarios, semanales, mensuales, calendario personalizado)
   - Marcado de pagos con fechas y montos
   - Generación automática de instancias según periodicidad
   - Estados visuales diferenciados (pendiente, pagado, vencido)

2. **Sistema de notificaciones inteligente**
   - Notificaciones push del navegador para gastos vencidos y próximos
   - Badges visuales en la navegación con contadores de items pendientes
   - Alertas prioritarias según urgencia (vencidos, para hoy, próximos)
   - Actualización automática cada 5 minutos

3. **Dashboard interactivo y estadísticas**
   - Resumen visual de gastos totales, pagados y pendientes
   - Gráficos de historial con análisis temporal (Recharts)
   - Vista jerárquica de gastos por categorías
   - Estadísticas en tiempo real con sincronización automática

4. **Integración con ControlFile para documentos**
   - Subida de comprobantes, facturas y recibos directamente desde la app
   - Organización automática en carpetas por usuario
   - Enlaces de compartir permanentes para documentos
   - Conexión persistente con Firebase Auth unificado (sin popups)

5. **Experiencia PWA premium**
   - Instalable como app nativa en móviles y desktop
   - Modo oscuro/claro automático
   - Funcionamiento offline con Service Worker
   - Diseño responsive optimizado para todas las pantallas

---

## 🧩 Stack tecnológico

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui
- Recharts (gráficos)
- Lucide React (iconos)

**Backend & Servicios:**
- Firebase Authentication (Google + Email/Password)
- Firestore Database (base de datos en tiempo real)
- ControlFile API (gestión de archivos en Backblaze/Render)
- Service Worker (notificaciones push y cache)

**Herramientas & DevOps:**
- Vercel (deployment)
- pnpm/npm (gestión de paquetes)
- ESLint + TypeScript (linting y verificación de tipos)
- next-sitemap (SEO)

**Librerías clave:**
- react-hook-form + zod (formularios y validación)
- date-fns (manejo de fechas)
- Radix UI (componentes accesibles)
- Geist Font (tipografía)

---

## 🧑‍💻 Estructura del proyecto

\`\`\`
ControlGastos/
├── app/                              # Next.js App Router
│   ├── dashboard/                   # Página principal (resúmenes)
│   ├── history/                     # Historial con gráficos
│   ├── recurring-items/             # Gestión de items recurrentes
│   ├── profile/                     # Perfil de usuario
│   └── api/                         # API routes (ControlFile endpoints)
│       ├── controlfile-files/       # Gestión de archivos
│       ├── controlfile-folders/     # Gestión de carpetas
│       ├── download-image/          # Descarga de imágenes
│       └── upload-file/             # Subida de archivos
├── components/                       # Componentes React reutilizables
│   ├── ui/                          # Componentes base (shadcn/ui: 52 archivos)
│   ├── expenses-*.tsx               # Componentes de gastos
│   ├── recurring-items-*.tsx        # Componentes de items recurrentes
│   ├── controlfile-*.tsx            # Componentes de integración ControlFile
│   ├── auth-provider.tsx            # Contexto de autenticación
│   ├── notification-*.tsx           # Sistema de notificaciones
│   └── bottom-nav.tsx               # Navegación inferior móvil
├── lib/                             # Lógica de negocio y servicios
│   ├── firebase.ts                  # Configuración Firebase
│   ├── controlfile.ts               # Servicio ControlFile
│   ├── recurring-items-service.ts   # Gestión de items recurrentes
│   ├── notifications-service.ts     # Sistema de notificaciones
│   ├── payment-service.ts           # Procesamiento de pagos
│   ├── invoice-service.ts           # Gestión de facturas
│   ├── smart-search.ts              # Búsqueda avanzada
│   ├── auth.ts                      # Funciones de autenticación
│   └── types.ts                     # Tipos TypeScript globales
├── hooks/                           # Custom React Hooks
│   ├── use-notifications.ts         # Hook de notificaciones
│   ├── use-pwa-install.ts          # Hook de instalación PWA
│   └── use-mobile.ts               # Detección de dispositivo móvil
├── public/                          # Archivos estáticos
│   ├── sw.js                        # Service Worker
│   ├── manifest.json                # PWA manifest
│   └── *.jpg                        # Iconos y placeholders
└── docs/                            # Documentación técnica (14 archivos .md)
\`\`\`

**Estructura de datos en Firestore:**
\`\`\`
apps/controlgastos/users/{userId}/
  ├── expenses/                      # Gastos registrados
  ├── recurring_items/               # Plantillas de items recurrentes
  ├── recurring_items_instances/     # Instancias generadas
  ├── receipts/                      # Comprobantes vinculados
  └── settings/                      # Configuraciones del usuario
\`\`\`

---

## 🔐 Autenticación / Roles

**Sistema de autenticación:**
- Basado en **Firebase Authentication**
- Métodos soportados:
  - Google OAuth 2.0
  - Email/Password (con verificación opcional)
- **Single Sign-On (SSO)** unificado entre ControlGastos y ControlFile
- Persistencia de sesión nativa de Firebase (sin popups)
- Tokens compartidos entre aplicaciones del ecosistema

**Roles y permisos:**
- **Usuario estándar**: Acceso completo a sus propios datos (gastos, documentos, configuraciones)
- Sin roles de administrador (app personal, un usuario = una cuenta)
- Reglas de seguridad en Firestore garantizan que cada usuario solo acceda a sus documentos (`userId` verificado en todas las operaciones)

**Seguridad:**
- Validación de datos en frontend y backend
- Variables de entorno para credenciales sensibles
- Reglas de Firestore estrictas (`firestore.rules`)
- Protección contra accesos no autorizados

---

## 🔗 Integraciones

1. **ControlFile** (gestión de documentos)
   - **Backend**: `https://controlfile.onrender.com`
   - **Funcionalidad**: Subida, organización y compartir documentos (facturas, comprobantes)
   - **Almacenamiento**: Backblaze B2 (via ControlFile API)
   - **Auth**: Compartido con Firebase (mismo proyecto)
   - **Componentes**: `ControlFileProvider`, `ControlFileUpload`, `ControlFileConnection`

2. **Firebase Services**
   - **Authentication**: Login/registro de usuarios
   - **Firestore**: Base de datos NoSQL en tiempo real
   - **Reglas de seguridad**: Protección de datos por usuario

3. **Vercel Analytics**
   - Métricas de uso y performance
   - Integración nativa con Next.js

4. **Service Worker API**
   - Notificaciones push del navegador
   - Cache de assets para funcionamiento offline
   - Sincronización en segundo plano

5. **APIs externas (futuras)**
   - Webhooks para notificaciones por email (planificado)
   - Integración con bancos/Plaid (roadmap)

---

## 🧾 Planes / Modelo de uso

**Estado actual: Gratuito y Open Source**

- **Licencia**: MIT License
- **Modelo**: Aplicación personal autoalojada
- **Sin límites**: Gastos ilimitados, usuarios ilimitados (cada uno con su cuenta)
- **Hosting**: Vercel (frontend) + Firebase (backend) en planes gratuitos
- **ControlFile**: Requiere configuración propia de Backblaze B2

**Potencial modelo SaaS (futuro):**
- **Plan Básico (Gratis)**: 
  - Hasta 50 gastos recurrentes
  - 100 MB de almacenamiento de documentos
  - Notificaciones básicas
  
- **Plan Pro ($4.99/mes)**: 
  - Gastos ilimitados
  - 5 GB de almacenamiento
  - Notificaciones avanzadas (email, SMS)
  - Exportación de datos (PDF, Excel)
  - Gráficos avanzados y predicciones
  
- **Plan Familia ($9.99/mes)**: 
  - Hasta 5 usuarios
  - Compartir gastos entre miembros
  - 20 GB de almacenamiento compartido
  - Dashboard consolidado

*Nota: Los planes de pago son ideas conceptuales. La app actualmente es gratuita.*

---

## 🚀 Pendientes o mejoras planificadas

**Corto plazo (v1.1):**
- [ ] Sistema de categorías personalizables para gastos
- [ ] Exportación de datos (PDF, Excel, CSV)
- [ ] Búsqueda avanzada con filtros múltiples
- [ ] Modo offline mejorado (edición sin conexión)
- [ ] Notificaciones por email

**Mediano plazo (v1.2):**
- [ ] Compartir gastos entre usuarios (gastos familiares)
- [ ] Integración con bancos (Plaid API)
- [ ] Recordatorios personalizados por gasto
- [ ] Gráficos predictivos y tendencias
- [ ] Dashboard consolidado para múltiples cuentas
- [ ] Presupuestos mensuales con alertas

**Largo plazo (v2.0):**
- [ ] App móvil nativa (React Native)
- [ ] Escaneo OCR de facturas automático
- [ ] Integración con asistentes de voz (Alexa, Google)
- [ ] API pública para desarrolladores
- [ ] Marketplace de integraciones
- [ ] Sistema de recomendaciones con IA

**Optimizaciones técnicas:**
- [ ] Índices compuestos en Firestore para queries complejas
- [ ] Cleanup automático de instancias antiguas (>1 año)
- [ ] Analytics de uso con Mixpanel o Amplitude
- [ ] Tests unitarios y de integración (Jest, Cypress)
- [ ] CI/CD automatizado con GitHub Actions
- [ ] Monitoreo con Sentry para errores

---

## 📚 Documentación adicional

El proyecto incluye **14 archivos de documentación técnica**:
- `API_REFERENCE.md` - Referencia de la API de ControlFile
- `COLORS_SYSTEM.md` - Sistema de colores y theming
- `DEVELOPMENT_GUIDE.md` - Guía de desarrollo
- `FIREBASE_SETUP.md` - Configuración de Firebase
- `PWA_INSTALLATION_GUIDE.md` - Guía de instalación como PWA
- `RECURRING_ITEMS_SYSTEM.md` - Sistema de items recurrentes
- `TYPESCRIPT_BEST_PRACTICES.md` - Mejores prácticas TypeScript
- Y más...

---

## 👨‍💻 Autor

**loctime** - [@loctime](https://github.com/loctime)

**Repositorio**: [github.com/loctime/ControlGasto](https://github.com/loctime/ControlGasto)

---

## 🌐 Deploy y URLs

- **Producción**: [Configurar en Vercel](https://vercel.com)
- **ControlFile Backend**: `https://controlfile.onrender.com`
- **Documentación**: Disponible en el repositorio

---

## 📞 Contacto y soporte

Para reportar bugs, solicitar funcionalidades o contribuir:
1. Abre un **Issue** en GitHub
2. Envía un **Pull Request** con mejoras
3. Consulta la documentación en `/docs`

---

> **⭐ Si te gusta este proyecto, dale una estrella en GitHub y compártelo con tus amigos!**

---

*Última actualización: Octubre 2025*
