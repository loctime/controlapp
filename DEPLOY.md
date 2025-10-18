# 🚀 Guía de Deploy en Vercel

## Deploy Rápido en Vercel

### Opción 1: Deploy Automático desde GitHub

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ControlApp ready for production"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/controlapp.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Inicia sesión con GitHub
   - Selecciona tu repositorio `controlapp`
   - Haz click en **"Import"**

3. **Configuración automática:**
   - ✅ Vercel detectará Next.js automáticamente
   - ✅ Framework Preset: `Next.js`
   - ✅ Build Command: `pnpm build`
   - ✅ Output Directory: `.next`
   - ✅ Install Command: `pnpm install`

4. **Deploy:**
   - Haz click en **"Deploy"**
   - ⏳ Espera 2-3 minutos
   - 🎉 ¡Tu app está en línea!

---

### Opción 2: Deploy Manual con Vercel CLI

```bash
# 1. Instala Vercel CLI globalmente
npm install -g vercel
# o con pnpm
pnpm install -g vercel

# 2. Inicia sesión
vercel login

# 3. Deploy a preview
vercel

# 4. Deploy a producción
vercel --prod
```

---

## ⚙️ Configuración en Vercel Dashboard

### Variables de Entorno

En el dashboard de Vercel, ve a **Settings → Environment Variables** y agrega:

```env
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

> 💡 **Tip:** Puedes agregar más variables según necesites (ver `.env.example`)

---

### Configuración del Proyecto

#### Build & Development Settings:
- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`
- **Development Command:** `pnpm dev`

#### Root Directory:
- Deja en blanco (`.` por defecto)

#### Node.js Version:
- 18.x (recomendado)

---

## 🌐 Dominio Personalizado

### Agregar tu dominio:

1. Ve a **Settings → Domains**
2. Haz click en **"Add"**
3. Ingresa tu dominio: `www.tudominio.com`
4. Sigue las instrucciones para configurar DNS

### Configuración DNS:

**Para dominio raíz (tudominio.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para www (www.tudominio.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔄 Deploy Automático

Una vez conectado a GitHub, cada push a `main` hará un deploy automático:

```bash
git add .
git commit -m "Update feature X"
git push origin main
```

Vercel automáticamente:
- 🏗️ Construirá tu app
- ✅ Ejecutará checks
- 🚀 Desplegará a producción
- 💬 Comentará en el commit con el URL

---

## 🌿 Preview Deployments

Cada Pull Request obtiene su propio URL de preview:

```bash
git checkout -b feature/nueva-funcionalidad
git push origin feature/nueva-funcionalidad
# Crea el PR en GitHub
# → Vercel creará un URL de preview automáticamente
```

---

## 📊 Analytics y Monitoring

### Activar Vercel Analytics:

1. Ve a **Analytics** en tu dashboard
2. Haz click en **"Enable"**
3. Agrega en tu código (opcional, Vercel lo hace automático):

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting

### Error: Build Failed

**Causa común:** Dependencies faltantes

**Solución:**
```bash
# Limpia node_modules y lockfile
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Error: Module not found

**Causa:** Imports case-sensitive

**Solución:** Verifica que tus imports coincidan exactamente con los nombres de archivo:
```tsx
// ❌ Incorrecto
import { Button } from './Button'  // si el archivo es button.tsx

// ✅ Correcto
import { Button } from './button'
```

### Error: Image Optimization

**Ya configurado** en `next.config.mjs`:
```js
images: {
  unoptimized: true,
}
```

---

## 📈 Performance Tips

### 1. Enable Edge Runtime (opcional)
```tsx
// app/page.tsx
export const runtime = 'edge'
```

### 2. Static Generation
```tsx
// Ya configurado - páginas son estáticas por defecto
```

### 3. Image Optimization
```tsx
import Image from 'next/image'

<Image 
  src="/logo.png" 
  width={200} 
  height={50}
  alt="Logo"
  priority // para imágenes above-the-fold
/>
```

---

## ✅ Checklist Pre-Deploy

- [x] ✅ `pnpm build` funciona sin errores
- [x] ✅ No hay errores de TypeScript
- [x] ✅ Variables de entorno configuradas
- [x] ✅ `.gitignore` incluye `.env.local`
- [x] ✅ Favicon y metadata configurados
- [x] ✅ PWA manifest.json presente
- [x] ✅ README.md actualizado

---

## 🎯 URLs Importantes

- **Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Status:** [vercel-status.com](https://www.vercel-status.com/)
- **Soporte:** [vercel.com/support](https://vercel.com/support)

---

## 📞 Soporte

¿Problemas con el deploy?

1. Revisa los logs en Vercel Dashboard → Deployments → View Logs
2. Consulta la [documentación oficial de Next.js](https://nextjs.org/docs/deployment)
3. Visita el [foro de Vercel](https://github.com/vercel/vercel/discussions)

---

<div align="center">

**¡Tu app está lista para producción! 🚀**

Hecho con ❤️ por el equipo de ControlApp

</div>


