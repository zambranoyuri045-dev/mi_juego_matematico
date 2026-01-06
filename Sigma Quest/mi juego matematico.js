juego-matematico/
│
├── index.html   (tu juego)
├── manifest.json
├── sw.js
├── icon-192.png
└── icon-512.png
{
  "name": "Juego Matemático de Aventuras",
  "short_name": "MateAventuras",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#87ceeb",
  "theme_color": "#2fb9b3",
  "orientation": "portrait",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#2fb9b3">
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mate-aventuras").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
<script>
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
</script>
