'use strict';


self.addEventListener('install', (event) => {
  console.log("[Service Worker] Install");
});

self.addEventListener('fetch', (event) => {
  console.log("[Service Worker] Fetched resource " + e.request.url);
});

// self.addEventListener('activate', (event) => {
// });
