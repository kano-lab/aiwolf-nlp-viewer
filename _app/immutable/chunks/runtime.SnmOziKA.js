var Nn=Array.isArray,bn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,qn=Array.prototype,zt=Object.getPrototypeOf;const Mn=()=>{};function Ln(t){return t()}function Wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,U=8,st=16,m=32,W=64,tt=128,D=256,G=512,h=1024,x=2048,N=4096,k=8192,b=16384,Xt=32768,yt=65536,Yn=1<<17,Jt=1<<19,wt=1<<20,vt=Symbol("$state"),jn=Symbol("legacy props");function Tt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function $n(){X=!0}function at(t){return{f:0,v:t,reactions:null,equals:Tt,version:0}}function Gn(t){return gt(at(t))}function an(t,n=!1){var e;const r=at(t);return n||(r.equals=mt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Kn(t,n=!1){return gt(an(t,n))}function gt(t){return o!==null&&o.f&y&&(T===null?gn([t]):T.push(t)),t}function un(t,n){return o!==null&&ft()&&o.f&(y|st)&&(T===null||!T.includes(t))&&sn(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),At(t,x),ft()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(w(u,x),Q(u)):A===null?An([t]):A.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),l=r.length,s=0;s<l;s++){var a=r[s],f=a.f;f&x||!e&&a===u||(w(a,n),f&(h|D)&&(f&y?At(a,N):Q(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,fn="[",_n="[!",cn="]",Rt={},lr=Symbol();let C=!1;function sr(t){C=t}let g;function L(t){if(t===null)throw xt(),Rt;return g=t}function ar(){return L(F(g))}function ur(t){if(C){if(F(g)!==null)throw xt(),Rt;g=t}}function or(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=F(n);n.remove(),n=e}}var pt,vn,Dt,St;function ir(){if(pt===void 0){pt=window,vn=document;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function F(t){return St.call(t)}function fr(t,n){if(!C)return rt(t);var r=rt(g);if(r===null)r=g.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),L(e),e}return L(r),r}function _r(t,n){if(!C){var r=rt(t);return r instanceof Comment&&r.data===""?F(r):r}return g}function cr(t,n=1,r=!1){let e=C?g:t;for(var l;n--;)l=e,e=F(e);if(!C)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=nt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function vr(t){t.textContent=""}function pn(t){var n=y|x;u===null?n|=D:u.f|=wt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(t){const n=pn(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):q(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;z(hn(t));try{It(t),n=Bt(t)}finally{z(r)}return n}function kt(t){var n=Ot(t),r=(S||t.f&D)&&t.deps!==null?N:h;w(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function ut(t){It(t),H(t,0),w(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&o===null&&rn(),o!==null&&o.f&D&&nn(),it&&tn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var l=(t&W)!==0,s=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=I;try{ht(!0),B(a),a.f|=Xt}catch(_){throw q(a),_}finally{ht(f)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wt)===0;if(!p&&!l&&e&&(s!==null&&dn(a,s),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function hr(t){const n=P(U,null,!1);return w(n,h),n.teardown=t,n}function dr(t){Ct();var n=u!==null&&(u.f&m)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function Er(t){return Ct(),ot(t)}function yr(t){const n=P(W,t,!0);return()=>{q(n)}}function Nt(t){return P(Et,t,!1)}function wr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,un(r.l.r2,!0),kn(n))})}function Tr(){var t=i;ot(()=>{if(On(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&w(r,N),M(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return P(U,t,!0)}function mr(t){return En(t)}function En(t,n=0){return P(U|st|n,t,!0)}function gr(t,n=!0){return P(U|m,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=o;dt(!0),Z(null);try{n.call(null)}finally{dt(r),Z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:F(e);e.remove(),e=s}r=!0}Pt(t,n&&!r),Ft(t),H(t,0),w(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Ar(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{q(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&m)!==0;Mt(e,n,s?r:!1),e=l}}}function xr(t){Lt(t,!0)}function Lt(t,n){if(t.f&k){M(t)&&B(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&m)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,et=[];function Yt(){K=!1;const t=et.slice();et=[],Wt(t)}function Rr(t){K||(K=!0,queueMicrotask(Yt)),et.push(t)}function Tn(){K&&Yt()}const jt=0,mn=1;let V=!1,$=jt,Y=!1,j=null,I=!1,it=!1;function ht(t){I=t}function dt(t){it=t}let R=[],O=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let T=null;function gn(t){T=t}let v=null,E=0,A=null;function An(t){A=t}let Ht=0,S=!1,i=null;function Ut(){return++Ht}function ft(){return!X||i!==null&&i.l===null}function M(t){var a,f;var n=t.f;if(n&x)return!0;if(n&N){var r=t.deps,e=(n&D)!==0;if(r!==null){var l;if(n&G){for(l=0;l<r.length;l++)((a=r[l]).reactions??(a.reactions=[])).push(t);t.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(M(s)&&kt(s),e&&u!==null&&!S&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||w(t,h)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function Rn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(V){if(r===null&&(V=!1),Rn(n))throw t;return}r!==null&&(V=!0);{xn(t,n);return}}function Bt(t){var _t;var n=v,r=E,e=A,l=o,s=S,a=T,f=i,p=t.f;v=null,E=0,A=null,o=p&(m|W)?null:t,S=!I&&(p&D)!==0,T=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(H(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((_t=_[c]).reactions??(_t.reactions=[])).push(t)}else _!==null&&E<_.length&&(H(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=l,S=s,T=a,i=f}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(w(n,N),n.f&(D|G)||(n.f^=G),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function B(t){var n=t.f;if(!(n&b)){w(t,h);var r=u,e=i;u=t;try{n&st?yn(t):Pt(t),Ft(t),bt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.version=Ht}catch(s){J(s,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(O>1e3){O=0;try{en()}catch(t){if(j!==null)J(t,j,null);else throw t}}O++}function $t(t){var n=t.length;if(n!==0){Vt();var r=I;I=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Gt(l,s),Sn(s)}}finally{I=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|k)))try{M(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function In(){if(Y=!1,O>1001)return;const t=R;R=[],$t(t),Y||(O=0,j=null)}function Q(t){$===jt&&(Y||(Y=!0,queueMicrotask(In))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&h)!==0,f=r.next;if(!a&&!(l&k))if(l&U){if(s)r.f^=h;else try{M(r)&&B(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&Et&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Gt(p,n)}function Kt(t){var n=$,r=R;try{Vt();const l=[];$=mn,R=l,Y=!1,$t(r);var e=t==null?void 0:t();return Tn(),(R.length>0||l.length>0)&&Kt(),O=0,j=null,e}finally{$=n,R=r}}async function Dr(){await Promise.resolve(),Kt()}function On(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ot(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&ln();var l=o.deps;v===null&&l!==null&&l[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&m)&&A.includes(t)&&(w(u,x),Q(u))}else if(r&&t.deps===null)for(var s=t,a=s.parent,f=s;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=t,M(s)&&kt(s)),t.v}function kn(t){const n=o;try{return o=null,t()}finally{o=n}}const Cn=~(x|N|h);function w(t,n){t.f=t.f&Cn|n}function Sr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:at(!1)})}function Ir(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Nt(s.fn)}}finally{z(r),Z(e)}}i=n.p,n.m=!0}return{}}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{pr as $,Bn as A,un as B,ct as C,u as D,yt as E,Vn as F,zt as G,Nn as H,ar as I,_n as J,or as K,L,sr as M,xr as N,Ar as O,Un as P,Yn as Q,mt as R,vt as S,m as T,lr as U,W as V,z as W,X,Jn as Y,tr as Z,jn as _,Ir as a,Qn as a0,Xn as a1,nr as a2,an as a3,nt as a4,rt as a5,rr as a6,er as a7,bn as a8,cn as a9,Nt as aA,ot as aB,Kt as aC,Dr as aD,Gn as aE,Qt as aF,k as aa,on as ab,Mt as ac,vr as ad,wn as ae,o as af,zn as ag,Zn as ah,Wn as ai,F as aj,xt as ak,Rt as al,Zt as am,wr as an,Tr as ao,vn as ap,Kn as aq,Z as ar,hr as as,Rr as at,Fn as au,Jt as av,fn as aw,ir as ax,Hn as ay,yr as az,dr as b,fr as c,i as d,kn as e,_r as f,Ln as g,Wt as h,On as i,Or as j,pn as k,$n as l,En as m,gr as n,Mn as o,Sr as p,q,ur as r,cr as s,mr as t,Er as u,C as v,g as w,Pn as x,qn as y,at as z};