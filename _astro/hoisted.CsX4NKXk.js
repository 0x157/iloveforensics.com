import{b as Ms,c as Rs,s as _s,g as zs}from"./setting-utils.3AT7fowt.js";const ht=(t,e)=>{const{o:n,i:o,u:s}=t;let r,c=n;const i=(t,e)=>{const n=c,i=t,l=e||(o?!o(n,i):n!==i);return(l||s)&&(c=i,r=n),[c,l,r]};return[e?t=>i(e(c,r),t):i,t=>[c,!!t,r]]},qn=typeof window<"u"&&typeof document<"u",ft=qn?window:{},Gn=Math.max,Bs=Math.min,Ne=Math.round,ye=Math.abs,Sn=Math.sign,Un=ft.cancelAnimationFrame,sn=ft.requestAnimationFrame,be=ft.setTimeout,Ve=ft.clearTimeout,Ce=t=>typeof ft[t]<"u"?ft[t]:void 0,Ns=Ce("MutationObserver"),xn=Ce("IntersectionObserver"),ve=Ce("ResizeObserver"),Fe=Ce("ScrollTimeline"),Wn=qn&&Node.ELEMENT_NODE,{toString:Ko,hasOwnProperty:Re}=Object.prototype,Oe=t=>void 0===t,on=t=>null===t,Ot=t=>"number"==typeof t,$e=t=>"string"==typeof t,Kn=t=>"boolean"==typeof t,wt=t=>"function"==typeof t,$t=t=>Array.isArray(t),ee=t=>"object"==typeof t&&!$t(t)&&!on(t),Te=t=>{const e=!!t&&t.length,n=Ot(e)&&e>-1&&e%1==0;return!!($t(t)||!wt(t)&&n)&&(!(e>0&&ee(t))||e-1 in t)},we=t=>{if(!t||!ee(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Re.call(t,n),c=s&&Re.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return Oe(e)||Re.call(t,e)},Se=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===Wn)},Ae=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===Wn)};function K(t,e){if(Te(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&K(Object.keys(t),(n=>e(t[n],n,t)));return t}const cn=(t,e)=>t.indexOf(e)>=0,Ht=(t,e)=>t.concat(e),st=(t,e,n)=>(!$e(e)&&Te(e)?Array.prototype.push.apply(t,e):t.push(e),t),_t=t=>Array.from(t||[]),Xn=t=>$t(t)?t:[t],je=t=>!!t&&!t.length,En=t=>_t(new Set(t)),St=(t,e,n)=>{K(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},Yn="paddingTop",Zn="paddingRight",Jn="paddingLeft",Qn="paddingBottom",ts="marginLeft",es="marginRight",ns="marginBottom",Vs="overflowX",Fs="overflowY",Ut="width",Wt="height",Dt="visible",zt="hidden",Kt="scroll",js=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},He=(t,e,n,o)=>{if(t&&e){let o=!0;return K(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},ss=(t,e)=>He(t,e,["w","h"]),me=(t,e)=>He(t,e,["x","y"]),qs=(t,e)=>He(t,e,["t","r","b","l"]),It=()=>{},I=(t,...e)=>t.bind(0,...e),Bt=t=>{let e;const n=t?be:sn,o=t?Ve:Un;return[s=>{o(e),e=n((()=>s()),wt(t)?t():t)},()=>o(e)]},qe=(t,e)=>{const{_:n,p:o,v:s,m:r}=e||{};let c,i,l,a,d=It;const u=function(e){d(),Ve(c),a=c=i=void 0,d=It,t.apply(this,e)},p=t=>r&&i?r(i,t):t,y=()=>{d!==It&&u(p(l)||l)},f=function(){const t=_t(arguments),e=wt(n)?n():n;if(Ot(e)&&e>=0){const n=wt(o)?o():o,r=Ot(n)&&n>=0,f=e>0?be:sn,h=e>0?Ve:Un,m=p(t)||t,g=u.bind(0,m);let b;d(),s&&!a?(g(),a=!0,b=f((()=>a=void 0),e)):(b=f(g,e),r&&!c&&(c=be(y,n))),d=()=>h(b),i=l=m}else u(t)};return f.S=y,f},os=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Lt=t=>t?Object.keys(t):[],G=(t,e,n,o,s,r,c)=>{const i=[e,n,o,s,r,c];return("object"!=typeof t||on(t))&&!wt(t)&&(t={}),K(i,(e=>{K(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=$t(s);if(s&&we(s)){const e=t[o];let n=e;r&&!$t(e)?n=[]:!r&&!we(e)&&(n={}),t[o]=G(n,s)}else t[o]=r?s.slice():s}))})),t},cs=(t,e)=>K(G({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&we(t)&&(n[e]=cs(t))})),rn=t=>{for(const e in t)return!1;return!0},Ge=(t,e,n)=>Gn(t,Bs(e,n)),Nt=t=>_t(new Set(($t(t)?t:(t||"").split(" ")).filter((t=>t)))),ln=(t,e)=>t&&t.getAttribute(e),Cn=(t,e)=>t&&t.hasAttribute(e),At=(t,e,n)=>{K(Nt(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},Et=(t,e)=>{K(Nt(e),(e=>t&&t.removeAttribute(e)))},Le=(t,e)=>{const n=Nt(ln(t,e)),o=I(At,t,e),s=(t,e)=>{const o=new Set(n);return K(Nt(t),(t=>{o[e](t)})),_t(o).join(" ")};return{O:t=>o(s(t,"delete")),$:t=>o(s(t,"add")),C:t=>{const e=Nt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},rs=(t,e,n)=>(Le(t,e).O(n),I(an,t,e,n)),an=(t,e,n)=>(Le(t,e).$(n),I(rs,t,e,n)),Ue=(t,e,n,o)=>(o?an:rs)(t,e,n),un=(t,e,n)=>Le(t,e).C(n),ls=t=>Le(t,"class"),is=(t,e)=>{ls(t).O(e)},dn=(t,e)=>(ls(t).$(e),I(is,t,e)),as=(t,e)=>{const n=[],o=e?Ae(e)&&e:document;return o?st(n,o.querySelectorAll(t)):n},Gs=(t,e)=>{const n=e?Ae(e)&&e:document;return n?n.querySelector(t):null},xe=(t,e)=>!!Ae(t)&&t.matches(e),us=t=>xe(t,"body"),We=t=>t?_t(t.childNodes):[],Xt=t=>t&&t.parentElement,qt=(t,e)=>Ae(t)&&t.closest(e),Ke=t=>document.activeElement,Us=(t,e,n)=>{const o=qt(t,e),s=t&&Gs(n,o),r=qt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&qt(qt(t,n),e)!==o)},Rt=t=>{if(Te(t))K(_t(t),(t=>Rt(t)));else if(t){const e=Xt(t);e&&e.removeChild(t)}},ds=(t,e,n)=>{if(n&&t){let o,s=e;return Te(n)?(o=document.createDocumentFragment(),K(n,(t=>{t===s&&(s=t.previousSibling),o.appendChild(t)}))):o=n,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(o,s||null),()=>Rt(n)}return It},gt=(t,e)=>ds(t,null,e),On=(t,e)=>ds(Xt(t),t&&t.nextSibling,e),Gt=t=>{const e=document.createElement("div");return At(e,"class",t),e},fs=t=>{const e=Gt();return e.innerHTML=t.trim(),K(We(e),(t=>Rt(t)))},Ws=/^--/,$n=(t,e)=>t.getPropertyValue(e)||t[e]||"",fn=t=>{const e=t||0;return isFinite(e)?e:0},fe=t=>fn(parseFloat(t||"")),Tn=t=>`${(100*fn(t)).toFixed(3)}%`,Xe=t=>`${fn(t)}px`;function ne(t,e){t&&e&&K(e,((e,n)=>{try{const o=t.style,s=Ot(e)?Xe(e):(e||"")+"";Ws.test(n)?o.setProperty(n,s):o[n]=s}catch{}}))}function Vt(t,e,n){const o=$e(e);let s=o?"":{};if(t){const r=ft.getComputedStyle(t,n)||t.style;s=o?$n(r,e):_t(e).reduce(((t,e)=>(t[e]=$n(r,e),t)),s)}return s}const An=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,a=Vt(t,[r,c,i,l]);return{t:fe(a[r]),r:fe(a[c]),b:fe(a[i]),l:fe(a[l])}},_e=(t,e)=>"translate"+(ee(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),Ks=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Xs={w:0,h:0},ke=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Xs,Ys=t=>ke("inner",t||ft),Qt=I(ke,"offset"),ps=I(ke,"client"),Ye=I(ke,"scroll"),pn=t=>{const e=parseFloat(Vt(t,Ut))||0,n=parseFloat(Vt(t,Wt))||0;return{w:e-Ne(e),h:n-Ne(n)}},te=t=>t.getBoundingClientRect(),Zs=t=>!!t&&Ks(t),Ze=t=>!(!t||!t[Wt]&&!t[Ut]),ms=(t,e)=>{const n=Ze(t);return!Ze(e)&&n},Hn=(t,e,n,o)=>{K(Nt(e),(e=>{t&&t.removeEventListener(e,n,o)}))},Q=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,i=o&&o.A||!1,l={passive:r,capture:c};return I(St,Nt(e).map((e=>{const o=i?s=>{Hn(t,e,o,c),n&&n(s)}:n;return t&&t.addEventListener(e,o,l),I(Hn,t,e,o,c)})))},hs=t=>t.stopPropagation(),Je=t=>t.preventDefault(),gs=t=>hs(t)||Je(t),Ct=(t,e)=>{const{x:n,y:o}=Ot(e)?{x:e,y:e}:e||{};Ot(n)&&(t.scrollLeft=n),Ot(o)&&(t.scrollTop=o)},yt=t=>({x:t.scrollLeft,y:t.scrollTop}),ys=()=>({T:{x:0,y:0},D:{x:0,y:0}}),Js=(t,e)=>{const{T:n,D:o}=t,{w:s,h:r}=e,c=(t,e,n)=>{let o=Sn(t)*n,s=Sn(e)*n;if(o===s){const n=ye(t),r=ye(e);s=n>r?0:s,o=n<r?0:o}return o=o===s?0:o,[o+0,s+0]},[i,l]=c(n.x,o.x,s),[a,d]=c(n.y,o.y,r);return{T:{x:i,y:a},D:{x:l,y:d}}},Ln=({T:t,D:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},kn=({T:t,D:e},n)=>{const o=(t,e,n)=>Ge(0,1,(t-n)/(t-e)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},Qe=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Pn=(t,e)=>{K(Xn(e),t)},tn=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Pn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if($e(t)){const o=e.get(t)||new Set;return e.set(t,o),Pn((t=>{wt(t)&&o.add(t)}),s),I(n,t,s)}Kn(s)&&s&&n();const r=Lt(t),c=[];return K(r,(e=>{const n=t[e];n&&st(c,o(e,n))})),I(St,c)};return o(t||{}),[o,n,(t,n)=>{K(_t(e.get(t)),(t=>{n&&!je(n)?t.apply(0,n):t()}))}]},Dn=t=>JSON.stringify(t,((t,e)=>{if(wt(e))throw 0;return e})),In=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&os(t,e)?t[e]:void 0),t):void 0,Qs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},bs=(t,e)=>{const n={};return K(Ht(Lt(e),Lt(t)),(o=>{const s=t[o],r=e[o];if(ee(s)&&ee(r))G(n[o]={},bs(s,r)),rn(n[o])&&delete n[o];else if(os(e,o)&&r!==s){let t=!0;if($t(s)||$t(r))try{Dn(s)===Dn(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},Mn=(t,e,n)=>o=>[In(t,o),n||void 0!==In(e,o)],Yt="data-overlayscrollbars",he="os-environment",pe=`${he}-scrollbar-hidden`,ze=`${Yt}-initialize`,ge="noClipping",Rn=`${Yt}-body`,Mt=Yt,to="host",Pt=`${Yt}-viewport`,eo=Vs,no=Fs,so="arrange",vs="measuring",ws="scrollbarHidden",oo="scrollbarPressed",co="noContent",en=`${Yt}-padding`,_n=`${Yt}-content`,mn="os-size-observer",ro=`${mn}-appear`,lo=`${mn}-listener`,io="os-trinsic-observer",ao="os-theme-none",bt="os-scrollbar",uo=`${bt}-rtl`,fo=`${bt}-horizontal`,po=`${bt}-vertical`,Ss=`${bt}-track`,hn=`${bt}-handle`,mo=`${bt}-visible`,ho=`${bt}-cornerless`,zn=`${bt}-interaction`,Bn=`${bt}-unusable`,nn=`${bt}-auto-hide`,Nn=`${nn}-hidden`,Vn=`${bt}-wheel`,go=`${Ss}-interactive`,yo=`${hn}-interactive`;let Be;const bo=()=>{const t=(t,e,n)=>{gt(document.body,t),gt(document.body,t);const o=ps(t),s=Qt(t),r=pn(e);return n&&Rt(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=fs(`<div class="${he}"><div></div><style>${`.${he}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${he} div{width:200%;height:200%;margin:10px 0}.${pe}{scrollbar-width:none!important}.${pe}::-webkit-scrollbar,.${pe}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,[o,,s]=tn(),[r,c]=ht({o:t(e,n),i:me},I(t,e,n,!0)),[i]=c(),l=(t=>{let e=!1;const n=dn(t,pe);try{e="none"===Vt(t,"scrollbar-width")||"none"===Vt(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),a={x:0===i.x,y:0===i.y},d={elements:{host:null,padding:!l,viewport:t=>l&&us(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=G({},Qs),p=I(G,{},u),y=I(G,{},d),f={k:i,M:a,R:l,V:!!Fe,L:I(o,"r"),P:y,U:t=>G(d,t)&&y(),N:p,q:t=>G(u,t)&&p(),B:G({},d),F:G({},u)};if(Et(e,"style"),Rt(e),Q(ft,"resize",(()=>{s("r",[])})),wt(ft.matchMedia)&&!l&&(!a.x||!a.y)){const t=e=>{const n=ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);Q(n,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=r();G(f.k,t),s("r",[e])}))}return f},Tt=()=>(Be||(Be=bo()),Be),xs=(t,e)=>wt(e)?e.apply(0,t):e,vo=(t,e,n,o)=>{const s=Oe(o)?n:o;return xs(t,s)||e.apply(0,t)},Es=(t,e,n,o)=>{const s=Oe(o)?n:o,r=xs(t,s);return!!r&&(Se(r)?r:e.apply(0,t))},wo=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{M:s,R:r,P:c}=Tt(),{nativeScrollbarsOverlaid:i,body:l}=c().cancel,a=n??i,d=Oe(o)?l:o,u=(s.x||s.y)&&a,p=t&&(on(d)?!r:d);return!!u||!!p},gn=new WeakMap,So=(t,e)=>{gn.set(t,e)},xo=t=>{gn.delete(t)},Cs=t=>gn.get(t),Eo=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){K(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||as)(n,t):[],o]})),(n=>K(n[0],(r=>{const c=n[1],i=s.get(r)||[];if(t.contains(r)&&c){const t=Q(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,st(i,t))}else St(i),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},Fn=(t,e,n,o)=>{let s=!1;const{j:r,X:c,Y:i,W:l,J:a,K:d}=o||{},u=qe((()=>s&&n(!0)),{_:33,p:99}),[p,y]=Eo(t,u,i),f=c||[],h=Ht(r||[],f),m=(s,r)=>{if(!je(r)){const c=a||It,i=d||It,u=[],p=[];let h=!1,m=!1;if(K(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:y,removedNodes:g}=n,b="attributes"===a,v="childList"===a,w=t===r,x=b&&s,$=x&&ln(r,s||""),I=$e($)?$:null,S=x&&d!==I,E=cn(f,s)&&S;if(e&&(v||!w)){const e=b&&S,a=e&&l&&xe(r,l),p=(a?!c(r,s,d,I):!b||e)&&!i(n,!!a,t,o);K(y,(t=>st(u,t))),K(g,(t=>st(u,t))),m=m||p}!e&&w&&S&&!c(r,s,d,I)&&(st(p,s),h=h||E)})),y((t=>En(u).reduce(((e,n)=>(st(e,as(t,n)),xe(n,t)?st(e,n):e)),[]))),e)return!s&&m&&n(!1),[!1];if(!je(p)||h){const t=[En(p),h];return!s&&n.apply(0,t),t}}},g=new Ns(I(m,!1));return[()=>(g.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),g.disconnect(),s=!1)}),()=>{if(s)return u.S(),m(!0,g.takeRecords())}]},Os={},$s={},Co=t=>{K(t,(t=>K(t,((e,n)=>{Os[n]=t[n]}))))},Ts=(t,e,n)=>Lt(t).map((o=>{const{static:s,instance:r}=t[o],[c,i,l]=n||[],a=n?r:s;if(a){const t=n?a(c,i,e):a(e);return(l||$s)[o]=t}})),se=t=>$s[t],Oo="__osOptionsValidationPlugin",$o="__osSizeObserverPlugin",To=(t,e)=>{const{M:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},Ee=t=>0===t.indexOf(Dt),Ao=(t,e)=>{const n=(t,e,n,o)=>{const s=t===Dt?zt:t.replace(`${Dt}-`,""),r=Ee(t),c=Ee(n);return e||o?r&&c?Dt:r?e&&o?s:e?Dt:zt:e?s:c&&o?Dt:zt:zt},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{G:o,Z:{x:o.x===Kt,y:o.y===Kt}}},As="__osScrollbarsHidingPlugin",Ho="__osClickScrollPlugin",Hs=(t,e,n)=>{const{dt:o}=n||{},s=se($o),[r]=ht({o:!1,u:!0});return()=>{const n=[],c=fs(`<div class="${mn}"><div class="${lo}"></div></div>`)[0],i=c.firstChild,l=t=>{let n=!1,o=!1;if(t instanceof ResizeObserverEntry){const[e,,s]=r(t.contentRect),c=Ze(e);o=ms(e,s),n=!o&&!c}else o=!0===t;n||e({ft:!0,dt:o})};if(ve){const t=new ve((t=>l(t.pop())));t.observe(i),st(n,(()=>{t.disconnect()}))}else{if(!s)return It;{const[t,e]=s(i,l,o);st(n,Ht([dn(c,ro),Q(c,"animationstart",t)],e))}}return I(St,st(n,gt(t,c)))}},Lo=(t,e)=>{let n;const o=Gt(io),[s]=ht({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(xn)n=new xn(I(c,!1),{root:t}),n.observe(o),st(e,(()=>{n.disconnect()}));else{const t=()=>{const t=Qt(o);r(t)};st(e,Hs(o,t)()),t()}return I(St,st(e,gt(t,o)))},()=>n&&c(!0,n.takeRecords())]},ko=(t,e,n,o)=>{let s,r,c,i,l,a;const d=`[${Mt}]`,u=`[${Pt}]`,p=["wrap","cols","rows"],y=["id","class","style","open"],{vt:f,ht:h,ot:m,gt:g,bt:b,wt:v,nt:w,yt:x,St:$,Ot:I}=t,S=t=>"rtl"===Vt(t,"direction"),E={$t:!1,ct:S(f)},L=Tt(),O=se(As),[T]=ht({i:ss,o:{w:0,h:0}},(()=>{const o=O&&O.tt(t,e,E,L,n).ut,s=!(x&&w)&&un(h,Mt,ge),r=!w&&$(so),c=r&&yt(g),i=I(vs,s),l=r&&o&&o()[0],a=Ye(m),d=pn(m);return l&&l(),Ct(g,c),s&&i(),{w:a.w+d.w,h:a.h+d.h}})),K=v?p:Ht(y,p),C=qe(o,{_:()=>s,p:()=>r,m(t,e){const[n]=t,[o]=e;return[Ht(Lt(n),Lt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),H=t=>{const e=S(f);G(t,{Ct:a!==e}),G(E,{ct:e}),a=e},A=(t,e)=>{const[n,s]=t,r={xt:s};return G(E,{$t:n}),!e&&o(r),r},k=({ft:t,dt:e})=>{const n=t&&!e||!L.R?o:C,s={ft:t||e,dt:e};H(s),n(s)},M=(t,e)=>{const[,n]=T(),s={Ht:n};return H(s),n&&!e&&(t?o:C)(s),s},R=(t,e,n)=>{const o={Et:e};return H(o),e&&!n&&C(o),o},[Q,D]=b?Lo(h,A):[],P=!w&&Hs(h,k,{dt:!0}),[B,N]=Fn(h,!1,R,{X:y,j:Ht(y,[])}),z=w&&ve&&new ve((t=>{const e=t[t.length-1].contentRect;k({ft:!0,dt:ms(e,l)}),l=e})),_=qe((()=>{const[,t]=T();o({Ht:t})}),{_:222,v:!0});return[()=>{z&&z.observe(h);const t=P&&P(),e=Q&&Q(),n=B(),o=L.L((t=>{t?C({zt:t}):_()}));return()=>{z&&z.disconnect(),t&&t(),e&&e(),i&&i(),n(),o()}},({It:t,At:e,Tt:n})=>{const o={},[l]=t("update.ignoreMutation"),[a,p]=t("update.attributes"),[y,f]=t("update.elementEvents"),[h,g]=t("update.debounce"),v=e||n;if(f||p){c&&c(),i&&i();const[t,e]=Fn(b||m,!0,M,{j:Ht(K,a||[]),Y:y,W:d,K:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||w)&&Us(n,d,u)||!!qt(n,`.${bt}`)||!!(t=>wt(l)&&l(t))(t)}});i=t(),c=e}if(g)if(C.S(),$t(h)){const t=h[0],e=h[1];s=Ot(t)&&t,r=Ot(e)&&e}else Ot(h)?(s=h,r=!1):(s=!1,r=!1);if(v){const t=N(),e=D&&D(),n=c&&c();t&&G(o,R(t[0],t[1],v)),e&&G(o,A(e[0],v)),n&&G(o,M(n[0],v))}return H(o),o},E]},Po=(t,e,n,o)=>{const{P:s}=Tt(),{scrollbars:r}=s(),{slot:c}=r,{vt:i,ht:l,ot:a,Dt:d,gt:u,yt:p,nt:y}=e,{scrollbars:f}=d?{}:t,{slot:h}=f||{},m=new Map,g=t=>Fe&&new Fe({source:u,axis:t}),b={x:g("x"),y:g("y")},v=Es([i,l,a],(()=>y&&p?i:l),c,h),w=(t,e)=>{if(e){const n=t?Ut:Wt,{kt:o,Mt:s}=e,r=te(s)[n],c=te(o)[n];return Ge(0,1,r/c||0)}const o=t?"x":"y",{Rt:s,Vt:r}=n,c=r[o],i=s[o];return Ge(0,1,c/(c+i)||0)},x=t=>G(t,{clear:["left"]}),$=t=>{m.forEach(((e,n)=>{(!t||cn(Xn(t),n))&&(K(e||[],(t=>{t&&t.cancel()})),m.delete(n))}))},S=(t,e,n,o)=>{const s=m.get(t)||[],r=s.find((t=>t&&t.timeline===e));r?r.effect=new KeyframeEffect(t,n,{composite:o}):m.set(t,Ht(s,[t.animate(n,{timeline:e,composite:o})]))},E=(t,e,n)=>{const o=n?dn:is;K(t,(t=>{o(t.Lt,e)}))},L=(t,e)=>{K(t,(t=>{const[n,o]=e(t);ne(n,o)}))},O=(t,e)=>{L(t,(t=>{const{Mt:n}=t;return[n,{[e?Ut:Wt]:Tn(w(e))}]}))},T=(t,e)=>{const{Pt:o}=n,s=e?"x":"y",r=b[s],c=Ln(o)[s],i=(t,n)=>_e(Tn(((t,e,n)=>{const o=w(n,t);return 1/o*(1-o)*e})(t,c?n:1-n,e)),e);r?K(t,(t=>{const{Mt:e}=t;S(e,r,x({transform:[0,1].map((e=>i(t,e)))}))})):L(t,(t=>[t.Mt,{transform:i(t,kn(o,yt(u))[s])}]))},C=t=>y&&!p&&Xt(t)===a,H=[],A=[],k=[],M=(t,e,n)=>{const o=Kn(n),s=!o||!n;(!o||n)&&E(A,t,e),s&&E(k,t,e)},R=t=>{const e=Gt(`${bt} ${t?fo:po}`),n=Gt(Ss),s=Gt(hn),r={Lt:e,kt:n,Mt:s};return st(t?A:k,r),st(H,[gt(e,n),gt(n,s),I(Rt,e),$,o(r,M,T,t)]),r},Q=I(R,!0),D=I(R,!1);return Q(),D(),[{Ut:()=>{O(A,!0),O(k)},Nt:()=>{T(A,!0),T(k)},qt:()=>{if(y){const{Rt:t,Pt:e}=n,o=Ln(e),s=.5;if(b.x&&b.y)K(Ht(k,A),(({Lt:e})=>{if(C(e)){const n=n=>S(e,b[n],x({transform:[0,o[n]?1:-1].map((e=>_e(Xe(e*(t[n]-s)),"x"===n)))}),"add");n("x"),n("y")}else $(e)}));else{const n=kn(e,yt(u)),s=e=>{const{Lt:s}=e,r=C(s)&&s,c=(t,e,n)=>{const o=e*t;return Xe(n?o:-o)};return[r,r&&{transform:_e({x:c(n.x,t.x,o.x),y:c(n.y,t.y,o.y)})}]};L(A,s),L(k,s)}}},Bt:M,Ft:{V:b.x,jt:A,Xt:Q,Yt:I(L,A)},Wt:{V:b.y,jt:k,Xt:D,Yt:I(L,k)}},()=>(gt(v,A[0].Lt),gt(v,k[0].Lt),I(St,H))]},Do=(t,e,n,o)=>(s,r,c,i)=>{const{ht:l,ot:a,nt:d,gt:u,Jt:p,Ot:y}=e,{Lt:f,kt:h,Mt:m}=s,[g,b]=Bt(333),[v,w]=Bt(444),[x,$]=Bt(),S=I(c,[s],i),E=t=>{wt(u.scrollBy)&&u.scrollBy({behavior:"smooth",left:t.x,top:t.y})},G=i?Ut:Wt;let L=!0;const O=t=>t.propertyName.indexOf(G)>-1;return I(St,[Q(m,"pointermove pointerleave",o),Q(f,"pointerenter",(()=>{r(zn,!0)})),Q(f,"pointerleave pointercancel",(()=>{r(zn,!1)})),!d&&Q(f,"mousedown",(()=>{const t=Ke();(Cn(t,Pt)||Cn(t,Mt)||t===document.body)&&be(I(Qe,a),25)})),Q(f,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;L&&0===o&&Xt(f)===l&&E({x:e,y:n}),L=!1,r(Vn,!0),g((()=>{L=!0,r(Vn)})),Je(t)}),{H:!1,I:!0}),Q(m,"transitionstart",(t=>{if(O(t)){const t=()=>{S(),x(t)};t()}})),Q(m,"transitionend transitioncancel",(t=>{O(t)&&($(),S())})),Q(f,"pointerdown",I(Q,p,"click",gs,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",o="client"+(i?"X":"Y"),s=i?"left":"top",r=i?"w":"h",c=i?"x":"y";return Q(h,"pointerdown",(i=>{const l=qt(i.target,`.${hn}`)===m,a=l?m:h,d=t.scrollbars,{button:f,isPrimary:g,pointerType:b}=i,{pointers:x}=d;if(0===f&&g&&d[l?"dragScroll":"clickScroll"]&&(x||[]).includes(b)){w();const t=!l&&i.shiftKey,d=I(te,m),f=I(te,h),g=(t,e)=>(t||d())[s]-(e||f())[s],b=Ne(te(u)[G])/Qt(u)[r]||1,x=((t,e)=>o=>{const{Rt:s}=n,i=Qt(h)[r]-Qt(m)[r],l=e*o/i*s[c];Ct(u,{[c]:t+l})})(yt(u)[c],1/b),$=i[o],S=d(),L=f(),O=S[G],T=g(S,L)+O/2,K=$-L[s],C=l?0:K-T,H=t=>{St(M),a.releasePointerCapture(t.pointerId)},A=()=>y(oo,!0),k=A(),M=[()=>{const t=yt(u);k();const e=yt(u),n={x:e.x-t.x,y:e.y-t.y};(ye(n.x)>3||ye(n.y)>3)&&(A(),Ct(u,t),E(n),v(k))},Q(p,e,H),Q(p,"selectstart",(t=>Je(t)),{H:!1}),Q(h,e,H),Q(h,"pointermove",(e=>{const n=e[o]-$;(l||t)&&x(C+n)}))];if(a.setPointerCapture(i.pointerId),t)x(C);else if(!l){const t=se(Ho);t&&st(M,t(x,g,C,O,K))}}}))})(),b,w,$])},Io=(t,e,n,o,s,r)=>{let c,i,l,a,d,u=It,p=0;const y=t=>"mouse"===t.pointerType,[f,h]=Bt(),[m,g]=Bt(100),[b,v]=Bt(100),[w,x]=Bt((()=>p)),[$,S]=Po(t,s,o,Do(e,s,o,(t=>y(t)&&A()))),{ht:E,Kt:G,yt:L}=s,{Bt:O,Ut:T,Nt:K,qt:C}=$,H=(t,e)=>{if(x(),t)O(Nn);else{const t=I(O,Nn,!0);p>0&&!e?w(t):t()}},A=()=>{(l?!c:!a)&&(H(!0),m((()=>{H(!1)})))},k=t=>{O(nn,t,!0),O(nn,t,!1)},M=t=>{y(t)&&(c=l,l&&H(!0))},R=[x,g,v,h,()=>u(),Q(E,"pointerover",M,{A:!0}),Q(E,"pointerenter",M),Q(E,"pointerleave",(t=>{y(t)&&(c=!1,l&&H(!1))})),Q(E,"pointermove",(t=>{y(t)&&i&&A()})),Q(G,"scroll",(t=>{f((()=>{K(),A()})),r(t),C()}))];return[()=>I(St,st(R,S())),({It:t,Tt:e,Gt:s,Qt:r})=>{const{Zt:c,tn:y,nn:f,sn:h}=r||{},{Ct:m,dt:g}=s||{},{ct:v}=n,{M:w}=Tt(),{G:x,en:$}=o,[S,E]=t("showNativeOverlaidScrollbars"),[A,M]=t("scrollbars.theme"),[R,D]=t("scrollbars.visibility"),[P,B]=t("scrollbars.autoHide"),[N,z]=t("scrollbars.autoHideSuspend"),[_]=t("scrollbars.autoHideDelay"),[V,F]=t("scrollbars.dragScroll"),[q,j]=t("scrollbars.clickScroll"),[X,W]=t("overflow"),Y=g&&!e,U=$.x||$.y,J=c||y||h||m||e,Z=f||D||W,tt=S&&w.x&&w.y,et=(t,e,n)=>{const o=t.includes(Kt)&&(R===Dt||"auto"===R&&e===Kt);return O(mo,o,n),o};if(p=_,Y&&(N&&U?(k(!1),u(),b((()=>{u=Q(G,"scroll",I(k,!0),{A:!0})}))):k(!0)),E&&O(ao,tt),M&&(O(d),O(A,!0),d=A),z&&!N&&k(!0),B&&(i="move"===P,l="leave"===P,a="never"===P,H(a,!0)),F&&O(yo,V),j&&O(go,q),Z){const t=et(X.x,x.x,!0),e=et(X.y,x.y,!1);O(ho,!(t&&e))}J&&(T(),K(),C(),O(Bn,!$.x,!0),O(Bn,!$.y,!1),O(uo,v&&!L))},{},$]},Mo=t=>{const e=Tt(),{P:n,R:o}=e,{elements:s}=n(),{host:r,padding:c,viewport:i,content:l}=s,a=Se(t),d=a?{}:t,{elements:u}=d,{host:p,padding:y,viewport:f,content:h}=u||{},m=a?t:d.target,g=us(m),b=xe(m,"textarea"),v=m.ownerDocument,w=v.documentElement,x=()=>v.defaultView||ft,$=I(vo,[m]),S=I(Es,[m]),E=I(Gt,""),G=I($,E,i),L=I(S,E,l),O=G(f),T=O===m,K=T&&g,C=!T&&L(h),H=!T&&O===C,A=K?w:O,k=b?$(E,r,p):m,M=K?A:k,R=!T&&S(E,c,y),D=!H&&C,P=[D,A,R,M].map((t=>Se(t)&&!Xt(t)&&t)),B=t=>t&&cn(P,t),N=B(A)?m:A,z={vt:m,ht:M,ot:A,cn:R,bt:D,gt:K?w:A,Kt:K?v:A,rn:g?w:N,Jt:v,wt:b,yt:g,Dt:a,nt:T,ln:x,St:t=>un(A,Pt,t),Ot:(t,e)=>Ue(A,Pt,t,e)},{vt:_,ht:V,cn:F,ot:q,bt:j}=z,X=[()=>{Et(V,[Mt,ze]),Et(_,ze),g&&Et(w,[ze,Mt])}],W=b&&B(V);let Y=b?_:We([j,q,F,V,_].find((t=>t&&!B(t))));const U=K?_:j||q,J=I(St,X);return[z,()=>{const t=x(),e=Ke(),n=t=>{gt(Xt(t),We(t)),Rt(t)},s=t=>Q(t,"focusin focusout focus blur",gs,{I:!0,H:!1}),r="tabindex",c=ln(q,r),i=s(e);return At(V,Mt,T?"":to),At(F,en,""),At(q,Pt,""),At(j,_n,""),T||(At(q,r,c||"-1"),g&&At(w,Rn,"")),W&&(On(_,V),st(X,(()=>{On(V,_),Rt(V)}))),gt(U,Y),gt(V,F),gt(F||V,!T&&q),gt(q,j),st(X,[i,()=>{const t=Ke(),e=B(q),o=e&&t===q?_:t,i=s(o);Et(F,en),Et(j,_n),Et(q,Pt),g&&Et(w,Rn),c?At(q,r,c):Et(q,r),B(j)&&n(j),e&&n(q),B(F)&&n(F),Qe(o),i()}]),o&&!T&&(an(q,Pt,ws),st(X,I(Et,q,Pt))),Qe(!T&&g&&e===_&&t.top===t?q:e),i(),Y=0,J},J]},Ro=({bt:t})=>({Gt:e,an:n,Tt:o})=>{const{xt:s}=e||{},{$t:r}=n;t&&(s||o)&&ne(t,{[Wt]:r&&"100%"})},_o=({ht:t,cn:e,ot:n,nt:o},s)=>{const[r,c]=ht({i:qs,o:An()},I(An,t,"padding",""));return({It:t,Gt:i,an:l,Tt:a})=>{let[d,u]=c(a);const{R:p}=Tt(),{ft:y,Ht:f,Ct:h}=i||{},{ct:m}=l,[g,b]=t("paddingAbsolute");(y||u||a||f)&&([d,u]=r(a));const v=!o&&(b||h||u);if(v){const t=!g||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[es]:t&&!m?-o:0,[ns]:t?-r:0,[ts]:t&&m?-o:0,top:t?-d.t:0,right:t?m?-d.r:"auto":0,left:t?m?"auto":-d.l:0,[Ut]:t&&`calc(100% + ${o}px)`},i={[Yn]:t?d.t:0,[Zn]:t?d.r:0,[Qn]:t?d.b:0,[Jn]:t?d.l:0};ne(e||n,c),ne(n,i),G(s,{cn:d,un:!t,rt:e?i:G({},c,i)})}return{_n:v}}},zo=(t,e)=>{const n=Tt(),{ht:o,cn:s,ot:r,nt:c,Kt:i,gt:l,yt:a,Ot:d,ln:u}=t,{R:p}=n,y=a&&c,f=I(Gn,0),h=["display","direction","flexDirection","writingMode"],m={i:ss,o:{w:0,h:0}},g={i:me,o:{}},b=t=>{d(vs,!y&&t)},[v,w]=ht(m,I(pn,r)),[x,$]=ht(m,I(Ye,r)),[S,E]=ht(m),[L]=ht(g),[O,T]=ht(m),[K]=ht(g),[C]=ht({i:(t,e)=>He(t,e,h),o:{}},(()=>Zs(r)?Vt(r,h):{})),[H,A]=ht({i:(t,e)=>me(t.T,e.T)&&me(t.D,e.D),o:ys()},(()=>{b(!0);const t=yt(l),e=d(co,!0),n=Q(i,Kt,(e=>{const n=yt(l);e.isTrusted&&n.x===t.x&&n.y===t.y&&hs(e)}),{I:!0,A:!0});Ct(l,{x:0,y:0}),e();const o=yt(l),s=Ye(l);Ct(l,{x:s.w,y:s.h});const r=yt(l);Ct(l,{x:r.x-o.x<1&&-s.w,y:r.y-o.y<1&&-s.h});const c=yt(l);return Ct(l,t),sn((()=>n())),{T:o,D:c}})),k=se(As),M=(t,e)=>`${e?eo:no}${js(t)}`;return({It:c,Gt:i,an:l,Tt:a},{_n:h})=>{const{ft:m,Ht:g,Ct:I,dt:R,zt:Q}=i||{},D=k&&k.tt(t,e,l,n,c),{it:P,ut:B,_t:N}=D||{},[z,_]=To(c,n),[V,F]=c("overflow"),q=Ee(V.x),j=Ee(V.y),X=m||h||g||I||Q||_;let W=w(a),Y=$(a),U=E(a),J=T(a);if(_&&p&&d(ws,!z),X){un(o,Mt,ge)&&b(!0);const[t]=B?B():[],[e]=W=v(a),[n]=Y=x(a),s=ps(r),c=y&&Ys(u()),i={w:f(n.w+e.w),h:f(n.h+e.h)},l={w:f((c?c.w:s.w+f(s.w-n.w))+e.w),h:f((c?c.h:s.h+f(s.h-n.h))+e.h)};t&&t(),J=O(l),U=S(((t,e)=>{const n=ft.devicePixelRatio%1!=0?1:0,o={w:f(t.w-e.w),h:f(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(i,l),a)}const[Z,tt]=J,[et,nt]=U,[ot,st]=Y,[rt,ct]=W,[it,lt]=L({x:et.w>0,y:et.h>0}),at=q&&j&&(it.x||it.y)||q&&it.x&&!it.y||j&&it.y&&!it.x,dt=h||I||Q||ct||st||tt||nt||F||_||X,ut=Ao(it,V),[pt,yt]=K(ut.G),[,ht]=C(a),mt=I||R||ht||lt||a,[gt,bt]=mt?H(a):A();return dt&&(yt&&(t=>{const e=t=>[Dt,zt,Kt].map((e=>M(e,t))),n=e(!0).concat(e()).join(" ");d(n),d(Lt(t).map((e=>M(t[e],"x"===e))).join(" "),!0)})(ut.G),N&&P&&ne(r,N(ut,l,P(ut,ot,rt)))),b(!1),Ue(o,Mt,ge,at),Ue(s,en,ge,at),G(e,{G:pt,Vt:{x:Z.w,y:Z.h},Rt:{x:et.w,y:et.h},en:it,Pt:Js(gt,et)}),{nn:yt,Zt:tt,tn:nt,sn:bt||nt,dn:mt}}},Bo=t=>{const[e,n,o]=Mo(t),s={cn:{t:0,r:0,b:0,l:0},un:!1,rt:{[es]:0,[ns]:0,[ts]:0,[Yn]:0,[Zn]:0,[Qn]:0,[Jn]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},G:{x:zt,y:zt},en:{x:!1,y:!1},Pt:ys()},{vt:r,gt:c,nt:i}=e,{R:l,M:a}=Tt(),d=!l&&(a.x||a.y),u=[Ro(e),_o(e,s),zo(e,s)];return[n,t=>{const e={},n=d&&yt(c);return K(u,(n=>{G(e,n(t,e)||{})})),Ct(c,n),!i&&Ct(r,0),e},s,e,o]},No=(t,e,n,o,s)=>{const r=Mn(e,{}),[c,i,l,a,d]=Bo(t),[u,p,y]=ko(a,l,r,(t=>{b({},t)})),[f,h,,m]=Io(t,e,y,l,a,s),g=t=>Lt(t).some((e=>!!t[e])),b=(t,s)=>{if(n())return!1;const{fn:r,Tt:c,At:l,pn:a}=t,d=r||{},u=!!c,f={It:Mn(e,d,u),fn:d,Tt:u};if(a)return h(f),!1;const m=s||p(G({},f,{At:l})),b=i(G({},f,{an:y,Gt:m}));h(G({},f,{Gt:m,Qt:b}));const v=g(m),w=g(b),x=v||w||!rn(d)||u;return x&&o(t,{Gt:m,Qt:b}),x};return[()=>{const{rn:t,gt:e}=a,n=yt(t),o=[u(),c(),f()];return Ct(e,n),I(St,o)},b,()=>({vn:y,hn:l}),{gn:a,bn:m},d]},Ft=(t,e,n)=>{const{N:o}=Tt(),s=Se(t),r=s?t:t.target,c=Cs(r);if(e&&!c){let c=!1;const i=[],l={},a=t=>{const e=cs(t),n=se(Oo);return n?n(e,!0):e},d=G({},o(),a(e)),[u,p,y]=tn(),[f,h,m]=tn(n),g=(t,e)=>{m(t,e),y(t,e)},[b,v,w,x,$]=No(t,d,(()=>c),(({fn:t,Tt:e},{Gt:n,Qt:o})=>{const{ft:s,Ct:r,xt:c,Ht:i,Et:l,dt:a}=n,{Zt:d,tn:u,nn:p,sn:y}=o;g("updated",[E,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!y,contentMutation:!!i,hostMutation:!!l,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>g("scroll",[E,t]))),S=t=>{xo(r),St(i),c=!0,g("destroyed",[E,t]),p(),h()},E={options(t,e){if(t){const n=e?o():{},s=bs(d,G(n,a(t)));rn(s)||(G(d,s),v({fn:s}))}return G({},d)},on:f,off:(t,e)=>{t&&e&&h(t,e)},state(){const{vn:t,hn:e}=w(),{ct:n}=t,{Vt:o,Rt:s,G:r,en:i,cn:l,un:a,Pt:d}=e;return G({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:i,scrollCoordinates:{start:d.T,end:d.D},padding:l,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{vt:t,ht:e,cn:n,ot:o,bt:s,gt:r,Kt:c}=x.gn,{Ft:i,Wt:l}=x.bn,a=t=>{const{Mt:e,kt:n,Lt:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{jt:e,Xt:n}=t,o=a(e[0]);return G({},o,{clone:()=>{const t=a(n());return v({pn:!0}),t}})};return G({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(i),scrollbarVertical:d(l)})},update:t=>v({Tt:t,At:!0}),destroy:I(S,!1),plugin:t=>l[Lt(t)[0]]};return st(i,[$]),So(r,E),Ts(Os,Ft,[E,u,l]),wo(x.gn.yt,!s&&t.cancel)?(S(!0),E):(st(i,b()),g("initialized",[E]),E.update(!0),E)}return c};function yn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}))}function Vo(){const t=Ms();Rs(t)}function Fo(){_s(zs())}function jo(){const t=document.getElementById("banner-wrapper");document.documentElement.hasAttribute("isHome")?(t.classList.remove("banner-else"),t.classList.add("banner-home")):(t.classList.remove("banner-home"),t.classList.add("banner-else"))}function qo(){Ft({target:document.querySelector("body"),cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{Ft(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})}))}function Ls(){jo(),Vo(),Fo(),qo()}Ft.plugin=t=>{const e=$t(t),n=e?t:[t],o=n.map((t=>Ts(t,Ft)[0]));return Co(n),e?o:o[0]},Ft.valid=t=>{const e=t&&t.elements,n=wt(e)&&e();return we(n)&&!!Cs(n.target)},Ft.env=()=>{const{k:t,M:e,R:n,V:o,B:s,F:r,P:c,U:i,N:l,q:a}=Tt();return G({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:i,getDefaultOptions:l,setDefaultOptions:a})},yn("display-setting",["display-setting","display-settings-switch"]),yn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),yn("search-panel",["search-panel","search-bar","search-switch"]),Ls(),document.addEventListener("astro:after-swap",Ls);const jn=()=>{window.swup.hooks.on("link:click",(()=>{document.documentElement.style.setProperty("--content-delay","0ms")}))};function Go(){"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function ks(){document.getElementById("scheme-switch").addEventListener("click",(function(){Go()}));let t=document.getElementById("display-settings-switch");t&&t.addEventListener("click",(function(){document.getElementById("display-setting").classList.toggle("float-panel-closed")})),document.getElementById("nav-menu-switch").addEventListener("click",(function(){document.getElementById("nav-menu-panel").classList.toggle("float-panel-closed")}))}window.swup.hooks?jn():document.addEventListener("swup:enable",jn),ks(),document.addEventListener("astro:after-swap",(()=>{ks()}),{once:!1});class Uo extends HTMLElement{constructor(){if(super(),void 0===this.dataset.isCollapsed||!1===this.dataset.isCollapsed)return;const t=this.dataset.id,e=this.querySelector(".expand-btn"),n=this.querySelector(`#${t}`);e.addEventListener("click",(()=>{n.classList.remove("collapsed"),e.classList.add("hidden")}))}}customElements.define("widget-layout",Uo);