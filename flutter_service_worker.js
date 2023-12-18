'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "d8e94736f13722399e694f5bdf028c1f",
"assets/NOTICES": "0117dd790d0ce59449e6f99650d4636b",
"assets/assets/svg/instagram.svg": "0f51da178eff1d87826480d0e5db970b",
"assets/assets/svg/appLogo.png": "6ffc60d1f3dd42ed3d08c7bafffe6fab",
"assets/assets/svg/folder.svg": "46a545a4289ba140f5b90613ceccd879",
"assets/assets/svg/twitter.svg": "d278ea034ebbe0c01e76739232fa2a3e",
"assets/assets/svg/stackoverflow.svg": "ec181e798c8b9fe73dcf64d47926667a",
"assets/assets/svg/linkedIn.svg": "c408ef7fbd143d9052cd195819076f90",
"assets/assets/svg/profilePic.png": "6ffc60d1f3dd42ed3d08c7bafffe6fab",
"assets/assets/svg/externalLink.svg": "1790fffa6c0b0eb87d7e90470cc80b86",
"assets/assets/svg/github.svg": "c0e94df08ad3d521af33fa4ad69e2162",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "ff05b49a7dc83aba8e090e014caeefd9",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/fonts/MaterialIcons-Regular.otf": "718cca218fdd93994bc7e0de41884fb5",
"assets/AssetManifest.bin": "3ca0808b9b02574c60dcd007afb5914c",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"icons/ms-icon-310x310.png": "53e7602ba9391a60a30d540a41aa83c0",
"icons/ms-icon-144x144.png": "41287e8f327e450be735855b1495e94f",
"icons/apple-icon-60x60.png": "21c0c9df904a52563bb2a4d7404336ba",
"icons/android-icon-36x36.png": "97fddde43d95dcb0f7198df0290f0ef8",
"icons/apple-icon.png": "1cc667e26ddc791e2838eeb673463166",
"icons/favicon-96x96.png": "4af6da443a456293f82d0de48a2315ca",
"icons/icons8-j-key-stickers-96.png": "5deca21cdd01d18c79005b3a24bf4b5f",
"icons/apple-icon-precomposed.png": "1cc667e26ddc791e2838eeb673463166",
"icons/favicon-16x16.png": "d7b92395a6ec502e8fa77a8c45a10671",
"icons/apple-icon-120x120.png": "0524a5a0988e6b5d1da93524b8367897",
"icons/android-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/apple-icon-152x152.png": "1e806f71360050ac8da71d354133ad71",
"icons/android-icon-48x48.png": "c9fb200a24a89d792f90e8b261cd8ca3",
"icons/icons8-j-key-stickers-16.png": "408617023566b59726fdc7098e1a8d6e",
"icons/apple-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/apple-icon-180x180.png": "3322f05ad4f76dc18fa67c9ef46e2cd3",
"icons/ms-icon-70x70.png": "a3342fe44afab33b0fd78895a2403266",
"icons/apple-icon-114x114.png": "f7e0b581da8ab30e9c3f72777af2cd1c",
"icons/ms-icon-150x150.png": "dff72e05bb35dfd56b263b0eef42f20f",
"icons/favicon.ico": "29fce6af89ea4a496397a61fffac1797",
"icons/android-icon-192x192.png": "eef6818ccc76007bc19889123ea109ff",
"icons/android-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/apple-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/icons8-j-key-stickers-32.png": "891b9524f208ba2296f3f3debc4e21fb",
"icons/favicon-32x32.png": "5be85aa48085c43bf5563ac88413a8cb",
"icons/apple-icon-76x76.png": "415af589f62f1b8ca78773d9256f63b6",
"icons/apple-icon-57x57.png": "6f4016850f9f244d1194e513a5b94d95",
"icons/android-icon-96x96.png": "c579f8f3e23abd9f5e6c1ef7f7cd9bb9",
"favicon.png": "d7b92395a6ec502e8fa77a8c45a10671",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"index.html": "6f7f0d2316650eb7568ede1d4da37ccd",
"/": "6f7f0d2316650eb7568ede1d4da37ccd",
"manifest.json": "ee139c6bf19ec9d8cc29081480ad5fc4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
