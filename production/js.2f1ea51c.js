parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DOAq":[function(require,module,exports) {

},{}],"clu1":[function(require,module,exports) {

},{"./../images/bg.png":[["bg.b059d957.png","LzfK"],"LzfK"],"./../images/antenna.png":[["antenna.74d66736.png","rR6I"],"rR6I"],"./../images/navigation-bg.jpg":[["navigation-bg.bfb8ca20.jpg","RMWM"],"RMWM"],"./../images/main-bg.jpg":[["main-bg.85005b14.jpg","78vh"],"78vh"],"./../images/wheel.png":[["wheel.5e22f7c7.png","fxsl"],"fxsl"]}],"HL83":[function(require,module,exports) {
"use strict";function e(e){return r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this.state={},this.host=e,this.props=n,this.bindBeforeRender(),this._render()}return i(t,[{key:"bindBeforeRender",value:function(){this.updateState=this.updateState.bind(this)}},{key:"_render",value:function(){var e=this;this.host.innerHTML="";var t=this.render();Array.isArray(t)||(t=[t]),t.map(function(t){return e._vDomPrototypeElementToHtmlElement(t)}).forEach(function(t){e.host.appendChild(t)})}},{key:"updateState",value:function(e){console.log("ffffuuuu",e);var t=Object.assign({},this.state,e);return this.state=t,this._render(),t}},{key:"render",value:function(){return"OMG! They wanna see me!"}},{key:"_vDomPrototypeElementToHtmlElement",value:function(t){var n,r=this;if("string"==typeof t)return/[<>&]/.test(t)?(n=document.createElement("div")).innerHTML=t:n=document.createTextNode(t),n;if(t.tag){if("function"==typeof t.tag){var a=document.createElement("div");return new t.tag(a,t.props),a}var o,i=document.createElement(t.tag);return t.content&&(i.innerHTML=t.content),["classList","attributes","children"].forEach(function(e){t[e]&&!Array.isArray(t[e])&&(t[e]=[t[e]])}),t.classList&&(o=i.classList).add.apply(o,e(t.classList)),t.attributes&&t.attributes.forEach(function(e){i.setAttribute(e.name,e.value)}),t.children&&t.children.forEach(function(e){var t=r._vDomPrototypeElementToHtmlElement(e);i.appendChild(t)}),t.eventHandlers&&t.eventHandlers.forEach(function(e){i.addEventListener(e.eventType,e.eventMethod)}),i}return t}}]),t}();exports.default=s;
},{}],"IJvB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../framework/Component"));function e(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,c){return e&&r(t.prototype,e),c&&r(t,c),t}function o(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(e){function c(t,e){return n(this,c),o(this,i(c).call(this,t,e))}return h(c,t.default),s(c,[{key:"render",value:function(){var t=this.props,e=t.city,c=t.currentWeather,n=t.unit,r="metric"==n?"&#176;C":"&#176;F",s="metric"==n?"m/s":"mph";return c?[{tag:"table",children:[{tag:"caption",content:e,classList:"city-name"},{tag:"tr",children:[{tag:"th",classList:"temperature",content:'<svg height="464pt" viewBox="-144 0 464 464" width="464pt" xmlns="http://www.w3.org/2000/svg"  ><path d="m56 464c30.929688 0 56-25.070312 56-56 0-18.886719-8.890625-36.667969-24-48v-328c0-17.671875-14.328125-32-32-32s-32 14.328125-32 32v328c-15.109375 11.332031-24 29.113281-24 48 0 30.929688 25.070312 56 56 56zm-8-86.984375v-185.015625c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v185.015625c14.175781 3.050781 24.222656 15.6875 24 30.183594 0 17.675781-14.328125 32-32 32s-32-14.324219-32-32c-.222656-14.496094 9.824219-27.132813 24-30.183594zm0 0"/><path d="m168 320h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m120 304h32c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/><path d="m168 256h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m120 240h32c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/><path d="m168 192h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m120 176h32c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/><path d="m168 128h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m120 112h32c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/><path d="m120 80h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/></svg>'},{tag:"th",classList:"humidity",content:'<svg height="440pt" viewBox="-84 0 440 440.6" width="440pt" xmlns="http://www.w3.org/2000/svg"  ><path d="m104.300781 280.601562c0-8.839843-3.582031-16-8-16s-8 7.160157-8 16c0 8.835938 3.582031 16 8 16s8-7.164062 8-16zm0 0"/><path d="m184.300781 344.601562c0-8.839843-3.582031-16-8-16s-8 7.160157-8 16c0 8.835938 3.582031 16 8 16s8-7.164062 8-16zm0 0"/><path d="m136.300781 440.601562c74.992188 0 136-63.3125 136-141.144531 0-69.058593-107.59375-252.289062-136-299.457031-28.410156 47.199219-136 230.398438-136 299.457031 0 77.832031 61.007813 141.144531 136 141.144531zm64-96c0 17.941407-10.542969 32-24 32s-24-14.058593-24-32c0-17.945312 10.542969-32 24-32s24 14.054688 24 32zm-30.511719-92.648437c2.566407-3.597656 7.5625-4.433594 11.160157-1.863281 3.59375 2.566406 4.429687 7.5625 1.863281 11.15625l-80 112c-2.566406 3.597656-7.5625 4.433594-11.160156 1.867187-3.597656-2.566406-4.429688-7.566406-1.863282-11.160156zm-73.488281-3.351563c13.457031 0 24 14.054688 24 32 0 17.941407-10.542969 32-24 32s-24-14.058593-24-32c0-17.945312 10.542969-32 24-32zm0 0"/></svg>'},{tag:"th",classList:"wind",content:'<svg height="448pt" viewBox="-3 0 447 448" width="448pt" xmlns="http://www.w3.org/2000/svg"  ><path d="m24.5 448v-368h6.113281l121.886719 60.945312v-17.890624l-102.113281-51.054688 102.113281-51.054688v-17.890624l-121.886719 60.945312h-6.113281v-16h-16v16h-8v16h8v368zm0 0"/><path d="m5.964844 31.488281c.8125.308594 1.667968.480469 2.535156.511719h16c.867188-.03125 1.722656-.203125 2.535156-.511719.382813-.136719.753906-.296875 1.113282-.480469 2.644531-1.339843 4.324218-4.042968 4.351562-7.007812v-16c0-4.417969-3.582031-8-8-8h-16c-4.417969 0-8 3.582031-8 8v16c.027344 2.964844 1.707031 5.667969 4.351562 7.007812.359376.183594.730469.34375 1.113282.480469zm0 0"/><path d="m440.5 159.65625v-111.953125c-16.144531-1.308594-31.570312-7.226563-44.449219-17.046875-25.761719-19.542969-61.382812-19.542969-87.144531 0-15.027344 11.527344-33.507812 17.640625-52.445312 17.34375-18.929688.296875-37.40625-5.816406-52.425782-17.34375-1.335937-.886719-2.648437-1.769531-4-2.625-.390625-.253906-.800781-.496094-1.191406-.75-.9375-.601562-1.878906-1.203125-2.839844-1.777344-.519531-.3125-1.054687-.609375-1.601562-.910156-.847656-.488281-1.695313-.96875-2.566406-1.425781-.582032-.3125-1.191407-.601563-1.792969-.894531-.855469-.425782-1.726563-.800782-2.613281-1.21875-.640626-.269532-1.296876-.535157-1.960938-.796876-.914062-.355468-1.863281-.691406-2.824219-1.011718-.695312-.230469-1.402343-.453125-2.128906-.660156-1.015625-.296876-2.09375-.554688-3.199219-.800782-.753906-.175781-1.488281-.351562-2.273437-.503906-1.207031-.226562-2.496094-.402344-3.789063-.570312-.761718-.09375-1.488281-.222657-2.289062-.296876h-.527344v111.882813c.542969.039063 1.015625.136719 1.542969.183594 1.167969.113281 2.273437.253906 3.382812.40625 1.511719.203125 2.992188.417969 4.410157.679687 1.054687.203125 2.085937.425782 3.09375.65625 1.335937.304688 2.625.632813 3.878906.992188.953125.273437 1.898437.554687 2.808594.847656 1.203124.394531 2.351562.800781 3.488281 1.257812.847656.320313 1.6875.648438 2.503906.992188 1.113281.480469 2.175781.976562 3.199219 1.488281.738281.351563 1.488281.695313 2.195312 1.0625 1.078125.5625 2.101563 1.136719 3.117188 1.722657.617187.351562 1.25.6875 1.839844 1.039062 1.121093.671875 2.203124 1.351562 3.273437 2.03125.441406.28125.914063.558594 1.34375.847656 1.472656.953125 2.90625 1.902344 4.3125 2.839844 25.75 19.542969 61.363281 19.542969 87.113281 0 31.144532-23.117188 73.75-23.117188 104.894532 0 10.289062 8.0625 22.65625 13.027344 35.664062 14.3125zm0 0"/></svg>'},{tag:"th",classList:"pressure",content:'<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M257,0C117.105,0,0,113.025,0,255c0,141.19,116.449,257,257,257c142.13,0,255-117.257,255-257 C512,114.061,397.951,0,257,0z M257,482.2C131.832,482.2,29.8,380.168,29.8,255C29.8,130.935,131.832,29.8,257,29.8\tc124.065,0,225.2,101.135,225.2,225.2C482.2,380.168,381.065,482.2,257,482.2z"/><path d="M257,60C149.21,60,60,147.491,60,255c0,52.603,20.817,103.589,57.114,139.886c5.853,5.854,15.356,5.857,21.213,0 l21.265-21.265c5.857-5.858,5.857-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0l-10.151,10.151 C106.889,336.72,93.676,304.164,90.663,270H105c8.284,0,15-6.716,15-15s-6.716-15-15-15H90.697\tc3.129-34.135,16.816-65.304,37.812-90.277l9.87,9.87c5.857,5.857,15.355,5.858,21.213,0c5.858-5.858,5.858-15.355,0-21.213\tl-9.791-9.791C175.229,107.505,207.083,93.76,242,90.674V105c0,8.284,6.716,15,15,15s15-6.716,15-15V90.689 c33.219,3.008,63.624,15.9,88.248,35.709l-129.301,91.907C217.831,227.629,210,241.346,210,255c0,1.025,0.038,2.043,0.113,3.053 C211.815,281.088,232.594,300,257,300c14.542,0,28.257-7.082,36.694-18.948l91.907-129.301\tc19.809,24.624,32.702,55.03,35.71,88.249H407c-8.284,0-15,6.716-15,15s6.716,15,15,15h14.334\tc-3.021,34.114-16.252,66.65-37.617,92.503l-10.096-10.096c-5.858-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213l21.207,21.208c5.854,5.853,15.356,5.858,21.213,0C431.162,358.495,452,307.529,452,255 C452,147.497,364.61,60,257,60z M269.242,263.671C266.425,267.634,261.849,270,257,270c-8.738,0-17-7.29-17-15 c0-3.782,3.347-8.702,8.328-12.243l72.316-51.402L269.242,263.671z"/><path d="M287,362h-62c-24.813,0-45,20.187-45,45s20.187,45,45,45h62c24.813,0,45-20.187,45-45S311.813,362,287,362z M287,422h-62 c-8.271,0-15-6.729-15-15s6.729-15,15-15h62c8.271,0,15,6.729,15,15S295.271,422,287,422z"/></svg>'}]},{tag:"tr",children:[{tag:"td",classList:"temperature-data",content:c?Math.round(c.main.temp)+"<br>"+r:""},{tag:"td",classList:"humidity-data",content:c?c.main.humidity+"<br>%":""},{tag:"td",classList:"wind-data",content:c?c.wind.speed+"<br>"+s:""},{tag:"td",classList:"pressure-data",content:c?c.main.pressure+"<br>hPa":""}]}]}]:'<h4 class="weather-fm">Weather FM</h4>'}}]),c}();exports.default=l;
},{"../../framework/Component":"HL83"}],"YENf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ActualWeather",{enumerable:!0,get:function(){return e.default}});var e=t(require("./ActualWeather"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./ActualWeather":"IJvB"}],"+/h0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeFromStorage=exports.addToStorage=exports.timestampOfDay=exports.dayOfWeek=exports.bindAll=void 0;var e=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];r.forEach(function(t){return e[t]=e[t].bind(e)})};exports.bindAll=e;var t=function(e){var t=new Date(1e3*e);return new Intl.DateTimeFormat("en-US",{weekday:"short"}).format(t)};exports.dayOfWeek=t;var r=function(e){var t=new Date;return e?t.setDate(t.getDate()+e):t.setDate(t.getDate()+1),t.getTime()/1e3};exports.timestampOfDay=r;var o=function(e,t){var r=(localStorage[t]?JSON.parse(localStorage[t]):[]).slice();e&&("likedStorage"===t?(-1===r.indexOf(e)&&r.push(e),6===r.length&&r.shift()):"historyStorage"===t&&(r.push(e),24===r.length&&r.shift()),localStorage[t]=JSON.stringify(r))};exports.addToStorage=o;var a=function(e,t){var r=(localStorage[t]?JSON.parse(localStorage[t]):[]).slice(),o=r.indexOf(e);console.log(e,r),r.splice(o,1),localStorage[t]=JSON.stringify(r)};exports.removeFromStorage=a;
},{}],"vcwg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("../../framework/Component")),e=require("../../utils/helpers");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(r){function n(t,e){return o(this,n),u(this,c(n).call(this,t,e))}return p(n,t.default),i(n,[{key:"render",value:function(){var t=[{dt:(0,e.timestampOfDay)(1),main:{temp:""},weather:[]},{dt:(0,e.timestampOfDay)(2),main:{temp:""},weather:[]},{dt:(0,e.timestampOfDay)(3),main:{temp:""},weather:[]},{dt:(0,e.timestampOfDay)(4),main:{temp:""},weather:[]},{dt:(0,e.timestampOfDay)(5),main:{temp:""},weather:[]}],r=this.props.forecastWeather,n=this.props.unit;r&&(t=r.list.filter(function(t,e){return e%8==0}));var o="metric"==n?" &#176;C":" &#176;F";return t.map(function(t){return{tag:"li",classList:"forecast-item",children:[{tag:"img",attributes:[{name:"src",value:r?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":""}]},{tag:"span",content:(0,e.dayOfWeek)(t.dt),classList:"day"},{tag:"span",content:r?Math.round(t.main.temp)+o:"",classList:"temperature-data"}]}})}}]),n}();exports.default=l;
},{"../../framework/Component":"HL83","../../utils/helpers":"+/h0"}],"UXD2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ForecastWeather",{enumerable:!0,get:function(){return e.default}});var e=r(require("./ForecastWeather"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./ForecastWeather":"vcwg"}],"6aRe":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){e(this,t)}return r(t,[{key:"getWeatherForecast",value:function(e,t){return fetch("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&APPID=c252c73aab29bec59ad61241d38d8981&units="+t,{method:"get"}).then(function(e){return e.ok?e.json():Promise.reject("Weather Server responded "+e.status)})}},{key:"getCurrentWeather",value:function(e,t){return fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=c252c73aab29bec59ad61241d38d8981&units="+t,{method:"get"}).then(function(e){return e.ok?e.json():Promise.reject("Weather Server responded "+e.status)})}},{key:"getAllWeatherInfo",value:function(e,t){return Promise.all([this.getCurrentWeather(e,t),this.getWeatherForecast(e,t)])}}]),t}(),a=new n;exports.default=a;
},{}],"/NAv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../../framework/Component")),t=o(require("../../../services/WeatherDataService")),r=require("../App"),n=require("../../utils/helpers");function o(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(t){function r(e,t){return a(this,r),s(this,f(r).call(this,e,t))}return p(r,e.default),c(r,[{key:"bindBeforeRender",value:function(){}},{key:"render",value:function(){return[{tag:"form",classList:"search-form",children:[{tag:"label",classList:"search-label",children:[{tag:"input",classList:"search-weather",attributes:[{name:"type",value:"text"},{name:"name",value:"search-weather"},{name:"id",value:"search-weather"},{name:"placeholder",value:"Enter city name or coordinates"},{name:"value",value:this.props.city?this.props.city:""}]},{tag:"button",classList:"search-button",content:"Search",attributes:[{name:"type",value:"submit"}]}]}],eventHandlers:[{eventType:"submit",eventMethod:this.props.onSubmit}]}]}}]),r}();exports.default=b;
},{"../../framework/Component":"HL83","../../../services/WeatherDataService":"6aRe","../App":"cbI8","../../utils/helpers":"+/h0"}],"PM9L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Search",{enumerable:!0,get:function(){return e.default}});var e=r(require("./Search"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Search":"/NAv"}],"ZMge":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../framework/Component"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(t){function n(e,t){return o(this,n),i(this,f(n).call(this,e,t))}return a(n,e.default),u(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("likedStorage")),t=[];return e&&(t=Object.values(e)),t.unshift('<h4 class="weather-fm">Liked cities</h4>'),e?t.map(function(e){return{tag:"div",classList:"liked-item",content:e+' <span class="remove"></span>'}}):"Nothing found"}}]),n}();exports.default=s;
},{"../../framework/Component":"HL83"}],"zQCe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Liked",{enumerable:!0,get:function(){return e.default}});var e=r(require("./Liked"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Liked":"ZMge"}],"s1J6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../framework/Component"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(e){function r(t){return n(this,r),i(this,c(r).call(this,t))}return a(r,t.default),u(r,[{key:"render",value:function(){var t=JSON.parse(localStorage.getItem("historyStorage")),e=[];return t&&(e=Object.values(t)),e.unshift('<h4 class="weather-fm">Search history</h4>'),t?e.map(function(t){return{tag:"div",classList:"liked-item",content:t}}):"Nothing found"}}]),r}();exports.default=s;
},{"../../framework/Component":"HL83"}],"Sjr3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"History",{enumerable:!0,get:function(){return e.default}});var e=r(require("./History"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./History":"s1J6"}],"LC4g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=c(require("../../framework/Component")),e=require("../ActualWeather"),n=require("../ForecastWeather"),r=require("../Search"),a=c(require("../../../services/WeatherDataService")),i=require("../Liked"),o=require("../History"),s=require("../../utils/helpers");function c(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(c){function u(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l(this,u),(e=y(this,h(u).call(this,t,n))).state={city:"",currentWeather:null,forecastWeather:null,unit:"metric",radioPlay:!1},e}return v(u,t.default),p(u,[{key:"bindBeforeRender",value:function(){this.requestWeather=this.requestWeather.bind(this)}},{key:"requestWeather",value:function(t){var e=this;t.preventDefault(),t.stopPropagation(),this.state.unit=document.getElementById("switcher").getAttribute("data-unit"),this.state.radioPlay=document.querySelector(".play").classList.contains("active"),this.state.city=document.getElementById("search-weather").value,this.state.city&&this.getCityForecast(this.state.city,this.state.unit).then(function(t){console.log("getCityForecast - ",t),(0,s.addToStorage)(t.loc,"historyStorage"),e.updateState({city:t.loc,currentWeather:t.todayForecast,forecastWeather:t.otherDaysForecast,unit:e.state.unit})})}},{key:"computeNextState",value:function(t){return{loc:t[0].name+", "+t[0].sys.country,todayForecast:t[0],otherDaysForecast:t[1]}}},{key:"getCityForecast",value:function(t,e){var n=this;return a.default.getAllWeatherInfo(t,e).then(function(t){if(t)return n.computeNextState(t)})}},{key:"render",value:function(){var t=this.state,a=t.city,c=t.currentWeather,u=t.forecastWeather,l=t.unit;console.log("STATE: ",this.state);var d=document.createDocumentFragment(),p=document.createElement("div");p.classList.add("radio"),p.innerHTML='\n            <nav class="forecast">\n                <div class="navigate-wrapper">\n                    <ul class="forecast-list" id="forecast-list">\n                        \n                    </ul>\n                    <div class="button-block">\n                        <button id=\'liked\' class="liked-cities">Liked</button>\n                        <button id="history" class="history">History</button>\n                    </div>\n                </div>\n            </nav>\n            <section class="main-content">\n                <div class="search">\n                <span id="playWrapper">\n                    \n                </span>\n                    <span id="searchForm">\n                    </span>\n                    <button id="like" type="button">Like</button>\n                </div>\n                <div class="container">\n                    <div class="top-panel">\n                        <div class="top-panel-content" id="today-weather">\n                        \n                        </div>\n                    </div>\n                    <div class="wheel-img">\n                        <img src="handler.png" alt="">\n                    </div>\n                </div>\n\n            </section>\n            <section class="legs"></section>\n        ',d.appendChild(p),d.getElementById("liked").addEventListener("click",function(t){t.preventDefault(),new i.Liked(b)});var y=d.getElementById("like");d.querySelector(".top-panel-content").addEventListener("click",function(t){var e=t.target;e.classList.contains("remove")&&((0,s.removeFromStorage)(e.parentNode.textContent.trim(),"likedStorage"),e.parentNode.remove()),e.classList.contains("liked-item")&&(document.getElementById("search-weather").value=e.textContent.trim(),document.querySelector(".search-button").click())}),y.addEventListener("click",function(t){t.preventDefault(),(0,s.addToStorage)(a,"likedStorage")}),d.getElementById("history").addEventListener("click",function(t){t.preventDefault(),new o.History(b)});var f=d.getElementById("searchForm");new r.Search(f,{city:a,onSubmit:this.requestWeather});var h=document.createElement("button");h.classList.add("unit-switcher"),h.setAttribute("id","switcher"),h.setAttribute("data-unit","metric"),h.innerHTML='<span class="c">&#176;C</span>\n                            <span class="k">&#176;F</span>',"imperial"===this.state.unit&&(h.classList.add("active"),h.setAttribute("data-unit","imperial")),h.addEventListener("click",function(){h.classList.toggle("active"),h.classList.contains("active")?h.setAttribute("data-unit","imperial"):h.setAttribute("data-unit","metric")}),d.querySelector(".button-block").prepend(h);var v=document.createElement("button");v.classList.add("play"),!0===this.state.radioPlay&&v.classList.add("active"),v.setAttribute("type","button"),v.innerHTML='<span class="on">on</span>\n                        <span class="off ">off</span>';var m=document.getElementById("radio");v.addEventListener("click",function(){m.paused?m.play():m.pause(),this.classList.toggle("active")}),d.getElementById("playWrapper").appendChild(v);var b=d.getElementById("today-weather");this.currentWeather=new e.ActualWeather(b,{city:a,currentWeather:c,unit:l});var g=d.getElementById("forecast-list");return this.forecastWeather=new n.ForecastWeather(g,{forecastWeather:u,unit:l}),[d]}}]),u}();exports.default=b;
},{"../../framework/Component":"HL83","../ActualWeather":"YENf","../ForecastWeather":"UXD2","../Search":"PM9L","../../../services/WeatherDataService":"6aRe","../Liked":"zQCe","../History":"Sjr3","../../utils/helpers":"+/h0"}],"cbI8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"App",{enumerable:!0,get:function(){return e.default}});var e=r(require("./App"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./App":"LC4g"}],"QvaY":[function(require,module,exports) {
"use strict";require("../../node_modules/normalize.css/normalize.css"),require("./../sass/main.scss"),require("./../sass/_media.scss");var e=require("./components/App/");new e.App(document.getElementById("app"));
},{"../../node_modules/normalize.css/normalize.css":"DOAq","./../sass/main.scss":"clu1","./../sass/_media.scss":"DOAq","./components/App/":"cbI8"}]},{},["QvaY"], null)
//# sourceMappingURL=js.2f1ea51c.map