import"./modulepreload-polyfill.c7c6310f.js";/* empty css                   */const i=()=>{const t=document.querySelector("#comment-text").value;if(t.length!==0){const e=`https://twitter.com/intent/tweet?text=${t}
&hashtags=\u5E73\u6210\u56DE\u5E30\u8ECD,iniactors`;window.open(encodeURI(e)),window.open(encodeURI(e))||(location.href=encodeURI(e))}else alert(`\u3042\u308C\u308C\uFF1F
\u4F55\u3082\u66F8\u304D\u8FBC\u3093\u3067\u3044\u306A\u3044\u3088\u3046\u3060\u3088\uFF01`)},m=()=>{if(o+=1,n.style.maxWidth=`${10+(o+1)**2}rem`,o===1){const t=document.getElementById("welcome-msg");t.textContent="\u304A\uFF5E\u3063\u3068\u3063\u3068\u8183\u80AD\u81CD",setTimeout(()=>{o>=3?location.href="./special.html":(o=0,n.style.maxWidth="10rem",t.textContent="\u3086\u3063\u304F\u308A\u3057\u3066\u3063\u3066\u306D\uFF01")},1500)}},c=[{text:"999\u56DE\u5931\u6557\u3057\u3066\u3082\u30011\u56DE\u3046\u307E\u304F\u3044\u3051\u3070\u3044\u3044\u3002\u305D\u308C\u304C\u767A\u660E\u5BB6\u306A\u3093\u3060\u3002\u5931\u6557\u306F\u3001\u3046\u307E\u304F\u3044\u304F\u305F\u3081\u306E\u7DF4\u7FD2\u3060\u3068\u8003\u3048\u3066\u3044\u308B\u3093\u3060\u3002",by:"\u30C1\u30E3\u30FC\u30EB\u30BA\u30FB\u30B1\u30BF\u30EA\u30F3\u30B0"},{text:"\u904E\u53BB\u3092\u6094\u3084\u307F\u3001\u672A\u6765\u3092\u6848\u3058\u308B\u306E\u3082\u7D50\u69CB\u3060\u304C\u3001\u4ECA\u3053\u306E\u6642\u306B\u3001\u300C\u884C\u52D5\u3067\u304D\u308B\u300D\u3068\u3044\u3046\u4E8B\u3092\u5FD8\u308C\u3066\u306F\u3044\u3051\u306A\u3044\u3002",by:"\u30A2\u30D6\u30E9\u30CF\u30E0\u30FB\u30DE\u30BA\u30ED\u30FC"},{text:"\u80A9\u66F8\u304D\u304C\u306A\u304F\u3066\u306F\u5DF1\u304C\u4F55\u306A\u306E\u304B\u3082\u308F\u304B\u3089\u3093\u3088\u3046\u306A\u963F\u5446\u5171\u306E\u4EF2\u9593\u306B\u306A\u308B\u3053\u3068\u306F\u306A\u3044\u3002",by:"\u5357\u65B9\u718A\u6960"}],l=()=>{const t=Math.floor(Math.random()*c.length),e=c[t];document.querySelector("#quote-text").textContent=`${e.text}`,document.querySelector("#quote-by").textContent=`${e.by}`};window.onload=()=>{l()};let o=0;const n=document.querySelector("#ottosei");n.addEventListener("click",m);document.querySelector("#comment-button-submit").addEventListener("click",i);
