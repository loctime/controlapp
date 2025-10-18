# 🧱 Nombre de la App

**ControlAudit v2** - Sistema de Auditorías Offline

---

## 🎯 Descripción general

Sistema web progresivo (PWA) que permite realizar auditorías completas sin conexión a internet, con sincronización automática al restaurar conectividad. Solución multi-tenant para empresas que necesitan gestionar auditorías, formularios personalizados y reportes en tiempo real.

---

## ⚙️ Principales funcionalidades

- **Modo Offline Completo**: Realiza auditorías sin internet con sincronización automática
- **PWA Móvil**: Funciona como app nativa en cualquier dispositivo
- **Multi-Tenant**: Gestión independiente por cliente con roles jerárquicos
- **Formularios Personalizados**: Creación y compartición de formularios con galería pública
- **Reportes Automatizados**: Generación de PDF con gráficos y estadísticas
- **Gestión de Usuarios**: Control granular de permisos por rol y funcionalidad
- **Calendario de Auditorías**: Agendamiento y seguimiento de auditorías programadas

---

## 🧩 Stack tecnológico

**Frontend**: React 18, Vite, Material-UI, React Router, IndexedDB, Service Worker

**Backend**: Node.js, Express, Firebase Admin SDK

**Base de Datos**: Firestore (Firebase)

**Almacenamiento**: Firebase Storage, IndexedDB (offline)

**PWA**: Service Worker, Web App Manifest, Background Sync

**Hosting**: Vercel (frontend), Render (backend)

**Capacitor**: Android/iOS (app móvil nativa)

---

## 🧑‍💻 Estructura del proyecto

\`\`\`
controlauditv2/
├── src/
│   ├── components/          # Componentes React modulares
│   │   ├── context/         # AuthContext, gestión de estado global
│   │   ├── pages/           # Páginas (dashboard, auditorías, usuarios)
│   │   ├── common/          # Componentes reutilizables
│   │   └── layout/          # Navbar, layouts
│   ├── hooks/               # Hooks personalizados (useOfflineData, useConnectivity)
│   ├── services/            # Lógica de negocio (empleado, accidente, capacitación)
│   ├── utils/               # Utilidades (formatters, validators, cache)
│   ├── router/              # Configuración de rutas y protección
│   └── config/              # Variables de entorno y configuraciones
├── backend/
│   ├── routes/              # Endpoints API (setRole, usuarios)
│   ├── config/              # Configuración por entornos
│   └── firebaseAdmin.js     # Firebase Admin SDK
├── android/                 # App Android (Capacitor)
└── public/                  # Assets estáticos, manifest, service worker
\`\`\`

---

## 🔐 Autenticación / Roles

**Firebase Authentication** con sistema de roles jerárquico:

- **supermax**: Acceso total al sistema, gestiona todos los clientes
- **max**: Cliente administrador con sus propias empresas y usuarios operarios
- **operario**: Usuario final con permisos configurables por funcionalidad

**Permisos Granulares**: Crear empresas/sucursales, agendar auditorías, compartir formularios, agregar socios

**Multi-Tenant**: Cada cliente administrador gestiona sus propios datos de forma aislada

---

## 🔗 Integraciones

- **Firebase**: Autenticación, Firestore, Storage, Hosting
- **Render**: Backend API para gestión de usuarios y roles
- **Vercel**: Despliegue frontend con HTTPS
- **IndexedDB**: Base de datos local para funcionamiento offline
- **Capacitor**: Compilación a Android/iOS nativa

---

## 🧾 Planes / Modelo de uso

**Modelo Multi-Tenant**:
- Cliente paga por su instancia
- Usuarios ilimitados por cliente
- Gestión independiente de datos
- Planes escalables según necesidades

**Uso**: SaaS empresarial para gestión de auditorías y cumplimiento normativo

---

## 🚀 Pendientes o mejoras planificadas

- Índices optimizados en Firestore para consultas complejas
- Sistema de notificaciones push en tiempo real
- Analytics avanzado con métricas de uso
- Exportación multi-formato (Excel, CSV, Word)
- Integración con APIs de terceros (ERP, CRM)
- Módulo de capacitaciones con seguimiento
- Dashboard de estadísticas con gráficos avanzados
- Sistema de firmas digitales certificadas
- Modo dark/light theme
- Internacionalización (i18n)
