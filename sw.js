"use strict";var precacheConfig=[["/archives/2021/07/index.html","c2cbc5051668f5a07783bbb528840317"],["/archives/2021/index.html","5b769f96964ba51c12d7a9f2d19dd1c5"],["/archives/2023/07/index.html","9422d95ec7316abf38e2bb3f974aa238"],["/archives/2023/index.html","44ff30621cedc5c75c1d4a9dfffbb963"],["/archives/index.html","37501eb2fe511ce5b5de0448344c5242"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/categories/index.html","7599d0a1bc3eda03e146edbf94953475"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5b5a096e1ee311dc82373dd3898b0966"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","270ef32ee3333e7aa5ab585a6cd9345b"],["/sw-register.js","89c1835e92d7388bbeab98ca6fe9232a"],["/tags/index.html","5f0ca01d51386d7b9e35d43f492512f6"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";!(t=urlsToCacheKeys.has(n))&&r&&(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));