const CACHE_NAME = "controlapp-v2"
const STATIC_CACHE = "controlapp-static-v2"
const DYNAMIC_CACHE = "controlapp-dynamic-v2"
const IMAGE_CACHE = "controlapp-images-v2"

const urlsToCache = [
  "/",
  "/manifest.json",
  "/favicon.ico"
]

// Límites de cache
const CACHE_LIMITS = {
  [DYNAMIC_CACHE]: 50,
  [IMAGE_CACHE]: 30
}

// Función para limpiar cache antiguo
async function cleanupCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  if (keys.length > maxItems) {
    await cache.delete(keys[0])
    return cleanupCache(cacheName, maxItems)
  }
}

// Instalación - cachear recursos estáticos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  )
})

// Activación - limpiar caches antiguos
self.addEventListener("activate", (event) => {
  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE]
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!currentCaches.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch - estrategia Network First con fallback a cache
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Solo cachear requests GET
  if (request.method !== 'GET') {
    return
  }

  // Estrategia para imágenes: Cache First
  if (request.destination === 'image' || /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cached) => {
          if (cached) {
            return cached
          }
          return fetch(request).then((response) => {
            if (response.status === 200) {
              cache.put(request, response.clone())
              cleanupCache(IMAGE_CACHE, CACHE_LIMITS[IMAGE_CACHE])
            }
            return response
          })
        })
      })
    )
    return
  }

  // Estrategia para páginas y recursos: Network First con timeout
  event.respondWith(
    Promise.race([
      fetch(request).then((response) => {
        // Solo cachear respuestas exitosas
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache)
            cleanupCache(DYNAMIC_CACHE, CACHE_LIMITS[DYNAMIC_CACHE])
          })
        }
        return response
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 3000)
      )
    ]).catch(() => {
      // Fallback a cache si la red falla
      return caches.match(request).then((cached) => {
        return cached || caches.match('/')
      })
    })
  )
})
