import{b as j,h as w,a as ee,i as ae,c as K,H as re,r as U,s as k,d as M,e as N,I as D,f as P,g as Q,p as ne,j as X,k as F,l as fe,m as ie,n as le,o as se,q as ue,t as te,u as ve,v as de,w as _e,E as y,x as L,y as oe,z as G,A as W,B as ce,C as he,D as Ee}from"./runtime.DiZzUycx.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)fe(e[u].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;ie(A),A.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}le(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(t.delete(d.k),m(l,d.prev,d.next)),se(d.e,!o)}})}function me(l,e,a,t,v,_=null){var u=l,o={flags:e,items:new Map,first:null},A=(e&W)!==0;if(A){var h=l;u=w?k(ue(h)):h.appendChild(te())}w&&ee();var d=null,C=!1;j(()=>{var r=a(),s=ae(r)?r:r==null?[]:K(r),i=s.length;if(C&&i===0)return;C=i===0;let T=!1;if(w){var E=u.data===re;E!==(i===0)&&(u=U(),k(u),M(!1),T=!0)}if(w){for(var p=null,I,c=0;c<i;c++){if(N.nodeType===8&&N.data===ve){u=N,T=!0,M(!1);break}var n=s[c],f=t(n,c);I=Z(N,o,p,null,n,f,c,v,e),o.items.set(f,I),p=I}i>0&&k(U())}if(!w){var R=de;Ae(s,o,u,v,e,(R.f&D)!==0,t)}_!==null&&(i===0?d?P(d):d=Q(()=>_(u)):d!==null&&ne(d,()=>{d=null})),T&&M(!0),a()}),w&&(u=N)}function Ae(l,e,a,t,v,_,u){var q,B,V,Y;var o=(v&ce)!==0,A=(v&(y|L))!==0,h=l.length,d=e.items,C=e.first,r=C,s,i=null,T,E=[],p=[],I,c,n,f;if(o)for(f=0;f<h;f+=1)I=l[f],c=u(I,f),n=d.get(c),n!==void 0&&((q=n.a)==null||q.measure(),(T??(T=new Set)).add(n));for(f=0;f<h;f+=1){if(I=l[f],c=u(I,f),n=d.get(c),n===void 0){var R=r?r.e.nodes_start:a;i=Z(R,e,i,i===null?e.first:i.next,I,c,f,t,v),d.set(c,i),E=[],p=[],r=i.next;continue}if(A&&Ie(n,I,f,v),n.e.f&D&&(P(n.e),o&&((B=n.a)==null||B.unfix(),(T??(T=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var g=p[0],x;i=g.prev;var O=E[0],S=E[E.length-1];for(x=0;x<E.length;x+=1)J(E[x],g,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,O.prev,S.next),m(e,i,O),m(e,S,g),r=g,i=S,f-=1,E=[],p=[]}else s.delete(n),J(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==c;)(_||!(r.e.f&D))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var H=s===void 0?[]:K(s);r!==null;)(_||!(r.e.f&D))&&H.push(r),r=r.next;var b=H.length;if(b>0){var $=v&W&&h===0?a:null;if(o){for(f=0;f<b;f+=1)(V=H[f].a)==null||V.measure();for(f=0;f<b;f+=1)(Y=H[f].a)==null||Y.fix()}pe(e,H,$,d)}}o&&_e(()=>{var z;if(T!==void 0)for(n of T)(z=n.a)==null||z.apply()}),X.first=e.first&&e.first.e,X.last=i&&i.e}function Ie(l,e,a,t){t&y&&F(l.v,e),t&L?F(l.i,a):l.i=a}function Z(l,e,a,t,v,_,u,o,A){var h=(A&y)!==0,d=(A&he)===0,C=h?d?oe(v):G(v):v,r=A&L?G(u):u,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return s.e=Q(()=>o(l,C,r),w),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function J(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};
