import{S as A,x as j,y as z,z as m,A as V,B as h,U as c,C as N,i as P,D as C,F as J,G as Q,H as W,m as X,v as x,I as k,E as p,J as ee,K as ae,L as re,M as Y,N as q,n as M,O as U,w as te,P as ne,Q as fe,R as ie,e as G,T as se,V as ue,W as H,X as le,Y as _e,Z as ve,_ as de,k as K,$ as ce,a0 as oe,a1 as be,a2 as ge,a3 as ye}from"./runtime.SnmOziKA.js";import{c as he}from"./store.D8R4b1hQ.js";function w(f,u=null,g){if(typeof f!="object"||f===null||A in f)return f;const v=Q(f);if(v!==j&&v!==z)return f;var n=new Map,_=W(f),o=m(0);_&&n.set("length",m(f.length));var y;return new Proxy(f,{defineProperty(i,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&V();var t=n.get(e);return t===void 0?(t=m(a.value),n.set(e,t)):h(t,w(a.value,y)),!0},deleteProperty(i,e){var a=n.get(e);if(a===void 0)e in i&&n.set(e,m(c));else{if(_&&typeof e=="string"){var t=n.get("length"),r=Number(e);Number.isInteger(r)&&r<t.v&&h(t,r)}h(a,c),Z(o)}return!0},get(i,e,a){var d;if(e===A)return f;var t=n.get(e),r=e in i;if(t===void 0&&(!r||(d=N(i,e))!=null&&d.writable)&&(t=m(w(r?i[e]:c,y)),n.set(e,t)),t!==void 0){var s=P(t);return s===c?void 0:s}return Reflect.get(i,e,a)},getOwnPropertyDescriptor(i,e){var a=Reflect.getOwnPropertyDescriptor(i,e);if(a&&"value"in a){var t=n.get(e);t&&(a.value=P(t))}else if(a===void 0){var r=n.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(i,e){var s;if(e===A)return!0;var a=n.get(e),t=a!==void 0&&a.v!==c||Reflect.has(i,e);if(a!==void 0||C!==null&&(!t||(s=N(i,e))!=null&&s.writable)){a===void 0&&(a=m(t?w(i[e],y):c),n.set(e,a));var r=P(a);if(r===c)return!1}return t},set(i,e,a,t){var E;var r=n.get(e),s=e in i;if(_&&e==="length")for(var d=a;d<r.v;d+=1){var R=n.get(d+"");R!==void 0?h(R,c):d in i&&(R=m(c),n.set(d+"",R))}r===void 0?(!s||(E=N(i,e))!=null&&E.writable)&&(r=m(void 0),h(r,w(a,y)),n.set(e,r)):(s=r.v!==c,h(r,w(a,y)));var b=Reflect.getOwnPropertyDescriptor(i,e);if(b!=null&&b.set&&b.set.call(t,a),!s){if(_&&typeof e=="string"){var S=n.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&h(S,O+1)}Z(o)}return!0},ownKeys(i){P(o);var e=Reflect.ownKeys(i).filter(r=>{var s=n.get(r);return s===void 0||s.v!==c});for(var[a,t]of n)t.v!==c&&!(a in i)&&e.push(a);return e},setPrototypeOf(){J()}})}function Z(f,u=1){h(f,f.v+u)}function Re(f,u,g=!1){x&&k();var v=f,n=null,_=null,o=c,y=g?p:0,i=!1;const e=(t,r=!0)=>{i=!0,a(r,t)},a=(t,r)=>{if(o===(o=t))return;let s=!1;if(x){const d=v.data===ee;!!o===d&&(v=ae(),re(v),Y(!1),s=!0)}o?(n?q(n):r&&(n=M(()=>r(v))),_&&U(_,()=>{_=null})):(_?q(_):r&&(_=M(()=>r(v))),n&&U(n,()=>{n=null})),s&&Y(!0)};X(()=>{i=!1,u(e),i||a(null,null)},y),x&&(v=te)}function $(f){for(var u=C,g=C;u!==null&&!(u.f&(se|ue));)u=u.parent;try{return H(u),f()}finally{H(g)}}function Ee(f,u,g,v){var B;var n=(g&be)!==0,_=!le||(g&_e)!==0,o=(g&ve)!==0,y=(g&ge)!==0,i=!1,e;o?[e,i]=he(()=>f[u]):e=f[u];var a=A in f||de in f,t=((B=N(f,u))==null?void 0:B.set)??(a&&o&&u in f?l=>f[u]=l:void 0),r=v,s=!0,d=!1,R=()=>(d=!0,s&&(s=!1,y?r=G(v):r=v),r);e===void 0&&v!==void 0&&(t&&_&&ne(),e=R(),t&&t(e));var b;if(_)b=()=>{var l=f[u];return l===void 0?R():(s=!0,d=!1,l)};else{var S=$(()=>(n?K:ce)(()=>f[u]));S.f|=fe,b=()=>{var l=P(S);return l!==void 0&&(r=void 0),l===void 0?r:l}}if(!(g&oe))return b;if(t){var O=f.$$legacy;return function(l,I){return arguments.length>0?((!_||!I||O||i)&&t(I?b():l),l):b()}}var E=!1,F=!1,D=ye(e),T=$(()=>K(()=>{var l=b(),I=P(D);return E?(E=!1,F=!0,I):(F=!1,D.v=l)}));return n||(T.equals=ie),function(l,I){if(arguments.length>0){const L=I?P(T):_&&o?w(l):l;return T.equals(L)||(E=!0,h(D,L),d&&r!==void 0&&(r=L),G(()=>P(T))),l}return P(T)}}export{w as a,Re as i,Ee as p};