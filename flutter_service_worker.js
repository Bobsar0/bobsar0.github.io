'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"index.html": "cbf33b10fc02fcc6e258a65250fda3e6",
"/": "cbf33b10fc02fcc6e258a65250fda3e6",
"main.dart.js": "6414002ddbe90f502a7f649ca9c931d7",
"README.md": "bc7f48e10fb057742a727fa3777bc317",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "c5841396e9b027f4562b6e77cb1b0cdd",
".git/objects/68/f0d1e5d5a7c0abf2a4f09415d782f2497ab0a9": "f09c258421360517751f43b9e08cb290",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/0b/bedac5ada74c746b0d852d7ec5f1a92cb05a48": "79dd4375a824d872c4b6cfca4a6cf130",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/ad/6989a77ddcdc0b793181ee95aa3c1deb21fba5": "295593a74b8611fdf16b9f12e3baf77f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/038371ea6554e572a0d6b5662aad366f66d5b4": "21fa4f057eb2b8fd2c93159453aadd36",
".git/objects/e2/08459b8afde5f7980720efd6bbb97f7ae24541": "90b4d1273936e6d6fb4d005524717144",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/5c8cc8de190564789e98eea2f51abca9dddce3": "89f21870c61a24440ab931af9a32e176",
".git/objects/c9/a2003e11b73deed817fcfea768bb69753e6064": "773b6770cd143640aa8c517d20603406",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/13b08eae2295b8b734359812310813e3edc7ae": "0ecccbba499db2dc59f35612a4899cfc",
".git/objects/e3/d57ae5c460ece28a18647c6ee5e603b2d079bb": "109f701021b2312a2adf74349f765841",
".git/objects/20/0bfaa657f377e2617fb222e3ae0fd4dc00c5df": "c9ca8b06d3982a022afc15725e8b3756",
".git/objects/pack/pack-ddd0dbd6ac7ac188508ef400d2ddfdda04ac13c1.pack": "af118e1601801c1ff8087849ef4447ca",
".git/objects/pack/pack-ddd0dbd6ac7ac188508ef400d2ddfdda04ac13c1.idx": "d9467ddc95f56d40d0252179952fe947",
".git/objects/7d/4c05cbc2318bd9915083129fa30123cdc9511c": "5feb116361b613107bc7cd2f2df038cc",
".git/objects/1f/868bd82b51548c717ed2b57b4a918c5eaa7834": "41b87c0cb7db27edf3981eb2d38c6e48",
".git/objects/87/248ad15380dcc3b7a7750029f406ce47903a92": "2d972fe729c2d466d23a48409b875803",
".git/objects/7b/aec95f94e16db04ba4590506c1116ce3f042c2": "bd7fbdedb000a19a6d8415cb8ee095a0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/9aab84e7b36157b1ff9fd4a5af9bae328b6ab8": "a396e5f16a26ab01fd21808da3b4dbd3",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/75/0725b2c5b30a73ef31791f0729a43a05828557": "fac3857a89c0063bdf335c139c524fc7",
".git/objects/86/2ceb7b00c5a5a7dc10a52a98acea207e497d78": "31883afecda06613eea49d2ca674be3a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/91/bfa4a2c3dce8180bfa478f59edce865a7d4899": "a77ba51b35a24b1b813da9651e3d82fc",
".git/objects/62/6cedfbb7da6f0785dae22e67406c114cc312ef": "9fb0b99cd164b9df2909ffa7c3ba7016",
".git/objects/5e/5fbb33702957a83f9767d64a8b24f062ffcb58": "a86f5e3cd82b350b86c11bf9b56d6f06",
".git/objects/5b/782cbe0127c4661c92b304626b1c03d52280d3": "25a48693c7ad8d13726e324c11015098",
".git/objects/01/c8eb685186cf238e788e7bd45e5913194f4bde": "621a7c715f198ae67e8d7b85091f1a97",
".git/objects/97/747cd4eebe02f5c2d55ece181dc2477422a5b2": "541e47684a4d61590e5474695d74f6e2",
".git/objects/a7/22da68e55b43fcf2d7c70cd3c94cb396ab2e58": "a4353aad0cdc70e12c6b31747e2c9f59",
".git/objects/b1/1811cad739f0fb12de435e1786d87816b70a4a": "b9c0462ed2a5448981c377466c033a08",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/cea439b73298389935af5a905352db11ca9a50": "94d62500d4ed3a1f3ca608eee43be96e",
".git/objects/a6/c8da40998e29416fb0221e7a457b44aa303632": "d188318f92826bb20fd49a32ef111434",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/c607678d9624c52136de64b7c0fd1a705710fb": "e574505404d8f18a5516103f3bf00018",
".git/objects/c4/0ec01b1995e3c9719054503a2494404631bd42": "0df080f14b5390cf5ed06dfcfcbadc6d",
".git/objects/e8/1dca37a960dab5c0d30ec0b52f40b207b323eb": "540ff8123f56a8b0761f58d2ccaf4e1b",
".git/objects/ff/3b4819c83681a67ef7f7fb1e1c6b49207dcfac": "dad588a63588c19d1f14188080e450ee",
".git/objects/ff/beda9d728fef5a169cf12ddd4aa89ddf0847d1": "1cc890c2286be9db57daee904ea00c52",
".git/objects/c2/35d25c94bd0df59f895d5d2e9d3abaab537a1d": "d96d9863b90dd8c5921984510741a2f8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/e12b06e9c690a61331d2757329580f1e77f728": "491beecb709580d64a273212a6215725",
".git/objects/83/064c6b8502d2f3255348c0c68d681d0aef9800": "83bfd3311b3c32e88585ef4aa70ab7e7",
".git/objects/1e/7d712c1df7ed6c0531afe41dae65985f17b144": "961510e7ed50b03a50918cdd94a8b18c",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/1c/d8c5704ca985a608d57632b5d240e276a00397": "634fe0bcebfad5a78ffd68c1a01e2e48",
".git/objects/49/47f776e65cfa29bede3f807ded4979c2aea7a3": "9b50608653ae51eb8a20d5d54f800708",
".git/objects/40/558c0ee0e46d168afdbe6341452b97ad1f86cb": "b75d90656f6d41b5c94b933263fff7b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e76c5ea4f8236f030cb12469534f059",
".git/logs/refs/heads/main": "9e76c5ea4f8236f030cb12469534f059",
".git/logs/refs/remotes/origin/HEAD": "4f1877b79063e77a9dcff6038ddaad12",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0cd0bf1dcf1fec846e0e6948061b4a9a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "a5ee5568e08b7f230571022299d1755a",
".git/packed-refs": "dfa2e2ad1fef2bb2f60c30f7ee91345b",
".git/COMMIT_EDITMSG": "b474f6a7e1891e4cac779320fd8e25e7",
"assets/AssetManifest.json": "a8f36408e50135ba2ebcf34573db3fa3",
"assets/NOTICES": "ffbea311e8015e905a03d9b4e7c9edb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/profile-pic.jpeg": "b42326cc410ce06e65d91056246ac08c",
"assets/assets/images/background.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/gitlab.svg": "c4522907460748631870a1c9c3d58bb5",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/files/resume.pdf": "af237c9ef7eb0ed61060dec4929f3ce0",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "f314d79b7b09b443891191f4dde37314",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "64e48ed5fe1c0771136b54971310826a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
