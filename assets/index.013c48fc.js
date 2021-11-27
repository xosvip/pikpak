var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as x,u as me,r as g,a as G,o as v,c as K,w as c,b as n,e as a,N as fe,f as he,g as ge,z as ve,h as _e,i as ke,j as Y,k as ye,l as Fe,m as we,n as Ee,p as Ae,q as Ce,s as y,t as De,v as Ne,x as be,y as F,A as $,B as xe,C as $e,D as N,E as f,F as Z,G as Be,H as Ie,I as B,L as Le,J as X,K as Pe,M as Oe,O as Se,P as Te,Q as ze,R as Ve,S as Re,T as Me,U as q,V as je,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as Ze}from"./vendor.976a7dbd.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Xe();const qe=x({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=x({setup(e){const t=g({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,r)=>{const s=G("router-view");return v(),K(a(ke),{locale:a(ve),"date-locale":a(_e),"theme-overrides":t.value},{default:c(()=>[n(a(ge),null,{default:c(()=>[n(a(fe),null,{default:c(()=>[n(a(he),null,{default:c(()=>[n(qe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",Q={},tt="/pikpak/",_=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${tt}${r}`,r in Q)return;Q[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":et,s||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),s)return new Promise((C,m)=>{u.addEventListener("load",C),u.addEventListener("error",m)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const p=Y.create({});p.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://cors.z7.workers.dev"))===-1&&(e.url="https://cors.z7.workers.dev/"+e.url),e});let E=!1;p.interceptors.response.use(e=>e,e=>{var r;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!E?(console.log("wait",o.url),E=!0,p.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),E=!1,p(o))).catch(()=>(b.push("/login"),!1))):i.username&&i.password&&E?new Promise((u,C)=>{const m=setInterval(()=>{E||(clearInterval(m),u(p(o)))},100)}):(b.push("/login"),!1);default:window.$message.error(((r=t==null?void 0:t.data)==null?void 0:r.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const ee=Y.create({});ee.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://cors.z7.workers.dev"))===-1&&(e.url="https://cors.z7.workers.dev/"+e.url),e});const At=ee,te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let r=Math.floor(o/10);return e=e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[r]};const st=f("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[f("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),f("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},rt=F("\u4F1A\u5458\u7801"),nt={style:{"margin-bottom":"0"}},it=f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ut=F(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),lt={class:"bottom-user-info"},ct={key:0,src:ot,class:"user-info-avatar"},dt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},pt={class:"user-info-name"},mt={key:0},ft={class:"action"},ht=F(" \u9000\u51FA\u767B\u5F55 "),gt=f("p",null,[f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),vt=F("\u6DFB\u52A0"),_t=x({setup(e){const t=g(!1),o=l=>()=>q(B,null,{default:()=>q(l)}),r=ye(),s=Fe(),i=g([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),u=g(),C=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},m=g(),I=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{m.value=l.data}).catch(l=>{console.log(l)})},k=g(),oe=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var d;k.value=(d=l.data)==null?void 0:d.data})},se=(l,d)=>{console.log(d),r.push("/"+d.key)};we(()=>{C(),I(),oe()});const D=g(),w=g(!1),ae=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:D.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),I()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},L=g(!1),re=l=>{L.value=l<800,t.value||(t.value=l<800)};Ee(s,()=>{L.value&&(t.value=!0)});const ne=Ae(),ie=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),r.push("/login")}).catch(l=>{console.log(l)})}})};return(l,d)=>{const ue=G("router-view"),le=Ce("resize");return v(),y(Me,null,[De(n(a(X),{"has-sider":"",onResize:re},{default:c(()=>[n(a(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=h=>t.value=!0),onExpand:d[2]||(d[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,P,O,S,T,z,V,R,M,j,J;return[st,n(a(be),{options:i.value,value:String(a(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?N("",!0):(v(),y("div",at,[F($(a(te)((h=m.value)==null?void 0:h.quota.usage))+" / "+$(a(te)((P=m.value)==null?void 0:P.quota.limit))+" ",1),n(a(xe),{type:"primary",onClick:d[0]||(d[0]=Ft=>w.value=!0)},{default:c(()=>[rt]),_:1}),((O=m.value)==null?void 0:O.quota)?(v(),K(a($e),{key:0,type:"line",percentage:Number((((S=m.value)==null?void 0:S.quota.usage)/((T=m.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((z=k.value)==null?void 0:z.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),f("p",nt,[n(a(Z),{placement:"right"},{trigger:c(()=>[it]),default:c(()=>[ut]),_:1})])])),t.value?N("",!0):(v(),y("div",{key:1,class:Be(["sider-bottom",{vip:((V=k.value)==null?void 0:V.status)==="ok"}])},[f("div",lt,[((R=k.value)==null?void 0:R.status)==="ok"?(v(),y("img",ct)):(v(),y("img",dt)),f("div",pt,[F($((M=u.value)==null?void 0:M.name)+" ",1),((j=k.value)==null?void 0:j.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",mt,[n(a(Ie),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),f("div",ft,[n(a(Z),null,{trigger:c(()=>[n(a(B),{onClick:ie},{default:c(()=>[n(a(Le))]),_:1})]),default:c(()=>[ht]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(a(X),null,{default:c(()=>[n(a(Pe),{style:{height:"100vh"}},{default:c(()=>[n(a(Oe),{style:{"max-height":"100vh"}},{default:c(()=>[n(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),n(a(Re),{show:w.value,"onUpdate:show":d[5]||(d[5]=h=>w.value=h)},{default:c(()=>[n(a(Se),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(a(B),{onClick:d[3]||(d[3]=h=>w.value=!1)},{default:c(()=>[n(a(Te))]),_:1})]),action:c(()=>[n(a(ze),{block:!0,type:"primary",disabled:!D.value,onClick:ae},{default:c(()=>[vt]),_:1},8,["disabled"])]),default:c(()=>[n(a(Ve),{placeholder:"\u4F1A\u5458\u7801",value:D.value,"onUpdate:value":d[4]||(d[4]=h=>D.value=h)},null,8,["value"]),gt]),_:1})]),_:1},8,["show"])],64)}}}),kt=[{path:"/",name:"home",component:_t,redirect:"/list",beforeEnter:(e,t,o)=>{const r=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");!r||!r.access_token?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>_(()=>import("./list.21699b80.js"),["assets/list.21699b80.js","assets/list.764e0448.css","assets/vendor.976a7dbd.js"])},{path:"trash",name:"trash",component:()=>_(()=>import("./trash.1bfef909.js"),["assets/trash.1bfef909.js","assets/trash.99a3677d.css","assets/vendor.976a7dbd.js"])},{path:"setting",name:"setting",component:()=>_(()=>import("./setting.b0da75e3.js"),["assets/setting.b0da75e3.js","assets/setting.f947579c.css","assets/vendor.976a7dbd.js"])},{path:"share",name:"share",component:()=>_(()=>import("./share.0e095f06.js"),["assets/share.0e095f06.js","assets/share.4f9c11c6.css","assets/vendor.976a7dbd.js"])}]},{path:"/t/:id?",name:"test",component:()=>_(()=>import("./test.fe291c91.js"),["assets/test.fe291c91.js","assets/vendor.976a7dbd.js"])},{path:"/login",name:"login",component:()=>_(()=>import("./login.ad0ef8eb.js"),["assets/login.ad0ef8eb.js","assets/login.5735a7bc.css","assets/vendor.976a7dbd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>_(()=>import("./register.e28703a5.js"),["assets/register.e28703a5.js","assets/register.5588ce76.css","assets/vendor.976a7dbd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>_(()=>import("./testtest.235dc208.js"),["assets/testtest.235dc208.js","assets/vendor.976a7dbd.js"])}],yt=We({history:Ge(),routes:kt});var b=yt;const A=Ke(Qe);A.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,r=>{let s=r.offsetWidth,i=r.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=p;A.use(b);A.use(Ze,{router:b,siteIdList:[1280510106]});A.mount("#app");export{te as b,p as i,At as n};
