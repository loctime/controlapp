# 🧱 Nombre de la App

**Bolsa de Trabajo - Sistema de Gestión de CVs**

---

## 🎯 Descripción general

Plataforma web completa para la gestión profesional de currículums vitae que permite a usuarios cargar, generar y compartir sus CVs mientras los administradores revisan, aprueban y gestionan todo el proceso. Sistema integrado con almacenamiento en la nube y notificaciones automatizadas por email, diseñado para empresas de reclutamiento y plataformas de empleo.

---

## ⚙️ Principales funcionalidades

1. **Generador y cargador de CVs**: Los usuarios pueden crear CVs desde cero con múltiples plantillas profesionales o subir documentos existentes
2. **Dashboard administrativo**: Panel completo para revisar, aprobar, rechazar y gestionar todos los CVs enviados
3. **Sistema de autenticación dual**: Registro y login diferenciado para usuarios y administradores con protección de rutas
4. **Vista pública de CVs**: URLs compartibles para visualizar CVs aprobados de forma pública
5. **Gestión de archivos profesional**: Subida de fotos de perfil, PDFs y documentos adjuntos con integración a ControlFile
6. **Notificaciones automáticas**: Envío de emails a usuarios cuando su CV es aprobado o rechazado
7. **PWA (Progressive Web App)**: Instalable en móviles y escritorio para acceso offline

---

## 🧩 Stack tecnológico

**Frontend:**
- React 18 + Vite
- Material-UI (MUI) para diseño de interfaz
- React Router DOM para navegación
- Formik + Yup para validación de formularios
- jsPDF + html2canvas para generación de PDFs
- docx para generación de archivos Word

**Backend/Servicios:**
- Firebase Firestore (base de datos)
- Firebase Auth (autenticación)
- ControlFile (almacenamiento de archivos y fotos)
- Firebase Storage (soporte legacy)
- EmailJS (notificaciones por correo)

**Herramientas:**
- SweetAlert2 para alertas
- Axios para peticiones HTTP
- Express (backend auxiliar)
- Nodemailer (emails del servidor)

**Deployment:**
- Render (backend ControlFile)
- Firebase Hosting (frontend)

---

## 🧑‍💻 Estructura del proyecto

\`\`\`
bolsatrabajo/
├── src/
│   ├── components/
│   │   ├── common/              # Componentes reutilizables (Button, Avatar, etc.)
│   │   ├── layout/              # Navbar y estructura general
│   │   └── pages/
│   │       ├── cargaCv/         # Formularios de carga de CV
│   │       │   ├── components/  # Formularios específicos (datos personales, experiencia, etc.)
│   │       │   ├── hooks/       # Lógica de negocio (validación, upload, autofill)
│   │       │   ├── services/    # Servicios de email y generación de PDFs
│   │       │   └── templates/   # Plantillas de CV (Clásica, Moderna, Elegante)
│   │       ├── dashboard/       # Panel administrativo
│   │       ├── cvPublic/        # Vista pública de CVs compartidos
│   │       ├── login/           # Autenticación de usuarios
│   │       ├── register/        # Registro de usuarios
│   │       └── registerAdmin/   # Registro de administradores
│   ├── context/                 # Context API (AuthContext)
│   ├── router/                  # Rutas protegidas y navegación
│   ├── utils/                   # Utilidades (caché de imágenes, compartir URLs)
│   ├── constants/               # Categorías, ubicaciones
│   ├── lib/                     # Integración con ControlFile
│   └── theme/                   # Tema de Material-UI
├── backend/                     # Backend auxiliar con Express
├── functions/                   # Firebase Cloud Functions
├── integracion/                 # Documentación de integraciones
└── public/                      # Assets estáticos y PWA manifest
\`\`\`

---

## 🔐 Autenticación / Roles

**Sistema de doble rol:**

1. **Usuarios regulares**: 
   - Pueden registrarse y cargar sus CVs
   - Acceso a formularios de carga y generación
   - Visualización del estado de su CV (pendiente/aprobado/rechazado)
   - Rutas protegidas con `ProtectedUsers`

2. **Administradores**:
   - Registro separado en `/registerAdmin`
   - Acceso completo al dashboard administrativo
   - Pueden aprobar, rechazar y gestionar todos los CVs
   - Carga manual de CVs de usuarios
   - Rutas protegidas con `ProtectedAdmin`

**Gestión:**
- Firebase Auth para autenticación central
- AuthContext para manejo de estado global
- Sistema de recuperación de contraseña
- Migración de usuarios compatible con Auth Central de ControlFile

---

## 🔗 Integraciones

1. **ControlFile** (`https://controlfile.onrender.com`)
   - Almacenamiento de archivos (CVs, fotos de perfil, certificaciones)
   - Sistema de presigned URLs para uploads seguros
   - Conversión automática de enlaces compartidos a URLs de imagen
   - Gestión de carpetas organizadas por usuario

