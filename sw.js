"use strict";var precacheConfig=[["/Arashi-top/index.html","b9a1fdf863b266b81ebd9026658d9d54"],["/English-Backup/index.html","3468dcf09373da989f6aaa5191081495"],["/archives/2021/07/index.html","fd44b7094208281c2ae0acce415eb237"],["/archives/2021/index.html","422ec93a6bdaab40ebe20fe37349cabf"],["/archives/2023/07/index.html","233e70cd702e1ea4e1b640d06a2e0eb3"],["/archives/2023/08/index.html","fc95f2eb9158c2a79aa84a021fcf4286"],["/archives/2023/index.html","d4ac6fbb0ab166ad7070491200c0cc2e"],["/archives/index.html","94649c2a62960af09ac946e4e32c4c79"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/categories/index.html","90c82b58f8b5d51d3f150371bb20a0b4"],["/choujiang/index.html","8e2618837cca75e1c64ab7cd1afdb699"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/how-to-issue/index.html","b2787dab021001a4b2f5ea638734e25b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6b33bed23ce0fc7b7e266838011162be"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","ecbcb038a28e0ac376a04ae2242c9aa8"],["/live2d-on-hexo/index.html","e8326dc7a2e8a1efb19136f10d5f0678"],["/music/index.html","e1587659adacbf61af8c071e77d20e1b"],["/pc-faster/index.html","2b108f2f874f2aee55ce1d7d0ecf904c"],["/seed/index.html","c2338f0bbdd4076ec5d73051f5f2a5bb"],["/sw-register.js","b325482107ec2589468c7b5da93d254a"],["/tags/index.html","b83b9cf4109c14103e1debe9a90b076b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";!(t=urlsToCacheKeys.has(n))&&a&&(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));