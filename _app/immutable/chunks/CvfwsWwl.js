import{X as _,Y as c,Z as L,J as x,f as P,W,t as B,q as C,j as F,k as H,aA as N,o as v,au as R,V as b,z as E,l as T,A as k,v as Y}from"./CyVfPAtv.js";let A=!1;function j(){A||(A=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function S(e){var t=L,r=x;_(null),c(null);try{return e()}finally{_(t),c(r)}}function X(e,t,r,n=r){e.addEventListener(t,()=>S(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),j()}const z=new Set,I=new Set;function J(e,t,r,n={}){function i(a){if(n.capture||M.call(t,a),!a.cancelBubble)return S(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Z(e,t,r,n,i){var a={capture:n,passive:i},o=J(e,t,r,a);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(e,o,a)})}function G(e){for(var t=0;t<e.length;t++)z.add(e[t]);for(var r of I)r(e)}function M(e){var w;var t=this,r=t.ownerDocument,n=e.type,i=((w=e.composedPath)==null?void 0:w.call(e))||[],a=i[0]||e.target,o=0,p=e.__root;if(p){var d=i.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var g=i.indexOf(t);if(g===-1)return;d<=g&&(o=d)}if(a=i[o]||e.target,a!==t){P(e,"currentTarget",{configurable:!0,get(){return a||r}});var m=L,q=x;_(null),c(null);try{for(var u,y=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var f=a["__"+n];if(f!==void 0&&!a.disabled)if(W(f)){var[D,...O]=f;D.apply(a,[e,...O])}else f.call(a,e)}catch(l){u?y.push(l):u=l}if(e.cancelBubble||h===t||h===null)break;a=h}if(u){for(let l of y)queueMicrotask(()=>{throw l});throw u}}finally{e.__root=t,delete e.currentTarget,_(m),c(q)}}}let s;function K(){s=void 0}function Q(e){let t=null,r=v;var n;if(v){for(t=k,s===void 0&&(s=Y(document.head));s!==null&&(s.nodeType!==8||s.data!==R);)s=b(s);s===null?E(!1):s=T(b(s))}v||(n=document.head.appendChild(F()));try{H(()=>e(n),N)}finally{r&&(E(!0),s=k,T(t))}}export{j as a,z as b,M as c,G as d,Z as e,K as f,Q as h,X as l,I as r};
