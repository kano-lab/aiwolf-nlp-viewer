import{a3 as L,a4 as z,a5 as G,z as w,a6 as K,T as b,U as h,a7 as T,S as m,j as B,a8 as Z,a9 as H,i as M,aa as Q,ab as V,Q as C,w as W,ac as X,ad as J,ae as p,af as ee,ag as re,ah as te,ai as U,aj as ne,X as ae,ak as ie,al as se,am as fe,a1 as j,an as ue,ao as le,y as de}from"./runtime.DiZzUycx.js";import{c as ce}from"./store.CyqDm-Du.js";function S(t,f=null,o){if(typeof t!="object"||t===null||L in t)return t;const y=H(t);if(y!==z&&y!==G)return t;var i=new Map,d=M(t),_=w(0);d&&i.set("length",w(t.length));var l;return new Proxy(t,{defineProperty(u,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&K();var n=i.get(e);return n===void 0?(n=w(r.value),i.set(e,n)):b(n,S(r.value,l)),!0},deleteProperty(u,e){var r=i.get(e);if(r===void 0)e in u&&i.set(e,w(h));else{if(d&&typeof e=="string"){var n=i.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&b(n,a)}b(r,h),$(_)}return!0},get(u,e,r){var c;if(e===L)return t;var n=i.get(e),a=e in u;if(n===void 0&&(!a||(c=T(u,e))!=null&&c.writable)&&(n=w(S(a?u[e]:h,l)),i.set(e,n)),n!==void 0){var s=m(n);return s===h?void 0:s}return Reflect.get(u,e,r)},getOwnPropertyDescriptor(u,e){var r=Reflect.getOwnPropertyDescriptor(u,e);if(r&&"value"in r){var n=i.get(e);n&&(r.value=m(n))}else if(r===void 0){var a=i.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==h)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(u,e){var s;if(e===L)return!0;var r=i.get(e),n=r!==void 0&&r.v!==h||Reflect.has(u,e);if(r!==void 0||B!==null&&(!n||(s=T(u,e))!=null&&s.writable)){r===void 0&&(r=w(n?S(u[e],l):h),i.set(e,r));var a=m(r);if(a===h)return!1}return n},set(u,e,r,n){var E;var a=i.get(e),s=e in u;if(d&&e==="length")for(var c=r;c<a.v;c+=1){var g=i.get(c+"");g!==void 0?b(g,h):c in u&&(g=w(h),i.set(c+"",g))}a===void 0?(!s||(E=T(u,e))!=null&&E.writable)&&(a=w(void 0),b(a,S(r,l)),i.set(e,a)):(s=a.v!==h,b(a,S(r,l)));var P=Reflect.getOwnPropertyDescriptor(u,e);if(P!=null&&P.set&&P.set.call(n,r),!s){if(d&&typeof e=="string"){var I=i.get("length"),O=Number(e);Number.isInteger(O)&&O>=I.v&&b(I,O+1)}$(_)}return!0},ownKeys(u){m(_);var e=Reflect.ownKeys(u).filter(a=>{var s=i.get(a);return s===void 0||s.v!==h});for(var[r,n]of i)n.v!==h&&!(r in u)&&e.push(r);return e},setPrototypeOf(){Z()}})}function $(t,f=1){b(t,t.v+f)}function k(t,f){return t===f||(t==null?void 0:t[L])===f}function ge(t={},f,o,y){return Q(()=>{var i,d;return V(()=>{i=d,d=[],C(()=>{t!==o(...d)&&(f(t,...d),i&&k(o(...i),t)&&f(null,...i))})}),()=>{W(()=>{d&&k(o(...d),t)&&f(null,...d)})}}),t}function F(t){for(var f=B,o=B;f!==null&&!(f.f&(re|te));)f=f.parent;try{return U(f),t()}finally{U(o)}}function ye(t,f,o,y){var x;var i=(o&ne)!==0,d=!ae||(o&ie)!==0,_=(o&se)!==0,l=(o&le)!==0,u=!1,e;_?[e,u]=ce(()=>t[f]):e=t[f];var r=L in t||fe in t,n=((x=T(t,f))==null?void 0:x.set)??(r&&_&&f in t?v=>t[f]=v:void 0),a=y,s=!0,c=!1,g=()=>(c=!0,s&&(s=!1,l?a=C(y):a=y),a);e===void 0&&y!==void 0&&(n&&d&&X(),e=g(),n&&n(e));var P;if(d)P=()=>{var v=t[f];return v===void 0?g():(s=!0,c=!1,v)};else{var I=F(()=>(i?j:ue)(()=>t[f]));I.f|=J,P=()=>{var v=m(I);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(o&p))return P;if(n){var O=t.$$legacy;return function(v,R){return arguments.length>0?((!d||!R||O||u)&&n(R?P():v),v):P()}}var E=!1,q=!1,D=de(e),A=F(()=>j(()=>{var v=P(),R=m(D);return E?(E=!1,q=!0,R):(q=!1,D.v=v)}));return i||(A.equals=ee),function(v,R){if(arguments.length>0){const N=R?m(A):d&&_?S(v):v;return A.equals(N)||(E=!0,b(D,N),c&&a!==void 0&&(a=N),C(()=>m(A))),v}return m(A)}}const ve="modulepreload",oe=function(t,f){return new URL(t,f).href},Y={},Pe=function(f,o,y){let i=Promise.resolve();if(o&&o.length>0){const _=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(o.map(e=>{if(e=oe(e,y),e in Y)return;Y[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(!!y)for(let c=_.length-1;c>=0;c--){const g=_[c];if(g.href===e&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":ve,r||(s.as="script"),s.crossOrigin="",s.href=e,u&&s.setAttribute("nonce",u),document.head.appendChild(s),r)return new Promise((c,g)=>{s.addEventListener("load",c),s.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${e}`)))})}))}function d(_){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=_,window.dispatchEvent(l),!l.defaultPrevented)throw _}return i.then(_=>{for(const l of _||[])l.status==="rejected"&&d(l.reason);return f().catch(d)})};export{Pe as _,S as a,ge as b,ye as p};
