(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Wt(t,e){t.indexOf(e)===-1&&t.push(e)}const wt=(t,e,n)=>Math.min(Math.max(n,t),e),p={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},A=t=>typeof t=="number",P=t=>Array.isArray(t)&&!A(t[0]),Rt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function Ft(t,e){return P(t)?t[Rt(0,t.length,e)]:t}const Et=(t,e,n)=>-n*t+n*e+t,bt=()=>{},v=t=>t,G=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function Ot(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=G(0,e,i);t.push(Et(n,1,s))}}function xt(t){const e=[0];return Ot(e,t-1),e}function St(t,e=xt(t.length),n=v){const i=t.length,s=i-e.length;return s>0&&Ot(e,s),r=>{let o=0;for(;o<i-2&&!(r<e[o+1]);o++);let a=wt(0,1,G(e[o],e[o+1],r));return a=Ft(n,o)(a),Et(t[o],t[o+1],a)}}const Tt=t=>Array.isArray(t)&&A(t[0]),Y=t=>typeof t=="object"&&Boolean(t.createAnimation),w=t=>typeof t=="function",rt=t=>typeof t=="string",H={ms:t=>t*1e3,s:t=>t/1e3};function Ht(t,e){return e?t*(1e3/e):0}const At=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Vt=1e-7,_t=12;function jt(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=At(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Vt&&++a<_t);return o}function F(t,e,n,i){if(t===e&&n===i)return v;const s=r=>jt(r,0,1,t,n);return r=>r===0||r===1?r:At(s(r),e,i)}const Bt=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return wt(0,1,s/t)},lt={ease:F(.25,.1,.25,1),"ease-in":F(.42,0,1,1),"ease-in-out":F(.42,0,.58,1),"ease-out":F(0,0,.58,1)},$t=/\((.*?)\)/;function tt(t){if(w(t))return t;if(Tt(t))return F(...t);if(lt[t])return lt[t];if(t.startsWith("steps")){const e=$t.exec(t);if(e){const n=e[1].split(",");return Bt(parseFloat(n[0]),n[1].trim())}}return v}class Lt{constructor(e,n=[0,1],{easing:i,duration:s=p.duration,delay:r=p.delay,endDelay:o=p.endDelay,repeat:a=p.repeat,offset:u,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=v,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((d,c)=>{this.resolve=d,this.reject=c}),i=i||p.easing,Y(i)){const d=i.createAnimation(n);i=d.easing,n=d.keyframes||n,s=d.duration||s}this.repeat=a,this.easing=P(i)?v:tt(i),this.updateDuration(s);const f=St(n,u,P(i)?i.map(tt):v);this.tick=d=>{var c;r=r;let m=0;this.pauseTime!==void 0?m=this.pauseTime:m=(d-this.startTime)*this.rate,this.t=m,m/=1e3,m=Math.max(m-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(m=this.totalDuration);const I=m/this.duration;let M=Math.floor(I),O=I%1;!O&&I>=1&&(O=1),O===1&&M--;const j=M%2;(l==="reverse"||l==="alternate"&&j||l==="alternate-reverse"&&!j)&&(O=1-O);const D=m>=this.totalDuration?1:Math.min(O,1),L=f(this.easing(D));e(L),this.pauseTime===void 0&&(this.playState==="finished"||m>=this.totalDuration+o)?(this.playState="finished",(c=this.resolve)===null||c===void 0||c.call(this,L)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class qt{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const X=new WeakMap;function zt(t){return X.has(t)||X.set(t,{transforms:[],values:new Map}),X.get(t)}function Ct(t,e){return t.has(e)||t.set(e,new qt),t.get(e)}const kt=["","X","Y","Z"],Nt=["translate","scale","rotate","skew"],U={x:"translateX",y:"translateY",z:"translateZ"},ft={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Ut={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ft,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:v},skew:ft},_=new Map,ot=t=>`--motion-${t}`,K=["x","y","z"];Nt.forEach(t=>{kt.forEach(e=>{K.push(t+e),_.set(ot(t+e),Ut[t])})});const Kt=(t,e)=>K.indexOf(t)-K.indexOf(e),Gt=new Set(K),Pt=t=>Gt.has(t),Xt=(t,e)=>{U[e]&&(e=U[e]);const{transforms:n}=zt(t);Wt(n,e),t.style.transform=Zt(n)},Zt=t=>t.sort(Kt).reduce(Jt,"").trim(),Jt=(t,e)=>`${t} ${e}(var(${ot(e)}))`,et=t=>t.startsWith("--"),ut=new Set;function Qt(t){if(!ut.has(t)){ut.add(t);try{const{syntax:e,initialValue:n}=_.has(t)?_.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const Z=(t,e)=>document.createElement("div").animate(t,e),dt={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Z({opacity:[1]})}catch{return!1}return!0},finished:()=>Boolean(Z({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{Z({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},J={},z={};for(const t in dt)z[t]=()=>(J[t]===void 0&&(J[t]=dt[t]()),J[t]);const Yt=.015,te=(t,e)=>{let n="";const i=Math.round(e/Yt);for(let s=0;s<i;s++)n+=t(G(0,i-1,s))+", ";return n.substring(0,n.length-2)},ht=(t,e)=>w(t)?z.linearEasing()?`linear(${te(t,e)})`:p.easing:Tt(t)?ee(t):t,ee=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function ne(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const ie=t=>Array.isArray(t)?t:[t];function nt(t){return U[t]&&(t=U[t]),Pt(t)?ot(t):t}const q={get:(t,e)=>{e=nt(e);let n=et(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=_.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=nt(e),et(e)?t.style.setProperty(e,n):t.style[e]=n}};function It(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function se(t,e){var n;let i=(e==null?void 0:e.toDefaultUnit)||v;const s=t[t.length-1];if(rt(s)){const r=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";r&&(i=o=>o+r)}return i}function re(){return window.__MOTION_DEV_TOOLS_RECORD}function oe(t,e,n,i={},s){const r=re(),o=i.record!==!1&&r;let a,{duration:u=p.duration,delay:l=p.delay,endDelay:f=p.endDelay,repeat:d=p.repeat,easing:c=p.easing,persist:m=!1,direction:I,offset:M,allowWebkitAcceleration:O=!1}=i;const j=zt(t),D=Pt(e);let L=z.waapi();D&&Xt(t,e);const y=nt(e),B=Ct(j.values,y),x=_.get(y);return It(B.animation,!(Y(c)&&B.generator)&&i.record!==!1),()=>{const $=()=>{var h,W;return(W=(h=q.get(t,y))!==null&&h!==void 0?h:x==null?void 0:x.initialValue)!==null&&W!==void 0?W:0};let g=ne(ie(n),$);const ct=se(g,x);if(Y(c)){const h=c.createAnimation(g,e!=="opacity",$,y,B);c=h.easing,g=h.keyframes||g,u=h.duration||u}if(et(y)&&(z.cssRegisterProperty()?Qt(y):L=!1),D&&!z.linearEasing()&&(w(c)||P(c)&&c.some(w))&&(L=!1),L){x&&(g=g.map(T=>A(T)?x.toDefaultUnit(T):T)),g.length===1&&(!z.partialKeyframes()||o)&&g.unshift($());const h={delay:H.ms(l),duration:H.ms(u),endDelay:H.ms(f),easing:P(c)?void 0:ht(c,u),direction:I,iterations:d+1,fill:"both"};a=t.animate({[y]:g,offset:M,easing:P(c)?c.map(T=>ht(T,u)):void 0},h),a.finished||(a.finished=new Promise((T,Dt)=>{a.onfinish=T,a.oncancel=Dt}));const W=g[g.length-1];a.finished.then(()=>{m||(q.set(t,y,W),a.cancel())}).catch(bt),O||(a.playbackRate=1.000001)}else if(s&&D)g=g.map(h=>typeof h=="string"?parseFloat(h):h),g.length===1&&g.unshift(parseFloat($())),a=new s(h=>{q.set(t,y,ct?ct(h):h)},g,Object.assign(Object.assign({},i),{duration:u,easing:c}));else{const h=g[g.length-1];q.set(t,y,x&&A(h)?x.toDefaultUnit(h):h)}return o&&r(t,e,g,{duration:u,delay:l,easing:c,repeat:d,offset:M},"motion-one"),B.setAnimation(a),a}}const ae=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function at(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const ce=t=>t(),Mt=(t,e,n=p.duration)=>new Proxy({animations:t.map(ce).filter(Boolean),duration:n,options:e},fe),le=t=>t.animations[0],fe={get:(t,e)=>{const n=le(t);switch(e){case"duration":return t.duration;case"currentTime":return H.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(ue)).catch(bt)),t.finished;case"stop":return()=>{t.animations.forEach(i=>It(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=H.ms(n);case"currentTime":case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},ue=t=>t.finished;function de(t=.1,{start:e=0,from:n=0,easing:i}={}){return(s,r)=>{const o=A(n)?n:he(n,r),a=Math.abs(o-s);let u=t*a;if(i){const l=r*t;u=tt(i)(u/l)*l}return e+u}}function he(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function ge(t,e,n){return w(t)?t(e,n):t}function me(t){return function(n,i,s={}){n=at(n);const r=n.length,o=[];for(let a=0;a<r;a++){const u=n[a];for(const l in i){const f=ae(s,l);f.delay=ge(f.delay,a,r);const d=oe(u,l,i[l],f,t);o.push(d)}}return Mt(o,s,s.duration)}}const pe=me(Lt);function ye(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}const ve={any:0,all:1};function E(t,e,{root:n,margin:i,amount:s="any"}={}){if(typeof IntersectionObserver>"u")return()=>{};const r=at(t),o=new WeakMap,a=l=>{l.forEach(f=>{const d=o.get(f.target);if(f.isIntersecting!==Boolean(d))if(f.isIntersecting){const c=e(f);w(c)?o.set(f.target,c):u.unobserve(f.target)}else d&&(d(f),o.delete(f.target))})},u=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof s=="number"?s:ve[s]});return r.forEach(l=>u.observe(l)),()=>u.disconnect()}const k=new WeakMap;let S;function we(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function Ee({target:t,contentRect:e,borderBoxSize:n}){var i;(i=k.get(t))===null||i===void 0||i.forEach(s=>{s({target:t,contentSize:e,get size(){return we(t,n)}})})}function be(t){t.forEach(Ee)}function Oe(){typeof ResizeObserver>"u"||(S=new ResizeObserver(be))}function xe(t,e){S||Oe();const n=at(t);return n.forEach(i=>{let s=k.get(i);s||(s=new Set,k.set(i,s)),s.add(e),S==null||S.observe(i)}),()=>{n.forEach(i=>{const s=k.get(i);s==null||s.delete(e),s!=null&&s.size||S==null||S.unobserve(i)})}}const N=new Set;let V;function Se(){V=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};N.forEach(n=>n(e))},window.addEventListener("resize",V)}function Te(t){return N.add(t),V||Se(),()=>{N.delete(t),!N.size&&V&&(V=void 0)}}function Ae(t,e){return w(t)?Te(t):xe(t,e)}const Le=50,gt=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ze=()=>({time:0,x:gt(),y:gt()}),Pe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function mt(t,e,n,i){const s=n[e],{length:r,position:o}=Pe[e],a=s.current,u=n.time;s.current=t["scroll"+o],s.scrollLength=t["scroll"+r]-t["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=G(0,s.scrollLength,s.current);const l=i-u;s.velocity=l>Le?0:Ht(s.current-a,l)}function Ie(t,e,n){mt(t,"x",e,n),mt(t,"y",e,n),e.time=n}function Me(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:s,left:r}=i.getBBox();for(n.x+=r,n.y+=s;i&&i.tagName!=="svg";)i=i.parentNode}return n}const De={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},it={start:0,center:.5,end:1};function pt(t,e,n=0){let i=0;if(it[t]!==void 0&&(t=it[t]),rt(t)){const s=parseFloat(t);t.endsWith("px")?i=s:t.endsWith("%")?t=s/100:t.endsWith("vw")?i=s/100*document.documentElement.clientWidth:t.endsWith("vh")?i=s/100*document.documentElement.clientHeight:t=s}return A(t)&&(i=e*t),n+i}const We=[0,0];function Re(t,e,n,i){let s=Array.isArray(t)?t:We,r=0,o=0;return A(t)?s=[t,t]:rt(t)&&(t=t.trim(),t.includes(" ")?s=t.split(" "):s=[t,it[t]?t:"0"]),r=pt(s[0],n,i),o=pt(s[1],e),r-o}const Fe={x:0,y:0};function He(t,e,n){let{offset:i=De.All}=n;const{target:s=t,axis:r="y"}=n,o=r==="y"?"height":"width",a=s!==t?Me(s,t):Fe,u=s===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},l={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let f=!e[r].interpolate;const d=i.length;for(let c=0;c<d;c++){const m=Re(i[c],l[o],u[o],a[r]);!f&&m!==e[r].interpolatorOffsets[c]&&(f=!0),e[r].offset[c]=m}f&&(e[r].interpolate=St(xt(d),e[r].offset),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=e[r].interpolate(e[r].current)}function Ve(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!=t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function _e(t,e,n,i={}){const s=i.axis||"y";return{measure:()=>Ve(t,i.target,n),update:r=>{Ie(t,n,r),(i.offset||i.target)&&He(t,n,i)},notify:w(e)?()=>e(n):je(e,n[s])}}function je(t,e){return t.pause(),t.forEachNative((n,{easing:i})=>{var s,r;if(n.updateDuration)i||(n.easing=v),n.updateDuration(1);else{const o={duration:1e3};i||(o.easing="linear"),(r=(s=n.effect)===null||s===void 0?void 0:s.updateTiming)===null||r===void 0||r.call(s,o)}}),()=>{t.currentTime=e.progress}}const R=new WeakMap,yt=new WeakMap,Q=new WeakMap,vt=t=>t===document.documentElement?window:t;function Be(t,e={}){var{container:n=document.documentElement}=e,i=ye(e,["container"]);let s=Q.get(n);s||(s=new Set,Q.set(n,s));const r=ze(),o=_e(n,t,r,i);if(s.add(o),!R.has(n)){const l=()=>{const d=performance.now();for(const c of s)c.measure();for(const c of s)c.update(d);for(const c of s)c.notify()};R.set(n,l);const f=vt(n);window.addEventListener("resize",l,{passive:!0}),n!==document.documentElement&&yt.set(n,Ae(n,l)),f.addEventListener("scroll",l,{passive:!0})}const a=R.get(n),u=requestAnimationFrame(a);return()=>{var l;typeof t!="function"&&t.stop(),cancelAnimationFrame(u);const f=Q.get(n);if(!f||(f.delete(o),f.size))return;const d=R.get(n);R.delete(n),d&&(vt(n).removeEventListener("scroll",d),(l=yt.get(n))===null||l===void 0||l(),window.removeEventListener("resize",d))}}function $e(t,e={}){return Mt([()=>{const n=new Lt(t,[0,1],e);return n.finished.catch(()=>{}),n}],e,e.duration)}function b(t,e,n){return(w(t)?$e:pe)(t,e,n)}E(".stagger-slide-in",({target:t})=>{b(t.querySelectorAll(".slide-element"),{x:[-2e3,0]},{duration:1,delay:de(1,{start:.09})})});E(".fotofromtop",()=>{b(".fotofromtop",{y:[-100,0]},{duration:2})});E(".fotofromright",()=>{b(".fotofromright",{x:[2e3,0]},{duration:1})});E(".fotofromright2",()=>{b(".fotofromright2",{x:[2e3,0]},{duration:1})});E(".fotofromright3",()=>{b(".fotofromright3",{x:[2e3,0]},{duration:1})});E(".fotofromright4",()=>{b(".fotofromright4",{x:[2e3,0]},{duration:1})});E(".fotofromright5",()=>{b(".stefotofromright5p4",{x:[2e3,0]},{duration:1})});E(".fotofromright6",()=>{b(".fotofromright6",{x:[2e3,0]},{duration:1})});E(".guideside",()=>{Be(b(".progress-bar",{scaleX:[0,1]}))});localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");var st=document.documentElement,C=window.getComputedStyle(st).getPropertyValue("--light")===" "?"dark":"light";document.getElementById("toggle-theme").addEventListener("click",qe);function qe(){st.classList.remove(C),C=C==="dark"?"light":"dark",st.classList.add(C)}
