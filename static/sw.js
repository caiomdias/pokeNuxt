importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22ae18a4f88e5f35e1d6.js",
    "revision": "06f796a2067f4f533989680f500f8694"
  },
  {
    "url": "/_nuxt/2759febd782ecd9e4411.js",
    "revision": "6a1bebbb09b1501e989cc3f9929ba0b9"
  },
  {
    "url": "/_nuxt/4a37cd005f21d057ae97.js",
    "revision": "04eaf9213df7314f4b8c0b2814b55e84"
  },
  {
    "url": "/_nuxt/60e60951fe0967aa573c.js",
    "revision": "af3e28bd69e79f428d70fbc26388ac4a"
  },
  {
    "url": "/_nuxt/7a7d9d7b1a31dc843686.js",
    "revision": "8737280fdb97ed5ca6a8399200adf79c"
  }
], {
  "cacheId": "pokeNuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
