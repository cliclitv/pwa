(this["webpackJsonpclicli-pwa"]=this["webpackJsonpclicli-pwa"]||[]).push([[0],{336:function(e,t,n){e.exports=n(479)},341:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){},479:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(61),u=n.n(c),s=n(77),o=n(162);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(341);var i=n(55),l=n(93),p=n(28),m=n(26),f=n.n(m),d=n(36),h="https://admin.clicli.me",v="https://api.clicli.us";function E(e,t,n,a){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(f.a.mark((function e(t,n,a,r){var c,u,s,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>4&&void 0!==o[4]?o[4]:"public",u=o.length>5&&void 0!==o[5]?o[5]:"",e.next=4,fetch("".concat(v,"/posts?status=").concat(c,"&sort=").concat(t,"&tag=").concat(n,"&uid=").concat(u,"&page=").concat(a,"&pageSize=").concat(r));case 4:return s=e.sent,e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/post/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.result);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/rank"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/search/posts?key=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(144),k=n(47);function O(e){var t=e.match(/suo(.+?)\)/i);return t?t[1].slice(2):"https://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg"}var S=function(e){var t=e.posts;return r.a.createElement(w.a,{space:"around",styles:{flexWrap:"wrap",marginTop:"36px"}},t.length>0&&t.map((function(e){return r.a.createElement(w.a,{hAlign:"center",vAlign:"center",styles:{maxWidth:"150px",marginBottom:"24px"},column:!0,key:e.id},r.a.createElement(i.b,{to:"/post?id=".concat(e.id)},r.a.createElement(k.a,{src:O(e.content),styles:{width:"100%",height:"auto"}})),r.a.createElement("span",null,e.title))})))},q=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){E("","\u63a8\u8350",1,10).then((function(e){c(e.posts)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u7f16\u8f91\u63a8\u8350"),r.a.createElement(S,{posts:n}))},I=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){return x.apply(this,arguments)})().then((function(e){c(e.posts)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u6392\u884c\u699c"),r.a.createElement(S,{posts:n}))},L=n(84),D=function(){var e,t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],u=n[1],s=Object(a.useState)((new Date).getDay()),o=Object(p.a)(s,2),l=o[0],m=o[1];return Object(a.useEffect)((function(){E("\u65b0\u756a","",1,100,"nowait").then((function(e){var t={};e.posts.forEach((function(e){var n=new Date(e.time).getDay();t[n]=t[n]||[],t[n].push(e)})),u(t)}))}),[]),r.a.createElement(w.a,{column:!0},r.a.createElement("h1",null,"\u66f4\u65b0\u8868"),r.a.createElement(L.a,{defaultActiveIndex:l,primary:!0,items:[{key:0,content:"\u5468\u65e5"},{key:1,content:"\u5468\u4e00"},{key:2,content:"\u5468\u4e8c"},{key:3,content:"\u5468\u4e09"},{key:4,content:"\u5468\u56db"},{key:5,content:"\u5468\u4e94"},{key:6,content:"\u5468\u516d"}],onItemClick:function(e,t){m(null===t||void 0===t?void 0:t.index)}}),r.a.createElement(w.a,{wrap:!0,space:"between"},null===(e=c[l])||void 0===e?void 0:e.map((function(e){return r.a.createElement(w.a,{column:!0,key:e.id,hAlign:"center",styles:{width:"64px",marginTop:"12px"}},r.a.createElement(i.b,{to:"/post?id=".concat(e.id)},r.a.createElement(k.a,{src:O(e.content),circular:!0,styles:{width:"100%",height:"64px"}})),r.a.createElement("span",null,e.title))}))))},T=function(){return r.a.createElement("main",{style:{padding:"8px"}},r.a.createElement(q,null),r.a.createElement(I,null),r.a.createElement(D,null))},B=n(85),N=n(60),M=n(160),P=n(312),W=n.n(P),_=n(108),A=n.n(_),J=A.a.getJSON("user"),z=A.a.get("token");function F(){J=void 0,z=void 0,A.a.remove("user"),A.a.remove("token")}function R(e){if(!e)return"/default_avatar.jpg";if(/^[0-9]+$/.test(e))return"http://q1.qlogo.cn/g?b=qq&nk=".concat(e,"&s=5");var t=W()(e);return"https://cdn.v2ex.com/gravatar/".concat(t)}function C(e){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/user/login"),{method:"POST",body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:if(200!==(a=e.sent).code){e.next=12;break}return J=a.user,z=a.token,A.a.set("user",J),A.a.set("token",z),e.abrupt("return",!0);case 12:F();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,fetch("".concat(h,"/auth"),{credentials:"include"});case 4:return t=e.sent,e.next=7,t.json();case 7:if(200!==e.sent.code){e.next=10;break}return e.abrupt("return",!0);case 10:return F(),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=[{label:"\u7528\u6237\u540d",key:"username",styles:{marginBottom:"16px"},id:"login_username",required:!0},{label:"\u5bc6\u7801",key:"password",styles:{marginBottom:"16px"},id:"login_password",required:!0,control:{as:B.a,type:"password"}},{control:{as:N.a,content:"\u767b\u5f55"},key:"login"}],U={display:"flex",flexDirection:"column",alignItems:"center",marginTop:"33%"},Q=function(){var e=Object(l.f)();return r.a.createElement(M.a,{onSubmit:Object(d.a)(f.a.mark((function t(){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("login_username").value,a=document.getElementById("login_password").value,t.next=4,C({name:n,pwd:a});case 4:if(!t.sent){t.next=8;break}e.goBack(),t.next=9;break;case 8:alert("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef");case 9:case"end":return t.stop()}}),t)}))),fields:K,styles:U})},V=n(251);n(462);function X(){return new URLSearchParams(Object(l.g)().search)}var Y=n(114);function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/videos?pid=").concat(t,"&page=1&pageSize=150"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.videos);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(463);function te(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],u=n[1];return Object(a.useEffect)((function(){Object(d.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e.postId);case 2:n=t.sent,u(n);case 4:case"end":return t.stop()}}),t)})))()}),[e.postId]),r.a.createElement("div",{className:"video-list"},null===c||void 0===c?void 0:c.map((function(e){return r.a.createElement(i.b,{to:"/video?url=".concat(e.content),className:"item",key:e.id},r.a.createElement("img",{src:R(e.uqq),alt:e.uqq}),r.a.createElement("span",null,"P ",e.oid),r.a.createElement("span",null,e.title))})))}var ne=function(){var e=X();return r.a.createElement(w.a,{styles:{justifyContent:"center",alignItems:"center"}},r.a.createElement(Y.a,{src:e.get("url"),autoPlay:!0,styles:{width:"100%",height:"auto"}}))},ae=function(){var e=X().get("id"),t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useState)({}),u=Object(p.a)(c,2),s=u[0],o=u[1];return Object(a.useEffect)((function(){Object(d.a)(f.a.mark((function a(){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e);case 2:r=a.sent,o(r),c=document.body.clientWidth,r.tag.indexOf("\u5176\u5b83")>-1||c<480?(t.current.style.display="none",n.current.style.display="block",n.current.innerHTML=Object(V.a)(r.content)):t.current.innerHTML=Object(V.a)(r.content);case 6:case"end":return a.stop()}}),a)})))()}),[e]),r.a.createElement(w.a,{column:!0},r.a.createElement("article",{ref:t}),r.a.createElement("h1",null,s.title||"\u5c11\u7537\u7948\u7977\u4e2d\u2026\u2026"),r.a.createElement("article",{ref:n,className:"other"}),"public"===s.status?r.a.createElement(te,{postId:e}):s.status?r.a.createElement("div",{className:"copyright"},"\u7248\u6743\u539f\u56e0\uff0c\u8be5\u756a\u5267\u672a\u4e0a\u67b6\uff0c\u8bf7\u652f\u6301\u6b63\u7248"):r.a.createElement(r.a.Fragment,null))},re=function(){var e=X().get("key"),t=Object(a.useState)([]),n=Object(p.a)(t,2),c=n[0],u=n[1];return Object(a.useEffect)((function(){(function(e){return j.apply(this,arguments)})(e).then((function(e){u(e.posts)}))}),[e]),r.a.createElement(S,{posts:c})},ce=n(161),ue=function(){var e=Object(l.f)(),t=Object(a.useState)({isLogin:!0}),n=Object(p.a)(t,2),c=n[0],u=n[1];return Object(a.useEffect)((function(){Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,$();case 3:e.t1=e.sent,e.t2={isLogin:e.t1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(w.a,{styles:se},r.a.createElement(i.b,{to:c.isLogin?"/":"/login"},r.a.createElement(ce.a,{size:"larger",image:R(null===J||void 0===J?void 0:J.qq)})),r.a.createElement(w.a,{styles:oe},r.a.createElement(B.a,{fluid:!0,icon:"search",onKeyPress:function(t){"Enter"===t.key&&e.push("/search?key=".concat(t.currentTarget.value))}})))},se={padding:"4px 8px",alignItems:"center"},oe={flexGrow:1,margin:"0 8px 0 12px"},ie=function(){return r.a.createElement(i.a,null,r.a.createElement(ue,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/search"},r.a.createElement(re,null)),r.a.createElement(l.a,{path:"/video"},r.a.createElement(ne,null)),r.a.createElement(l.a,{path:"/post"},r.a.createElement(ae,null)),r.a.createElement(l.a,{path:"/login"},r.a.createElement(Q,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(T,null))))};!function(){var e=0;document.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()})),document.addEventListener("touchend",(function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n}),!1)}(),u.a.render(r.a.createElement((function(){var e=function(e){var t=r.a.useState((function(){return matchMedia(e).matches})),n=Object(p.a)(t,2),a=n[0],c=n[1];return r.a.useEffect((function(){var t=!0,n=matchMedia(e),a=function(){t&&c(n.matches)};return a(),n.addListener(a),function(){t=!1,n.removeListener(a)}}),[e]),a}("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return e?s.themes.teamsDark:s.themes.teams}),[e]);return r.a.createElement(o.a,{theme:t},r.a.createElement(ie,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[336,1,2]]]);
//# sourceMappingURL=main.c269d9f8.chunk.js.map