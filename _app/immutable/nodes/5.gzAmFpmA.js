import{t as N,a as k,c as ye,b as Qe}from"../chunks/B2dow_aF.js";import{p as ze,s as ke,l as nt,i as z,a as Ue,az as Ie,h as c,c as i,g as t,f as l,aA as Se,x as rt,av as fe,$ as st}from"../chunks/DYQYa5qB.js";import{d as Ke,s as Y}from"../chunks/DqoL28vT.js";import{i as F}from"../chunks/CDwSRpBZ.js";import{e as De,i as Be}from"../chunks/ESKgePjm.js";import{h as lt}from"../chunks/CXiCYM-B.js";import{b as Ae,s as ee,r as se,a as Ze,c as ie}from"../chunks/CFGoGqTV.js";import{p as Te}from"../chunks/BzpCqryA.js";import{b as it}from"../chunks/CSdaOQje.js";import{a as Ee,s as ot,b as ct}from"../chunks/CkKTt8Z1.js";import{w as _e,d as ut}from"../chunks/DtJpQvLW.js";import{I as He,s as $e,c as et,d as dt,t as Pe}from"../chunks/DYyLbmH6.js";import{a as Ve,o as at}from"../chunks/CSRa0Jab.js";/* empty css                */import{b as je}from"../chunks/zWPyy8jR.js";import{b as ft}from"../chunks/Jlm6A_sL.js";function vt(a,e,n,m){var u=a.__styles??(a.__styles={});u[e]!==n&&(u[e]=n,n==null?a.style.removeProperty(e):a.style.setProperty(e,n,""))}class Me{static fromJson(e){return pt(JSON.parse(e),xe("RealtimeSettings"))}static toJson(e){return JSON.stringify(_t(e,xe("RealtimeSettings")),null,2)}}function de(a,e,n,m=""){const u=Le(a),G=m?` on ${m}`:"",d=n?` for key "${n}"`:"";throw Error(`Invalid value${d}${G}. Expected ${u} but got ${JSON.stringify(e)}`)}function Le(a){return Array.isArray(a)?a.length===2&&a[0]===void 0?`an optional ${Le(a[1])}`:`one of [${a.map(e=>Le(e)).join(", ")}]`:typeof a=="object"&&a.literal!==void 0?a.literal:typeof a}function bt(a){if(a.jsonToJS===void 0){const e={};a.props.forEach(n=>e[n.json]={key:n.js,typ:n.typ}),a.jsonToJS=e}return a.jsonToJS}function mt(a){if(a.jsToJSON===void 0){const e={};a.props.forEach(n=>e[n.js]={key:n.json,typ:n.typ}),a.jsToJSON=e}return a.jsToJSON}function he(a,e,n,m="",u=""){function G(g,I){return typeof g==typeof I?I:de(g,I,m,u)}function d(g,I){const T=g.length;for(let B=0;B<T;B++){const J=g[B];try{return he(I,J,n)}catch{}}return de(g,I,m,u)}function w(g,I){return g.indexOf(I)!==-1?I:de(g.map(T=>Ce(T)),I,m,u)}function C(g,I){return Array.isArray(I)?I.map(T=>he(T,g,n)):de(Ce("array"),I,m,u)}function H(g){if(g===null)return null;const I=new Date(g);return isNaN(I.valueOf())?de(Ce("Date"),g,m,u):I}function q(g,I,T){if(T===null||typeof T!="object"||Array.isArray(T))return de(Ce(ne||"object"),T,m,u);const B={};return Object.getOwnPropertyNames(g).forEach(J=>{const te=g[J],re=Object.prototype.hasOwnProperty.call(T,J)?T[J]:void 0;B[te.key]=he(re,te.typ,n,J,ne)}),Object.getOwnPropertyNames(T).forEach(J=>{Object.prototype.hasOwnProperty.call(g,J)||(B[J]=he(T[J],I,n,J,ne))}),B}if(e==="any")return a;if(e===null)return a===null?a:de(e,a,m,u);if(e===!1)return de(e,a,m,u);let ne;for(;typeof e=="object"&&e.ref!==void 0;)ne=e.ref,e=xt[e.ref];return Array.isArray(e)?w(e,a):typeof e=="object"?e.hasOwnProperty("unionMembers")?d(e.unionMembers,a):e.hasOwnProperty("arrayItems")?C(e.arrayItems,a):e.hasOwnProperty("props")?q(n(e),e.additional,a):de(e,a,m,u):e===Date&&typeof a!="number"?H(a):G(e,a)}function pt(a,e){return he(a,e,bt)}function _t(a,e){return he(a,e,mt)}function Ce(a){return{literal:a}}function Re(a,e){return{props:a,additional:e}}function xe(a){return{ref:a}}const xt={RealtimeSettings:Re([{json:"connection",js:"connection",typ:xe("Connection")},{json:"display",js:"display",typ:xe("Display")}],!1),Connection:Re([{json:"url",js:"url",typ:""},{json:"token",js:"token",typ:""}],!1),Display:Re([{json:"canvas",js:"canvas",typ:xe("Agent")},{json:"bubble",js:"bubble",typ:xe("Agent")},{json:"text",js:"text",typ:xe("Agent")},{json:"largeScale",js:"largeScale",typ:!0}],!1),Agent:Re([{json:"name",js:"name",typ:!0},{json:"team",js:"team",typ:!0},{json:"role",js:"role",typ:!0}],!1)},tt={connection:{url:"ws://localhost:8080/realtime",token:""},display:{canvas:{name:!0,team:!0,role:!0},bubble:{name:!0,team:!1,role:!1},text:{name:!0,team:!1,role:!1},largeScale:!1}};function gt(){const a=localStorage.getItem("realtime-settings");if(a)try{return Me.fromJson(a)}catch(e){console.error(e)}return localStorage.setItem("realtime-settings",Me.toJson(tt)),tt}const we=_e(gt());we.subscribe(a=>{localStorage.setItem("realtime-settings",Me.toJson(a))});function ht(a){return Array.from({length:a},(e,n)=>({idx:n+1,team:"Undefined",name:He(n+1),role:"Undefined",isAlive:!0,targetIdxs:[],isBubble:!1}))}function X(a,e,n){var u,G;if(n===void 0)return"該当なし";let m=[];return a!=null&&a.name&&m.push(He(n)),a!=null&&a.team&&m.push((u=e.agents.find(d=>d.idx===n))==null?void 0:u.team),a!=null&&a.role&&m.push((G=e.agents.find(d=>d.idx===n))==null?void 0:G.role),m.join(" ")}function Je(a,e){return(a||e)&&!(a&&e)}function yt(){const{subscribe:a,update:e}=_e({status:"disconnected",entries:{}});let n=null,m=null;we.subscribe(d=>{m=d});function u(){if(!m)return;e(w=>({...w,status:"connecting"}));const d=new URL(m.connection.url);m.connection.token&&d.searchParams.set("token",m.connection.token),n=new WebSocket(d),n.onopen=()=>{e(w=>({...w,status:"connected"}))},n.onclose=()=>{e(w=>({...w,status:"disconnected"})),n=null},n.onerror=()=>{e(w=>({...w,status:"disconnected"})),n=null},n.onmessage=w=>{try{const C=JSON.parse(w.data);e(H=>{const q={...H.entries};return q[C.id]||(q[C.id]=[]),q[C.id].push(C),{...H,entries:q}})}catch(C){console.error("Failed to parse message:",C)}}}function G(){n&&(e(d=>({...d,status:"disconnected"})),n.close(),n=null)}return{subscribe:a,connect:u,disconnect:G,entries:{subscribe:d=>a(w=>d(w.entries))}}}const Oe=yt();var kt=N('<div role="alert" class="alert m-4"><p class="text-lg font-bold"> </p></div>'),wt=N('<p class="w-2/5 text-9xl font-black opacity-50 absolute top-0 left-0 -mt-4 ml-8"> </p>'),St=(a,e,n)=>{t(e)===t(n).idx?ke(e,void 0):ke(e,Te(t(n).idx))},jt=N('<div class="absolute inset-0 flex items-center justify-center"><span class="text-9xl font-bold opacity-75"> </span></div>'),It=N("<span> </span>"),Tt=N('<span class="text-2xl mt-2"> </span>'),Ot=N("<span> </span>"),At=N('<span class="text-2xl mt-2"> </span>'),Et=N("<span> </span>"),Ct=N('<div class="absolute origin-center text-center flex flex-col items-center transform-angle rounded-xl p-2 svelte-1m75ffo"><div class="avatar rounded-full bg-base-300"><div><button class="cursor-pointer"><img class="w-full h-full"> <!></button></div></div> <!> <!> <!></div>'),Rt=N('<div class="h-full flex flex-col"><!> <div class="w-full flex-1 mt-8"><div class="h-full flex items-center justify-center relative rounded-1/2 box-border"><!> <canvas class="w-full h-full absolute top-0 left-0 pointer-events-none"></canvas> <canvas class="w-full h-full absolute top-0 left-0 z-10 pointer-events-none"></canvas> <div class="w-1/2 h-fit max-h-1/3 card bg-base-100 card-md shadow-md overflow-auto z-20"><div class="card-body"><p> </p></div></div> <!></div></div> <footer class="footer footer-center text-base-content p-2"><aside><p>イラスト : 石黒正数氏</p></aside></footer></div>');function Jt(a,e){ze(e,!0);let n=Ie(void 0);const m=we.subscribe(r=>{ke(n,Te(r))});Ve(m);let u=Ie(void 0),G=rt(()=>{var r,s,S,h,O,_,K,p,E,R,M,Q,D;switch(e.packet.event){case"未接続":return"未接続";case"トーク":case"囁き":return e.packet.message;case"襲撃投票":return Je(t(u)===void 0,e.packet.fromIdx===t(u))?`${X((r=t(n))==null?void 0:r.display.bubble,e.packet,e.packet.fromIdx)} が ${X((s=t(n))==null?void 0:s.display.bubble,e.packet,e.packet.toIdx)} に襲撃投票しました`:"襲撃投票しました";case"投票":return Je(t(u)===void 0,e.packet.fromIdx===t(u))?`${X((S=t(n))==null?void 0:S.display.bubble,e.packet,e.packet.fromIdx)} が ${X((h=t(n))==null?void 0:h.display.bubble,e.packet,e.packet.toIdx)} に投票しました`:`${X((O=t(n))==null?void 0:O.display.bubble,e.packet,e.packet.fromIdx)} が投票しました`;case"追放":return e.packet.toIdx===void 0?"誰も追放されませんでした":`${X((_=t(n))==null?void 0:_.display.bubble,e.packet,e.packet.toIdx)} を追放しました`;case"襲撃":return e.packet.toIdx===void 0?"誰も襲撃されませんでした":e.packet.fromIdx===-1?`${X((K=t(n))==null?void 0:K.display.bubble,e.packet,e.packet.toIdx)} が襲撃されましたが、護衛されました`:`${X((p=t(n))==null?void 0:p.display.bubble,e.packet,e.packet.toIdx)} が襲撃されました`;case"占い":return Je(t(u)===void 0,e.packet.fromIdx===t(u))?`${X((E=t(n))==null?void 0:E.display.bubble,e.packet,e.packet.fromIdx)} が ${X((R=t(n))==null?void 0:R.display.bubble,e.packet,e.packet.toIdx)} を占った結果、${dt((M=e.packet.agents.find(x=>x.idx===e.packet.toIdx))==null?void 0:M.role)} でした`:"占いました";case"護衛":return Je(t(u)===void 0,e.packet.fromIdx===t(u))?`${X((Q=t(n))==null?void 0:Q.display.bubble,e.packet,e.packet.fromIdx)} が ${X((D=t(n))==null?void 0:D.display.bubble,e.packet,e.packet.toIdx)} を護衛対象にしました`:"護衛しました";default:return}}),d,w,C,H;at(()=>(window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q)})),nt(()=>{q()});function q(){if(!w||!C||!d)return;const r=d.getBoundingClientRect();if([w,C].forEach(O=>{O.width=r.width,O.height=r.height;const _=O.getContext("2d");_&&(_.clearRect(0,0,O.width,O.height),_.globalAlpha=1,_.lineWidth=2)}),t(u)!==void 0&&(e.packet.event==="占い"&&e.packet.fromIdx!==t(u)||e.packet.event==="投票"&&e.packet.fromIdx!==t(u)||e.packet.event==="襲撃投票"&&e.packet.fromIdx!==t(u)))return;const s=w.getContext("2d"),S=C.getContext("2d");if(!s||!S)return;const h=C.getBoundingClientRect();if(e.packet.fromIdx!==void 0&&e.packet.toIdx!==void 0){const O=document.getElementById(`agent-${e.packet.fromIdx}`);if(!(O instanceof HTMLElement))return;const _=O.getBoundingClientRect(),K=_.left+_.width/2-h.left,p=_.top+_.height/2-h.top,E=document.getElementById(`agent-${e.packet.toIdx}`);if(!(E instanceof HTMLElement))return;const R=E.getBoundingClientRect();ne(S,K,p,R.left+R.width/2-h.left,R.top+R.height/2-h.top,!1,getComputedStyle(H).getPropertyValue("background-color"))}if(e.packet.bubbleIdx!==void 0){const O=document.getElementById(`agent-${e.packet.bubbleIdx}`);if(!(O instanceof HTMLElement))return;const _=O.getBoundingClientRect(),K=_.left+_.width/2-h.left,p=_.top+_.height/2-h.top;ne(s,h.width/2,h.height/2,K,p,!0,getComputedStyle(H).getPropertyValue("background-color"))}}function ne(r,s,S,h,O,_,K){const p=_?[0,0,0,0,0,30]:[0,5,-20,5,-20,15];r.strokeStyle=r.fillStyle=K,r.beginPath();let E=h-s,R=O-S,M=Math.sqrt(E*E+R*R),Q=R/M,D=E/M,x=[];x.push(0,0);for(let v=0;v<p.length;v+=2){let A=p[v],b=p[v+1];x.push(A<0?M+A:A,b)}x.push(M,0);for(let v=p.length;v>0;v-=2){let A=p[v-2],b=p[v-1];x.push(A<0?M+A:A,-b)}x.push(0,0);for(let v=0;v<x.length;v+=2){let A=x[v]*D-x[v+1]*Q+s,b=x[v]*Q+x[v+1]*D+S;v===0?r.moveTo(A,b):r.lineTo(A,b)}r.fill()}var g=Rt(),I=i(g);{var T=r=>{var s=kt(),S=i(s),h=i(S);l(S),l(s),z(()=>Y(h,`${e.packet.day??""}日目 ${(e.packet.isDay?"昼":"夜")??""}`)),k(r,s)};F(I,r=>{var s;(s=t(n))!=null&&s.display.largeScale||r(T)})}var B=c(I,2),J=i(B),te=i(J);{var re=r=>{var s=wt(),S=i(s);l(s),z(()=>Y(S,`${e.packet.day??""}日目 ${(e.packet.isDay?"昼":"夜")??""}`)),k(r,s)};F(te,r=>{var s;(s=t(n))!=null&&s.display.largeScale&&r(re)})}var ve=c(te,2);je(ve,r=>w=r,()=>w);var oe=c(ve,2);je(oe,r=>C=r,()=>C);var Z=c(oe,2),be=i(Z),V=i(be),f=i(V,!0);l(V),l(be),l(Z),je(Z,r=>H=r,()=>H);var U=c(Z,2);De(U,17,()=>e.packet.agents,Be,(r,s,S)=>{var h=Ct(),O=i(h),_=i(O),K=i(_);K.__click=[St,u,s];var p=i(K),E=c(p,2);{var R=b=>{var o=jt(),j=i(o),P=i(j,!0);l(j),l(o),z(()=>Y(P,t(s).idx)),k(b,o)};F(E,b=>{var o,j;(o=t(n))!=null&&o.display.largeScale&&((j=t(n))!=null&&j.display.canvas.name)&&b(R)})}l(K),l(_),l(O);var M=c(O,2);{var Q=b=>{var o=It(),j=i(o,!0);l(o),z(P=>Y(j,P),[()=>He(t(s).idx)]),k(b,o)};F(M,b=>{var o,j;!((o=t(n))!=null&&o.display.largeScale)&&((j=t(n))!=null&&j.display.canvas.name)&&b(Q)})}var D=c(M,2);{var x=b=>{var o=ye(),j=fe(o);{var P=L=>{var y=Tt(),le=i(y,!0);l(y),z(()=>Y(le,t(s).team)),k(L,y)},$=L=>{var y=Ot(),le=i(y,!0);l(y),z(()=>Y(le,t(s).team)),k(L,y)};F(j,L=>{var y;(y=t(n))!=null&&y.display.largeScale?L(P):L($,!1)})}k(b,o)};F(D,b=>{var o;(o=t(n))!=null&&o.display.canvas.team&&b(x)})}var v=c(D,2);{var A=b=>{var o=ye(),j=fe(o);{var P=L=>{var y=At(),le=i(y,!0);l(y),z(()=>Y(le,t(s).role)),k(L,y)},$=L=>{var y=Et(),le=i(y,!0);l(y),z(()=>Y(le,t(s).role)),k(L,y)};F(j,L=>{var y;(y=t(n))!=null&&y.display.largeScale?L(P):L($,!1)})}k(b,o)};F(v,b=>{var o;(o=t(n))!=null&&o.display.canvas.role&&(t(s).idx===t(u)||t(u)===void 0)&&b(A)})}l(h),z(b=>{var o;Ae(h,"style",`--angle: ${S*(360/e.packet.agents.length)}`),Ae(h,"id",`agent-${t(s).idx??""}`),Pe(h,"bg-base-100",t(s).idx===t(u)),$e(_,et((o=t(n))!=null&&o.display.largeScale?"relative w-48 rounded-full ring-offset-base-100 ring ring-offset-2":"relative w-24 rounded-full ring-offset-base-100 ring ring-offset-2"),"svelte-1m75ffo"),Pe(_,"ring-success",t(s).isAlive),Pe(_,"ring-error",!t(s).isAlive),vt(_,"opacity",t(s).isAlive?1:.25),Ae(p,"src",`${ft??""}/images/male/${b??""}.png`),Ae(p,"alt",t(s).name)},[()=>t(s).idx.toString().padStart(2,"0")]),k(r,h)}),l(J),je(J,r=>d=r,()=>d),l(B),Se(2),l(g),z(()=>{var r;Z.hidden=!t(G),$e(V,et((r=t(n))!=null&&r.display.largeScale?"text-3xl font-bold text-pretty break-keep text-center":"text-lg text-pretty break-keep text-center"),"svelte-1m75ffo"),Y(f,t(G))}),k(a,g),Ue()}Ke(["click"]);function Nt(){Oe.connect()}function Pt(){Oe.disconnect()}var Dt=N('<div class="status status-success animate-ping"></div> <div class="status status-success"></div>',1),Bt=N('<div class="status status-warning animate-ping"></div> <div class="status status-warning"></div>',1),Mt=N('<div class="status status-error"></div>'),Lt=(a,e)=>e("connection.url",a.currentTarget.value),zt=(a,e)=>e("connection.token",a.currentTarget.value),Ut=(a,e)=>e("display.canvas.name",a.currentTarget.checked),Kt=(a,e)=>e("display.canvas.team",a.currentTarget.checked),Ht=(a,e)=>e("display.canvas.role",a.currentTarget.checked),Vt=(a,e)=>e("display.bubble.name",a.currentTarget.checked),Wt=(a,e)=>e("display.bubble.team",a.currentTarget.checked),Xt=(a,e)=>e("display.bubble.role",a.currentTarget.checked),Yt=(a,e)=>e("display.text.name",a.currentTarget.checked),qt=(a,e)=>e("display.text.team",a.currentTarget.checked),Ft=(a,e)=>e("display.text.role",a.currentTarget.checked),Gt=(a,e)=>e("display.largeScale",a.currentTarget.checked),Qt=N('<div class="navbar bg-base-100 flex justify-start gap-4 overflow-x-auto"><h1 class="text-3xl font-bold text-nowrap ml-2">aiwolf-nlp-viewer</h1> <div class="ml-auto"><div class="inline-grid *:[grid-area:1/1]"><!></div></div> <label class="input min-w-3xs w-3xs"><iconify-icon></iconify-icon> <input type="text" class="grow" placeholder="WebSocket URL"></label> <label class="input min-w-3xs w-3xs"><iconify-icon></iconify-icon> <input type="text" class="grow" placeholder="Authorization Key"> <span class="badge badge-neutral badge-xs">Optional</span></label> <button class="btn btn-info">接続</button> <button class="btn btn-error">切断</button> <button class="btn">設定</button> <dialog class="modal"><div class="modal-box"><div class="form-control"><h3 class="text-lg font-bold mt-2">表示設定</h3> <h4 class="text-base font-bold mt-4">キャンバス上のエージェント情報</h4> <div class="flex gap-4 my-2"><label class="label cursor-pointer"><span class="label-text">名前</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">チーム名</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">役職</span> <input type="checkbox" class="checkbox"></label></div> <h4 class="text-base font-bold mt-4">メッセージボックス上のエージェント情報</h4> <div class="flex gap-4 my-2"><label class="label cursor-pointer"><span class="label-text">名前</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">チーム名</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">役職</span> <input type="checkbox" class="checkbox"></label></div> <h4 class="text-base font-bold mt-4">一覧のエージェント情報</h4> <div class="flex gap-4 my-2"><label class="label cursor-pointer"><span class="label-text">名前</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">チーム名</span> <input type="checkbox" class="checkbox"></label> <label class="label cursor-pointer"><span class="label-text">役職</span> <input type="checkbox" class="checkbox"></label></div> <h4 class="text-base font-bold mt-4">大画面向け</h4> <label class="label cursor-pointer my-2"><span class="label-text">有効</span> <input type="checkbox" class="checkbox"></label></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog> <label class="flex items-center cursor-pointer gap-2"><iconify-icon></iconify-icon> <input type="checkbox" value="dark" class="toggle theme-controller"> <iconify-icon></iconify-icon></label></div>',2);function Zt(a,e){ze(e,!0);let n=Ie(void 0),m=Ie(void 0);const u=we.subscribe(W=>{ke(n,Te(W))}),G=Oe.subscribe(W=>{ke(m,Te(W.status))});Ve(()=>{u(),G()});function d(W,ce){we.update(me=>{const pe=W.split("."),ge=pe.pop();let ae=me;for(const ue of pe)ue&&(ae=ae[ue]);return ae[ge]=ce,{...me}})}let w;var C=Qt(),H=c(i(C),2),q=i(H),ne=i(q);{var g=W=>{var ce=Dt();Se(2),k(W,ce)},I=W=>{var ce=ye(),me=fe(ce);{var pe=ae=>{var ue=Bt();Se(2),k(ae,ue)},ge=ae=>{var ue=Mt();k(ae,ue)};F(me,ae=>{t(m)==="connecting"?ae(pe):ae(ge,!1)},!0)}k(W,ce)};F(ne,W=>{t(m)==="connected"?W(g):W(I,!1)})}l(q),l(H);var T=c(H,2),B=i(T);ee(B,"class","h-[1em] opacity-50"),ee(B,"inline",!0),ee(B,"icon","mdi:link");var J=c(B,2);se(J),J.__input=[Lt,d],l(T);var te=c(T,2),re=i(te);ee(re,"class","h-[1em] opacity-50"),ee(re,"inline",!0),ee(re,"icon","mdi:key");var ve=c(re,2);se(ve),ve.__input=[zt,d],Se(2),l(te);var oe=c(te,2);oe.__click=[Nt];var Z=c(oe,2);Z.__click=[Pt];var be=c(Z,2);be.__click=()=>w.showModal();var V=c(be,2),f=i(V),U=i(f),r=c(i(U),4),s=i(r),S=c(i(s),2);se(S),S.__change=[Ut,d],l(s);var h=c(s,2),O=c(i(h),2);se(O),O.__change=[Kt,d],l(h);var _=c(h,2),K=c(i(_),2);se(K),K.__change=[Ht,d],l(_),l(r);var p=c(r,4),E=i(p),R=c(i(E),2);se(R),R.__change=[Vt,d],l(E);var M=c(E,2),Q=c(i(M),2);se(Q),Q.__change=[Wt,d],l(M);var D=c(M,2),x=c(i(D),2);se(x),x.__change=[Xt,d],l(D),l(p);var v=c(p,4),A=i(v),b=c(i(A),2);se(b),b.__change=[Yt,d],l(A);var o=c(A,2),j=c(i(o),2);se(j),j.__change=[qt,d],l(o);var P=c(o,2),$=c(i(P),2);se($),$.__change=[Ft,d],l(P),l(v);var L=c(v,4),y=c(i(L),2);se(y),y.__change=[Gt,d],l(L),l(U),l(f),Se(2),l(V),je(V,W=>w=W,()=>w);var le=c(V,2),Ne=i(le);ee(Ne,"inline",!0),ee(Ne,"icon","mdi:white-balance-sunny");var We=c(Ne,4);ee(We,"inline",!0),ee(We,"icon","mdi:moon-and-stars"),l(le),l(C),z(()=>{var W,ce,me,pe,ge,ae,ue,Xe,Ye,qe,Fe,Ge;Ze(J,(W=t(n))==null?void 0:W.connection.url),Ze(ve,(ce=t(n))==null?void 0:ce.connection.token),oe.disabled=t(m)!=="disconnected",Z.disabled=t(m)==="disconnected",ie(S,(me=t(n))==null?void 0:me.display.canvas.name),ie(O,(pe=t(n))==null?void 0:pe.display.canvas.team),ie(K,(ge=t(n))==null?void 0:ge.display.canvas.role),ie(R,(ae=t(n))==null?void 0:ae.display.bubble.name),ie(Q,(ue=t(n))==null?void 0:ue.display.bubble.team),ie(x,(Xe=t(n))==null?void 0:Xe.display.bubble.role),ie(b,(Ye=t(n))==null?void 0:Ye.display.text.name),ie(j,(qe=t(n))==null?void 0:qe.display.text.team),ie($,(Fe=t(n))==null?void 0:Fe.display.text.role),ie(y,(Ge=t(n))==null?void 0:Ge.display.largeScale)}),k(a,C),Ue()}Ke(["input","click","change"]);var $t=N("<option> </option>"),ea=N('<div class="divider"> </div>'),ta=N('<p class="overflow-hidden text-ellipsis whitespace-nowrap"> </p> <iconify-icon></iconify-icon>',3),aa=N('<p class="overflow-hidden text-ellipsis whitespace-nowrap"> </p> <iconify-icon></iconify-icon>',3),na=N('<p class="overflow-hidden text-ellipsis whitespace-nowrap"> </p>'),ra=N('<p class="overflow-hidden text-ellipsis whitespace-nowrap"><!> </p>'),sa=N('<!> <button class="btn"><!></button>',1),la=N('<main class="h-screen flex flex-col"><!> <div class="flex flex-1 overflow-hidden w-full flex-col md:flex-row"><div class="flex-auto bg-base-300"><!></div> <div class="w-full md:w-64 max-md:h-32 flex flex-col bg-base-200 p-2"><select class="w-full select"></select> <ul class="list overflow-y-auto flex-1 my-2 px-2"></ul></div></div></main>');function wa(a,e){ze(e,!0);const[n,m]=ot(),u=()=>Ee(I,"$status",n),G=()=>Ee(ne,"$currentPacket",n),d=()=>Ee(C,"$selectedId",n),w=()=>Ee(g,"$entries",n),C=_e(""),H=_e(0),q={id:"",idx:-1,day:0,isDay:!0,agents:ht(5),event:"未接続",message:void 0,fromIdx:void 0,toIdx:void 0,bubbleIdx:void 0},ne=_e(q),g=_e({}),I=_e("");let T=Ie(void 0);at(()=>{const V=Oe.entries.subscribe(r=>{g.set(r),C.update(s=>s||Object.keys(r)[0]||"")}),f=Oe.subscribe(r=>{I.set(r.status)});C.subscribe(r=>{g.update(s=>{var S;return r&&((S=s[r])==null?void 0:S.length)>0&&H.set(s[r].length-1),s})});const U=we.subscribe(r=>{ke(T,Te(r))});ut([C,H,g],([r,s,S])=>S[r]&&s>=0&&s<S[r].length?S[r][s]:q).subscribe(r=>{ne.set(r)}),Ve(()=>{V(),f(),U()}),window.addEventListener("beforeunload",r=>{u()==="connecting"&&r.preventDefault()})});var B=la();lt(V=>{st.title="aiwolf-nlp-viewer"});var J=i(B);Zt(J,{});var te=c(J,2),re=i(te),ve=i(re);Jt(ve,{get packet(){return G()}}),l(re);var oe=c(re,2),Z=i(oe);De(Z,5,()=>Object.keys(w()),Be,(V,f)=>{var U=$t(),r={},s=i(U,!0);l(U),z(()=>{r!==(r=t(f))&&(U.value=(U.__value=t(f))==null?"":t(f)),Y(s,t(f))}),k(V,U)}),l(Z);var be=c(Z,2);De(be,5,()=>w()[d()]||[],Be,(V,f,U)=>{var r=sa(),s=fe(r);{var S=p=>{var E=ea(),R=i(E);l(E),z(()=>Y(R,`${t(f).day??""}日目 ${(t(f).isDay?"昼":"夜")??""}`)),k(p,E)};F(s,p=>{(U>0&&(t(f).day!==w()[d()][U-1].day||t(f).isDay!==w()[d()][U-1].isDay)||U===0)&&p(S)})}var h=c(s,2);h.__click=()=>H.set(U);var O=i(h);{var _=p=>{var E=ye(),R=fe(E);{var M=D=>{var x=ta(),v=fe(x),A=i(v,!0);l(v);var b=c(v,2);ee(b,"inline",!0),ee(b,"icon","mdi:skip-forward"),z(o=>Y(A,o),[()=>{var o;return X((o=t(T))==null?void 0:o.display.text,t(f),t(f).bubbleIdx)}]),k(D,x)},Q=D=>{var x=ye(),v=fe(x);{var A=o=>{var j=aa(),P=fe(j),$=i(P,!0);l(P);var L=c(P,2);ee(L,"inline",!0),ee(L,"icon","mdi:arrow-u-down-right-bold"),z(y=>Y($,y),[()=>{var y;return X((y=t(T))==null?void 0:y.display.text,t(f),t(f).bubbleIdx)}]),k(o,j)},b=o=>{var j=na(),P=i(j,!0);l(j),z($=>Y(P,$),[()=>{var $;return X(($=t(T))==null?void 0:$.display.text,t(f),t(f).bubbleIdx)+"<"+t(f).message}]),k(o,j)};F(v,o=>{t(f).message==="Skip"?o(A):o(b,!1)},!0)}k(D,x)};F(R,D=>{t(f).message==="Over"?D(M):D(Q,!1)})}k(p,E)},K=p=>{var E=ra(),R=i(E);{var M=x=>{var v=Qe();z(A=>Y(v,A),[()=>{var A;return X((A=t(T))==null?void 0:A.display.text,t(f),t(f).fromIdx)}]),k(x,v)},Q=x=>{var v=ye(),A=fe(v);{var b=o=>{var j=Qe();z(P=>Y(j,P),[()=>{var P;return X((P=t(T))==null?void 0:P.display.text,t(f),t(f).toIdx)}]),k(o,j)};F(A,o=>{(t(f).event==="追放"||t(f).event==="襲撃")&&o(b)},!0)}k(x,v)};F(R,x=>{t(f).event==="投票"||t(f).event==="占い"?x(M):x(Q,!1)})}var D=c(R);l(E),z(()=>Y(D,` ${t(f).event??""}`)),k(p,E)};F(O,p=>{t(f).event==="トーク"||t(f).event==="囁き"?p(_):p(K,!1)})}l(h),k(V,r)}),l(be),l(oe),l(te),l(B),it(Z,d,V=>ct(C,V)),k(a,B),Ue(),m()}Ke(["click"]);export{wa as component};
