import{W as _,X as c,Y as L,F as A,ay as O,q as P,az as W,V as j,h as B,i as C,aA as H,k as v,aj as N,U as b,x as E,j as T,y as k,l as R}from"./BaJkMvzh.js";let x=!1;function Y(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function S(e){var t=L,r=A;_(null),c(null);try{return e()}finally{_(t),c(r)}}function X(e,t,r,n=r){e.addEventListener(t,()=>S(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Y()}const z=new Set,I=new Set;function M(e,t,r,n={}){function i(a){if(n.capture||U.call(t,a),!a.cancelBubble)return S(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function G(e,t,r,n,i){var a={capture:n,passive:i},o=M(e,t,r,a);(t===document.body||t===window||t===document)&&O(()=>{t.removeEventListener(e,o,a)})}function J(e){for(var t=0;t<e.length;t++)z.add(e[t]);for(var r of I)r(e)}function U(e){var w;var t=this,r=t.ownerDocument,n=e.type,i=((w=e.composedPath)==null?void 0:w.call(e))||[],a=i[0]||e.target,o=0,p=e.__root;if(p){var d=i.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var y=i.indexOf(t);if(y===-1)return;d<=y&&(o=d)}if(a=i[o]||e.target,a!==t){W(e,"currentTarget",{configurable:!0,get(){return a||r}});var m=L,q=A;_(null),c(null);try{for(var u,g=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var f=a["__"+n];if(f!==void 0&&!a.disabled)if(j(f)){var[D,...F]=f;D.apply(a,[e,...F])}else f.call(a,e)}catch(l){u?g.push(l):u=l}if(e.cancelBubble||h===t||h===null)break;a=h}if(u){for(let l of g)queueMicrotask(()=>{throw l});throw u}}finally{e.__root=t,delete e.currentTarget,_(m),c(q)}}}let s;function K(){s=void 0}function Q(e){let t=null,r=v;var n;if(v){for(t=k,s===void 0&&(s=R(document.head));s!==null&&(s.nodeType!==8||s.data!==N);)s=b(s);s===null?E(!1):s=T(b(s))}v||(n=document.head.appendChild(B()));try{C(()=>e(n),H)}finally{r&&(E(!0),s=k,T(t))}}export{Y as a,z as b,U as c,K as d,G as e,J as f,Q as h,X as l,I as r};
