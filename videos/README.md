# Videos de ControlApps (no forman parte del sitio)

Esta carpeta **no es parte del sitio web** (Next.js). Guarda proyectos de video hechos con
[Hyperframes](https://hyperframes.dev), por si más adelante se decide incluirlos, moverlos a otro
repo (por ejemplo el de contenido) o borrarlos. Subirlos acá no cambia nada de lo que se publica:
no hay archivos `.ts`/`.tsx` y el `package.json` interno es independiente del del sitio.

Se guardó el 02/11/2026, antes de formatear la PC de Diego, para no perder el trabajo.

## controlapps-vaca-muerta-01

Anuncio vertical para Instagram Reels dirigido a PyMEs contratistas de Vaca Muerta.

- **Formato:** 1080x1920, 18 segundos, español.
- **Mensaje:** "Evita que la documentación rechazada frene el ingreso y la facturación de tu operación."
- **Arco:** Hook (tranquera detenida) → dolor → circuito documental ordenado → llamado a consulta por WhatsApp.
- **Creado:** 15/10/2026. Flujo `product-launch-video` de Hyperframes.
- **Estado:** brief, guion (`SCRIPT.md`), storyboard y composiciones listos. **Falta** elegir la voz
  (ElevenLabs, voz argentina masculina adulta) y **no hay render final** (.mp4) guardado.
- **Cómo verlo:** `cd videos/controlapps-vaca-muerta-01` y luego `npm run dev` (vista previa),
  `npm run check` (validar) o `npm run render` (generar el mp4). Requiere Node; Hyperframes se baja con `npx`.
- **Archivos clave:** `BRIEF.md`, `SCRIPT.md`, `STORYBOARD.md`, `compositions/`, `assets/`, `capture/`
  (captura del sitio usada como referencia visual).
- **Ojo:** `BRIEF.md` menciona una imagen de referencia que estaba fuera del repo
  (`C:\Users\User\.ccm-uploads\...jpeg`); no está incluida.

Además se incluyó `public/logos/uXQbD.png`, un logo suelto que quedó sin commitear junto con este proyecto.

## Pendiente de decidir

- ¿Se publica el video? Si sí: elegir voz, renderizar y subirlo a las redes.
- ¿Queda en este repo, se mueve a `ControlRedes-contenido` o se elimina?
