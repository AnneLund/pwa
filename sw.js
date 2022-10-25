let staticUrlsToCache = ["/Assets/Images/anne.jpg", "/Assets/Images/icon-192x192.png", "Assets/Images/icon-384x384.png", "Assets/Images/icon-256x256.png", "Assets/Images/icon-512x512.png", "Assets/Styles/style.css"];
const cacheVersionName = ['staticCache-v1']

self.addEventListener('install', event => {
    console.log('installing..')

    event.waitUntil(
        caches.open(cacheVersionName[0]).then(cache => cache.addAll(staticUrlsToCache))
    )
})

self.addEventListener('fetch', (event) => {
    return
})