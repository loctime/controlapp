---
format: 1080x1920
duration: 18s
message: "Evita que la documentación rechazada frene el ingreso y la facturación de tu operación."
arc: "PAS — Hook → Pain → Circuito adaptado → CTA"
audience: "PyMEs contratistas de Vaca Muerta con personal y vehículos que deben ingresar a yacimientos"
mode: collaborative
---

## Video direction

- **Safe area obligatoria:** 108 px de aire a cada lado, 192 px arriba y 280 px abajo. Esos márgenes protegen el texto de los controles y recortes de Reels.
- **Legibilidad:** ningún texto auxiliar por debajo de 26 px; titulares grandes, alto contraste y una sola idea por golpe visual.
- **Movimiento:** cada escena usa una sola timeline GSAP pausada y determinista. Las entradas tienen escalonamiento corto, la composición descansa antes del corte y no hay movimiento decorativo continuo.
- **Transiciones:** cortes secos entre dolor, rechazo y solución; el CTA entra con un pequeño pulso de presión.

## Frame 1 — La tranquera

- status: animated
- src: compositions/frames/01-tranquera.html
- duration: 4s
- poster: 2.2s
- transition_in: cut
- type: hook
- blueprint: kinetic-type-beats
- asset_candidates: assets/images/vaca-muerta-tranquera.png
- scene: El ingreso petrolero al atardecer muestra una camioneta detenida; el titular irrumpe por bloques.
- voiceover: "Tu gente y tus camionetas no pueden quedar frenadas en la tranquera."

Abrimos con el costo operativo, no con software. La camioneta detenida convierte un dolor abstracto en una imagen específica de Vaca Muerta.

**Animación (0–4s):** la foto entra con un push-in suave; la etiqueta superior aparece de abajo hacia arriba. El titular entra palabra por palabra entre 0.45s y 1.55s, la palabra CAMIONETAS recibe el acento de color y el rótulo inferior cierra en 2.45s. De 2.75s a 4s queda estable para leer.

## Frame 2 — El costo del rechazo

- status: animated
- src: compositions/frames/02-rechazos.html
- duration: 4s
- poster: 2s
- transition_in: cut
- type: pain_point
- blueprint: overwhelm-surround
- asset_candidates: assets/images/vaca-muerta-tranquera.png
- scene: PDFs, mensajes y avisos de "Rebotado" rodean una ficha de vehículo; todo se comprime en "Días sin facturar".
- voiceover: "Un papel rechazado puede dejarte sin ingresar, sin trabajar y sin facturar."

El mensaje central aparece antes del segundo cinco: no es un archivo mal cargado, es tiempo operativo perdido.

**Animación (4–8s):** el encabezado aparece primero; las tres fichas documentales emergen escalonadas, cada estado de rechazo se revela justo después. La tarjeta final DÍAS SIN FACTURAR entra a los 2.8s y sostiene el cierre de la escena.

## Frame 3 — El circuito

- status: animated
- src: compositions/frames/03-circuito.html
- duration: 6s
- poster: 3s
- transition_in: wipe
- type: feature_showcase
- blueprint: spatial-pan-stations
- asset_candidates: assets/images/vaca-muerta-tranquera.png
- scene: Un documento entra desde WhatsApp y atraviesa tres estaciones: ordenar, revisar y preparar para la plataforma del cliente.
- voiceover: "En ControlApps ordenamos tu circuito documental, reducimos carga manual y detectamos problemas antes de que te frenen."

La solución se muestra como un proceso adaptable, sin mencionar ni prometer integración con una plataforma concreta.

**Animación (8–14s):** el titular abre la escena. Las tres estaciones del circuito entran de izquierda a derecha, conectadas por flechas que se dibujan entre cada paso. La promesa inferior aparece cuando los tres pasos ya están completos y se mantiene legible hasta el corte.

## Frame 4 — La salida

- status: animated
- src: compositions/frames/04-cta.html
- duration: 4s
- poster: 2s
- transition_in: cut
- type: cta
- blueprint: cta-morph-press
- asset_candidates: svgs/logo-7298ec37.svg
- scene: La barrera se abre y el mensaje se condensa en una placa de ControlApps con CTA de WhatsApp.
- voiceover: "Consultanos y revisemos el flujo que hoy te está frenando."

El cierre pide conversación, no una compra inmediata: es consistente con el diagnóstico operativo de ControlApps.

**Animación (14–18s):** marca y titular entran en tres golpes breves; el texto de apoyo aparece con calma. El botón de WhatsApp escala con un pulso de presión y luego queda quieto, con margen suficiente para la interfaz de Reels.
