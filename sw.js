"use strict";var precacheConfig=[["/Arashi-top/index.html","1c410594b8fc7fb929ae8c3b72710f1c"],["/English-Backup/index.html","46083eca6b412df16f5951e1c68bdce8"],["/archives/2021/07/index.html","08b7f7dd488b68b908a0f2206ce0f302"],["/archives/2021/index.html","02cd45d28d30411c6e0403dcdc5050c9"],["/archives/2023/07/index.html","2abcf2d272f55a3ce2f4bc72510db2f7"],["/archives/2023/08/index.html","81e18da7ae82c2f401637d724e663232"],["/archives/2023/09/index.html","5a30a84adf2b3ebd3a7f081c062167c7"],["/archives/2023/10/index.html","c8a42d76b842ec1c1edafc411d41a0fc"],["/archives/2023/12/index.html","c0bc515456583eb4e921cc7f1dd83035"],["/archives/2023/index.html","c50941877699b2f0a6a29c62068a0297"],["/archives/2024/01/index.html","41e6af2a4bd099a0a136a55cfea064fd"],["/archives/2024/02/index.html","c6531ceb31ee9a2281bb6f4b93477094"],["/archives/2024/index.html","fc6b7429c0cb31f37cd35e689c87b2c0"],["/archives/index.html","c2630e2126ee17fd703f68968081ed29"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/beijing/index.html","94d6537fb48f50e7805243657558df18"],["/categories/index.html","eb16fd1c0a252694ea102cc8a8816a14"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fu-xue-xia/index.html","b868209e2bf1370fe60af237b228caf8"],["/fu-xue/index.html","7bfab9449971246e46e5c949d20d1ac0"],["/how-to-issue/index.html","8c446d8fdd2e0fe863a761ea3eb650f0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e2b6a3db4547907e6ad4dec9a646d2dd"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","922abc0bde175520e40cef9be4ce0c66"],["/live2d-on-hexo/index.html","27c80b7947ec7dadf02fda1045e7e15b"],["/music/index.html","da934a83802756db90da437ff4a872f8"],["/seed/index.html","b1560c58ce537a73d340854bee9bbab9"],["/sw-register.js","d362954db07b0cde764f69b1bd2ba1ec"],["/tags/Hexo-教程/index.html","ad0271a76e8de30fb9a5441a7be5be83"],["/tags/index.html","08e9bf433c09c80905ce95053bee5d70"],["/tags/学习-英语/index.html","7b3e3116c572b67c1765b8cbb250b482"],["/tags/小说/index.html","841e09c91761b135877fbb2528a563f2"],["/tags/教程/index.html","f7746aadb22c716453099e25d35c5e05"],["/tags/游记-北京/index.html","e9834c26e0327e836f9e22445f077fdc"],["/tags/诗/index.html","2c67196e4e301c6bdadc4313ddb68e3f"],["/today-news/index.html","968051df9f5b6ec8c5d75e4984fae927"],["/young/index.html","38a9e2f5c324cb6cd219dd5b87f6a4ac"],["/yyss/index.html","cb4911a45995c3fcc6e62a27195bdcc0"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName=(addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";!(t=urlsToCacheKeys.has(a))&&c&&(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));