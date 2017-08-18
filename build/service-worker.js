"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","94ebe4f2c63d741fde094a745f282506"],["/static/css/main.65d585fa.css","fe31d7c991601068755e9212fbd446f4"],["/static/js/main.05893766.js","e41ac6c471addb9d1070ae6bb496e443"],["/static/media/1.3b281279.jpg","3b281279629c956ea2c4c182ad709599"],["/static/media/10.4e6a0c89.jpg","4e6a0c89c2442d50dc3d9800ae953c5d"],["/static/media/11.95ce3aec.jpg","95ce3aecece3d82b5ee5cb52f9b74190"],["/static/media/12.da2d5d57.jpg","da2d5d570484eec52b562adbf1003bc8"],["/static/media/13.bc7ced9a.jpg","bc7ced9acd70cc2ed3e163279e686fae"],["/static/media/14.ed74f12c.jpg","ed74f12c5c93022a3d88f0416d86b6d2"],["/static/media/15.0555edcb.jpg","0555edcb02e2550bc87006486665e653"],["/static/media/16.68b6bc08.jpg","68b6bc08ccb0e8c06f451f3eb4337ea7"],["/static/media/17.060f5924.jpg","060f59245bd2667b51bd2640f0cc16dd"],["/static/media/18.2db2e8da.jpg","2db2e8daa9cf7db5eaf72ceabd1fc7ce"],["/static/media/19.3a4febcd.jpg","3a4febcd73e1bffb9c94993c9ddb7908"],["/static/media/2.9c8163f4.jpg","9c8163f44bf348a3b2c02369636e0d2a"],["/static/media/20.61a1990f.jpg","61a1990f54c32d7404a7d22789e738ae"],["/static/media/21.6f180455.jpg","6f1804559fe762575b80fb48aa0c5cb7"],["/static/media/22.33ae00c5.jpg","33ae00c591b82123d38ce4057385a335"],["/static/media/23.81d8e927.jpg","81d8e927c7b5329a180c81a6bb68fcd7"],["/static/media/24.f0e5f66b.jpg","f0e5f66b52d55cfe03d01fe6c3a666ce"],["/static/media/25.50fcf152.jpg","50fcf1523c02fbd7a2634057453a5b8a"],["/static/media/26.bde6cc24.jpg","bde6cc24d94311ca2e7849ddc85baa35"],["/static/media/27.0be7a399.jpg","0be7a399e2ddff41f26ccc09b8934fb4"],["/static/media/28.da4905dc.jpg","da4905dcdfac9c142dea284955fbfc27"],["/static/media/29.78ac1f87.jpg","78ac1f876b559f9098ac4a074c8ac29a"],["/static/media/3.14798676.jpg","147986765b66c7cd7a7005199ce52a5e"],["/static/media/4.2b3e78b9.jpg","2b3e78b98dec2b748d4f83a5d2a7922f"],["/static/media/5.f7b1f51e.jpg","f7b1f51ef7ad8cd4911997f80868d821"],["/static/media/6.7a09933e.jpg","7a09933eaa1371856b7a0cb0f5b98752"],["/static/media/7.17f94e6d.jpg","17f94e6d3b8db81250cb3052419a4f99"],["/static/media/8.dbdad15a.jpg","dbdad15a5d96c5c73d00077bb37b9d3d"],["/static/media/9.90044018.jpg","90044018d196ba5ae02fa960d324e2ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});