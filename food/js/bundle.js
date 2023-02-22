/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={657:function(t){t.exports=function(){class t{constructor(t,e,n,r,o){this.img=t,this.altimg=e,this.title=n,this.descr=r,this.price=41*o}render(){const t=document.createElement("div");t.classList.add("menu__item"),t.innerHTML=`\n                <img src=${this.img} alt=${this.altimg}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,document.querySelector(".menu .container").append(t)}}(async function(t){const e=await fetch("http://localhost:3000/menu");return await e.json()})().then((e=>e.forEach((e=>{let{img:n,altimg:r,title:o,descr:i,price:s}=e;new t(n,r,o,i,s).render()}))))}},702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(i?i(m):g())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function f(){var t=setTimeout;return function(){return t(m,1)}}var h=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0;r=0}var _,v,y,p,g=void 0;function w(t,e){var n=this,r=new this.constructor(S);void 0===r[E]&&$(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return O(o,r,i,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(S);return q(e,t),e}g=u?function(){return process.nextTick(m)}:l?(v=0,y=new l(m),p=document.createTextNode(""),y.observe(p,{characterData:!0}),function(){p.data=v=++v%2}):d?((_=new MessageChannel).port1.onmessage=m,function(){return _.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:f()}catch(t){return f()}}():f();var E=Math.random().toString(36).substring(2);function S(){}var L=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?C(t,e._result):2===e._state?j(t,e._result):M(e,void 0,(function(e){return q(t,e)}),(function(e){return j(t,e)}))}(e,n):void 0===r?C(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?q(t,n):C(t,n))}),(function(e){r||(r=!0,j(t,e))}),t._label);!r&&o&&(r=!0,j(t,o))}),t)}(e,n,r):C(e,n)}function q(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)C(t,e);else{var n=void 0;try{n=e.then}catch(e){return void j(t,e)}A(t,e,n)}var r,o}function x(t){t._onerror&&t._onerror(t._result),T(t)}function C(t,e){t._state===L&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(T,t))}function j(t,e){t._state===L&&(t._state=2,t._result=e,s(x,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?O(n,r,o,i):o(i);t._subscribers.length=0}}function O(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==L||(i&&a?q(n,s):!1===a?j(n,c):1===e?C(n,s):2===e&&j(n,s))}var k=0;function $(t){t[E]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var P=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(S),this.promise[E]||$(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&C(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===D){var c=new n(S);s?j(c,i):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===L&&(this._remaining--,2===t?j(r,n):this._result[e]=n),0===this._remaining&&C(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var D=function(){function e(t){this[E]=k++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){q(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return D.prototype.then=w,D.all=function(t){return new P(this,t).promise},D.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},D.resolve=b,D.reject=function(t){var e=new this(S);return j(e,t),e},D._setScheduler=function(t){i=t},D._setAsap=function(t){s=t},D._asap=s,D.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=D},D.Promise=D,D}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(746);const t=document.querySelector(".modal__thanks"),e=document.querySelector(".modal__error");function r(t){t.classList.add("show"),document.body.style.overflow="hidden",window.removeEventListener("scroll",s)}function o(t){t.classList.remove("show"),document.body.style.overflow=""}const i=document.querySelector(".modal__main");function s(){document.documentElement.clientHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight-1&&(r(i),window.removeEventListener("scroll",s))}var c=n(657),a=n.n(c);n(702).polyfill(),window.addEventListener("DOMContentLoaded",(function(){(function(){const t=document.querySelectorAll(".tabheader__item"),e=document.querySelector(".tabheader__items"),n=document.querySelectorAll(".tabcontent");e.addEventListener("click",(e=>{t.forEach(((r,o)=>{e.target===r&&(n.forEach(((t,e)=>{t.classList.remove("show")})),t.forEach(((t,e)=>{t.classList.remove("tabheader__item_active")})),function(e){n[e].classList.add("show"),t[e].classList.add("tabheader__item_active")}(o))}))}))})(),function(){const n=document.querySelectorAll("[data-modal]"),c=document.querySelectorAll(".modal__close");n.forEach((t=>{t.addEventListener("click",(()=>r(i)))})),c.forEach((n=>{n.addEventListener("click",(()=>{o(i),o(t),o(e)}))})),document.documentElement.addEventListener("click",(t=>{(t.target.classList.contains("modal__main")||t.target.classList.contains("modal__thanks")||t.target.classList.contains("modal__error"))&&o(t.target)})),window.addEventListener("scroll",s)}(),function(){const t=setInterval((function(){const e=new Date("2023-05-31").getTime()-(new Date).getTime();document.querySelector("#days").textContent=Math.floor(e/864e5),document.querySelector("#hours").textContent=Math.floor(e/36e5%24),document.querySelector("#minutes").textContent=Math.floor(e/(1e3/60)%60),document.querySelector("#seconds").textContent=Math.floor(e/1e3%60),e<=0&&(clearInterval(t),document.querySelector(".promotion__timer").classList.add("hide"))}),1e3)}(),a()(),function(){document.querySelector(".calculating__field");const t=document.querySelector("#gender"),e=document.querySelectorAll("#gender .calculating__choose-item"),n=document.querySelector(".calculating__choose_big"),r=document.querySelectorAll(".calculating__choose_big .calculating__choose-item"),o=document.querySelector(".calculating__result span"),i=document.querySelectorAll(".calculating__choose_medium input");let s,c,a,l,u;function d(t,e){t.addEventListener("click",(t=>{t.target.classList.contains("calculating__choose-item")&&(e.forEach((t=>{t.classList.remove("calculating__choose-item_active")})),t.target.classList.add("calculating__choose-item_active"),"male"===t.target.id||"female"===t.target.id?l=t.target.id:t.target.getAttribute("data-ratio")&&(u=+t.target.getAttribute("data-ratio"))),f()}))}function f(){o.textContent=s&&c&&a&&l&&u?"male"==l?Math.round((88.36+13.4*c+4.8*s-5.7*a)*u):Math.round((448.6+9.2*c+3.1*s-4.3*a)*u):"___"}u=1.375,d(t,e),d(n,r),i.forEach((t=>{t.addEventListener("input",(t=>{"height"==t.target.id?s=+t.target.value:"weight"==t.target.id?c=+t.target.value:"age"==t.target.id&&(a=+t.target.value),f()}))})),f()}(),document.querySelectorAll("form").forEach((n=>{n.addEventListener("submit",(s=>{s.preventDefault(),function(n){const s=new FormData(n);(async function(t,e){const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((()=>{o(i),r(t)})).catch((()=>{o(i),o(t),r(e)})).finally((()=>{n.reset()}))}(n)}))})),function(){const t=document.querySelectorAll(".offer__slide"),e=document.querySelector(".offer__slider-prev"),n=document.querySelector(".offer__slider-next"),r=document.querySelector("#current"),o=document.querySelector("#total"),i=document.querySelector(".offer__slider-wrapper"),s=document.querySelector(".offer__slider-inner"),c=window.getComputedStyle(i).width;let a=0,l=0;function u(e){t.length<10?r.textContent=`0${e+1}`:r.textContent=e+1}u(a),t.length<10?(o.textContent=`0${t.length}`,r.textContent=`0${a+1}`):(o.textContent=t.length,r.textContent=a+1),s.style.width=100*t.length+"%",s.style.display="flex",s.style.transition="0.5s all",i.style.overflow="hidden",t.forEach((t=>{t.style.width=c})),n.addEventListener("click",(()=>{l==+c.slice(0,c.length-2)*(t.length-1)?l=0:l+=+c.slice(0,c.length-2),s.style.transform=`translateX(-${l}px)`,a==t.length-1?a=0:a++,u(a),h.forEach((t=>t.style.opacity=.5)),h[a].style.opacity=1})),e.addEventListener("click",(()=>{0==l?l=+c.slice(0,c.length-2)*(t.length-1):l-=+c.slice(0,c.length-2),s.style.transform=`translateX(-${l}px)`,0==a?a=t.length-1:a--,u(a),h.forEach((t=>t.style.opacity=.5)),h[a].style.opacity=1}));const d=document.querySelector(".offer__slider"),f=document.createElement("ol"),h=[];f.classList.add("carousel-indicators"),d.append(f);for(let e=0;e<t.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),0==e&&(t.style.opacity=1),f.append(t),h.push(t)}h.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");a=e,u(a-1),l=+c.slice(0,c.length-2)*(e-1),s.style.transform=`translateX(-${l}px)`,h.forEach((t=>t.style.opacity=.5)),h[a-1].style.opacity=1,console.log(e)}))}))}()}))}()}();
//# sourceMappingURL=bundle.js.map