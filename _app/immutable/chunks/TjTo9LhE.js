import{a6 as m,M as D,a7 as O,a2 as S,a8 as g,D as c,C as R,A as I,J as _,O as L,a9 as V,aa as C,Z as H,Q as M,ab as Y,K as P,G as $,z as E,p as j,a4 as k,l as z,a as G}from"./CeyBd2Nv.js";import{a as J,r as A,b as h,c as K}from"./sQXm3MJV.js";import{c as Q}from"./D1-2HBWE.js";const W=["touchstart","touchmove"];function Z(t){return W.includes(t)}function X(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a+"")}function q(t,e){return N(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const a=e.target,u=E,l=_;try{for(var r=D(a);r&&(r.nodeType!==8||r.data!==O);)r=S(r);if(!r)throw g;c(!0),R(r),I();const d=N(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==L)throw V(),g;return c(!1),d}catch(d){if(d===g)return e.recover===!1&&C(),m(),H(a),c(!1),q(t,e);throw d}finally{c(u),R(l),K()}}const i=new Map;function N(t,{target:e,anchor:a,props:u={},events:l,context:r,intro:d=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=Z(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(M(J)),A.add(y);var p=void 0,b=Y(()=>{var o=a??e.appendChild(P());return $(()=>{if(r){j({});var s=k;s.c=r}l&&(u.$$events=l),E&&Q(o,null),p=t(o,u)||{},E&&(z.nodes_end=_),r&&G()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}A.delete(y),o!==a&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(p,b),p}let w=new WeakMap;function ee(t,e){const a=w.get(t);return a?(w.delete(t),a(e)):Promise.resolve()}export{x as h,q as m,X as s,ee as u};
