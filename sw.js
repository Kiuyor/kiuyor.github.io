"use strict";var precacheConfig=[["/Arashi-top/index.html","fd9a45a6fcfda63894977f21bcdcaa41"],["/English-Backup/index.html","b1bd576712721a844989d51bc5368f80"],["/archives/2021/07/index.html","83933827936ae5893f6a306519dad2c4"],["/archives/2021/index.html","3e20d66f53dac2c8cad78a689df1a70b"],["/archives/2023/07/index.html","eba85138bef4385953f304b5dacfce23"],["/archives/2023/08/index.html","b5f639257a74817fa505c667fc8e8667"],["/archives/2023/index.html","ac179cf6ff86cf23318d5705fbaf1cae"],["/archives/index.html","fb2495a589f5a134779d41d88f5c8812"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/categories/index.html","320420db53fac469b2928402a5638b53"],["/choujiang/index.html","fc0dfbd63688c5940bfc46b17e0aa6c6"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/how-to-issue/index.html","a622ccf148a28e1d64641eb5ec6a943c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","997d6b4c767c33344f035a3d07b9d03b"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","644ec580182c067647ab9f6ce3bd807f"],["/live2d-on-hexo/index.html","59588655d5d5c0c4f9c6ca6f60b8a158"],["/music/index.html","cd4773e2f110bbd368309879283d06f6"],["/pc-faster/index.html","4a2e9c83e28b1f668696b4b4ace8ae06"],["/seed/index.html","d3cb72fa85860c03434a101a468e5206"],["/sw-register.js","cccff2f314cd331cc12f64e624f71aee"],["/tags/index.html","f254cc76e930b13e26af726b81f2a491"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";!(t=urlsToCacheKeys.has(n))&&a&&(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));