if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const o=e=>r(e,t),f={module:{uri:t},exports:n,require:o};i[t]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.min.js",revision:"0da2cf0663ccbb21522efe62030ffbdb"},{url:"index.html",revision:"fc9a8167debf6c4010e8aff719429cf2"},{url:"resources/icon.jpg",revision:"3cd5bb868c14c3d5ad548c4816b33386"},{url:"script.js",revision:"d13e2857810a0024612f8b0632383064"},{url:"style.css",revision:"ded41fed7fa932031b27457fcc470354"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