2. **EmailJS**
   - Envío de notificaciones automáticas a usuarios
   - Confirmaciones de registro
   - Notificaciones de aprobación/rechazo de CV

3. **Firebase Services**
   - Firestore: Base de datos de usuarios y CVs
   - Firebase Auth: Autenticación y gestión de sesiones
   - Firebase Storage: Soporte legacy para archivos antiguos

4. **PWA (Progressive Web App)**
   - Service Worker para caché y offline
   - Manifest.json para instalación en dispositivos
   - Iconos adaptivos (192px y 512px)

---

## 🧾 Planes / Modelo de uso

**Estado actual:** Sistema interno/privado

**Modelo:**
- Plataforma cerrada para uso empresarial
- Registro controlado de usuarios
- Sin planes de pago implementados actualmente
- Orientado a empresas de reclutamiento o departamentos de RRHH

**Potencial modelo SaaS futuro:**
- Plan gratuito: X CVs por mes
- Plan Pro: CVs ilimitados + plantillas premium
- Plan Enterprise: Multi-usuario + API + personalización

---

## 🚀 Pendientes o mejoras planificadas

1. **Optimización de rendimiento**
   - Implementar lazy loading en formularios extensos
   - Mejorar caché de imágenes y assets
   - Optimizar bundle size

2. **Nuevas funcionalidades**
   - Más plantillas de CV (mínima, creativa, ATS-friendly)
   - Exportación a Word completamente funcional
   - Sistema de búsqueda y filtros avanzados en dashboard
   - Estadísticas y analytics para administradores

3. **Mejoras UX/UI**
   - Modo oscuro (dark mode)
   - Animaciones y transiciones mejoradas
   - Tour guiado para nuevos usuarios
   - Preview en tiempo real mientras se completa el CV

4. **Integraciones pendientes**
   - LinkedIn para importar datos automáticamente
   - ATS (Applicant Tracking Systems) integrations
   - Webhooks para notificaciones en tiempo real

5. **Seguridad y escalabilidad**
   - Implementar rate limiting
   - Mejorar validaciones del lado del servidor
   - Configurar CDN para assets estáticos
   - Backup automático de base de datos

6. **Mobile app nativa**
   - React Native o Flutter para iOS/Android
   - Notificaciones push
   - Escaneo de documentos con cámara

---

## 📊 Estado del proyecto

- ✅ Funcionalidades core implementadas
- ✅ Sistema de autenticación operativo
- ✅ Integración con ControlFile configurada
- ✅ PWA instalable
- ⚠️ En proceso: Optimizaciones de formularios y diseño
- 🔄 Documentación completa en carpeta `/integracion`

---

## 🌐 URLs y recursos

- **Backend ControlFile**: https://controlfile.onrender.com
- **Repositorio**: (Local - `C:\Users\User\Desktop\bolsatrabajo`)
- **Documentación técnica**: Ver carpeta `/integracion` para guías detalladas

---

## 📞 Contacto y soporte

Para configuración de ControlFile, Auth Central, y permisos CORS, contactar con el administrador del sistema ControlFile.

---

*Última actualización: Octubre 2025*
