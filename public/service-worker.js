if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const f=e=>r(e,o),d={module:{uri:o},exports:n,require:f};s[o]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(t(...e),n)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets.js",revision:"7113fc6078c94ab36984fd1820caa45b"},{url:"leaderboard.js",revision:"3407e854a298d037204ba5a996599adc"},{url:"leaderboard.js.LICENSE.txt",revision:"360ff95233be7ab39f74511fd9ead68c"},{url:"main.js",revision:"f9710113afe285c22d87436f9f414898"},{url:"main.js.LICENSE.txt",revision:"360ff95233be7ab39f74511fd9ead68c"}],{})}));
