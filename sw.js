"use strict";var precacheConfig=[["/Arashi-top/index.html","bd6483bc72f2395073d5a75e56b6901c"],["/English-Backup/index.html","24be8b0500b57e32f8e9876a72dc6c20"],["/archives/2021/07/index.html","0ab366a00fa9a1ffb2bd52aef0b9fa47"],["/archives/2021/index.html","fb1fb126a74fc9102f9185e98d14d42f"],["/archives/2023/07/index.html","b4ef8bea933f444ff017bab4c0479622"],["/archives/2023/08/index.html","617d7e03a10d3f776fdb14f09656b3f8"],["/archives/2023/09/index.html","00a0d17866be1b681ceaecf6cf33b108"],["/archives/2023/10/index.html","113cd47b6fb2de66e07bdd0dfc69b41a"],["/archives/2023/12/index.html","8574363f8924da011e9b2499d8adafac"],["/archives/2023/index.html","e2c59aafc2713b3df12955ad7c5d56f7"],["/archives/2024/01/index.html","311bcee792199ce08646fac6b9cccb67"],["/archives/2024/index.html","23474b3ba95c6787bc051621a31eb897"],["/archives/index.html","a143522ac1bc559be8aa5657fa3ba8ef"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/beijing/index.html","c0d6300df8ef03a05ad3b8f304442dbd"],["/categories/index.html","fff9bf1f06b35315e91f3d10b84e9f36"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fu-xue/index.html","9b2cb294e1f9d36b6e6b606c6c6b066d"],["/how-to-issue/index.html","bf4a82dfc5d83dc2ec4e35b055940360"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","53869a7a65c834eedd5290179951fc60"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","88d8e05abd45f0af149bde223fc43fea"],["/live2d-on-hexo/index.html","b0a4fdc50d17cf96f6950807dc86bf33"],["/music/index.html","c8dc8a600d84c893ab5bcf8b2276ac8f"],["/seed/index.html","5cb7fe0470965470e7e9d3924c9d1b4f"],["/sw-register.js","d17267f7d539d0f95a43503264a80c31"],["/tags/Hexo-教程/index.html","4fb4918ad43be04995541fff985fe926"],["/tags/index.html","38efbdefb9247ee5b34eb199e530d510"],["/tags/学习-英语/index.html","c3af45d02e6db58af114a57781b8fd8a"],["/tags/小说/index.html","7e647255378534515082870de2652025"],["/tags/教程/index.html","ca8f446a76416de4e55357495f757d19"],["/tags/游记-北京/index.html","40979a42999878a1671d6fc3be675301"],["/tags/诗/index.html","cf2a8f69d8196a23d193807a976d5893"],["/today-news/index.html","e02b8ea1767ee03997f0b6dceedd47b3"],["/young/index.html","bf0cba8cbd9c1471d5234abdce533cf6"],["/yyss/index.html","fefcd664c5120664f8a348346c1dd1de"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName=(addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(t=urlsToCacheKeys.has(a))&&n&&(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));