(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function Bn(i,e){const t=Object.create(null),s=i.split(",");for(let n=0;n<s.length;n++)t[s[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}const ha="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ua=Bn(ha);function Pr(i){return!!i||i===""}function Ln(i){if(H(i)){const e={};for(let t=0;t<i.length;t++){const s=i[t],n=ve(s)?ga(s):Ln(s);if(n)for(const o in n)e[o]=n[o]}return e}else{if(ve(i))return i;if(de(i))return i}}const fa=/;(?![^(]*\))/g,pa=/:(.+)/;function ga(i){const e={};return i.split(fa).forEach(t=>{if(t){const s=t.split(pa);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hn(i){let e="";if(ve(i))e=i;else if(H(i))for(let t=0;t<i.length;t++){const s=Hn(i[t]);s&&(e+=s+" ")}else if(de(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const J={},ni=[],Qe=()=>{},ba=()=>!1,ma=/^on[^a-z]/,Is=i=>ma.test(i),Mn=i=>i.startsWith("onUpdate:"),me=Object.assign,Nn=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},va=Object.prototype.hasOwnProperty,j=(i,e)=>va.call(i,e),H=Array.isArray,_i=i=>Os(i)==="[object Map]",ya=i=>Os(i)==="[object Set]",L=i=>typeof i=="function",ve=i=>typeof i=="string",Vn=i=>typeof i=="symbol",de=i=>i!==null&&typeof i=="object",Fr=i=>de(i)&&L(i.then)&&L(i.catch),xa=Object.prototype.toString,Os=i=>xa.call(i),wa=i=>Os(i).slice(8,-1),Ca=i=>Os(i)==="[object Object]",zn=i=>ve(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,hs=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),As=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},$a=/-(\w)/g,rt=As(i=>i.replace($a,(e,t)=>t?t.toUpperCase():"")),ka=/\B([A-Z])/g,pi=As(i=>i.replace(ka,"-$1").toLowerCase()),Es=As(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ws=As(i=>i?`on${Es(i)}`:""),ms=(i,e)=>!Object.is(i,e),Gs=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},vs=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Ta=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ao;const Ia=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let it;class Oa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(e){if(this.active){const t=it;try{return it=this,e()}finally{it=t}}}on(){it=this}off(){it=this.parent}stop(e){if(this.active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this.active=!1}}}function Aa(i,e=it){e&&e.active&&e.effects.push(i)}const jn=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Br=i=>(i.w&It)>0,Lr=i=>(i.n&It)>0,Ea=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=It},Sa=i=>{const{deps:e}=i;if(e.length){let t=0;for(let s=0;s<e.length;s++){const n=e[s];Br(n)&&!Lr(n)?n.delete(i):e[t++]=n,n.w&=~It,n.n&=~It}e.length=t}},mn=new WeakMap;let Ri=0,It=1;const vn=30;let Ue;const Ut=Symbol(""),yn=Symbol("");class Un{constructor(e,t=null,s){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Aa(this,s)}run(){if(!this.active)return this.fn();let e=Ue,t=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,Ct=!0,It=1<<++Ri,Ri<=vn?Ea(this):Eo(this),this.fn()}finally{Ri<=vn&&Sa(this),It=1<<--Ri,Ue=this.parent,Ct=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Eo(this),this.onStop&&this.onStop(),this.active=!1)}}function Eo(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Ct=!0;const Hr=[];function gi(){Hr.push(Ct),Ct=!1}function bi(){const i=Hr.pop();Ct=i===void 0?!0:i}function Be(i,e,t){if(Ct&&Ue){let s=mn.get(i);s||mn.set(i,s=new Map);let n=s.get(t);n||s.set(t,n=jn()),Mr(n)}}function Mr(i,e){let t=!1;Ri<=vn?Lr(i)||(i.n|=It,t=!Br(i)):t=!i.has(Ue),t&&(i.add(Ue),Ue.deps.push(i))}function ft(i,e,t,s,n,o){const r=mn.get(i);if(!r)return;let l=[];if(e==="clear")l=[...r.values()];else if(t==="length"&&H(i))r.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(t!==void 0&&l.push(r.get(t)),e){case"add":H(i)?zn(t)&&l.push(r.get("length")):(l.push(r.get(Ut)),_i(i)&&l.push(r.get(yn)));break;case"delete":H(i)||(l.push(r.get(Ut)),_i(i)&&l.push(r.get(yn)));break;case"set":_i(i)&&l.push(r.get(Ut));break}if(l.length===1)l[0]&&xn(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);xn(jn(a))}}function xn(i,e){const t=H(i)?i:[...i];for(const s of t)s.computed&&So(s);for(const s of t)s.computed||So(s)}function So(i,e){(i!==Ue||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Ra=Bn("__proto__,__v_isRef,__isVue"),Nr=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Vn)),_a=qn(),Da=qn(!1,!0),Pa=qn(!0),Ro=Fa();function Fa(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const s=W(this);for(let o=0,r=this.length;o<r;o++)Be(s,"get",o+"");const n=s[e](...t);return n===-1||n===!1?s[e](...t.map(W)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){gi();const s=W(this)[e].apply(this,t);return bi(),s}}),i}function qn(i=!1,e=!1){return function(s,n,o){if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&o===(i?e?Xa:qr:e?Ur:jr).get(s))return s;const r=H(s);if(!i&&r&&j(Ro,n))return Reflect.get(Ro,n,o);const l=Reflect.get(s,n,o);return(Vn(n)?Nr.has(n):Ra(n))||(i||Be(s,"get",n),e)?l:Te(l)?r&&zn(n)?l:l.value:de(l)?i?Wr(l):Qn(l):l}}const Ba=Vr(),La=Vr(!0);function Vr(i=!1){return function(t,s,n,o){let r=t[s];if(Hi(r)&&Te(r)&&!Te(n))return!1;if(!i&&(!wn(n)&&!Hi(n)&&(r=W(r),n=W(n)),!H(t)&&Te(r)&&!Te(n)))return r.value=n,!0;const l=H(t)&&zn(s)?Number(s)<t.length:j(t,s),a=Reflect.set(t,s,n,o);return t===W(o)&&(l?ms(n,r)&&ft(t,"set",s,n):ft(t,"add",s,n)),a}}function Ha(i,e){const t=j(i,e);i[e];const s=Reflect.deleteProperty(i,e);return s&&t&&ft(i,"delete",e,void 0),s}function Ma(i,e){const t=Reflect.has(i,e);return(!Vn(e)||!Nr.has(e))&&Be(i,"has",e),t}function Na(i){return Be(i,"iterate",H(i)?"length":Ut),Reflect.ownKeys(i)}const zr={get:_a,set:Ba,deleteProperty:Ha,has:Ma,ownKeys:Na},Va={get:Pa,set(i,e){return!0},deleteProperty(i,e){return!0}},za=me({},zr,{get:Da,set:La}),Wn=i=>i,Ss=i=>Reflect.getPrototypeOf(i);function es(i,e,t=!1,s=!1){i=i.__v_raw;const n=W(i),o=W(e);t||(e!==o&&Be(n,"get",e),Be(n,"get",o));const{has:r}=Ss(n),l=s?Wn:t?Xn:Jn;if(r.call(n,e))return l(i.get(e));if(r.call(n,o))return l(i.get(o));i!==n&&i.get(e)}function ts(i,e=!1){const t=this.__v_raw,s=W(t),n=W(i);return e||(i!==n&&Be(s,"has",i),Be(s,"has",n)),i===n?t.has(i):t.has(i)||t.has(n)}function is(i,e=!1){return i=i.__v_raw,!e&&Be(W(i),"iterate",Ut),Reflect.get(i,"size",i)}function _o(i){i=W(i);const e=W(this);return Ss(e).has.call(e,i)||(e.add(i),ft(e,"add",i,i)),this}function Do(i,e){e=W(e);const t=W(this),{has:s,get:n}=Ss(t);let o=s.call(t,i);o||(i=W(i),o=s.call(t,i));const r=n.call(t,i);return t.set(i,e),o?ms(e,r)&&ft(t,"set",i,e):ft(t,"add",i,e),this}function Po(i){const e=W(this),{has:t,get:s}=Ss(e);let n=t.call(e,i);n||(i=W(i),n=t.call(e,i)),s&&s.call(e,i);const o=e.delete(i);return n&&ft(e,"delete",i,void 0),o}function Fo(){const i=W(this),e=i.size!==0,t=i.clear();return e&&ft(i,"clear",void 0,void 0),t}function ss(i,e){return function(s,n){const o=this,r=o.__v_raw,l=W(r),a=e?Wn:i?Xn:Jn;return!i&&Be(l,"iterate",Ut),r.forEach((c,u)=>s.call(n,a(c),a(u),o))}}function ns(i,e,t){return function(...s){const n=this.__v_raw,o=W(n),r=_i(o),l=i==="entries"||i===Symbol.iterator&&r,a=i==="keys"&&r,c=n[i](...s),u=t?Wn:e?Xn:Jn;return!e&&Be(o,"iterate",a?yn:Ut),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function yt(i){return function(...e){return i==="delete"?!1:this}}function ja(){const i={get(o){return es(this,o)},get size(){return is(this)},has:ts,add:_o,set:Do,delete:Po,clear:Fo,forEach:ss(!1,!1)},e={get(o){return es(this,o,!1,!0)},get size(){return is(this)},has:ts,add:_o,set:Do,delete:Po,clear:Fo,forEach:ss(!1,!0)},t={get(o){return es(this,o,!0)},get size(){return is(this,!0)},has(o){return ts.call(this,o,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:ss(!0,!1)},s={get(o){return es(this,o,!0,!0)},get size(){return is(this,!0)},has(o){return ts.call(this,o,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=ns(o,!1,!1),t[o]=ns(o,!0,!1),e[o]=ns(o,!1,!0),s[o]=ns(o,!0,!0)}),[i,t,e,s]}const[Ua,qa,Wa,Ga]=ja();function Gn(i,e){const t=e?i?Ga:Wa:i?qa:Ua;return(s,n,o)=>n==="__v_isReactive"?!i:n==="__v_isReadonly"?i:n==="__v_raw"?s:Reflect.get(j(t,n)&&n in s?t:s,n,o)}const Qa={get:Gn(!1,!1)},Ya={get:Gn(!1,!0)},Ja={get:Gn(!0,!1)},jr=new WeakMap,Ur=new WeakMap,qr=new WeakMap,Xa=new WeakMap;function Za(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ka(i){return i.__v_skip||!Object.isExtensible(i)?0:Za(wa(i))}function Qn(i){return Hi(i)?i:Yn(i,!1,zr,Qa,jr)}function ec(i){return Yn(i,!1,za,Ya,Ur)}function Wr(i){return Yn(i,!0,Va,Ja,qr)}function Yn(i,e,t,s,n){if(!de(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const o=n.get(i);if(o)return o;const r=Ka(i);if(r===0)return i;const l=new Proxy(i,r===2?s:t);return n.set(i,l),l}function oi(i){return Hi(i)?oi(i.__v_raw):!!(i&&i.__v_isReactive)}function Hi(i){return!!(i&&i.__v_isReadonly)}function wn(i){return!!(i&&i.__v_isShallow)}function Gr(i){return oi(i)||Hi(i)}function W(i){const e=i&&i.__v_raw;return e?W(e):i}function Qr(i){return vs(i,"__v_skip",!0),i}const Jn=i=>de(i)?Qn(i):i,Xn=i=>de(i)?Wr(i):i;function tc(i){Ct&&Ue&&(i=W(i),Mr(i.dep||(i.dep=jn())))}function ic(i,e){i=W(i),i.dep&&xn(i.dep)}function Te(i){return!!(i&&i.__v_isRef===!0)}function sc(i){return Te(i)?i.value:i}const nc={get:(i,e,t)=>sc(Reflect.get(i,e,t)),set:(i,e,t,s)=>{const n=i[e];return Te(n)&&!Te(t)?(n.value=t,!0):Reflect.set(i,e,t,s)}};function Yr(i){return oi(i)?i:new Proxy(i,nc)}var Jr;class oc{constructor(e,t,s,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Jr]=!1,this._dirty=!0,this.effect=new Un(e,()=>{this._dirty||(this._dirty=!0,ic(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=W(this);return tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Jr="__v_isReadonly";function rc(i,e,t=!1){let s,n;const o=L(i);return o?(s=i,n=Qe):(s=i.get,n=i.set),new oc(s,n,o||!n,t)}function $t(i,e,t,s){let n;try{n=s?i(...s):i()}catch(o){Rs(o,e,t)}return n}function Ne(i,e,t,s){if(L(i)){const o=$t(i,e,t,s);return o&&Fr(o)&&o.catch(r=>{Rs(r,e,t)}),o}const n=[];for(let o=0;o<i.length;o++)n.push(Ne(i[o],e,t,s));return n}function Rs(i,e,t,s=!0){const n=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,l=t;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,r,l)===!1)return}o=o.parent}const a=e.appContext.config.errorHandler;if(a){$t(a,null,10,[i,r,l]);return}}lc(i,t,n,s)}function lc(i,e,t,s=!0){console.error(i)}let Mi=!1,Cn=!1;const ge=[];let ot=0;const ri=[];let ct=null,Mt=0;const Xr=Promise.resolve();let Zn=null;function ac(i){const e=Zn||Xr;return i?e.then(this?i.bind(this):i):e}function cc(i){let e=ot+1,t=ge.length;for(;e<t;){const s=e+t>>>1;Ni(ge[s])<i?e=s+1:t=s}return e}function Kn(i){(!ge.length||!ge.includes(i,Mi&&i.allowRecurse?ot+1:ot))&&(i.id==null?ge.push(i):ge.splice(cc(i.id),0,i),Zr())}function Zr(){!Mi&&!Cn&&(Cn=!0,Zn=Xr.then(el))}function dc(i){const e=ge.indexOf(i);e>ot&&ge.splice(e,1)}function hc(i){H(i)?ri.push(...i):(!ct||!ct.includes(i,i.allowRecurse?Mt+1:Mt))&&ri.push(i),Zr()}function Bo(i,e=Mi?ot+1:0){for(;e<ge.length;e++){const t=ge[e];t&&t.pre&&(ge.splice(e,1),e--,t())}}function Kr(i){if(ri.length){const e=[...new Set(ri)];if(ri.length=0,ct){ct.push(...e);return}for(ct=e,ct.sort((t,s)=>Ni(t)-Ni(s)),Mt=0;Mt<ct.length;Mt++)ct[Mt]();ct=null,Mt=0}}const Ni=i=>i.id==null?1/0:i.id,uc=(i,e)=>{const t=Ni(i)-Ni(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function el(i){Cn=!1,Mi=!0,ge.sort(uc);const e=Qe;try{for(ot=0;ot<ge.length;ot++){const t=ge[ot];t&&t.active!==!1&&$t(t,null,14)}}finally{ot=0,ge.length=0,Kr(),Mi=!1,Zn=null,(ge.length||ri.length)&&el()}}function fc(i,e,...t){if(i.isUnmounted)return;const s=i.vnode.props||J;let n=t;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:h,trim:g}=s[u]||J;g&&(n=t.map(k=>k.trim())),h&&(n=t.map(Ta))}let l,a=s[l=Ws(e)]||s[l=Ws(rt(e))];!a&&o&&(a=s[l=Ws(pi(e))]),a&&Ne(a,i,6,n);const c=s[l+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[l])return;i.emitted[l]=!0,Ne(c,i,6,n)}}function tl(i,e,t=!1){const s=e.emitsCache,n=s.get(i);if(n!==void 0)return n;const o=i.emits;let r={},l=!1;if(!L(i)){const a=c=>{const u=tl(c,e,!0);u&&(l=!0,me(r,u))};!t&&e.mixins.length&&e.mixins.forEach(a),i.extends&&a(i.extends),i.mixins&&i.mixins.forEach(a)}return!o&&!l?(de(i)&&s.set(i,null),null):(H(o)?o.forEach(a=>r[a]=null):me(r,o),de(i)&&s.set(i,r),r)}function _s(i,e){return!i||!Is(e)?!1:(e=e.slice(2).replace(/Once$/,""),j(i,e[0].toLowerCase()+e.slice(1))||j(i,pi(e))||j(i,e))}let We=null,il=null;function ys(i){const e=We;return We=i,il=i&&i.type.__scopeId||null,e}function pc(i,e=We,t){if(!e||i._n)return i;const s=(...n)=>{s._d&&Go(-1);const o=ys(e);let r;try{r=i(...n)}finally{ys(o),s._d&&Go(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Qs(i){const{type:e,vnode:t,proxy:s,withProxy:n,props:o,propsOptions:[r],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:g,setupState:k,ctx:S,inheritAttrs:I}=i;let F,B;const ae=ys(i);try{if(t.shapeFlag&4){const se=n||s;F=nt(u.call(se,se,h,o,k,g,S)),B=a}else{const se=e;F=nt(se.length>1?se(o,{attrs:a,slots:l,emit:c}):se(o,null)),B=e.props?a:gc(a)}}catch(se){Di.length=0,Rs(se,i,1),F=kt(ut)}let ie=F;if(B&&I!==!1){const se=Object.keys(B),{shapeFlag:re}=ie;se.length&&re&7&&(r&&se.some(Mn)&&(B=bc(B,r)),ie=Ot(ie,B))}return t.dirs&&(ie=Ot(ie),ie.dirs=ie.dirs?ie.dirs.concat(t.dirs):t.dirs),t.transition&&(ie.transition=t.transition),F=ie,ys(ae),F}const gc=i=>{let e;for(const t in i)(t==="class"||t==="style"||Is(t))&&((e||(e={}))[t]=i[t]);return e},bc=(i,e)=>{const t={};for(const s in i)(!Mn(s)||!(s.slice(9)in e))&&(t[s]=i[s]);return t};function mc(i,e,t){const{props:s,children:n,component:o}=i,{props:r,children:l,patchFlag:a}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?Lo(s,r,c):!!r;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(r[g]!==s[g]&&!_s(c,g))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Lo(s,r,c):!0:!!r;return!1}function Lo(i,e,t){const s=Object.keys(e);if(s.length!==Object.keys(i).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==i[o]&&!_s(t,o))return!0}return!1}function vc({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const yc=i=>i.__isSuspense;function xc(i,e){e&&e.pendingBranch?H(i)?e.effects.push(...i):e.effects.push(i):hc(i)}function wc(i,e){if(pe){let t=pe.provides;const s=pe.parent&&pe.parent.provides;s===t&&(t=pe.provides=Object.create(s)),t[i]=e}}function Ys(i,e,t=!1){const s=pe||We;if(s){const n=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(n&&i in n)return n[i];if(arguments.length>1)return t&&L(e)?e.call(s.proxy):e}}const Ho={};function Js(i,e,t){return sl(i,e,t)}function sl(i,e,{immediate:t,deep:s,flush:n,onTrack:o,onTrigger:r}=J){const l=pe;let a,c=!1,u=!1;if(Te(i)?(a=()=>i.value,c=wn(i)):oi(i)?(a=()=>i,s=!0):H(i)?(u=!0,c=i.some(B=>oi(B)||wn(B)),a=()=>i.map(B=>{if(Te(B))return B.value;if(oi(B))return ti(B);if(L(B))return $t(B,l,2)})):L(i)?e?a=()=>$t(i,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ne(i,l,3,[g])}:a=Qe,e&&s){const B=a;a=()=>ti(B())}let h,g=B=>{h=F.onStop=()=>{$t(B,l,4)}};if(zi)return g=Qe,e?t&&Ne(e,l,3,[a(),u?[]:void 0,g]):a(),Qe;let k=u?[]:Ho;const S=()=>{if(!!F.active)if(e){const B=F.run();(s||c||(u?B.some((ae,ie)=>ms(ae,k[ie])):ms(B,k)))&&(h&&h(),Ne(e,l,3,[B,k===Ho?void 0:k,g]),k=B)}else F.run()};S.allowRecurse=!!e;let I;n==="sync"?I=S:n==="post"?I=()=>Se(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),I=()=>Kn(S));const F=new Un(a,I);return e?t?S():k=F.run():n==="post"?Se(F.run.bind(F),l&&l.suspense):F.run(),()=>{F.stop(),l&&l.scope&&Nn(l.scope.effects,F)}}function Cc(i,e,t){const s=this.proxy,n=ve(i)?i.includes(".")?nl(s,i):()=>s[i]:i.bind(s,s);let o;L(e)?o=e:(o=e.handler,t=e);const r=pe;di(this);const l=sl(n,o.bind(s),t);return r?di(r):qt(),l}function nl(i,e){const t=e.split(".");return()=>{let s=i;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}function ti(i,e){if(!de(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Te(i))ti(i.value,e);else if(H(i))for(let t=0;t<i.length;t++)ti(i[t],e);else if(ya(i)||_i(i))i.forEach(t=>{ti(t,e)});else if(Ca(i))for(const t in i)ti(i[t],e);return i}function $c(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return al(()=>{i.isMounted=!0}),cl(()=>{i.isUnmounting=!0}),i}const He=[Function,Array],kc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(i,{slots:e}){const t=gd(),s=$c();let n;return()=>{const o=e.default&&rl(e.default(),!0);if(!o||!o.length)return;let r=o[0];if(o.length>1){for(const I of o)if(I.type!==ut){r=I;break}}const l=W(i),{mode:a}=l;if(s.isLeaving)return Xs(r);const c=Mo(r);if(!c)return Xs(r);const u=$n(c,l,s,t);kn(c,u);const h=t.subTree,g=h&&Mo(h);let k=!1;const{getTransitionKey:S}=c.type;if(S){const I=S();n===void 0?n=I:I!==n&&(n=I,k=!0)}if(g&&g.type!==ut&&(!Nt(c,g)||k)){const I=$n(g,l,s,t);if(kn(g,I),a==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,t.update()},Xs(r);a==="in-out"&&c.type!==ut&&(I.delayLeave=(F,B,ae)=>{const ie=ol(s,g);ie[String(g.key)]=g,F._leaveCb=()=>{B(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return r}}},Tc=kc;function ol(i,e){const{leavingVNodes:t}=i;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function $n(i,e,t,s){const{appear:n,mode:o,persisted:r=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:g,onAfterLeave:k,onLeaveCancelled:S,onBeforeAppear:I,onAppear:F,onAfterAppear:B,onAppearCancelled:ae}=e,ie=String(i.key),se=ol(t,i),re=(M,ue)=>{M&&Ne(M,s,9,ue)},Xt=(M,ue)=>{const ne=ue[1];re(M,ue),H(M)?M.every(Pe=>Pe.length<=1)&&ne():M.length<=1&&ne()},vt={mode:o,persisted:r,beforeEnter(M){let ue=l;if(!t.isMounted)if(n)ue=I||l;else return;M._leaveCb&&M._leaveCb(!0);const ne=se[ie];ne&&Nt(i,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),re(ue,[M])},enter(M){let ue=a,ne=c,Pe=u;if(!t.isMounted)if(n)ue=F||a,ne=B||c,Pe=ae||u;else return;let Ze=!1;const lt=M._enterCb=ki=>{Ze||(Ze=!0,ki?re(Pe,[M]):re(ne,[M]),vt.delayedLeave&&vt.delayedLeave(),M._enterCb=void 0)};ue?Xt(ue,[M,lt]):lt()},leave(M,ue){const ne=String(i.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return ue();re(h,[M]);let Pe=!1;const Ze=M._leaveCb=lt=>{Pe||(Pe=!0,ue(),lt?re(S,[M]):re(k,[M]),M._leaveCb=void 0,se[ne]===i&&delete se[ne])};se[ne]=i,g?Xt(g,[M,Ze]):Ze()},clone(M){return $n(M,e,t,s)}};return vt}function Xs(i){if(Ds(i))return i=Ot(i),i.children=null,i}function Mo(i){return Ds(i)?i.children?i.children[0]:void 0:i}function kn(i,e){i.shapeFlag&6&&i.component?kn(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function rl(i,e=!1,t){let s=[],n=0;for(let o=0;o<i.length;o++){let r=i[o];const l=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===st?(r.patchFlag&128&&n++,s=s.concat(rl(r.children,e,l))):(e||r.type!==ut)&&s.push(l!=null?Ot(r,{key:l}):r)}if(n>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Ic(i){return L(i)?{setup:i,name:i.name}:i}const us=i=>!!i.type.__asyncLoader,Ds=i=>i.type.__isKeepAlive;function Oc(i,e){ll(i,"a",e)}function Ac(i,e){ll(i,"da",e)}function ll(i,e,t=pe){const s=i.__wdc||(i.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return i()});if(Ps(e,s,t),t){let n=t.parent;for(;n&&n.parent;)Ds(n.parent.vnode)&&Ec(s,e,t,n),n=n.parent}}function Ec(i,e,t,s){const n=Ps(e,i,s,!0);dl(()=>{Nn(s[e],n)},t)}function Ps(i,e,t=pe,s=!1){if(t){const n=t[i]||(t[i]=[]),o=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;gi(),di(t);const l=Ne(e,t,i,r);return qt(),bi(),l});return s?n.unshift(o):n.push(o),o}}const gt=i=>(e,t=pe)=>(!zi||i==="sp")&&Ps(i,(...s)=>e(...s),t),Sc=gt("bm"),al=gt("m"),Rc=gt("bu"),_c=gt("u"),cl=gt("bum"),dl=gt("um"),Dc=gt("sp"),Pc=gt("rtg"),Fc=gt("rtc");function Bc(i,e=pe){Ps("ec",i,e)}function Ft(i,e,t,s){const n=i.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let a=l.dir[s];a&&(gi(),Ne(a,t,8,[i.el,l,i,e]),bi())}}const hl="components";function Lc(i,e){return Mc(hl,i,!0,e)||i}const Hc=Symbol();function Mc(i,e,t=!0,s=!1){const n=We||pe;if(n){const o=n.type;if(i===hl){const l=xd(o,!1);if(l&&(l===e||l===rt(e)||l===Es(rt(e))))return o}const r=No(n[i]||o[i],e)||No(n.appContext[i],e);return!r&&s?o:r}}function No(i,e){return i&&(i[e]||i[rt(e)]||i[Es(rt(e))])}const Tn=i=>i?Cl(i)?no(i)||i.proxy:Tn(i.parent):null,xs=me(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Tn(i.parent),$root:i=>Tn(i.root),$emit:i=>i.emit,$options:i=>eo(i),$forceUpdate:i=>i.f||(i.f=()=>Kn(i.update)),$nextTick:i=>i.n||(i.n=ac.bind(i.proxy)),$watch:i=>Cc.bind(i)}),Nc={get({_:i},e){const{ctx:t,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:a}=i;let c;if(e[0]!=="$"){const k=r[e];if(k!==void 0)switch(k){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return o[e]}else{if(s!==J&&j(s,e))return r[e]=1,s[e];if(n!==J&&j(n,e))return r[e]=2,n[e];if((c=i.propsOptions[0])&&j(c,e))return r[e]=3,o[e];if(t!==J&&j(t,e))return r[e]=4,t[e];In&&(r[e]=0)}}const u=xs[e];let h,g;if(u)return e==="$attrs"&&Be(i,"get",e),u(i);if((h=l.__cssModules)&&(h=h[e]))return h;if(t!==J&&j(t,e))return r[e]=4,t[e];if(g=a.config.globalProperties,j(g,e))return g[e]},set({_:i},e,t){const{data:s,setupState:n,ctx:o}=i;return n!==J&&j(n,e)?(n[e]=t,!0):s!==J&&j(s,e)?(s[e]=t,!0):j(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(o[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:s,appContext:n,propsOptions:o}},r){let l;return!!t[r]||i!==J&&j(i,r)||e!==J&&j(e,r)||(l=o[0])&&j(l,r)||j(s,r)||j(xs,r)||j(n.config.globalProperties,r)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:j(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let In=!0;function Vc(i){const e=eo(i),t=i.proxy,s=i.ctx;In=!1,e.beforeCreate&&Vo(e.beforeCreate,i,"bc");const{data:n,computed:o,methods:r,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:g,beforeUpdate:k,updated:S,activated:I,deactivated:F,beforeDestroy:B,beforeUnmount:ae,destroyed:ie,unmounted:se,render:re,renderTracked:Xt,renderTriggered:vt,errorCaptured:M,serverPrefetch:ue,expose:ne,inheritAttrs:Pe,components:Ze,directives:lt,filters:ki}=e;if(c&&zc(c,s,null,i.appContext.config.unwrapInjectedRef),r)for(const oe in r){const Q=r[oe];L(Q)&&(s[oe]=Q.bind(t))}if(n){const oe=n.call(t,t);de(oe)&&(i.data=Qn(oe))}if(In=!0,o)for(const oe in o){const Q=o[oe],Dt=L(Q)?Q.bind(t,t):L(Q.get)?Q.get.bind(t,t):Qe,Zi=!L(Q)&&L(Q.set)?Q.set.bind(t):Qe,Pt=Cd({get:Dt,set:Zi});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Ke=>Pt.value=Ke})}if(l)for(const oe in l)ul(l[oe],s,t,oe);if(a){const oe=L(a)?a.call(t):a;Reflect.ownKeys(oe).forEach(Q=>{wc(Q,oe[Q])})}u&&Vo(u,i,"c");function Ce(oe,Q){H(Q)?Q.forEach(Dt=>oe(Dt.bind(t))):Q&&oe(Q.bind(t))}if(Ce(Sc,h),Ce(al,g),Ce(Rc,k),Ce(_c,S),Ce(Oc,I),Ce(Ac,F),Ce(Bc,M),Ce(Fc,Xt),Ce(Pc,vt),Ce(cl,ae),Ce(dl,se),Ce(Dc,ue),H(ne))if(ne.length){const oe=i.exposed||(i.exposed={});ne.forEach(Q=>{Object.defineProperty(oe,Q,{get:()=>t[Q],set:Dt=>t[Q]=Dt})})}else i.exposed||(i.exposed={});re&&i.render===Qe&&(i.render=re),Pe!=null&&(i.inheritAttrs=Pe),Ze&&(i.components=Ze),lt&&(i.directives=lt)}function zc(i,e,t=Qe,s=!1){H(i)&&(i=On(i));for(const n in i){const o=i[n];let r;de(o)?"default"in o?r=Ys(o.from||n,o.default,!0):r=Ys(o.from||n):r=Ys(o),Te(r)&&s?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):e[n]=r}}function Vo(i,e,t){Ne(H(i)?i.map(s=>s.bind(e.proxy)):i.bind(e.proxy),e,t)}function ul(i,e,t,s){const n=s.includes(".")?nl(t,s):()=>t[s];if(ve(i)){const o=e[i];L(o)&&Js(n,o)}else if(L(i))Js(n,i.bind(t));else if(de(i))if(H(i))i.forEach(o=>ul(o,e,t,s));else{const o=L(i.handler)?i.handler.bind(t):e[i.handler];L(o)&&Js(n,o,i)}}function eo(i){const e=i.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=i.appContext,l=o.get(e);let a;return l?a=l:!n.length&&!t&&!s?a=e:(a={},n.length&&n.forEach(c=>ws(a,c,r,!0)),ws(a,e,r)),de(e)&&o.set(e,a),a}function ws(i,e,t,s=!1){const{mixins:n,extends:o}=e;o&&ws(i,o,t,!0),n&&n.forEach(r=>ws(i,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const l=jc[r]||t&&t[r];i[r]=l?l(i[r],e[r]):e[r]}return i}const jc={data:zo,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Ht,directives:Ht,watch:qc,provide:zo,inject:Uc};function zo(i,e){return e?i?function(){return me(L(i)?i.call(this,this):i,L(e)?e.call(this,this):e)}:e:i}function Uc(i,e){return Ht(On(i),On(e))}function On(i){if(H(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function $e(i,e){return i?[...new Set([].concat(i,e))]:e}function Ht(i,e){return i?me(me(Object.create(null),i),e):e}function qc(i,e){if(!i)return e;if(!e)return i;const t=me(Object.create(null),i);for(const s in e)t[s]=$e(i[s],e[s]);return t}function Wc(i,e,t,s=!1){const n={},o={};vs(o,Fs,1),i.propsDefaults=Object.create(null),fl(i,e,n,o);for(const r in i.propsOptions[0])r in n||(n[r]=void 0);t?i.props=s?n:ec(n):i.type.props?i.props=n:i.props=o,i.attrs=o}function Gc(i,e,t,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=i,l=W(n),[a]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(_s(i.emitsOptions,g))continue;const k=e[g];if(a)if(j(o,g))k!==o[g]&&(o[g]=k,c=!0);else{const S=rt(g);n[S]=An(a,l,S,k,i,!1)}else k!==o[g]&&(o[g]=k,c=!0)}}}else{fl(i,e,n,o)&&(c=!0);let u;for(const h in l)(!e||!j(e,h)&&((u=pi(h))===h||!j(e,u)))&&(a?t&&(t[h]!==void 0||t[u]!==void 0)&&(n[h]=An(a,l,h,void 0,i,!0)):delete n[h]);if(o!==l)for(const h in o)(!e||!j(e,h)&&!0)&&(delete o[h],c=!0)}c&&ft(i,"set","$attrs")}function fl(i,e,t,s){const[n,o]=i.propsOptions;let r=!1,l;if(e)for(let a in e){if(hs(a))continue;const c=e[a];let u;n&&j(n,u=rt(a))?!o||!o.includes(u)?t[u]=c:(l||(l={}))[u]=c:_s(i.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,r=!0)}if(o){const a=W(t),c=l||J;for(let u=0;u<o.length;u++){const h=o[u];t[h]=An(n,a,h,c[h],i,!j(c,h))}}return r}function An(i,e,t,s,n,o){const r=i[t];if(r!=null){const l=j(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&L(a)){const{propsDefaults:c}=n;t in c?s=c[t]:(di(n),s=c[t]=a.call(null,e),qt())}else s=a}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===pi(t))&&(s=!0))}return s}function pl(i,e,t=!1){const s=e.propsCache,n=s.get(i);if(n)return n;const o=i.props,r={},l=[];let a=!1;if(!L(i)){const u=h=>{a=!0;const[g,k]=pl(h,e,!0);me(r,g),k&&l.push(...k)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!o&&!a)return de(i)&&s.set(i,ni),ni;if(H(o))for(let u=0;u<o.length;u++){const h=rt(o[u]);jo(h)&&(r[h]=J)}else if(o)for(const u in o){const h=rt(u);if(jo(h)){const g=o[u],k=r[h]=H(g)||L(g)?{type:g}:g;if(k){const S=Wo(Boolean,k.type),I=Wo(String,k.type);k[0]=S>-1,k[1]=I<0||S<I,(S>-1||j(k,"default"))&&l.push(h)}}}const c=[r,l];return de(i)&&s.set(i,c),c}function jo(i){return i[0]!=="$"}function Uo(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function qo(i,e){return Uo(i)===Uo(e)}function Wo(i,e){return H(e)?e.findIndex(t=>qo(t,i)):L(e)&&qo(e,i)?0:-1}const gl=i=>i[0]==="_"||i==="$stable",to=i=>H(i)?i.map(nt):[nt(i)],Qc=(i,e,t)=>{if(e._n)return e;const s=pc((...n)=>to(e(...n)),t);return s._c=!1,s},bl=(i,e,t)=>{const s=i._ctx;for(const n in i){if(gl(n))continue;const o=i[n];if(L(o))e[n]=Qc(n,o,s);else if(o!=null){const r=to(o);e[n]=()=>r}}},ml=(i,e)=>{const t=to(e);i.slots.default=()=>t},Yc=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=W(e),vs(e,"_",t)):bl(e,i.slots={})}else i.slots={},e&&ml(i,e);vs(i.slots,Fs,1)},Jc=(i,e,t)=>{const{vnode:s,slots:n}=i;let o=!0,r=J;if(s.shapeFlag&32){const l=e._;l?t&&l===1?o=!1:(me(n,e),!t&&l===1&&delete n._):(o=!e.$stable,bl(e,n)),r=e}else e&&(ml(i,e),r={default:1});if(o)for(const l in n)!gl(l)&&!(l in r)&&delete n[l]};function vl(){return{app:null,config:{isNativeTag:ba,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xc=0;function Zc(i,e){return function(s,n=null){L(s)||(s=Object.assign({},s)),n!=null&&!de(n)&&(n=null);const o=vl(),r=new Set;let l=!1;const a=o.app={_uid:Xc++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:$d,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&L(c.install)?(r.add(c),c.install(a,...u)):L(c)&&(r.add(c),c(a,...u))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,u){return u?(o.components[c]=u,a):o.components[c]},directive(c,u){return u?(o.directives[c]=u,a):o.directives[c]},mount(c,u,h){if(!l){const g=kt(s,n);return g.appContext=o,u&&e?e(g,c):i(g,c,h),l=!0,a._container=c,c.__vue_app__=a,no(g.component)||g.component.proxy}},unmount(){l&&(i(null,a._container),delete a._container.__vue_app__)},provide(c,u){return o.provides[c]=u,a}};return a}}function En(i,e,t,s,n=!1){if(H(i)){i.forEach((g,k)=>En(g,e&&(H(e)?e[k]:e),t,s,n));return}if(us(s)&&!n)return;const o=s.shapeFlag&4?no(s.component)||s.component.proxy:s.el,r=n?null:o,{i:l,r:a}=i,c=e&&e.r,u=l.refs===J?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ve(c)?(u[c]=null,j(h,c)&&(h[c]=null)):Te(c)&&(c.value=null)),L(a))$t(a,l,12,[r,u]);else{const g=ve(a),k=Te(a);if(g||k){const S=()=>{if(i.f){const I=g?j(h,a)?h[a]:u[a]:a.value;n?H(I)&&Nn(I,o):H(I)?I.includes(o)||I.push(o):g?(u[a]=[o],j(h,a)&&(h[a]=u[a])):(a.value=[o],i.k&&(u[i.k]=a.value))}else g?(u[a]=r,j(h,a)&&(h[a]=r)):k&&(a.value=r,i.k&&(u[i.k]=r))};r?(S.id=-1,Se(S,t)):S()}}}const Se=xc;function Kc(i){return ed(i)}function ed(i,e){const t=Ia();t.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:g,setScopeId:k=Qe,insertStaticContent:S}=i,I=(d,f,b,y=null,v=null,C=null,T=!1,w=null,$=!!f.dynamicChildren)=>{if(d===f)return;d&&!Nt(d,f)&&(y=Ki(d),Ke(d,v,C,!0),d=null),f.patchFlag===-2&&($=!1,f.dynamicChildren=null);const{type:x,ref:R,shapeFlag:E}=f;switch(x){case io:F(d,f,b,y);break;case ut:B(d,f,b,y);break;case Zs:d==null&&ae(f,b,y,T);break;case st:Ze(d,f,b,y,v,C,T,w,$);break;default:E&1?re(d,f,b,y,v,C,T,w,$):E&6?lt(d,f,b,y,v,C,T,w,$):(E&64||E&128)&&x.process(d,f,b,y,v,C,T,w,$,Zt)}R!=null&&v&&En(R,d&&d.ref,C,f||d,!f)},F=(d,f,b,y)=>{if(d==null)s(f.el=l(f.children),b,y);else{const v=f.el=d.el;f.children!==d.children&&c(v,f.children)}},B=(d,f,b,y)=>{d==null?s(f.el=a(f.children||""),b,y):f.el=d.el},ae=(d,f,b,y)=>{[d.el,d.anchor]=S(d.children,f,b,y,d.el,d.anchor)},ie=({el:d,anchor:f},b,y)=>{let v;for(;d&&d!==f;)v=g(d),s(d,b,y),d=v;s(f,b,y)},se=({el:d,anchor:f})=>{let b;for(;d&&d!==f;)b=g(d),n(d),d=b;n(f)},re=(d,f,b,y,v,C,T,w,$)=>{T=T||f.type==="svg",d==null?Xt(f,b,y,v,C,T,w,$):ue(d,f,v,C,T,w,$)},Xt=(d,f,b,y,v,C,T,w)=>{let $,x;const{type:R,props:E,shapeFlag:_,transition:P,dirs:N}=d;if($=d.el=r(d.type,C,E&&E.is,E),_&8?u($,d.children):_&16&&M(d.children,$,null,y,v,C&&R!=="foreignObject",T,w),N&&Ft(d,null,y,"created"),E){for(const G in E)G!=="value"&&!hs(G)&&o($,G,null,E[G],C,d.children,y,v,at);"value"in E&&o($,"value",null,E.value),(x=E.onVnodeBeforeMount)&&tt(x,y,d)}vt($,d,d.scopeId,T,y),N&&Ft(d,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&P&&!P.persisted;Y&&P.beforeEnter($),s($,f,b),((x=E&&E.onVnodeMounted)||Y||N)&&Se(()=>{x&&tt(x,y,d),Y&&P.enter($),N&&Ft(d,null,y,"mounted")},v)},vt=(d,f,b,y,v)=>{if(b&&k(d,b),y)for(let C=0;C<y.length;C++)k(d,y[C]);if(v){let C=v.subTree;if(f===C){const T=v.vnode;vt(d,T,T.scopeId,T.slotScopeIds,v.parent)}}},M=(d,f,b,y,v,C,T,w,$=0)=>{for(let x=$;x<d.length;x++){const R=d[x]=w?wt(d[x]):nt(d[x]);I(null,R,f,b,y,v,C,T,w)}},ue=(d,f,b,y,v,C,T)=>{const w=f.el=d.el;let{patchFlag:$,dynamicChildren:x,dirs:R}=f;$|=d.patchFlag&16;const E=d.props||J,_=f.props||J;let P;b&&Bt(b,!1),(P=_.onVnodeBeforeUpdate)&&tt(P,b,f,d),R&&Ft(f,d,b,"beforeUpdate"),b&&Bt(b,!0);const N=v&&f.type!=="foreignObject";if(x?ne(d.dynamicChildren,x,w,b,y,N,C):T||Q(d,f,w,null,b,y,N,C,!1),$>0){if($&16)Pe(w,f,E,_,b,y,v);else if($&2&&E.class!==_.class&&o(w,"class",null,_.class,v),$&4&&o(w,"style",E.style,_.style,v),$&8){const Y=f.dynamicProps;for(let G=0;G<Y.length;G++){const ce=Y[G],je=E[ce],Kt=_[ce];(Kt!==je||ce==="value")&&o(w,ce,je,Kt,v,d.children,b,y,at)}}$&1&&d.children!==f.children&&u(w,f.children)}else!T&&x==null&&Pe(w,f,E,_,b,y,v);((P=_.onVnodeUpdated)||R)&&Se(()=>{P&&tt(P,b,f,d),R&&Ft(f,d,b,"updated")},y)},ne=(d,f,b,y,v,C,T)=>{for(let w=0;w<f.length;w++){const $=d[w],x=f[w],R=$.el&&($.type===st||!Nt($,x)||$.shapeFlag&70)?h($.el):b;I($,x,R,null,y,v,C,T,!0)}},Pe=(d,f,b,y,v,C,T)=>{if(b!==y){if(b!==J)for(const w in b)!hs(w)&&!(w in y)&&o(d,w,b[w],null,T,f.children,v,C,at);for(const w in y){if(hs(w))continue;const $=y[w],x=b[w];$!==x&&w!=="value"&&o(d,w,x,$,T,f.children,v,C,at)}"value"in y&&o(d,"value",b.value,y.value)}},Ze=(d,f,b,y,v,C,T,w,$)=>{const x=f.el=d?d.el:l(""),R=f.anchor=d?d.anchor:l("");let{patchFlag:E,dynamicChildren:_,slotScopeIds:P}=f;P&&(w=w?w.concat(P):P),d==null?(s(x,b,y),s(R,b,y),M(f.children,b,R,v,C,T,w,$)):E>0&&E&64&&_&&d.dynamicChildren?(ne(d.dynamicChildren,_,b,v,C,T,w),(f.key!=null||v&&f===v.subTree)&&yl(d,f,!0)):Q(d,f,b,R,v,C,T,w,$)},lt=(d,f,b,y,v,C,T,w,$)=>{f.slotScopeIds=w,d==null?f.shapeFlag&512?v.ctx.activate(f,b,y,T,$):ki(f,b,y,v,C,T,$):Co(d,f,$)},ki=(d,f,b,y,v,C,T)=>{const w=d.component=pd(d,y,v);if(Ds(d)&&(w.ctx.renderer=Zt),bd(w),w.asyncDep){if(v&&v.registerDep(w,Ce),!d.el){const $=w.subTree=kt(ut);B(null,$,f,b)}return}Ce(w,d,f,b,v,C,T)},Co=(d,f,b)=>{const y=f.component=d.component;if(mc(d,f,b))if(y.asyncDep&&!y.asyncResolved){oe(y,f,b);return}else y.next=f,dc(y.update),y.update();else f.el=d.el,y.vnode=f},Ce=(d,f,b,y,v,C,T)=>{const w=()=>{if(d.isMounted){let{next:R,bu:E,u:_,parent:P,vnode:N}=d,Y=R,G;Bt(d,!1),R?(R.el=N.el,oe(d,R,T)):R=N,E&&Gs(E),(G=R.props&&R.props.onVnodeBeforeUpdate)&&tt(G,P,R,N),Bt(d,!0);const ce=Qs(d),je=d.subTree;d.subTree=ce,I(je,ce,h(je.el),Ki(je),d,v,C),R.el=ce.el,Y===null&&vc(d,ce.el),_&&Se(_,v),(G=R.props&&R.props.onVnodeUpdated)&&Se(()=>tt(G,P,R,N),v)}else{let R;const{el:E,props:_}=f,{bm:P,m:N,parent:Y}=d,G=us(f);if(Bt(d,!1),P&&Gs(P),!G&&(R=_&&_.onVnodeBeforeMount)&&tt(R,Y,f),Bt(d,!0),E&&qs){const ce=()=>{d.subTree=Qs(d),qs(E,d.subTree,d,v,null)};G?f.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=Qs(d);I(null,ce,b,y,d,v,C),f.el=ce.el}if(N&&Se(N,v),!G&&(R=_&&_.onVnodeMounted)){const ce=f;Se(()=>tt(R,Y,ce),v)}(f.shapeFlag&256||Y&&us(Y.vnode)&&Y.vnode.shapeFlag&256)&&d.a&&Se(d.a,v),d.isMounted=!0,f=b=y=null}},$=d.effect=new Un(w,()=>Kn(x),d.scope),x=d.update=()=>$.run();x.id=d.uid,Bt(d,!0),x()},oe=(d,f,b)=>{f.component=d;const y=d.vnode.props;d.vnode=f,d.next=null,Gc(d,f.props,y,b),Jc(d,f.children,b),gi(),Bo(),bi()},Q=(d,f,b,y,v,C,T,w,$=!1)=>{const x=d&&d.children,R=d?d.shapeFlag:0,E=f.children,{patchFlag:_,shapeFlag:P}=f;if(_>0){if(_&128){Zi(x,E,b,y,v,C,T,w,$);return}else if(_&256){Dt(x,E,b,y,v,C,T,w,$);return}}P&8?(R&16&&at(x,v,C),E!==x&&u(b,E)):R&16?P&16?Zi(x,E,b,y,v,C,T,w,$):at(x,v,C,!0):(R&8&&u(b,""),P&16&&M(E,b,y,v,C,T,w,$))},Dt=(d,f,b,y,v,C,T,w,$)=>{d=d||ni,f=f||ni;const x=d.length,R=f.length,E=Math.min(x,R);let _;for(_=0;_<E;_++){const P=f[_]=$?wt(f[_]):nt(f[_]);I(d[_],P,b,null,v,C,T,w,$)}x>R?at(d,v,C,!0,!1,E):M(f,b,y,v,C,T,w,$,E)},Zi=(d,f,b,y,v,C,T,w,$)=>{let x=0;const R=f.length;let E=d.length-1,_=R-1;for(;x<=E&&x<=_;){const P=d[x],N=f[x]=$?wt(f[x]):nt(f[x]);if(Nt(P,N))I(P,N,b,null,v,C,T,w,$);else break;x++}for(;x<=E&&x<=_;){const P=d[E],N=f[_]=$?wt(f[_]):nt(f[_]);if(Nt(P,N))I(P,N,b,null,v,C,T,w,$);else break;E--,_--}if(x>E){if(x<=_){const P=_+1,N=P<R?f[P].el:y;for(;x<=_;)I(null,f[x]=$?wt(f[x]):nt(f[x]),b,N,v,C,T,w,$),x++}}else if(x>_)for(;x<=E;)Ke(d[x],v,C,!0),x++;else{const P=x,N=x,Y=new Map;for(x=N;x<=_;x++){const Fe=f[x]=$?wt(f[x]):nt(f[x]);Fe.key!=null&&Y.set(Fe.key,x)}let G,ce=0;const je=_-N+1;let Kt=!1,To=0;const Ti=new Array(je);for(x=0;x<je;x++)Ti[x]=0;for(x=P;x<=E;x++){const Fe=d[x];if(ce>=je){Ke(Fe,v,C,!0);continue}let et;if(Fe.key!=null)et=Y.get(Fe.key);else for(G=N;G<=_;G++)if(Ti[G-N]===0&&Nt(Fe,f[G])){et=G;break}et===void 0?Ke(Fe,v,C,!0):(Ti[et-N]=x+1,et>=To?To=et:Kt=!0,I(Fe,f[et],b,null,v,C,T,w,$),ce++)}const Io=Kt?td(Ti):ni;for(G=Io.length-1,x=je-1;x>=0;x--){const Fe=N+x,et=f[Fe],Oo=Fe+1<R?f[Fe+1].el:y;Ti[x]===0?I(null,et,b,Oo,v,C,T,w,$):Kt&&(G<0||x!==Io[G]?Pt(et,b,Oo,2):G--)}}},Pt=(d,f,b,y,v=null)=>{const{el:C,type:T,transition:w,children:$,shapeFlag:x}=d;if(x&6){Pt(d.component.subTree,f,b,y);return}if(x&128){d.suspense.move(f,b,y);return}if(x&64){T.move(d,f,b,Zt);return}if(T===st){s(C,f,b);for(let E=0;E<$.length;E++)Pt($[E],f,b,y);s(d.anchor,f,b);return}if(T===Zs){ie(d,f,b);return}if(y!==2&&x&1&&w)if(y===0)w.beforeEnter(C),s(C,f,b),Se(()=>w.enter(C),v);else{const{leave:E,delayLeave:_,afterLeave:P}=w,N=()=>s(C,f,b),Y=()=>{E(C,()=>{N(),P&&P()})};_?_(C,N,Y):Y()}else s(C,f,b)},Ke=(d,f,b,y=!1,v=!1)=>{const{type:C,props:T,ref:w,children:$,dynamicChildren:x,shapeFlag:R,patchFlag:E,dirs:_}=d;if(w!=null&&En(w,null,b,d,!0),R&256){f.ctx.deactivate(d);return}const P=R&1&&_,N=!us(d);let Y;if(N&&(Y=T&&T.onVnodeBeforeUnmount)&&tt(Y,f,d),R&6)da(d.component,b,y);else{if(R&128){d.suspense.unmount(b,y);return}P&&Ft(d,null,f,"beforeUnmount"),R&64?d.type.remove(d,f,b,v,Zt,y):x&&(C!==st||E>0&&E&64)?at(x,f,b,!1,!0):(C===st&&E&384||!v&&R&16)&&at($,f,b),y&&$o(d)}(N&&(Y=T&&T.onVnodeUnmounted)||P)&&Se(()=>{Y&&tt(Y,f,d),P&&Ft(d,null,f,"unmounted")},b)},$o=d=>{const{type:f,el:b,anchor:y,transition:v}=d;if(f===st){ca(b,y);return}if(f===Zs){se(d);return}const C=()=>{n(b),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:w}=v,$=()=>T(b,C);w?w(d.el,C,$):$()}else C()},ca=(d,f)=>{let b;for(;d!==f;)b=g(d),n(d),d=b;n(f)},da=(d,f,b)=>{const{bum:y,scope:v,update:C,subTree:T,um:w}=d;y&&Gs(y),v.stop(),C&&(C.active=!1,Ke(T,d,f,b)),w&&Se(w,f),Se(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},at=(d,f,b,y=!1,v=!1,C=0)=>{for(let T=C;T<d.length;T++)Ke(d[T],f,b,y,v)},Ki=d=>d.shapeFlag&6?Ki(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),ko=(d,f,b)=>{d==null?f._vnode&&Ke(f._vnode,null,null,!0):I(f._vnode||null,d,f,null,null,null,b),Bo(),Kr(),f._vnode=d},Zt={p:I,um:Ke,m:Pt,r:$o,mt:ki,mc:M,pc:Q,pbc:ne,n:Ki,o:i};let Us,qs;return e&&([Us,qs]=e(Zt)),{render:ko,hydrate:Us,createApp:Zc(ko,Us)}}function Bt({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function yl(i,e,t=!1){const s=i.children,n=e.children;if(H(s)&&H(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=wt(n[o]),l.el=r.el),t||yl(r,l))}}function td(i){const e=i.slice(),t=[0];let s,n,o,r,l;const a=i.length;for(s=0;s<a;s++){const c=i[s];if(c!==0){if(n=t[t.length-1],i[n]<c){e[s]=n,t.push(s);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,i[t[l]]<c?o=l+1:r=l;c<i[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}const id=i=>i.__isTeleport,st=Symbol(void 0),io=Symbol(void 0),ut=Symbol(void 0),Zs=Symbol(void 0),Di=[];let Ge=null;function sd(i=!1){Di.push(Ge=i?null:[])}function nd(){Di.pop(),Ge=Di[Di.length-1]||null}let Vi=1;function Go(i){Vi+=i}function od(i){return i.dynamicChildren=Vi>0?Ge||ni:null,nd(),Vi>0&&Ge&&Ge.push(i),i}function rd(i,e,t,s,n,o){return od(wl(i,e,t,s,n,o,!0))}function ld(i){return i?i.__v_isVNode===!0:!1}function Nt(i,e){return i.type===e.type&&i.key===e.key}const Fs="__vInternal",xl=({key:i})=>i!=null?i:null,fs=({ref:i,ref_key:e,ref_for:t})=>i!=null?ve(i)||Te(i)||L(i)?{i:We,r:i,k:e,f:!!t}:i:null;function wl(i,e=null,t=null,s=0,n=null,o=i===st?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&xl(e),ref:e&&fs(e),scopeId:il,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null};return l?(so(a,t),o&128&&i.normalize(a)):t&&(a.shapeFlag|=ve(t)?8:16),Vi>0&&!r&&Ge&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ge.push(a),a}const kt=ad;function ad(i,e=null,t=null,s=0,n=null,o=!1){if((!i||i===Hc)&&(i=ut),ld(i)){const l=Ot(i,e,!0);return t&&so(l,t),Vi>0&&!o&&Ge&&(l.shapeFlag&6?Ge[Ge.indexOf(i)]=l:Ge.push(l)),l.patchFlag|=-2,l}if(wd(i)&&(i=i.__vccOpts),e){e=cd(e);let{class:l,style:a}=e;l&&!ve(l)&&(e.class=Hn(l)),de(a)&&(Gr(a)&&!H(a)&&(a=me({},a)),e.style=Ln(a))}const r=ve(i)?1:yc(i)?128:id(i)?64:de(i)?4:L(i)?2:0;return wl(i,e,t,s,n,r,o,!0)}function cd(i){return i?Gr(i)||Fs in i?me({},i):i:null}function Ot(i,e,t=!1){const{props:s,ref:n,patchFlag:o,children:r}=i,l=e?hd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:l,key:l&&xl(l),ref:e&&e.ref?t&&n?H(n)?n.concat(fs(e)):[n,fs(e)]:fs(e):n,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==st?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ot(i.ssContent),ssFallback:i.ssFallback&&Ot(i.ssFallback),el:i.el,anchor:i.anchor}}function dd(i=" ",e=0){return kt(io,null,i,e)}function nt(i){return i==null||typeof i=="boolean"?kt(ut):H(i)?kt(st,null,i.slice()):typeof i=="object"?wt(i):kt(io,null,String(i))}function wt(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ot(i)}function so(i,e){let t=0;const{shapeFlag:s}=i;if(e==null)e=null;else if(H(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),so(i,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!(Fs in e)?e._ctx=We:n===3&&We&&(We.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:We},t=32):(e=String(e),s&64?(t=16,e=[dd(e)]):t=8);i.children=e,i.shapeFlag|=t}function hd(...i){const e={};for(let t=0;t<i.length;t++){const s=i[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=Hn([e.class,s.class]));else if(n==="style")e.style=Ln([e.style,s.style]);else if(Is(n)){const o=e[n],r=s[n];r&&o!==r&&!(H(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function tt(i,e,t,s=null){Ne(i,e,7,[t,s])}const ud=vl();let fd=0;function pd(i,e,t){const s=i.type,n=(e?e.appContext:i.appContext)||ud,o={uid:fd++,vnode:i,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pl(s,n),emitsOptions:tl(s,n),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=fc.bind(null,o),i.ce&&i.ce(o),o}let pe=null;const gd=()=>pe||We,di=i=>{pe=i,i.scope.on()},qt=()=>{pe&&pe.scope.off(),pe=null};function Cl(i){return i.vnode.shapeFlag&4}let zi=!1;function bd(i,e=!1){zi=e;const{props:t,children:s}=i.vnode,n=Cl(i);Wc(i,t,n,e),Yc(i,s);const o=n?md(i,e):void 0;return zi=!1,o}function md(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Qr(new Proxy(i.ctx,Nc));const{setup:s}=t;if(s){const n=i.setupContext=s.length>1?yd(i):null;di(i),gi();const o=$t(s,i,0,[i.props,n]);if(bi(),qt(),Fr(o)){if(o.then(qt,qt),e)return o.then(r=>{Qo(i,r,e)}).catch(r=>{Rs(r,i,0)});i.asyncDep=o}else Qo(i,o,e)}else $l(i,e)}function Qo(i,e,t){L(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:de(e)&&(i.setupState=Yr(e)),$l(i,t)}let Yo;function $l(i,e,t){const s=i.type;if(!i.render){if(!e&&Yo&&!s.render){const n=s.template||eo(i).template;if(n){const{isCustomElement:o,compilerOptions:r}=i.appContext.config,{delimiters:l,compilerOptions:a}=s,c=me(me({isCustomElement:o,delimiters:l},r),a);s.render=Yo(n,c)}}i.render=s.render||Qe}di(i),gi(),Vc(i),bi(),qt()}function vd(i){return new Proxy(i.attrs,{get(e,t){return Be(i,"get","$attrs"),e[t]}})}function yd(i){const e=s=>{i.exposed=s||{}};let t;return{get attrs(){return t||(t=vd(i))},slots:i.slots,emit:i.emit,expose:e}}function no(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Yr(Qr(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in xs)return xs[t](i)}}))}function xd(i,e=!0){return L(i)?i.displayName||i.name:i.name||e&&i.__name}function wd(i){return L(i)&&"__vccOpts"in i}const Cd=(i,e)=>rc(i,e,zi),$d="3.2.41",kd="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,Jo=Vt&&Vt.createElement("template"),Td={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,s)=>{const n=e?Vt.createElementNS(kd,i):Vt.createElement(i,t?{is:t}:void 0);return i==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:i=>Vt.createTextNode(i),createComment:i=>Vt.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Vt.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,s,n,o){const r=t?t.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===o||!(n=n.nextSibling)););else{Jo.innerHTML=s?`<svg>${i}</svg>`:i;const l=Jo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Id(i,e,t){const s=i._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Od(i,e,t){const s=i.style,n=ve(t);if(t&&!n){for(const o in t)Sn(s,o,t[o]);if(e&&!ve(e))for(const o in e)t[o]==null&&Sn(s,o,"")}else{const o=s.display;n?e!==t&&(s.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(s.display=o)}}const Xo=/\s*!important$/;function Sn(i,e,t){if(H(t))t.forEach(s=>Sn(i,e,s));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const s=Ad(i,e);Xo.test(t)?i.setProperty(pi(s),t.replace(Xo,""),"important"):i[s]=t}}const Zo=["Webkit","Moz","ms"],Ks={};function Ad(i,e){const t=Ks[e];if(t)return t;let s=rt(e);if(s!=="filter"&&s in i)return Ks[e]=s;s=Es(s);for(let n=0;n<Zo.length;n++){const o=Zo[n]+s;if(o in i)return Ks[e]=o}return e}const Ko="http://www.w3.org/1999/xlink";function Ed(i,e,t,s,n){if(s&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Ko,e.slice(6,e.length)):i.setAttributeNS(Ko,e,t);else{const o=ua(e);t==null||o&&!Pr(t)?i.removeAttribute(e):i.setAttribute(e,o?"":t)}}function Sd(i,e,t,s,n,o,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,n,o),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const a=t==null?"":t;(i.value!==a||i.tagName==="OPTION")&&(i.value=a),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Pr(t):t==null&&a==="string"?(t="",l=!0):a==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Rd(i,e,t,s){i.addEventListener(e,t,s)}function _d(i,e,t,s){i.removeEventListener(e,t,s)}function Dd(i,e,t,s,n=null){const o=i._vei||(i._vei={}),r=o[e];if(s&&r)r.value=s;else{const[l,a]=Pd(e);if(s){const c=o[e]=Ld(s,n);Rd(i,l,c,a)}else r&&(_d(i,l,r,a),o[e]=void 0)}}const er=/(?:Once|Passive|Capture)$/;function Pd(i){let e;if(er.test(i)){e={};let s;for(;s=i.match(er);)i=i.slice(0,i.length-s[0].length),e[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):pi(i.slice(2)),e]}let en=0;const Fd=Promise.resolve(),Bd=()=>en||(Fd.then(()=>en=0),en=Date.now());function Ld(i,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Ne(Hd(s,t.value),e,5,[s])};return t.value=i,t.attached=Bd(),t}function Hd(i,e){if(H(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const tr=/^on[a-z]/,Md=(i,e,t,s,n=!1,o,r,l,a)=>{e==="class"?Id(i,s,n):e==="style"?Od(i,t,s):Is(e)?Mn(e)||Dd(i,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nd(i,e,s,n))?Sd(i,e,s,o,r,l,a):(e==="true-value"?i._trueValue=s:e==="false-value"&&(i._falseValue=s),Ed(i,e,s,n))};function Nd(i,e,t,s){return s?!!(e==="innerHTML"||e==="textContent"||e in i&&tr.test(e)&&L(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||tr.test(e)&&ve(t)?!1:e in i}const Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tc.props;const zd=me({patchProp:Md},Td);let ir;function jd(){return ir||(ir=Kc(zd))}const Ud=(...i)=>{const e=jd().createApp(...i),{mount:t}=e;return e.mount=s=>{const n=qd(s);if(!n)return;const o=e._component;!L(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function qd(i){return ve(i)?document.querySelector(i):i}const At=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();At.trustedTypes===void 0&&(At.trustedTypes={createPolicy:(i,e)=>e});const kl={configurable:!1,enumerable:!1,writable:!1};At.FAST===void 0&&Reflect.defineProperty(At,"FAST",Object.assign({value:Object.create(null)},kl));const ji=At.FAST;if(ji.getById===void 0){const i=Object.create(null);Reflect.defineProperty(ji,"getById",Object.assign({value(e,t){let s=i[e];return s===void 0&&(s=t?i[e]=t():null),s}},kl))}const Wt=Object.freeze([]),tn=At.FAST.getById(1,()=>{const i=[],e=[];function t(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(l){e.push(l),setTimeout(t,0)}}function n(){let l=0;for(;l<i.length;)if(s(i[l]),l++,l>1024){for(let a=0,c=i.length-l;a<c;a++)i[a]=i[a+l];i.length-=l,l=0}i.length=0}function o(r){i.length<1&&At.requestAnimationFrame(n),i.push(r)}return Object.freeze({enqueue:o,process:n})}),Tl=At.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let sn=Tl;const Pi=`fast-${Math.random().toString(36).substring(2,8)}`,Il=`${Pi}{`,oo=`}${Pi}`,z=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(sn!==Tl)throw new Error("The HTML policy can only be set once.");sn=i},createHTML(i){return sn.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(Pi)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${Pi}:`,""))},createInterpolationPlaceholder(i){return`${Il}${i}${oo}`},createCustomAttributePlaceholder(i,e){return`${i}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(i){return`<!--${Pi}:${i}-->`},queueUpdate:tn.enqueue,processUpdates:tn.process,nextUpdate(){return new Promise(tn.enqueue)},setAttribute(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)},setBooleanAttribute(i,e,t){t?i.setAttribute(e,""):i.removeAttribute(e)},removeChildNodes(i){for(let e=i.firstChild;e!==null;e=i.firstChild)i.removeChild(e)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class Cs{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);s!==-1&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.source;if(t===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=t.length;n<o;++n)t[n].handleChange(s,e)}}class Ol{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];s!==void 0&&s.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var s;if(t){let n=this.subscribers[t];n===void 0&&(this.subscribers[t]=n=new Cs(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Cs(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const n=this.subscribers[t];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const V=ji.getById(2,()=>{const i=/(:|&&|\|\||if)/,e=new WeakMap,t=new WeakMap,s=z.queueUpdate;let n,o=u=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(u){let h=u.$fastController||e.get(u);return h===void 0&&(Array.isArray(u)?h=o(u):e.set(u,h=new Ol(u))),h}function l(u){let h=t.get(u);if(h===void 0){let g=Reflect.getPrototypeOf(u);for(;h===void 0&&g!==null;)h=t.get(g),g=Reflect.getPrototypeOf(g);h===void 0?h=[]:h=h.slice(0),t.set(u,h)}return h}class a{constructor(h){this.name=h,this.field=`_${h}`,this.callback=`${h}Changed`}getValue(h){return n!==void 0&&n.watch(h,this.name),h[this.field]}setValue(h,g){const k=this.field,S=h[k];if(S!==g){h[k]=g;const I=h[this.callback];typeof I=="function"&&I.call(h,S,g),r(h).notify(this.name)}}}class c extends Cs{constructor(h,g,k=!1){super(h,g),this.binding=h,this.isVolatileBinding=k,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(h,g){this.needsRefresh&&this.last!==null&&this.disconnect();const k=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const S=this.binding(h,g);return n=k,S}disconnect(){if(this.last!==null){let h=this.first;for(;h!==void 0;)h.notifier.unsubscribe(this,h.propertyName),h=h.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(h,g){const k=this.last,S=r(h),I=k===null?this.first:{};if(I.propertySource=h,I.propertyName=g,I.notifier=S,S.subscribe(this,g),k!==null){if(!this.needsRefresh){let F;n=void 0,F=k.propertySource[k.propertyName],n=this,h===F&&(this.needsRefresh=!0)}k.next=I}this.last=I}handleChange(){this.needsQueue&&(this.needsQueue=!1,s(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let h=this.first;return{next:()=>{const g=h;return g===void 0?{value:void 0,done:!0}:(h=h.next,{value:g,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(u){o=u},getNotifier:r,track(u,h){n!==void 0&&n.watch(u,h)},trackVolatile(){n!==void 0&&(n.needsRefresh=!0)},notify(u,h){r(u).notify(h)},defineProperty(u,h){typeof h=="string"&&(h=new a(h)),l(u).push(h),Reflect.defineProperty(u,h.name,{enumerable:!0,get:function(){return h.getValue(this)},set:function(g){h.setValue(this,g)}})},getAccessors:l,binding(u,h,g=this.isVolatileBinding(u)){return new c(u,h,g)},isVolatileBinding(u){return i.test(u.toString())}})});function A(i,e){V.defineProperty(i,e)}function Wd(i,e,t){return Object.assign({},t,{get:function(){return V.trackVolatile(),t.get.apply(this)}})}const sr=ji.getById(3,()=>{let i=null;return{get(){return i},set(e){i=e}}});class Ui{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return sr.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){sr.set(e)}}V.defineProperty(Ui.prototype,"index");V.defineProperty(Ui.prototype,"length");const Fi=Object.seal(new Ui);class Bs{constructor(){this.targetIndex=0}}class Al extends Bs{constructor(){super(...arguments),this.createPlaceholder=z.createInterpolationPlaceholder}}class ro extends Bs{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return z.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Gd(i,e){this.source=i,this.context=e,this.bindingObserver===null&&(this.bindingObserver=V.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,e))}function Qd(i,e){this.source=i,this.context=e,this.target.addEventListener(this.targetName,this)}function Yd(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Jd(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Xd(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Zd(i){z.setAttribute(this.target,this.targetName,i)}function Kd(i){z.setBooleanAttribute(this.target,this.targetName,i)}function eh(i){if(i==null&&(i=""),i.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=i.create():this.target.$fastTemplate!==i&&(e.isComposed&&(e.remove(),e.unbind()),e=i.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=i)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=i}}function th(i){this.target[this.targetName]=i}function ih(i){const e=this.classVersions||Object.create(null),t=this.target;let s=this.version||0;if(i!=null&&i.length){const n=i.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const l=n[o];l!==""&&(e[l]=s,t.classList.add(l))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&t.classList.remove(n)}}class lo extends Al{constructor(e){super(),this.binding=e,this.bind=Gd,this.unbind=Yd,this.updateTarget=Zd,this.isBindingVolatile=V.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=th,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(s,n)=>z.createHTML(t(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Kd;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Qd,this.unbind=Xd;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=ih);break}}targetAtContent(){this.updateTarget=eh,this.unbind=Jd}createBehavior(e){return new sh(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class sh{constructor(e,t,s,n,o,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Ui.setEvent(e);const t=this.binding(this.source,this.context);Ui.setEvent(null),t!==!0&&e.preventDefault()}}let nn=null;class ao{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){nn=this}static borrow(e){const t=nn||new ao;return t.directives=e,t.reset(),nn=null,t}}function nh(i){if(i.length===1)return i[0];let e;const t=i.length,s=i.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,l)=>{let a="";for(let c=0;c<t;++c)a+=s[c](r,l);return a},o=new lo(n);return o.targetName=e,o}const oh=oo.length;function El(i,e){const t=e.split(Il);if(t.length===1)return null;const s=[];for(let n=0,o=t.length;n<o;++n){const r=t[n],l=r.indexOf(oo);let a;if(l===-1)a=r;else{const c=parseInt(r.substring(0,l));s.push(i.directives[c]),a=r.substring(l+oh)}a!==""&&s.push(a)}return s}function nr(i,e,t=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],l=r.value,a=El(i,l);let c=null;a===null?t&&(c=new lo(()=>l),c.targetName=r.name):c=nh(a),c!==null&&(e.removeAttributeNode(r),n--,o--,i.addFactory(c))}}function rh(i,e,t){const s=El(i,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const l=s[o],a=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",i.captureContentBinding(l)),n=a,i.targetIndex++,a!==e&&t.nextNode()}i.targetIndex--}}function lh(i,e){const t=i.content;document.adoptNode(t);const s=ao.borrow(e);nr(s,i,!0);const n=s.behaviorFactories;s.reset();const o=z.createTemplateWalker(t);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:nr(s,r);break;case 3:rh(s,r,o);break;case 8:z.isMarker(r)&&s.addFactory(e[z.extractDirectiveIndexFromMarker(r)])}let l=0;(z.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),l=-1);const a=s.behaviorFactories;return s.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:n,targetOffset:l}}const on=document.createRange();class Sl{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,s=this.lastChild;let n=this.firstChild,o;for(;n!==s;)o=n.nextSibling,t.insertBefore(n,e),n=o;t.insertBefore(s,e)}}remove(){const e=this.fragment,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(t);const o=this.behaviors,r=this.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=t;for(let o=0,r=s.length;o<r;++o){const l=s[o];l.unbind(n),l.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){on.setStartBefore(e[0].firstChild),on.setEndAfter(e[e.length-1].lastChild),on.deleteContents();for(let t=0,s=e.length;t<s;++t){const n=e[t],o=n.behaviors,r=n.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}}}}class or{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c;const u=this.html;if(typeof u=="string"){c=document.createElement("template"),c.innerHTML=z.createHTML(u);const g=c.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(c=g)}else c=u;const h=lh(c,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=z.createTemplateWalker(t);let r=0,l=this.targetOffset,a=o.nextNode();for(let c=s.length;r<c;++r){const u=s[r],h=u.targetIndex;for(;a!==null;)if(l===h){n[r]=u.createBehavior(a);break}else a=o.nextNode(),l++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let u=0,h=c.length;u<h;++u,++r)n[r]=c[u].createBehavior(e)}return new Sl(t,n)}render(e,t,s){typeof t=="string"&&(t=document.getElementById(t)),s===void 0&&(s=t);const n=this.create(s);return n.bind(e,Fi),n.appendTo(t),n}}const ah=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function q(i,...e){const t=[];let s="";for(let n=0,o=i.length-1;n<o;++n){const r=i[n];let l=e[n];if(s+=r,l instanceof or){const a=l;l=()=>a}if(typeof l=="function"&&(l=new lo(l)),l instanceof Al){const a=ah.exec(r);a!==null&&(l.targetName=a[2])}l instanceof Bs?(s+=l.createPlaceholder(t.length),t.push(l)):s+=l}return s+=i[i.length-1],new or(s,t)}class Re{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Re.create=(()=>{if(z.supportsAdoptedStyleSheets){const i=new Map;return e=>new ch(e,i)}return i=>new uh(i)})();function co(i){return i.map(e=>e instanceof Re?co(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function Rl(i){return i.map(e=>e instanceof Re?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}class ch extends Re{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Rl(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=co(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=t.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),t.set(s,n)),n})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(s=>t.indexOf(s)===-1),super.removeStylesFrom(e)}}let dh=0;function hh(){return`fast-style-class-${++dh}`}class uh extends Re{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Rl(e),this.styleSheets=co(e),this.styleClass=hh()}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const o=document.createElement("style");o.innerHTML=t[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=t.length;s<n;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const _l={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},Ye={toView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e.toString()},fromView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e}};class $s{constructor(e,t,s=t.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=_l)}setValue(e,t){const s=e[this.fieldName],n=this.converter;n!==void 0&&(t=n.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return V.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||t==="fromView"||z.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(t){case"reflect":const o=this.converter;z.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":z.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...t){const s=[];t.push(e.attributes);for(let n=0,o=t.length;n<o;++n){const r=t[n];if(r!==void 0)for(let l=0,a=r.length;l<a;++l){const c=r[l];typeof c=="string"?s.push(new $s(e,c)):s.push(new $s(e,c.property,c.attribute,c.mode,c.converter))}}return s}}function m(i,e){let t;function s(n,o){arguments.length>1&&(t.property=o),(n.constructor.attributes||(n.constructor.attributes=[])).push(t)}if(arguments.length>1){t={},s(i,e);return}return t=i===void 0?{}:i,s}const rr={mode:"open"},lr={},Rn=ji.getById(4,()=>{const i=new Map;return Object.freeze({register(e){return i.has(e.type)?!1:(i.set(e.type,e),!0)},getByType(e){return i.get(e)}})});class Ls{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=$s.collect(e,t.attributes),n=new Array(s.length),o={},r={};for(let l=0,a=s.length;l<a;++l){const c=s[l];n[l]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=t.shadowOptions===void 0?rr:t.shadowOptions===null?void 0:Object.assign(Object.assign({},rr),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?lr:Object.assign(Object.assign({},lr),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?Re.create(t.styles):t.styles instanceof Re?t.styles:Re.create([t.styles])}get isDefined(){return!!Rn.getByType(this.type)}define(e=customElements){const t=this.type;if(Rn.register(this)){const s=this.attributes,n=t.prototype;for(let o=0,r=s.length;o<r;++o)V.defineProperty(n,s[o]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Ls.forType=Rn.getByType;const Dl=new WeakMap,fh={bubbles:!0,composed:!0,cancelable:!0};function rn(i){return i.shadowRoot||Dl.get(i)||null}class ho extends Ol{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&Dl.set(e,o)}const n=V.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,l=n.length;r<l;++r){const a=n[r].name,c=e[a];c!==void 0&&(delete e[a],o[a]=c)}}}get isConnected(){return V.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,V.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=rn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),s!==null&&this.addBehaviors(s)}}removeStyles(e){const t=rn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,Fi)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const l=e[r];if(s.has(l)){const a=s.get(l)-1;a===0||t?s.delete(l)&&o.push(l):s.set(l,a)}}if(this._isConnected){const r=this.element;for(let l=0;l<o.length;++l)o[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Fi);const t=this.behaviors;if(t!==null)for(const[s]of t)s.bind(e,Fi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const s=this.element;for(const[n]of t)n.unbind(s)}}onAttributeChangedCallback(e,t,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},fh),s))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const l=n[o];e[l]=t[l]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=rn(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||z.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const s=Ls.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new ho(e,s)}}function ar(i){return class extends i{constructor(){super(),ho.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const Hs=Object.assign(ar(HTMLElement),{from(i){return ar(i)},define(i,e){return new Ls(i,e).define().type}});class Pl{createCSS(){return""}createBehavior(){}}function ph(i,e){const t=[];let s="";const n=[];for(let o=0,r=i.length-1;o<r;++o){s+=i[o];let l=e[o];if(l instanceof Pl){const a=l.createBehavior();l=l.createCSS(),a&&n.push(a)}l instanceof Re||l instanceof CSSStyleSheet?(s.trim()!==""&&(t.push(s),s=""),t.push(l)):s+=l}return s+=i[i.length-1],s.trim()!==""&&t.push(s),{styles:t,behaviors:n}}function te(i,...e){const{styles:t,behaviors:s}=ph(i,e),n=Re.create(t);return s.length&&n.withBehaviors(...s),n}function qe(i,e,t){return{index:i,removed:e,addedCount:t}}const Fl=0,Bl=1,_n=2,Dn=3;function gh(i,e,t,s,n,o){const r=o-n+1,l=t-e+1,a=new Array(r);let c,u;for(let h=0;h<r;++h)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;++h)a[0][h]=h;for(let h=1;h<r;++h)for(let g=1;g<l;++g)i[e+g-1]===s[n+h-1]?a[h][g]=a[h-1][g-1]:(c=a[h-1][g]+1,u=a[h][g-1]+1,a[h][g]=c<u?c:u);return a}function bh(i){let e=i.length-1,t=i[0].length-1,s=i[e][t];const n=[];for(;e>0||t>0;){if(e===0){n.push(_n),t--;continue}if(t===0){n.push(Dn),e--;continue}const o=i[e-1][t-1],r=i[e-1][t],l=i[e][t-1];let a;r<l?a=r<o?r:o:a=l<o?l:o,a===o?(o===s?n.push(Fl):(n.push(Bl),s=o),e--,t--):a===r?(n.push(Dn),e--,s=r):(n.push(_n),t--,s=l)}return n.reverse(),n}function mh(i,e,t){for(let s=0;s<t;++s)if(i[s]!==e[s])return s;return t}function vh(i,e,t){let s=i.length,n=e.length,o=0;for(;o<t&&i[--s]===e[--n];)o++;return o}function yh(i,e,t,s){return e<t||s<i?-1:e===t||s===i?0:i<t?e<s?e-t:s-t:s<e?s-i:e-i}function Ll(i,e,t,s,n,o){let r=0,l=0;const a=Math.min(t-e,o-n);if(e===0&&n===0&&(r=mh(i,s,a)),t===i.length&&o===s.length&&(l=vh(i,s,a-r)),e+=r,n+=r,t-=l,o-=l,t-e===0&&o-n===0)return Wt;if(e===t){const S=qe(e,[],0);for(;n<o;)S.removed.push(s[n++]);return[S]}else if(n===o)return[qe(e,[],t-e)];const c=bh(gh(i,e,t,s,n,o)),u=[];let h,g=e,k=n;for(let S=0;S<c.length;++S)switch(c[S]){case Fl:h!==void 0&&(u.push(h),h=void 0),g++,k++;break;case Bl:h===void 0&&(h=qe(g,[],0)),h.addedCount++,g++,h.removed.push(s[k]),k++;break;case _n:h===void 0&&(h=qe(g,[],0)),h.addedCount++,g++;break;case Dn:h===void 0&&(h=qe(g,[],0)),h.removed.push(s[k]),k++;break}return h!==void 0&&u.push(h),u}const cr=Array.prototype.push;function xh(i,e,t,s){const n=qe(e,t,s);let o=!1,r=0;for(let l=0;l<i.length;l++){const a=i[l];if(a.index+=r,o)continue;const c=yh(n.index,n.index+n.removed.length,a.index,a.index+a.addedCount);if(c>=0){i.splice(l,1),l--,r-=a.addedCount-a.removed.length,n.addedCount+=a.addedCount-c;const u=n.removed.length+a.removed.length-c;if(!n.addedCount&&!u)o=!0;else{let h=a.removed;if(n.index<a.index){const g=n.removed.slice(0,a.index-n.index);cr.apply(g,h),h=g}if(n.index+n.removed.length>a.index+a.addedCount){const g=n.removed.slice(a.index+a.addedCount-n.index);cr.apply(h,g)}n.removed=h,a.index<n.index&&(n.index=a.index)}}else if(n.index<a.index){o=!0,i.splice(l,0,n),l++;const u=n.addedCount-n.removed.length;a.index+=u,r+=u}}o||i.push(n)}function wh(i){const e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];xh(e,n.index,n.removed,n.addedCount)}return e}function Ch(i,e){let t=[];const s=wh(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&t.push(r);continue}t=t.concat(Ll(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return t}let dr=!1;function ln(i,e){let t=i.index;const s=e.length;return t>s?t=s-i.addedCount:t<0&&(t=s+i.removed.length+t-i.addedCount),t<0&&(t=0),i.index=t,i}class $h extends Cs{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,z.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,z.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=t===void 0?Ch(this.source,e):Ll(this.source,0,this.source.length,t,0,t.length);this.notify(s)}}function kh(){if(dr)return;dr=!0,V.setArrayObserverFactory(a=>new $h(a));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const e=i.pop,t=i.push,s=i.reverse,n=i.shift,o=i.sort,r=i.splice,l=i.unshift;i.pop=function(){const a=this.length>0,c=e.apply(this,arguments),u=this.$fastController;return u!==void 0&&a&&u.addSplice(qe(this.length,[c],0)),c},i.push=function(){const a=t.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(ln(qe(this.length-arguments.length,[],arguments.length),this)),a},i.reverse=function(){let a;const c=this.$fastController;c!==void 0&&(c.flush(),a=this.slice());const u=s.apply(this,arguments);return c!==void 0&&c.reset(a),u},i.shift=function(){const a=this.length>0,c=n.apply(this,arguments),u=this.$fastController;return u!==void 0&&a&&u.addSplice(qe(0,[c],0)),c},i.sort=function(){let a;const c=this.$fastController;c!==void 0&&(c.flush(),a=this.slice());const u=o.apply(this,arguments);return c!==void 0&&c.reset(a),u},i.splice=function(){const a=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(ln(qe(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},i.unshift=function(){const a=l.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(ln(qe(0,[],arguments.length),this)),a}}class Th{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Oe(i){return new ro("fast-ref",Th,i)}function ks(i,e){const t=typeof e=="function"?e:()=>e;return(s,n)=>i(s,n)?t(s,n):null}Object.freeze({positioning:!1,recycle:!0});function Ih(i,e,t,s){i.bind(e[t],s)}function Oh(i,e,t,s){const n=Object.create(s);n.index=t,n.length=e.length,i.bind(e[t],n)}class Ah{constructor(e,t,s,n,o,r){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ih,this.itemsBindingObserver=V.binding(t,this,s),this.templateBindingObserver=V.binding(n,this,o),r.positioning&&(this.bindView=Oh)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=Wt;return}const t=this.itemsObserver,s=this.itemsObserver=V.getNotifier(this.items),n=t!==s;n&&t!==null&&t.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const t=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,l=this.options.recycle,a=[];let c=0,u=0;for(let h=0,g=e.length;h<g;++h){const k=e[h],S=k.removed;let I=0,F=k.index;const B=F+k.addedCount,ae=s.splice(k.index,S.length);for(u=a.length+ae.length;F<B;++F){const ie=s[F],se=ie?ie.firstChild:this.location;let re;l&&u>0?(I<=u&&ae.length>0?(re=ae[I],I++):(re=a[c],c++),u--):re=r.create(),s.splice(F,0,re),n(re,o,F,t),re.insertBefore(se)}ae[I]&&a.push(...ae.slice(I))}for(let h=c,g=a.length;h<g;++h)a[h].dispose();if(this.options.positioning)for(let h=0,g=s.length;h<g;++h){const k=s[h].context;k.length=g,k.index=h}}refreshAllViews(e=!1){const t=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let l=t.length,a=this.views,c=a.length;if((l===0||e||!this.options.recycle)&&(Sl.disposeContiguousBatch(a),c=0),c===0){this.views=a=new Array(l);for(let u=0;u<l;++u){const h=n.create();r(h,t,u,s),a[u]=h,h.insertBefore(o)}}else{let u=0;for(;u<l;++u)if(u<c){const g=a[u];r(g,t,u,s)}else{const g=n.create();r(g,t,u,s),a.push(g),g.insertBefore(o)}const h=a.splice(u,c-u);for(u=0,l=h.length;u<l;++u)h[u].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}class Hl extends Bs{constructor(e,t,s){super(),this.itemsBinding=e,this.templateBinding=t,this.options=s,this.createPlaceholder=z.createBlockPlaceholder,kh(),this.isItemsBindingVolatile=V.isVolatileBinding(e),this.isTemplateBindingVolatile=V.isVolatileBinding(t)}createBehavior(e){return new Ah(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function uo(i){return i?function(e,t,s){return e.nodeType===1&&e.matches(i)}:function(e,t,s){return e.nodeType===1}}class Ml{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=V.getAccessors(e).some(s=>s.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Wt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Eh extends Ml{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ve(i){return typeof i=="string"&&(i={property:i}),new ro("fast-slotted",Eh,i)}class Sh extends Ml{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Nl(i){return typeof i=="string"&&(i={property:i}),new ro("fast-children",Sh,i)}class mi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const vi=(i,e)=>q`
    <span
        part="end"
        ${Oe("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Oe("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,yi=(i,e)=>q`
    <span
        part="start"
        ${Oe("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Oe("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;q`
    <span part="end" ${Oe("endContainer")}>
        <slot
            name="end"
            ${Oe("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`;q`
    <span part="start" ${Oe("startContainer")}>
        <slot
            name="start"
            ${Oe("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const an=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,e){return function(t){Reflect.defineMetadata(i,e,t)}},Reflect.defineMetadata=function(i,e,t){let s=an.get(t);s===void 0&&an.set(t,s=new Map),s.set(i,e)},Reflect.getOwnMetadata=function(i,e){const t=an.get(e);if(t!==void 0)return t.get(i)});class Rh{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,zl(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new Me(n,e,t))}}function Ii(i){const e=i.slice(),t=Object.keys(i),s=t.length;let n;for(let o=0;o<s;++o)n=t[o],jl(n)||(e[n]=i[n]);return e}const _h=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Me(i,1,i)},transient(i){return new Me(i,2,i)}}),cn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:_h.singleton})}),hr=new Map;function ur(i){return e=>Reflect.getOwnMetadata(i,e)}let fr=null;const ee=Object.freeze({createContainer(i){return new Bi(null,Object.assign({},cn.default,i))},findResponsibleContainer(i){const e=i.$$container$$;return e&&e.responsibleForOwnerRequests?e:ee.findParentContainer(i)},findParentContainer(i){const e=new CustomEvent(Vl,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(e),e.detail.container||ee.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,e){return i?i.$$container$$||new Bi(i,Object.assign({},cn.default,e,{parentLocator:ee.findParentContainer})):fr||(fr=new Bi(null,Object.assign({},cn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:ur("design:paramtypes"),getAnnotationParamtypes:ur("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let e=this.getAnnotationParamtypes(i);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],i),e},getDependencies(i){let e=hr.get(i);if(e===void 0){const t=i.inject;if(t===void 0){const s=ee.getDesignParamtypes(i),n=ee.getAnnotationParamtypes(i);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(i);typeof o=="function"&&o!==Function.prototype?e=Ii(ee.getDependencies(o)):e=[]}else e=Ii(n);else if(n===void 0)e=Ii(s);else{e=Ii(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const l=Object.keys(n);o=l.length;let a;for(let c=0;c<o;++c)a=l[c],jl(a)||(e[a]=n[a])}}else e=Ii(t);hr.set(i,e)}return e},defineProperty(i,e,t,s=!1){const n=`$di_${e}`;Reflect.defineProperty(i,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ee.findResponsibleContainer(this):ee.getOrCreateDOMContainer()).get(t),this[n]=o,s&&this instanceof Hs)){const l=this.$fastController,a=()=>{const u=ee.findResponsibleContainer(this).get(t),h=this[n];u!==h&&(this[n]=o,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return o}})},createInterface(i,e){const t=typeof i=="function"?i:e,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||mr,n=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,o=function(r,l,a){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(l)ee.defineProperty(r,l,o,n);else{const c=ee.getOrCreateAnnotationParamTypes(r);c[a]=o}};return o.$isInterface=!0,o.friendlyName=s==null?"(anonymous)":s,t!=null&&(o.register=function(r,l){return t(new Rh(r,l!=null?l:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...i){return function(e,t,s){if(typeof s=="number"){const n=ee.getOrCreateAnnotationParamTypes(e),o=i[0];o!==void 0&&(n[s]=o)}else if(t)ee.defineProperty(e,t,i[0]);else{const n=s?ee.getOrCreateAnnotationParamTypes(s.value):ee.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<i.length;++r)o=i[r],o!==void 0&&(n[r]=o)}}},transient(i){return i.register=function(t){return qi.transient(i,i).register(t)},i.registerInRequestor=!1,i},singleton(i,e=Ph){return i.register=function(s){return qi.singleton(i,i).register(s)},i.registerInRequestor=e.scoped,i}}),Dh=ee.createInterface("Container");ee.inject;const Ph={scoped:!1};class Me{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||s===void 0?void 0:s.call(t,e))!==null&&n!==void 0?n:null;default:return null}}}function pr(i){return this.get(i)}function Fh(i,e){return e(i)}class Bh{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return t===void 0?s=new this.Type(...this.dependencies.map(pr,e)):s=new this.Type(...this.dependencies.map(pr,e),...t),this.transformers==null?s:this.transformers.reduce(Fh,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Lh={$isResolver:!0,resolve(i,e){return e}};function ps(i){return typeof i.register=="function"}function Hh(i){return ps(i)&&typeof i.registerInRequestor=="boolean"}function gr(i){return Hh(i)&&i.registerInRequestor}function Mh(i){return i.prototype!==void 0}const Nh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Vl="__DI_LOCATE_PARENT__",dn=new Map;class Bi{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Dh,Lh),e instanceof Node&&e.addEventListener(Vl,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,s,n,o,r;const l=this.context;for(let a=0,c=e.length;a<c;++a)if(t=e[a],!!vr(t))if(ps(t))t.register(this,l);else if(Mh(t))qi.singleton(t,t).register(this);else for(s=Object.keys(t),o=0,r=s.length;o<r;++o)n=t[s[o]],vr(n)&&(ps(n)?n.register(this,l):this.register(n));return--this.registerDepth,this}registerResolver(e,t){os(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,t):n instanceof Me&&n.strategy===4?n.state.push(t):s.set(e,new Me(e,4,[n,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(os(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=gr(e)?this:s;return t?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(os(e),e.$isResolver)return e.resolve(this,this);let t=this,s;for(;t!=null;)if(s=t.resolvers.get(e),s==null){if(t.parent==null){const n=gr(e)?this:t;return s=this.jitRegister(e,n),s.resolve(t,this)}t=t.parent}else return s.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){os(e);const s=this;let n=s,o;if(t){let r=Wt;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(br(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Wt}else return br(o,n,s);return Wt}getFactory(e){let t=dn.get(e);if(t===void 0){if(Vh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);dn.set(e,t=new Bh(e,ee.getDependencies(e)))}return t}registerFactory(e,t){dn.set(e,t)}createChild(e){return new Bi(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Nh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(ps(e)){const s=e.register(t);if(!(s instanceof Object)||s.resolve==null){const n=t.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}}const hn=new WeakMap;function zl(i){return function(e,t,s){if(hn.has(s))return hn.get(s);const n=i(e,t,s);return hn.set(s,n),n}}const qi=Object.freeze({instance(i,e){return new Me(i,0,e)},singleton(i,e){return new Me(i,1,e)},transient(i,e){return new Me(i,2,e)},callback(i,e){return new Me(i,3,e)},cachedCallback(i,e){return new Me(i,3,zl(e))},aliasTo(i,e){return new Me(e,5,i)}});function os(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function br(i,e,t){if(i instanceof Me&&i.strategy===4){const s=i.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,t);return o}return[i.resolve(e,t)]}const mr="(anonymous)";function vr(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Vh=function(){const i=new WeakMap;let e=!1,t="",s=0;return function(n){return e=i.get(n),e===void 0&&(t=n.toString(),s=t.length,e=s>=29&&s<=100&&t.charCodeAt(s-1)===125&&t.charCodeAt(s-2)<=32&&t.charCodeAt(s-3)===93&&t.charCodeAt(s-4)===101&&t.charCodeAt(s-5)===100&&t.charCodeAt(s-6)===111&&t.charCodeAt(s-7)===99&&t.charCodeAt(s-8)===32&&t.charCodeAt(s-9)===101&&t.charCodeAt(s-10)===118&&t.charCodeAt(s-11)===105&&t.charCodeAt(s-12)===116&&t.charCodeAt(s-13)===97&&t.charCodeAt(s-14)===110&&t.charCodeAt(s-15)===88,i.set(n,e)),e}}(),rs={};function jl(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const e=rs[i];if(e!==void 0)return e;const t=i.length;if(t===0)return rs[i]=!1;let s=0;for(let n=0;n<t;++n)if(s=i.charCodeAt(n),n===0&&s===48&&t>1||s<48||s>57)return rs[i]=!1;return rs[i]=!0}default:return!1}}function yr(i){return`${i.toLowerCase()}:presentation`}const ls=new Map,Ul=Object.freeze({define(i,e,t){const s=yr(i);ls.get(s)===void 0?ls.set(s,e):ls.set(s,!1),t.register(qi.instance(s,e))},forTag(i,e){const t=yr(i),s=ls.get(t);return s===!1?ee.findResponsibleContainer(e).get(t):s||null}});class zh{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?Re.create(t):t instanceof Re?t:Re.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class Z extends Hs{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Ul.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new jh(this===Z?class extends Z{}:this,e,t)}}p([A],Z.prototype,"template",void 0);p([A],Z.prototype,"styles",void 0);function Oi(i,e,t){return typeof i=="function"?i(e,t):i}class jh{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new zh(Oi(s.template,l,s),Oi(s.styles,l,s));l.definePresentation(a);let c=Oi(s.shadowOptions,l,s);l.shadowRootMode&&(c?n.shadowOptions||(c.mode=l.shadowRootMode):c!==null&&(c={mode:l.shadowRootMode})),l.defineElement({elementOptions:Oi(s.elementOptions,l,s),shadowOptions:c,attributes:Oi(s.attributes,l,s)})}})}}function De(i,...e){e.forEach(t=>{if(Object.getOwnPropertyNames(t.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(i.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s))}),t.attributes){const s=i.attributes||[];i.attributes=s.concat(t.attributes)}})}const fo={horizontal:"horizontal",vertical:"vertical"};function Uh(i,e){let t=i.length;for(;t--;)if(e(i[t],t,i))return t;return-1}function qh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Wh(...i){return i.every(e=>e instanceof HTMLElement)}function Gh(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Lt;function Qh(){if(typeof Lt=="boolean")return Lt;if(!qh())return Lt=!1,Lt;const i=document.createElement("style"),e=Gh();e!==null&&i.setAttribute("nonce",e),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Lt=!0}catch{Lt=!1}finally{document.head.removeChild(i)}return Lt}const xr="focus",wr="focusin",hi="focusout",ui="keydown";var Cr;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Cr||(Cr={}));const Gt="ArrowDown",Wi="ArrowLeft",Gi="ArrowRight",Qt="ArrowUp",Qi="Enter",Ms="Escape",xi="Home",wi="End",Yh="F2",Jh="PageDown",Xh="PageUp",Yi=" ",po="Tab",Zh={ArrowDown:Gt,ArrowLeft:Wi,ArrowRight:Gi,ArrowUp:Qt};var fi;(function(i){i.ltr="ltr",i.rtl="rtl"})(fi||(fi={}));function Kh(i,e,t){return t<i?e:t>e?i:t}function as(i,e,t=0){return[e,t]=[e,t].sort((s,n)=>s-n),e<=i&&i<t}let eu=0;function Ts(i=""){return`${i}${eu++}`}const tu=(i,e)=>q`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Oe("control")}
    >
        ${yi(i,e)}
        <span class="content" part="content">
            <slot ${Ve("defaultSlottedContent")}></slot>
        </span>
        ${vi(i,e)}
    </a>
`;class K{}p([m({attribute:"aria-atomic"})],K.prototype,"ariaAtomic",void 0);p([m({attribute:"aria-busy"})],K.prototype,"ariaBusy",void 0);p([m({attribute:"aria-controls"})],K.prototype,"ariaControls",void 0);p([m({attribute:"aria-current"})],K.prototype,"ariaCurrent",void 0);p([m({attribute:"aria-describedby"})],K.prototype,"ariaDescribedby",void 0);p([m({attribute:"aria-details"})],K.prototype,"ariaDetails",void 0);p([m({attribute:"aria-disabled"})],K.prototype,"ariaDisabled",void 0);p([m({attribute:"aria-errormessage"})],K.prototype,"ariaErrormessage",void 0);p([m({attribute:"aria-flowto"})],K.prototype,"ariaFlowto",void 0);p([m({attribute:"aria-haspopup"})],K.prototype,"ariaHaspopup",void 0);p([m({attribute:"aria-hidden"})],K.prototype,"ariaHidden",void 0);p([m({attribute:"aria-invalid"})],K.prototype,"ariaInvalid",void 0);p([m({attribute:"aria-keyshortcuts"})],K.prototype,"ariaKeyshortcuts",void 0);p([m({attribute:"aria-label"})],K.prototype,"ariaLabel",void 0);p([m({attribute:"aria-labelledby"})],K.prototype,"ariaLabelledby",void 0);p([m({attribute:"aria-live"})],K.prototype,"ariaLive",void 0);p([m({attribute:"aria-owns"})],K.prototype,"ariaOwns",void 0);p([m({attribute:"aria-relevant"})],K.prototype,"ariaRelevant",void 0);p([m({attribute:"aria-roledescription"})],K.prototype,"ariaRoledescription",void 0);class Je extends Z{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}p([m],Je.prototype,"download",void 0);p([m],Je.prototype,"href",void 0);p([m],Je.prototype,"hreflang",void 0);p([m],Je.prototype,"ping",void 0);p([m],Je.prototype,"referrerpolicy",void 0);p([m],Je.prototype,"rel",void 0);p([m],Je.prototype,"target",void 0);p([m],Je.prototype,"type",void 0);p([A],Je.prototype,"defaultSlottedContent",void 0);class go{}p([m({attribute:"aria-expanded"})],go.prototype,"ariaExpanded",void 0);De(go,K);De(Je,mi,go);const iu=i=>{const e=i.closest("[dir]");return e!==null&&e.dir==="rtl"?fi.rtl:fi.ltr},ql=(i,e)=>q`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Ji extends Z{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}p([m({attribute:"fill"})],Ji.prototype,"fill",void 0);p([m({attribute:"color"})],Ji.prototype,"color",void 0);p([m({mode:"boolean"})],Ji.prototype,"circular",void 0);const su=(i,e)=>q`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Oe("control")}
    >
        ${yi(i,e)}
        <span class="content" part="content">
            <slot ${Ve("defaultSlottedContent")}></slot>
        </span>
        ${vi(i,e)}
    </button>
`,$r="form-associated-proxy",kr="ElementInternals",Tr=kr in window&&"setFormValue"in window[kr].prototype,Ir=new WeakMap;function Xi(i){const e=class extends i{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Tr}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?s.concat(Array.from(t)):s;return Object.freeze(n)}else return Wt}valueChanged(t,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),z.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),z.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Tr)return null;let t=Ir.get(this);return t||(t=this.attachInternals(),Ir.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,s,n){this.elementInternals?this.elementInternals.setValidity(t,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",$r),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",$r)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,s){this.elementInternals&&this.elementInternals.setFormValue(t,s||t)}_keypressHandler(t){switch(t.key){case Qi:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(t){t.stopPropagation()}};return m({mode:"boolean"})(e.prototype,"disabled"),m({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),m({attribute:"current-value"})(e.prototype,"currentValue"),m(e.prototype,"name"),m({mode:"boolean"})(e.prototype,"required"),A(e.prototype,"value"),e}function Wl(i){class e extends Xi(i){}class t extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return m({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),m({attribute:"current-checked",converter:_l})(t.prototype,"currentChecked"),A(t.prototype,"defaultChecked"),A(t.prototype,"checked"),t}class nu extends Z{}class ou extends Xi(nu){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Xe extends ou{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.removeEventListener("click",this.handleClick)})}}p([m({mode:"boolean"})],Xe.prototype,"autofocus",void 0);p([m({attribute:"form"})],Xe.prototype,"formId",void 0);p([m],Xe.prototype,"formaction",void 0);p([m],Xe.prototype,"formenctype",void 0);p([m],Xe.prototype,"formmethod",void 0);p([m({mode:"boolean"})],Xe.prototype,"formnovalidate",void 0);p([m],Xe.prototype,"formtarget",void 0);p([m],Xe.prototype,"type",void 0);p([A],Xe.prototype,"defaultSlottedContent",void 0);class Ns{}p([m({attribute:"aria-expanded"})],Ns.prototype,"ariaExpanded",void 0);p([m({attribute:"aria-pressed"})],Ns.prototype,"ariaPressed",void 0);De(Ns,K);De(Xe,mi,Ns);const cs={none:"none",default:"default",sticky:"sticky"},xt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Li={default:"default",header:"header",stickyHeader:"sticky-header"};class xe extends Z{constructor(){super(...arguments),this.rowType=Li.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Hl(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(hi,this.handleFocusout),this.addEventListener(ui,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(hi,this.handleFocusout),this.removeEventListener(ui,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Wi:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Gi:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case xi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case wi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Li.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Li.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}p([m({attribute:"grid-template-columns"})],xe.prototype,"gridTemplateColumns",void 0);p([m({attribute:"row-type"})],xe.prototype,"rowType",void 0);p([A],xe.prototype,"rowData",void 0);p([A],xe.prototype,"columnDefinitions",void 0);p([A],xe.prototype,"cellItemTemplate",void 0);p([A],xe.prototype,"headerCellItemTemplate",void 0);p([A],xe.prototype,"rowIndex",void 0);p([A],xe.prototype,"isActiveRow",void 0);p([A],xe.prototype,"activeCellItemTemplate",void 0);p([A],xe.prototype,"defaultCellItemTemplate",void 0);p([A],xe.prototype,"defaultHeaderCellItemTemplate",void 0);p([A],xe.prototype,"cellElements",void 0);function ru(i){const e=i.tagFor(xe);return q`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const lu=(i,e)=>{const t=ru(i),s=i.tagFor(xe);return q`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${t}"
            ${Nl({property:"rowElements",filter:uo("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class he extends Z{constructor(){super(),this.noTabbing=!1,this.generateHeader=cs.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,t)),a=r[l];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,z.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,s)=>{const n=t;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(s=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=he.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=he.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Hl(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(xr,this.handleFocus),this.addEventListener(ui,this.handleKeydown),this.addEventListener(hi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),z.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(xr,this.handleFocus),this.removeEventListener(ui,this.handleKeydown),this.removeEventListener(hi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case Qt:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Gt:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Xh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const r=this.rowElements[t];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Jh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=s;t++){const r=this.rowElements[t];if(r.offsetTop+r.offsetHeight>n){let l=0;this.generateHeader===cs.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case xi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case wi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,z.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==cs.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===cs.sticky?Li.stickyHeader:Li.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}he.generateColumns=i=>Object.getOwnPropertyNames(i).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));p([m({attribute:"no-tabbing",mode:"boolean"})],he.prototype,"noTabbing",void 0);p([m({attribute:"generate-header"})],he.prototype,"generateHeader",void 0);p([m({attribute:"grid-template-columns"})],he.prototype,"gridTemplateColumns",void 0);p([A],he.prototype,"rowsData",void 0);p([A],he.prototype,"columnDefinitions",void 0);p([A],he.prototype,"rowItemTemplate",void 0);p([A],he.prototype,"cellItemTemplate",void 0);p([A],he.prototype,"headerCellItemTemplate",void 0);p([A],he.prototype,"focusRowIndex",void 0);p([A],he.prototype,"focusColumnIndex",void 0);p([A],he.prototype,"defaultRowItemTemplate",void 0);p([A],he.prototype,"rowElementTag",void 0);p([A],he.prototype,"rowElements",void 0);const au=q`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,cu=q`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class St extends Z{constructor(){super(...arguments),this.cellType=xt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(wr,this.handleFocusin),this.addEventListener(hi,this.handleFocusout),this.addEventListener(ui,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(wr,this.handleFocusin),this.removeEventListener(hi,this.handleFocusout),this.removeEventListener(ui,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case xt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===xt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===xt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Qi:case Yh:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case xt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case Ms:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case xt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=cu.render(this,this);break;case void 0:case xt.rowHeader:case xt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=au.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}p([m({attribute:"cell-type"})],St.prototype,"cellType",void 0);p([m({attribute:"grid-column"})],St.prototype,"gridColumn",void 0);p([A],St.prototype,"rowData",void 0);p([A],St.prototype,"columnDefinition",void 0);function du(i){const e=i.tagFor(St);return q`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,s)=>s.index+1}"
        :rowData="${(t,s)=>s.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function hu(i){const e=i.tagFor(St);return q`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,s)=>s.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const uu=(i,e)=>{const t=du(i),s=hu(i);return q`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${s}"
            ${Nl({property:"cellElements",filter:uo('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ve("slottedCellElements")}></slot>
        </template>
    `},fu=(i,e)=>q`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,pu=(i,e)=>q`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ve("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class gu extends Z{}class bu extends Wl(gu){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Vs extends bu{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Yi:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}p([m({attribute:"readonly",mode:"boolean"})],Vs.prototype,"readOnly",void 0);p([A],Vs.prototype,"defaultSlottedNodes",void 0);p([A],Vs.prototype,"indeterminate",void 0);function Gl(i){return Wh(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class bt extends Z{constructor(e,t,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e!=null?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),V.notify(this,"value")}get value(){var e;return V.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}p([A],bt.prototype,"checked",void 0);p([A],bt.prototype,"content",void 0);p([A],bt.prototype,"defaultSelected",void 0);p([m({mode:"boolean"})],bt.prototype,"disabled",void 0);p([m({attribute:"selected",mode:"boolean"})],bt.prototype,"selectedAttribute",void 0);p([A],bt.prototype,"selected",void 0);p([m({attribute:"value",mode:"fromView"})],bt.prototype,"initialValue",void 0);class Ci{}p([A],Ci.prototype,"ariaChecked",void 0);p([A],Ci.prototype,"ariaPosInSet",void 0);p([A],Ci.prototype,"ariaSelected",void 0);p([A],Ci.prototype,"ariaSetSize",void 0);De(Ci,K);De(bt,mi,Ci);class Ie extends Z{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return V.track(this,"options"),this._options}set options(e){this._options=e,V.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const s=e>t?-1:e<t?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,l,a)=>!r&&!l.disabled&&a<n?l:r,o);break}case 1:{o=this.options.reduce((r,l,a)=>!r&&!l.disabled&&a>n?l:r,o);break}}return this.options.indexOf(o)}handleChange(e,t){switch(t){case"selected":{Ie.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ie.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case xi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Gt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Qt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case wi:{e.preventDefault(),this.selectLastOption();break}case po:return this.focusAndScrollOptionIntoView(),!0;case Qi:case Ms:return!0;case Yi:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(((s=this.options[this.selectedIndex])===null||s===void 0?void 0:s.disabled)&&typeof e=="number"){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;this.selectedIndex=o,t===o&&this.selectedIndexChanged(t,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var s;const n=t.filter(Ie.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=V.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Uh(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((n,o)=>(Gl(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=Ts("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}Ie.slottedOptionFilter=i=>Gl(i)&&!i.hidden;Ie.TYPE_AHEAD_TIMEOUT_MS=1e3;p([m({mode:"boolean"})],Ie.prototype,"disabled",void 0);p([A],Ie.prototype,"selectedIndex",void 0);p([A],Ie.prototype,"selectedOptions",void 0);p([A],Ie.prototype,"slottedOptions",void 0);p([A],Ie.prototype,"typeaheadBuffer",void 0);class Yt{}p([A],Yt.prototype,"ariaActiveDescendant",void 0);p([A],Yt.prototype,"ariaDisabled",void 0);p([A],Yt.prototype,"ariaExpanded",void 0);p([A],Yt.prototype,"ariaMultiSelectable",void 0);De(Yt,K);De(Ie,Yt);const un={above:"above",below:"below"};function Pn(i){const e=i.parentElement;if(e)return e;{const t=i.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function mu(i,e){let t=e;for(;t!==null;){if(t===i)return!0;t=Pn(t)}return!1}const ht=document.createElement("div");function vu(i){return i instanceof Hs}class bo{setProperty(e,t){z.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){z.queueUpdate(()=>this.target.removeProperty(e))}}class yu extends bo{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Re.create([t]))}}class xu extends bo{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class wu extends bo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Ql{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),V.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),z.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),z.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}p([A],Ql.prototype,"target",void 0);class Cu{constructor(e){this.target=e.style}setProperty(e,t){z.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){z.queueUpdate(()=>this.target.removeProperty(e))}}class fe{setProperty(e,t){fe.properties[e]=t;for(const s of fe.roots.values())ii.getOrCreate(fe.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete fe.properties[e];for(const t of fe.roots.values())ii.getOrCreate(fe.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=fe;if(!t.has(e)){t.add(e);const s=ii.getOrCreate(this.normalizeRoot(e));for(const n in fe.properties)s.setProperty(n,fe.properties[n])}}static unregisterRoot(e){const{roots:t}=fe;if(t.has(e)){t.delete(e);const s=ii.getOrCreate(fe.normalizeRoot(e));for(const n in fe.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===ht?document:e}}fe.roots=new Set;fe.properties={};const fn=new WeakMap,$u=z.supportsAdoptedStyleSheets?yu:Ql,ii=Object.freeze({getOrCreate(i){if(fn.has(i))return fn.get(i);let e;return i===ht?e=new fe:i instanceof Document?e=z.supportsAdoptedStyleSheets?new xu:new wu:vu(i)?e=new $u(i):e=new Cu(i),fn.set(i,e),e}});class ke extends Pl{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ke.uniqueId(),ke.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ke({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return ke.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=le.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ke&&(t=this.alias(t)),le.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),le.existsFor(e)&&le.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ht,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!le.existsFor(t)&&le.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}ke.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();ke.tokensById=new Map;class ku{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){ii.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(le.getOrCreate(t).get(e)))}remove(e,t){ii.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Tu{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=V.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Fi))}}class Iu{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),V.getNotifier(this).notify(e.id))}get(e){return V.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Ai=new WeakMap,Ei=new WeakMap;class le{constructor(e){this.target=e,this.store=new Iu,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,s)=>{const n=ke.getTokenById(s);if(n&&(n.notify(this.target),ke.isCSSDesignToken(n))){const o=this.parent,r=this.isReflecting(n);if(o){const l=o.get(n),a=t.get(n);l!==a&&!r?this.reflectToCSS(n):l===a&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}},Ai.set(e,this),V.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Hs?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ai.get(e)||new le(e)}static existsFor(e){return Ai.has(e)}static findParent(e){if(ht!==e.target){let t=Pn(e.target);for(;t!==null;){if(Ai.has(t))return Ai.get(t);t=Pn(t)}return le.getOrCreate(ht)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==ht?le.getOrCreate(ht):null}while(s!==null);return null}get parent(){return Ei.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=le.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ke.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ke.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=le.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Ei.get(this).removeChild(this)}appendChild(e){e.parent&&Ei.get(e).removeChild(e);const t=this.children.filter(s=>e.contains(s));Ei.set(e,this),this.children.push(e),t.forEach(s=>e.appendChild(s)),V.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n)}removeChild(e){const t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),V.getNotifier(this.store).unsubscribe(e),e.parent===this?Ei.delete(e):!1}contains(e){return mu(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),le.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),le.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=ke.getTokenById(t);!s||this.hydrate(s,this.getRaw(s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);ke.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new Tu(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}le.cssCustomPropertyReflector=new ku;p([A],le.prototype,"children",void 0);function Ou(i){return ke.from(i)}const Yl=Object.freeze({create:Ou,notifyConnection(i){return!i.isConnected||!le.existsFor(i)?!1:(le.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!le.existsFor(i)?!1:(le.getOrCreate(i).unbind(),!0)},registerRoot(i=ht){fe.registerRoot(i)},unregisterRoot(i=ht){fe.unregisterRoot(i)}}),pn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),gn=new Map,gs=new Map;let li=null;const Si=ee.createInterface(i=>i.cachedCallback(e=>(li===null&&(li=new Xl(null,e)),li))),Jl=Object.freeze({tagFor(i){return gs.get(i)},responsibleFor(i){const e=i.$$designSystem$$;return e||ee.findResponsibleContainer(i).get(Si)},getOrCreate(i){if(!i)return li===null&&(li=ee.getOrCreateDOMContainer().get(Si)),li;const e=i.$$designSystem$$;if(e)return e;const t=ee.getOrCreateDOMContainer(i);if(t.has(Si,!1))return t.get(Si);{const s=new Xl(i,t);return t.register(qi.instance(Si,s)),s}}});function Au(i,e,t){return typeof i=="string"?{name:i,type:e,callback:t}:i}class Xl{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>pn.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,a,c){const u=Au(l,a,c),{name:h,callback:g,baseClass:k}=u;let{type:S}=u,I=h,F=gn.get(I),B=!0;for(;F;){const ae=n(I,S,F);switch(ae){case pn.ignoreDuplicate:return;case pn.definitionCallbackOnly:B=!1,F=void 0;break;default:I=ae,F=gn.get(I);break}}B&&((gs.has(S)||S===Z)&&(S=class extends S{}),gn.set(I,S),gs.set(S,I),k&&gs.set(k,I)),s.push(new Eu(t,I,S,o,g,B))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Yl.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const l of s)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Eu{constructor(e,t,s,n,o,r){this.container=e,this.name=t,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Ul.define(this.name,e,this.container)}defineElement(e){this.definition=new Ls(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Jl.tagFor(e)}}const Su=(i,e)=>q`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,Ru={separator:"separator",presentation:"presentation"};class mo extends Z{constructor(){super(...arguments),this.role=Ru.separator,this.orientation=fo.horizontal}}p([m],mo.prototype,"role",void 0);p([m],mo.prototype,"orientation",void 0);const _u=(i,e)=>q`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${yi(i,e)}
        <span class="content" part="content">
            <slot ${Ve("content")}></slot>
        </span>
        ${vi(i,e)}
    </template>
`;class zs extends Ie{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var s,n;this.ariaActiveDescendant=(n=(s=this.options[t])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,s)=>{t.checked=as(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=as(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=as(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,s)=>{t.checked=as(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const s=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,t){case xi:{this.checkFirstOption(s);return}case Gt:{this.checkNextOption(s);return}case Qt:{this.checkPreviousOption(s);return}case wi:{this.checkLastOption(s);return}case po:return this.focusAndScrollOptionIntoView(),!0;case Ms:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Yi:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var s;this.ariaMultiSelectable=t?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var s;const n=Math.max(0,parseInt((s=t==null?void 0:t.toFixed())!==null&&s!==void 0?s:"",10));n!==t&&z.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),t=!e.every(s=>s.selected);e.forEach(s=>s.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}p([A],zs.prototype,"activeIndex",void 0);p([m({mode:"boolean"})],zs.prototype,"multiple",void 0);p([m({converter:Ye})],zs.prototype,"size",void 0);class Du extends Z{}class Pu extends Xi(Du){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Fu={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class Le extends Pu{constructor(){super(...arguments),this.type=Fu.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&z.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}p([m({attribute:"readonly",mode:"boolean"})],Le.prototype,"readOnly",void 0);p([m({mode:"boolean"})],Le.prototype,"autofocus",void 0);p([m],Le.prototype,"placeholder",void 0);p([m],Le.prototype,"type",void 0);p([m],Le.prototype,"list",void 0);p([m({converter:Ye})],Le.prototype,"maxlength",void 0);p([m({converter:Ye})],Le.prototype,"minlength",void 0);p([m],Le.prototype,"pattern",void 0);p([m({converter:Ye})],Le.prototype,"size",void 0);p([m({mode:"boolean"})],Le.prototype,"spellcheck",void 0);p([A],Le.prototype,"defaultSlottedNodes",void 0);class vo{}De(vo,K);De(Le,mi,vo);const Or=44,Bu=(i,e)=>q`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${ks(t=>typeof t.value=="number",q`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>Or*t.percentComplete/100}px ${Or}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${ks(t=>typeof t.value!="number",q`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class $i extends Z{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=t-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}p([m({converter:Ye})],$i.prototype,"value",void 0);p([m({converter:Ye})],$i.prototype,"min",void 0);p([m({converter:Ye})],$i.prototype,"max",void 0);p([m({mode:"boolean"})],$i.prototype,"paused",void 0);p([A],$i.prototype,"percentComplete",void 0);const Lu=(i,e)=>q`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @focusout="${(t,s)=>t.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===fo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ve({property:"slottedRadioButtons",filter:uo("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Rt extends Z{constructor(){super(...arguments),this.orientation=fo.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(s=>{s!==t&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const s=e[t];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,s=e.target,n=s!==null?t.indexOf(s):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===t.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const s=this.slottedRadioButtons;t.checked||s.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,s)=>e===t.length&&this.isInsideToolbar&&s===Gi,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Wi,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,t,e.key)){this.moveRightOffGroup();return}else s===t.length&&(s=0);for(;s<t.length&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;if(s+1>=t.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(t,s);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,s=s<0?t.length-1:s,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;s-1<0?s=t.length-1:s-=1}else{this.moveToRadioByIndex(t,s);break}},this.keydownHandler=e=>{const t=e.key;if(t in Zh&&this.isInsideFoundationToolbar)return!0;switch(t){case Qi:{this.checkFocusedRadio();break}case Gi:case Gt:{this.direction===fi.ltr?this.moveRight(e):this.moveLeft(e);break}case Wi:case Qt:{this.direction===fi.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=iu(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),t=e?e.length:0;if(t>1){const n=e[t-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}p([m({attribute:"readonly",mode:"boolean"})],Rt.prototype,"readOnly",void 0);p([m({attribute:"disabled",mode:"boolean"})],Rt.prototype,"disabled",void 0);p([m],Rt.prototype,"name",void 0);p([m],Rt.prototype,"value",void 0);p([m],Rt.prototype,"orientation",void 0);p([A],Rt.prototype,"childItems",void 0);p([A],Rt.prototype,"slottedRadioButtons",void 0);const Hu=(i,e)=>q`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ve("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Mu extends Z{}class Nu extends Wl(Mu){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class js extends Nu{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Yi:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}p([m({attribute:"readonly",mode:"boolean"})],js.prototype,"readOnly",void 0);p([A],js.prototype,"name",void 0);p([A],js.prototype,"defaultSlottedNodes",void 0);function Vu(i,e,t){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class zu extends zs{}class ju extends Xi(zu){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class _t extends ju{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ts("listbox-"),this.maxHeight=0}openChanged(e,t){if(!!this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,z.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return V.track(this,"value"),this._value}set value(e){var t,s,n,o,r,l,a;const c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const u=this._options.findIndex(k=>k.value===e),h=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,g=(r=(o=this._options[u])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(u===-1||h!==g)&&(e="",this.selectedIndex=u),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}c!==e&&(this._value=e,super.valueChanged(c,e),V.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,s;this.$fastController.isConnected&&(this.value=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?un.above:un.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===un.above?~~e.top:~~s}get displayValue(){var e,t;return V.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(s=>{V.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(s=>{V.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var s;super.selectedOptionsChanged(e,t),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);l&&(l.selected=n.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ie.slottedOptionFilter),s=t==null?void 0:t.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Yi:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case xi:case wi:{e.preventDefault();break}case Qi:{e.preventDefault(),this.open=!this.open;break}case Ms:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case po:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Gt||t===Qt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&V.notify(this,"displayValue")}}p([m({attribute:"open",mode:"boolean"})],_t.prototype,"open",void 0);p([Wd],_t.prototype,"collapsible",null);p([A],_t.prototype,"control",void 0);p([m({attribute:"position"})],_t.prototype,"positionAttribute",void 0);p([A],_t.prototype,"position",void 0);p([A],_t.prototype,"maxHeight",void 0);class yo{}p([A],yo.prototype,"ariaControls",void 0);De(yo,Yt);De(_t,mi,yo);const Uu=(i,e)=>q`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        ${ks(t=>t.collapsible,q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Oe("control")}
                >
                    ${yi(i,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${vi(i,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${Oe("listbox")}
        >
            <slot
                ${Ve({filter:Ie.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,qu=(i,e)=>q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Wu extends Z{}const Gu=(i,e)=>q`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class Zl extends Z{}p([m({mode:"boolean"})],Zl.prototype,"disabled",void 0);const Qu=(i,e)=>q`
    <template class="${t=>t.orientation}">
        ${yi(i,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ve("tabs")}></slot>

            ${ks(t=>t.showActiveIndicator,q`
                    <div
                        ${Oe("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${vi(i,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Ve("tabpanels")}></slot>
        </div>
    </template>
`,Fn={vertical:"vertical",horizontal:"horizontal"};class mt extends Z{constructor(){super(...arguments),this.orientation=Fn.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",s=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const l=this.tabIds[o],a=this.tabpanelIds[o];n.setAttribute("id",l),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",a),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n)}n.style[e]="",n.style[t]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const s=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Wi:e.preventDefault(),this.adjustBackward(e);break;case Gi:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Qt:e.preventDefault(),this.adjustBackward(e);break;case Gt:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case xi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case wi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else{if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else s-1<0?s=t.length-1:s-=1},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Ts()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Ts()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Fn.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Kh(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}p([m],mt.prototype,"orientation",void 0);p([m],mt.prototype,"activeid",void 0);p([A],mt.prototype,"tabs",void 0);p([A],mt.prototype,"tabpanels",void 0);p([m({mode:"boolean"})],mt.prototype,"activeindicator",void 0);p([A],mt.prototype,"activeIndicatorRef",void 0);p([A],mt.prototype,"showActiveIndicator",void 0);De(mt,mi);class Yu extends Z{}class Ju extends Xi(Yu){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Kl={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class Ee extends Ju{constructor(){super(...arguments),this.resize=Kl.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}p([m({mode:"boolean"})],Ee.prototype,"readOnly",void 0);p([m],Ee.prototype,"resize",void 0);p([m({mode:"boolean"})],Ee.prototype,"autofocus",void 0);p([m({attribute:"form"})],Ee.prototype,"formId",void 0);p([m],Ee.prototype,"list",void 0);p([m({converter:Ye})],Ee.prototype,"maxlength",void 0);p([m({converter:Ye})],Ee.prototype,"minlength",void 0);p([m],Ee.prototype,"name",void 0);p([m],Ee.prototype,"placeholder",void 0);p([m({converter:Ye,mode:"fromView"})],Ee.prototype,"cols",void 0);p([m({converter:Ye,mode:"fromView"})],Ee.prototype,"rows",void 0);p([m({mode:"boolean"})],Ee.prototype,"spellcheck",void 0);p([A],Ee.prototype,"defaultSlottedNodes",void 0);De(Ee,vo);const Xu=(i,e)=>q`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Kl.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ve("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,s)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Oe("control")}
        ></textarea>
    </template>
`,Zu=(i,e)=>q`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ve({property:"defaultSlottedNodes",filter:Vu})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${yi(i,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Oe("control")}
            />
            ${vi(i,e)}
        </div>
    </template>
`,Et="not-allowed",Ku=":host([hidden]){display:none}";function we(i){return`${Ku}:host{display:${i}}`}const ye=Qh()?"focus-visible":"focus";function ef(i){return Jl.getOrCreate(i).withPrefix("vscode")}function tf(i){window.addEventListener("load",()=>{new MutationObserver(()=>{Ar(i)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ar(i)})}function Ar(i){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const s=t.getAttribute("data-vscode-theme-kind");for(const[n,o]of i){let r=e.getPropertyValue(n).toString();s==="vscode-high-contrast"?(r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent")):o.name==="contrast-active-border"&&(r="transparent"),o.setValueFor(t,r)}}}const Er=new Map;let Sr=!1;function O(i,e){const t=Yl.create(i);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}Er.set(e,t)}return Sr||(tf(Er),Sr=!0),t}const sf=O("background","--vscode-editor-background").withDefault("#1e1e1e"),U=O("border-width").withDefault(1),ea=O("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");O("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const pt=O("corner-radius").withDefault(0),D=O("design-unit").withDefault(4),Jt=O("disabled-opacity").withDefault(.4),X=O("focus-border","--vscode-focusBorder").withDefault("#007fd4"),ze=O("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");O("font-weight","--vscode-font-weight").withDefault("400");const be=O("foreground","--vscode-foreground").withDefault("#cccccc"),bs=O("input-height").withDefault("26"),xo=O("input-min-width").withDefault("100px"),Ae=O("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),_e=O("type-ramp-base-line-height").withDefault("normal"),ta=O("type-ramp-minus1-font-size").withDefault("11px"),ia=O("type-ramp-minus1-line-height").withDefault("16px");O("type-ramp-minus2-font-size").withDefault("9px");O("type-ramp-minus2-line-height").withDefault("16px");O("type-ramp-plus1-font-size").withDefault("16px");O("type-ramp-plus1-line-height").withDefault("24px");const nf=O("scrollbarWidth").withDefault("10px"),of=O("scrollbarHeight").withDefault("10px"),rf=O("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),lf=O("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),af=O("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),sa=O("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),na=O("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),wo=O("button-border","--vscode-button-border").withDefault("transparent"),Rr=O("button-icon-background").withDefault("transparent"),cf=O("button-icon-corner-radius").withDefault("5px"),df=O("button-icon-outline-offset").withDefault(0),_r=O("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),hf=O("button-icon-padding").withDefault("3px"),ai=O("button-primary-background","--vscode-button-background").withDefault("#0e639c"),oa=O("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),ra=O("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),bn=O("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),uf=O("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),ff=O("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),pf=O("button-padding-horizontal").withDefault("11px"),gf=O("button-padding-vertical").withDefault("4px"),dt=O("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),si=O("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),bf=O("checkbox-corner-radius").withDefault(3);O("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const zt=O("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),ci=O("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),mf=O("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),vf=O("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),ds=O("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Tt=O("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");O("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const yf=O("dropdown-list-max-height").withDefault("200px"),jt=O("input-background","--vscode-input-background").withDefault("#3c3c3c"),la=O("input-foreground","--vscode-input-foreground").withDefault("#cccccc");O("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Dr=O("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),xf=O("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),wf=O("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Cf=O("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),ei=O("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),$f=O("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");O("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");O("panel-view-border","--vscode-panel-border").withDefault("#80808059");const kf=O("tag-corner-radius").withDefault("2px"),Tf=(i,e)=>te`
	${we("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${ta};
		line-height: ${ia};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${sa};
		border: calc(${U} * 1px) solid ${wo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${na};
		display: flex;
		height: calc(${D} * 4px);
		justify-content: center;
		min-width: calc(${D} * 4px + 2px);
		min-height: calc(${D} * 4px + 2px);
		padding: 3px 6px;
	}
`;class If extends Ji{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const bp=If.compose({baseName:"badge",template:ql,styles:Tf}),Of=te`
	${we("inline-flex")} :host {
		outline: none;
		font-family: ${ze};
		font-size: ${Ae};
		line-height: ${_e};
		color: ${oa};
		background: ${ai};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${gf} ${pf};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${U} * 1px) solid ${wo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${ra};
	}
	:host(:active) {
		background: ${ai};
	}
	.control:${ye} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Jt};
		background: ${ai};
		cursor: ${Et};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${D} * 4px);
		height: calc(${D} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Af=te`
	:host([appearance='primary']) {
		background: ${ai};
		color: ${oa};
	}
	:host([appearance='primary']:hover) {
		background: ${ra};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${ai};
	}
	:host([appearance='primary']) .control:${ye} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${ai};
	}
`,Ef=te`
	:host([appearance='secondary']) {
		background: ${bn};
		color: ${uf};
	}
	:host([appearance='secondary']:hover) {
		background: ${ff};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${bn};
	}
	:host([appearance='secondary']) .control:${ye} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${bn};
	}
`,Sf=te`
	:host([appearance='icon']) {
		background: ${Rr};
		border-radius: ${cf};
		color: ${be};
	}
	:host([appearance='icon']:hover) {
		background: ${_r};
		outline: 1px dotted ${ea};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${hf};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${_r};
	}
	:host([appearance='icon']) .control:${ye} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: ${df};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Rr};
	}
`,Rf=(i,e)=>te`
	${Of}
	${Af}
	${Ef}
	${Sf}
`;class aa extends Xe{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}p([m],aa.prototype,"appearance",void 0);const mp=aa.compose({baseName:"button",template:su,styles:Rf,shadowOptions:{delegatesFocus:!0}}),_f=(i,e)=>te`
	${we("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${D} * 1px) 0;
		user-select: none;
		font-size: ${Ae};
		line-height: ${_e};
	}
	.control {
		position: relative;
		width: calc(${D} * 4px + 2px);
		height: calc(${D} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${bf} * 1px);
		border: calc(${U} * 1px) solid ${si};
		background: ${dt};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${ze};
		color: ${be};
		padding-inline-start: calc(${D} * 2px + 2px);
		margin-inline-end: calc(${D} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${be};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${be};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${dt};
		border-color: ${si};
	}
	:host(:enabled) .control:active {
		background: ${dt};
		border-color: ${X};
	}
	:host(:${ye}) .control {
		border: calc(${U} * 1px) solid ${X};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Et};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Jt};
	}
`;class Df extends Vs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const vp=Df.compose({baseName:"checkbox",template:pu,styles:_f,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),Pf=(i,e)=>te`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Ff=(i,e)=>te`
	:host {
		display: grid;
		padding: calc((${D} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${sf};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${mf};
		outline: 1px dotted ${ea};
		outline-offset: -1px;
	}
`,Bf=(i,e)=>te`
	:host {
		padding: calc(${D} * 1px) calc(${D} * 3px);
		color: ${be};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Ae};
		line-height: ${_e};
		font-weight: 400;
		border: solid calc(${U} * 1px) transparent;
		border-radius: calc(${pt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
		overflow-wrap: normal;
	}
	:host(:${ye}),
	:host(:focus),
	:host(:active) {
		background: ${zt};
		border: solid calc(${U} * 1px) ${X};
		color: ${ci};
		outline: none;
	}
	:host(:${ye}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${ci} !important;
	}
`;class Lf extends he{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const yp=Lf.compose({baseName:"data-grid",baseClass:he,template:lu,styles:Pf});class Hf extends xe{}const xp=Hf.compose({baseName:"data-grid-row",baseClass:xe,template:uu,styles:Ff});class Mf extends St{}const wp=Mf.compose({baseName:"data-grid-cell",baseClass:St,template:fu,styles:Bf}),Nf=(i,e)=>te`
	${we("block")} :host {
		border: none;
		border-top: calc(${U} * 1px) solid ${vf};
		box-sizing: content-box;
		height: 0;
		margin: calc(${D} * 1px) 0;
		width: 100%;
	}
`;class Vf extends mo{}const Cp=Vf.compose({baseName:"divider",template:Su,styles:Nf}),zf=(i,e)=>te`
	${we("inline-flex")} :host {
		background: ${ds};
		box-sizing: border-box;
		color: ${be};
		contain: contents;
		font-family: ${ze};
		height: calc(${bs} * 1px);
		position: relative;
		user-select: none;
		min-width: ${xo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${U} * 1px) solid ${Tt};
		border-radius: calc(${pt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Ae};
		line-height: ${_e};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${ds};
		border: calc(${U} * 1px) solid ${X};
		border-radius: calc(${pt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${yf};
		padding: 0 0 calc(${D} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${ye}) .control {
		border-color: ${X};
	}
	:host(:not([disabled]):hover) {
		background: ${ds};
		border-color: ${Tt};
	}
	:host(:${ye}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${ci};
	}
	:host([disabled]) {
		cursor: ${Et};
		opacity: ${Jt};
	}
	:host([disabled]) .control {
		cursor: ${Et};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${ds};
		color: ${be};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${X};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${X};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${bs} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${bs} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${D} * 4px);
		min-width: calc(${D} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class jf extends _t{}const $p=jf.compose({baseName:"dropdown",template:Uu,styles:zf,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),Uf=(i,e)=>te`
	${we("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${xf};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${ze};
		font-size: ${Ae};
		line-height: ${_e};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${U} * 1px) solid transparent;
		border-radius: calc(${pt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Dr};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Dr};
	}
	:host(:${ye}) .control,
	:host(:focus) .control {
		border: calc(${U} * 1px) solid ${X};
	}
`;class qf extends Je{}const kp=qf.compose({baseName:"link",template:tu,styles:Uf,shadowOptions:{delegatesFocus:!0}}),Wf=(i,e)=>te`
	${we("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${pt};
		border: calc(${U} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${be};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Ae};
		line-height: ${_e};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${D} / 2) * 1px)
			calc((${D} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${ye}) {
		border-color: ${X};
		background: ${zt};
		color: ${be};
	}
	:host([aria-selected='true']) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${ci};
	}
	:host(:active) {
		background: ${zt};
		color: ${ci};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${ci};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${zt};
		color: ${be};
	}
	:host([disabled]) {
		cursor: ${Et};
		opacity: ${Jt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;class Gf extends bt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}const Tp=Gf.compose({baseName:"option",template:_u,styles:Wf}),Qf=(i,e)=>te`
	${we("grid")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Ae};
		line-height: ${_e};
		color: ${be};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${D} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${D} * 1px) calc(${D} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${D} / 4) * 1px);
		justify-self: center;
		background: ${ei};
		margin: 0;
		border-radius: calc(${pt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,Yf=(i,e)=>te`
	${we("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Ae};
		line-height: ${_e};
		height: calc(${D} * 7px);
		padding: calc(${D} * 1px) 0;
		color: ${$f};
		fill: currentcolor;
		border-radius: calc(${pt} * 1px);
		border: solid calc(${U} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${ei};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${ei};
		fill: currentcolor;
	}
	:host(:${ye}) {
		outline: none;
		border: solid calc(${U} * 1px) ${Cf};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${D} * 2px);
	}
`,Jf=(i,e)=>te`
	${we("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${U} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Ae};
		line-height: ${_e};
		padding: 10px calc((${D} + 2) * 1px);
	}
`;class Xf extends mt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Fn.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const Ip=Xf.compose({baseName:"panels",template:Qu,styles:Qf});class Zf extends Zl{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const Op=Zf.compose({baseName:"panel-tab",template:Gu,styles:Yf});class Kf extends Wu{}const Ap=Kf.compose({baseName:"panel-view",template:qu,styles:Jf}),ep=(i,e)=>te`
	${we("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${D} * 7px);
		width: calc(${D} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${D} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${wf};
		stroke-width: calc(${D} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class tp extends $i{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,s){e==="value"&&this.removeAttribute("value")}}const Ep=tp.compose({baseName:"progress-ring",template:Bu,styles:ep,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),ip=(i,e)=>te`
	${we("flex")} :host {
		align-items: flex-start;
		margin: calc(${D} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${be};
		font-size: ${Ae};
		margin: calc(${D} * 1px) 0;
	}
`;class sp extends Rt{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Sp=sp.compose({baseName:"radio-group",template:Lu,styles:ip}),np=(i,e)=>te`
	${we("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Ae};
		line-height: ${_e};
		margin: calc(${D} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${dt};
		border-radius: 999px;
		border: calc(${U} * 1px) solid ${si};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${D} * 4px);
		position: relative;
		outline: none;
		width: calc(${D} * 4px);
	}
	.label {
		color: ${be};
		cursor: pointer;
		font-family: ${ze};
		margin-inline-end: calc(${D} * 2px + 2px);
		padding-inline-start: calc(${D} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${be};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${D} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${dt};
		border-color: ${si};
	}
	:host(:not([disabled])) .control:active {
		background: ${dt};
		border-color: ${X};
	}
	:host(:${ye}) .control {
		border: calc(${U} * 1px) solid ${X};
	}
	:host([aria-checked='true']) .control {
		background: ${dt};
		border: calc(${U} * 1px) solid ${si};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${dt};
		border: calc(${U} * 1px) solid ${si};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${dt};
		border: calc(${U} * 1px) solid ${X};
	}
	:host([aria-checked="true"]:${ye}:not([disabled])) .control {
		border: calc(${U} * 1px) solid ${X};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Jt};
	}
`;class op extends js{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Rp=op.compose({baseName:"radio",template:Hu,styles:np,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),rp=(i,e)=>te`
	${we("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${ta};
		line-height: ${ia};
	}
	.control {
		background-color: ${sa};
		border: calc(${U} * 1px) solid ${wo};
		border-radius: ${kf};
		color: ${na};
		padding: calc(${D} * 0.5px) calc(${D} * 1px);
		text-transform: uppercase;
	}
`;class lp extends Ji{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const _p=lp.compose({baseName:"tag",template:ql,styles:rp}),ap=(i,e)=>te`
	${we("inline-block")} :host {
		font-family: ${ze};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${la};
		background: ${jt};
		border-radius: calc(${pt} * 1px);
		border: calc(${U} * 1px) solid ${Tt};
		font: inherit;
		font-size: ${Ae};
		line-height: ${_e};
		padding: calc(${D} * 2px + 1px);
		width: 100%;
		min-width: ${xo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${jt};
		border-color: ${Tt};
	}
	.control:active:enabled {
		background: ${jt};
		border-color: ${X};
	}
	.control:hover,
	.control:${ye},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${nf};
		height: ${of};
	}
	.control::-webkit-scrollbar-corner {
		background: ${jt};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${rf};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${lf};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${af};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${X};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${be};
		cursor: pointer;
		font-size: ${Ae};
		line-height: ${_e};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([disabled]) {
		opacity: ${Jt};
	}
	:host([disabled]) .control {
		border-color: ${Tt};
	}
`;class cp extends Ee{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Dp=cp.compose({baseName:"text-area",template:Xu,styles:ap,shadowOptions:{delegatesFocus:!0}}),dp=(i,e)=>te`
	${we("inline-block")} :host {
		font-family: ${ze};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${la};
		background: ${jt};
		border-radius: calc(${pt} * 1px);
		border: calc(${U} * 1px) solid ${Tt};
		height: calc(${bs} * 1px);
		min-width: ${xo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${D} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${D} * 2px + 1px);
		font-size: ${Ae};
		line-height: ${_e};
	}
	.control:hover,
	.control:${ye},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${be};
		cursor: pointer;
		font-size: ${Ae};
		line-height: ${_e};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${D} * 4px);
		height: calc(${D} * 4px);
	}
	.start {
		margin-inline-start: calc(${D} * 2px);
	}
	.end {
		margin-inline-end: calc(${D} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${jt};
		border-color: ${Tt};
	}
	:host(:active:not([disabled])) .root {
		background: ${jt};
		border-color: ${X};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${X};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([disabled]) {
		opacity: ${Jt};
	}
	:host([disabled]) .control {
		border-color: ${Tt};
	}
`;class hp extends Le{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const up=hp.compose({baseName:"text-field",template:Zu,styles:dp,shadowOptions:{delegatesFocus:!0}}),fp={class:"my-1"},pp=Ic({__name:"App",setup(i){return ef().register(up()),(e,t)=>{const s=Lc("vscode-text-field");return sd(),rd("main",fp,[kt(s,{class:"w-full",autofocus:"",placeholder:"Search"})])}}}),gp=Ud(pp);gp.mount("#app");
