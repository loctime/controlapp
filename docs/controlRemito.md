# 🧱 Nombre de la App

**ControlD** - Sistema de Control de Remitos y Pedidos

## 🎯 Descripción general

ControlD es una aplicación web que digitaliza y automatiza la gestión de pedidos entre sucursales y fábricas, control de inventario, y generación de remitos de entrega con firmas digitales. Permite un seguimiento completo del flujo de mercaderías desde el pedido hasta la recepción, eliminando el uso de papel y mejorando la trazabilidad de los productos.

## ⚙️ Principales funcionalidades

1. **Gestión de Pedidos Multi-Sucursal**
   - Creación de pedidos entre sucursales y fábricas
   - Estados de seguimiento: borrador, enviado, en preparación, en tránsito, recibido
   - Plantillas de pedidos recurrentes con días de envío permitidos
   - Generación automática de pedidos secundarios para items faltantes

2. **Control de Productos e Inventario**
   - Catálogo centralizado de productos con SKU y unidades de medida
   - Estados detallados por item: pendiente, disponible, no disponible, entregado, devuelto, no recibido
   - Registro de motivos para devoluciones y faltantes

3. **Remitos Digitales con Firmas**
   - Generación automática de remitos en PDF
   - Firmas digitales de delivery y sucursal receptora con timestamp
   - Registro histórico completo de todos los estados del pedido
   - Exportación de remitos con información de items entregados, devueltos y no recibidos

4. **Sistema de Roles y Permisos**
   - 5 roles: Admin, Fábrica, Sucursal, Delivery, MaxDev
   - Permisos diferenciados según el rol y la sucursal asignada
   - Autenticación con Google y Email/Password

5. **Dashboard y Reportes**
   - Vista centralizada de todos los pedidos y su estado
   - Filtros por sucursal, fecha y estado
   - Historial completo de movimientos y firmas

## 🧩 Stack tecnológico

**Frontend:**
- **Next.js 15** (App Router) con React 19
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Radix UI** para componentes accesibles
- **Lucide React** para iconografía
- **React Hook Form + Zod** para formularios y validación
- **jsPDF + jsPDF-AutoTable** para generación de PDFs
- **Sonner** para notificaciones toast

**Backend & Servicios:**
- **Firebase Authentication** - Gestión de usuarios
- **Firebase Firestore** - Base de datos NoSQL en tiempo real
- **Firebase Storage** - Almacenamiento de PDFs y archivos

**Herramientas:**
- **pnpm** como gestor de paquetes
- **date-fns** para manejo de fechas
- **XLSX** para exportación de datos

## 🧑‍💻 Estructura del proyecto

