"use strict";var precacheConfig=[["/Arashi-top/index.html","3196ea890e5c6486a0e1f0fd884c956e"],["/English-Backup/index.html","b34eea4a123da9ad90ad98b4bcf9a2ce"],["/archives/2021/07/index.html","f629428746d5eef4b8c30e98dbfeae25"],["/archives/2021/index.html","63708656c8361edaf296243639777cbe"],["/archives/2023/07/index.html","50c46319a18328ba4c81da70b61e1136"],["/archives/2023/08/index.html","79decff0768cb9df27a2557f8c95b436"],["/archives/2023/09/index.html","8f6c4d0b11b1674d67e052fd02c060ee"],["/archives/2023/10/index.html","324112c3e8487bf7fc09d7c0f6ba6762"],["/archives/2023/12/index.html","d5e3333ad1e8a4f428bac389a2684981"],["/archives/2023/index.html","365988afc1dc35a00c1c1707e56d1b90"],["/archives/2024/01/index.html","b0f73706f2916d5b4cca8957b208907e"],["/archives/2024/02/index.html","f6d1dbdaa57a7a15826b4354237b81d4"],["/archives/2024/index.html","3a0d9bc02b709bde504e0efad3a4d519"],["/archives/index.html","9c17e924ea711b51c79d52008e64168d"],["/baidu_verify_codeva-K2d3zmyJw6.html","4eee3dfb01c79cb7de99f67c781acc17"],["/beijing/index.html","e6b18fbe8a0f18521b83ed9fc11e7366"],["/categories/index.html","c1c243b7ab45dc22776e4ddec61d1674"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e84fd4dce7bf75c58a76c5712ac7a150"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/daotu/index.html","acd69542d02221ad2dde08de76d3c187"],["/fu-xue-xia/index.html","c6975f257916b323c47534a6ffb7ac5f"],["/fu-xue/index.html","b0b9fc05a571e461a441158b1df75e3f"],["/how-to-issue/index.html","042a70b3ff00ba3838c1aa7c6346b0fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3b1351c6262e08315cff1d0ca09523bd"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","e5046178a15dabddabfca9e6cc20b9ba"],["/live2d-on-hexo/index.html","8d09d5ec9cc93cdfdcc18892296ac2a6"],["/music/index.html","95816d4903c2d1b052d5696192008169"],["/seed/index.html","e8ec7e850d1899e97325b20cc59d2e08"],["/sw-register.js","b7ff23744b9a6ddb2f292073f03d8e24"],["/tags/Hexo-教程/index.html","7864bd0e783dffa0345a77e6fb230206"],["/tags/index.html","47b27edb9a09fadef8972dae5a7ddf75"],["/tags/学习-英语/index.html","2d7d0cf78c7d20b9c6e020d9bb556d58"],["/tags/小说/index.html","04d6c29a387aaa8e00f9b68bbfe463e4"],["/tags/教程/index.html","b15061f51798384ac6f1bfbde114c354"],["/tags/游记-北京/index.html","7bedb3a02f4b317b055ce7de99362f72"],["/tags/诗/index.html","e9f8288a16b58acc4d1655fab792bce6"],["/today-news/index.html","2b2e59a5fef5c78b0f0eacccb5c75305"],["/young/index.html","a9a10b538e8c6d9ccccaa9c44cedf3eb"],["/yyss/index.html","20b50f09e0ea490be6ebf6ef8691a0de"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName=(addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));