\`\`\`
remitocONTROLD/
├── app/                          # App Router de Next.js
│   ├── dashboard/                # Área protegida principal
│   │   ├── delivery-notes/       # Gestión de remitos
│   │   ├── orders/               # Gestión de pedidos
│   │   │   ├── [id]/             # Detalle de pedido individual
│   │   │   └── new/              # Crear nuevo pedido
│   │   ├── products/             # Catálogo de productos
│   │   ├── settings/             # Configuración
│   │   ├── templates/            # Plantillas de pedidos
│   │   └── users/                # Gestión de usuarios
│   ├── login/                    # Página de login
│   ├── registrosuperdev/         # Registro de super admin
│   └── layout.tsx                # Layout principal
│
├── components/                   # Componentes React
│   ├── ui/                       # Componentes de UI reutilizables (Radix UI)
│   ├── protected-route.tsx       # HOC para rutas protegidas
│   ├── theme-provider.tsx        # Provider de temas
│   └── day-selector.tsx          # Selector de días de la semana
│
├── lib/                          # Lógica de negocio y utilidades
│   ├── firebase.ts               # Configuración de Firebase
│   ├── auth-context.tsx          # Context de autenticación
│   ├── types.ts                  # Tipos TypeScript (User, Order, Product, etc.)
│   ├── pdf-generator.ts          # Generación de PDFs de remitos
│   ├── remit-metadata-service.ts # Servicio para metadatos de remitos
│   └── utils.ts                  # Utilidades generales
│
├── hooks/                        # Custom hooks
│   ├── use-mobile.ts             # Detección de dispositivos móviles
│   └── use-toast.ts              # Gestión de notificaciones
│
├── public/                       # Archivos estáticos
├── firebase.json                 # Configuración de Firebase
├── firestore.rules              # Reglas de seguridad de Firestore
└── package.json
\`\`\`

## 🔐 Autenticación / Roles

El sistema utiliza **Firebase Authentication** con dos métodos:
- Google OAuth
- Email/Password

### Roles disponibles:
1. **maxdev** - Super administrador con acceso total
2. **admin** - Administrador general del sistema
3. **factory** - Usuario de fábrica (prepara pedidos)
4. **branch** - Usuario de sucursal (solicita y recibe pedidos)
5. **delivery** - Repartidor (marca pedidos en tránsito)

### Control de acceso:
- Los usuarios están vinculados a sucursales específicas mediante `branchId`
- Las rutas están protegidas con el componente `<ProtectedRoute>`
- Los datos en Firestore están estructurados bajo `apps/controld/` para multitenancy
- Las reglas de Firestore validan permisos por rol y sucursal

## 🔗 Integraciones

### Firebase Services:
- **Authentication** - Login con Google y Email/Password
- **Firestore** - Almacenamiento de datos en tiempo real con colecciones:
  - `apps/controld/users` - Usuarios
  - `apps/controld/branches` - Sucursales y fábricas
  - `apps/controld/products` - Catálogo de productos
  - `apps/controld/orders` - Pedidos
  - `apps/controld/deliveryNotes` - Remitos
  - `apps/controld/templates` - Plantillas de pedidos
  - `apps/controld/remitMetadata` - Metadatos y firmas

- **Storage** - Almacenamiento de PDFs generados

### Generación de PDFs:
- **jsPDF** - Generación de documentos PDF en el cliente
- PDFs con logo, información del pedido, tablas de items y firmas digitales

## 🧾 Planes / Modelo de uso

**Uso Interno / SaaS Multiempresa**

La aplicación está configurada como un sistema interno que puede escalarse a modelo SaaS:
- Estructura de datos preparada para multitenancy (`apps/controld/`)
- Cada empresa tendría su propio namespace en Firestore
- Los usuarios admin pueden gestionar múltiples sucursales y fábricas
- Sin límites de usuarios o pedidos actualmente

**Modelo actual:** Uso interno gratuito

**Modelo futuro potencial:**
- Plan Básico: 1 fábrica + hasta 5 sucursales
- Plan Pro: Múltiples fábricas + sucursales ilimitadas
- Plan Enterprise: Personalización + soporte dedicado

## 🚀 Pendientes o mejoras planificadas

### Funcionalidades:
- [ ] Notificaciones push para cambios de estado de pedidos
- [ ] Dashboard con métricas y estadísticas (gráficos con Recharts)
- [ ] Exportación de reportes a Excel con filtros avanzados
- [ ] App móvil nativa para delivery (React Native)
- [ ] Firma manuscrita en tablets para remitos
- [ ] Integración con sistemas de facturación
- [ ] API REST para integraciones externas
- [ ] Sistema de inventario en tiempo real
- [ ] Alertas automáticas de stock bajo

### Mejoras técnicas:
- [ ] Implementar tests unitarios y E2E (Jest + Playwright)
- [ ] Optimización de queries de Firestore con índices compuestos
- [ ] Cache de datos con React Query
- [ ] PWA con funcionamiento offline
- [ ] CI/CD con GitHub Actions
- [ ] Monitoreo con Sentry o similar
- [ ] Documentación de API con Swagger/OpenAPI

### UX/UI:
- [ ] Modo oscuro completo
- [ ] Soporte multiidioma (i18n)
- [ ] Onboarding interactivo para nuevos usuarios
- [ ] Búsqueda avanzada con filtros múltiples
- [ ] Vista de calendario para pedidos programados

---

**Última actualización:** Octubre 2025  
**Versión:** 0.1.0  
**Contacto:** [Tu email o información de contacto]
