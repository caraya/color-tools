var He=Object.defineProperty;var Pe=(t,e,r)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ee=(t,e,r)=>(Pe(t,typeof e!="symbol"?e+"":e,r),r),te=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var re=(t,e,r)=>(te(t,e,"read from private field"),r?r.call(t):e.get(t)),P=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},pe=(t,e,r,n)=>(te(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var F=(t,e,r)=>(te(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function v(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(i=>[i]));let n=e[0].length,a=e[0].map((i,o)=>e.map(l=>l[o])),s=t.map(i=>a.map(o=>{let l=0;if(!Array.isArray(i)){for(let u of o)l+=i*u;return l}for(let u=0;u<i.length;u++)l+=i[u]*(o[u]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function Re(t){return G(t)==="string"}function G(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ae(t,e){t=+t,e=+e;let r=(Math.floor(t)+"").length;if(e>r)return+t.toFixed(e-r);{let n=10**(r-e);return Math.round(t/n)*n}}function Fe(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=t.match(e);if(n){let a=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),s.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),a.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:a}}}function je(t){return t[t.length-1]}function Ye(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function Xe(t,e,r){return(r-t)/(e-t)}function ve(t,e,r){return Ye(e[0],e[1],Xe(t[0],t[1],r))}function Ze(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let a=new String(n[1]);return a.range=[+n[2],+n[3]],a}return r}))}class _e{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Ke=new _e,Z=Ke,E={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function se(t){return Array.isArray(t)?t:E[t]}function _(t,e,r,n={}){if(t=se(t),e=se(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let a={W1:t,W2:e,XYZ:r,options:n};if(Z.run("chromatic-adaptation-start",a),a.M||(a.W1===E.D65&&a.W2===E.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===E.D50&&a.W2===E.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Z.run("chromatic-adaptation-end",a),a.M)return v(a.M,a.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ve=75e-6;var z,ie,N,U,$e;const b=class{constructor(e){P(this,z);P(this,U);P(this,N,void 0);var a,s,i,o,l,u,f;this.id=e.id,this.name=e.name,this.base=e.base?b.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=(a=e.coords)!=null?a:this.base.coords;this.coords=r;let n=(i=(s=e.white)!=null?s:this.base.white)!=null?i:"D65";this.white=se(n),this.formats=(o=e.formats)!=null?o:{};for(let c in this.formats){let h=this.formats[c];h.type||(h.type="function"),h.name||(h.name=c)}e.cssId&&!((l=this.formats.functions)!=null&&l.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):((u=this.formats)==null?void 0:u.color)&&!((f=this.formats)!=null&&f.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,pe(this,N,F(this,U,$e).call(this).reverse()),Z.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Ve}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((a,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(a))return!0;let[o,l]=i.range;return(o===void 0||a>=o-r)&&(l===void 0||a<=l+r)}return!0})}get cssId(){var e,r;return((r=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=F(this,z,ie).call(this,e),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=F(this,z,ie).call(this,r),r):null}to(e,r){if(arguments.length===1&&([e,r]=[e.space,e.coords]),e=b.get(e),this===e)return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=re(this,N),a=re(e,N),s,i;for(let o=0;o<n.length&&n[o]===a[o];o++)s=n[o],i=o;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=n.length-1;o>i;o--)r=n[o].toBase(r);for(let o=i+1;o<a.length;o++)r=a[o].fromBase(r);return r}from(e,r){return arguments.length===1&&([e,r]=[e.space,e.coords]),e=b.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){var r;let e=[];for(let n in this.coords){let a=this.coords[n],s=a.range||a.refRange;e.push((r=s==null?void 0:s.min)!=null?r:0)}return e}static get all(){return[...new Set(Object.values(b.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof b)return e;if(G(e)==="string"){let a=b.registry[e.toLowerCase()];if(!a)throw new TypeError(`No color space found with id = "${e}"`);return a}if(r.length)return b.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=G(e),a,s;if(n==="string"?e.includes(".")?[a,s]=e.split("."):[a,s]=[,e]:Array.isArray(e)?[a,s]=e:(a=e.space,s=e.coordId),a=b.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=G(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=b.get(a);let i=s.toLowerCase(),o=0;for(let u in a.coords){let f=a.coords[u];if(u.toLowerCase()===i||((l=f.name)==null?void 0:l.toLowerCase())===i)return{space:a,id:u,index:o,...f};o++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}};let d=b;z=new WeakSet,ie=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ze(e.coords);let r=Object.entries(this.coords).map(([n,a],s)=>{let i=e.coordGrammar[s][0],o=a.range||a.refRange,l=i.range,u="";return i=="<percentage>"?(l=[0,100],u="%"):i=="<angle>"&&(u="deg"),{fromRange:o,toRange:l,suffix:u}});e.serializeCoords=(n,a)=>n.map((s,i)=>{let{fromRange:o,toRange:l,suffix:u}=r[i];return o&&l&&(s=ve(o,l,s)),s=ae(s,a),u&&(s+=u),s})}return e},N=new WeakMap,U=new WeakSet,$e=function(){let e=[this];for(let r=this;r=r.base;)e.push(r);return e},ee(d,"registry",{}),ee(d,"DEFAULT_FORMAT",{type:"functions",name:"color"});const O=new d({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class J extends d{constructor(e){var r,n,a;e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=O),e.toXYZ_M&&e.fromXYZ_M&&((r=e.toBase)!=null||(e.toBase=s=>{let i=v(e.toXYZ_M,s);return this.white!==this.base.white&&(i=_(this.white,this.base.white,i)),i}),(n=e.fromBase)!=null||(e.fromBase=s=>(s=_(this.base.white,this.white,s),v(e.fromXYZ_M,s)))),(a=e.referred)!=null||(e.referred="display"),super(e)}}const xe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};function Ue(t){var r,n,a,s,i,o;let e={str:(r=String(t))==null?void 0:r.trim()};if(Z.run("parse-start",e),e.color)return e.color;if(e.parsed=Fe(e.str),e.parsed){let l=e.parsed.name;if(l==="color"){let u=e.parsed.args.shift(),f=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let h of d.all){let g=h.getFormat("color");if(g&&(u===g.id||((n=g.ids)==null?void 0:n.includes(u)))){let p=Object.keys(h.coords).length,m=Array(p).fill(0);return m.forEach((w,y)=>m[y]=e.parsed.args[y]||0),{spaceId:h.id,coords:m,alpha:f}}}let c="";if(u in d.registry){let h=(i=(s=(a=d.registry[u].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;h&&(c=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${u}). `+(c||"Missing a plugin?"))}else for(let u of d.all){let f=u.getFormat(l);if(f&&f.type==="function"){let c=1;(f.lastAlpha||je(e.parsed.args).alpha)&&(c=e.parsed.args.pop());let h=e.parsed.args;return f.coordGrammar&&Object.entries(u.coords).forEach(([g,p],m)=>{var B;let w=f.coordGrammar[m],y=(B=h[m])==null?void 0:B.type;if(w=w.find(L=>L==y),!w){let L=p.name||g;throw new TypeError(`${y} not allowed for ${L} in ${l}()`)}let M=w.range;y==="<percentage>"&&(M||(M=[0,1]));let k=p.range||p.refRange;M&&k&&(h[m]=ve(M,k,h[m]))}),{spaceId:u.id,coords:h,alpha:c}}}}else for(let l of d.all)for(let u in l.formats){let f=l.formats[u];if(f.type!=="custom"||f.test&&!f.test(e.str))continue;let c=f.parse(e.str);if(c)return(o=c.alpha)!=null||(c.alpha=1),c}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function Q(t){if(!t)throw new TypeError("Empty color reference");Re(t)&&(t=Ue(t));let e=t.space||t.spaceId;return e instanceof d||(t.space=d.get(e)),t.alpha===void 0&&(t.alpha=1),t}function Ee(t,e){return e=d.get(e),e.from(t)}function Y(t,e){let{space:r,index:n}=d.resolveCoord(e,t.space);return Ee(t,r)[n]}function Je(t,e,r){return e=d.get(e),t.coords=e.to(t.space,r),t}function Se(t,e,r){if(t=Q(t),arguments.length===2&&G(arguments[1])==="object"){let n=arguments[1];for(let a in n)Se(t,a,n[a])}else{typeof r=="function"&&(r=r(Y(t,e)));let{space:n,index:a}=d.resolveCoord(e,t.space),s=Ee(t,n);s[a]=r,Je(t,n,s)}return t}const Qe=new d({id:"xyz-d50",name:"XYZ D50",white:"D50",base:O,fromBase:t=>_(O.white,"D50",t),toBase:t=>_("D50",O.white,t),formats:{color:{}}}),We=216/24389,be=24/116,j=24389/27;let ne=E.D50;const S=new d({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ne,base:Qe,fromBase(t){let r=t.map((n,a)=>n/ne[a]).map(n=>n>We?Math.cbrt(n):(j*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>be?Math.pow(e[0],3):(116*e[0]-16)/j,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/j,e[2]>be?Math.pow(e[2],3):(116*e[2]-16)/j].map((n,a)=>n*ne[a])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ie(t){return(t%360+360)%360}const ye=new d({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:S,fromBase(t){let[e,r,n]=t,a;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?a=NaN:a=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ie(a)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),we=25**7,K=Math.PI,Me=180/K,x=K/180;function Le(t,e,{kL:r=1,kC:n=1,kH:a=1}={}){let[s,i,o]=S.from(t),l=ye.from(S,[s,i,o])[1],[u,f,c]=S.from(e),h=ye.from(S,[u,f,c])[1];l<0&&(l=0),h<0&&(h=0);let p=((l+h)/2)**7,m=.5*(1-Math.sqrt(p/(p+we))),w=(1+m)*i,y=(1+m)*f,M=Math.sqrt(w**2+o**2),k=Math.sqrt(y**2+c**2),B=w===0&&o===0?0:Math.atan2(o,w),L=y===0&&c===0?0:Math.atan2(c,y);B<0&&(B+=2*K),L<0&&(L+=2*K),B*=Me,L*=Me;let De=u-s,ue=k-M,$=L-B,A=B+L,de=Math.abs($),D;M*k===0?D=0:de<=180?D=$:$>180?D=$-360:$<-180?D=$+360:console.log("the unthinkable has happened");let he=2*Math.sqrt(k*M)*Math.sin(D*x/2),Te=(s+u)/2,W=(M+k)/2,ce=Math.pow(W,7),C;M*k===0?C=A:de<=180?C=A/2:A<360?C=(A+360)/2:C=(A-360)/2;let fe=(Te-50)**2,Ge=1+.015*fe/Math.sqrt(20+fe),me=1+.045*W,T=1;T-=.17*Math.cos((C-30)*x),T+=.24*Math.cos(2*C*x),T+=.32*Math.cos((3*C+6)*x),T-=.2*Math.cos((4*C-63)*x);let ge=1+.015*W*T,Oe=30*Math.exp(-1*((C-275)/25)**2),qe=2*Math.sqrt(ce/(ce+we)),ze=-1*Math.sin(2*Oe*x)*qe,H=(De/(r*Ge))**2;return H+=(ue/(n*me))**2,H+=(he/(a*ge))**2,H+=ze*(ue/(n*me))*(he/(a*ge)),Math.sqrt(H)}const et=75e-6;function X(t,e=t.space,{epsilon:r=et}={}){t=Q(t),e=d.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function oe(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function q(t,{method:e=xe.gamut_mapping,space:r=t.space}={}){if(Re(arguments[1])&&(r=arguments[1]),r=d.get(r),X(t,r,{epsilon:0}))return t;let n=I(t,r);if(e!=="clip"&&!X(t,r)){let a=q(oe(n),{method:"clip",space:r});if(Le(t,a)>2){let s=d.resolveCoord(e),i=s.space,o=s.id,l=I(n,i),f=(s.range||s.refRange)[0],c=.01,h=f,g=Y(l,o);for(;g-h>c;){let p=oe(l);p=q(p,{space:r,method:"clip"}),Le(l,p)-2<c?h=Y(l,o):g=Y(l,o),Se(l,o,(h+g)/2)}n=I(l,r)}else n=a}if(e==="clip"||!X(n,r,{epsilon:0})){let a=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,i)=>{let[o,l]=a[i];return o!==void 0&&(s=Math.max(o,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==t.space&&(n=I(n,t.space)),t.coords=n.coords,t}q.returns="color";function I(t,e,{inGamut:r}={}){t=Q(t),e=d.get(e);let n=e.from(t),a={space:e,coords:n,alpha:t.alpha};return r&&(a=q(a)),a}I.returns="color";function tt(t,{precision:e=xe.precision,format:r="default",inGamut:n=!0,...a}={}){var l,u,f;let s;t=Q(t);let i=r;r=(u=(l=t.space.getFormat(r))!=null?l:t.space.getFormat("default"))!=null?u:d.DEFAULT_FORMAT,n||(n=r.toGamut);let o=t.coords;if(o=o.map(c=>c||0),n&&!X(t)&&(o=q(oe(t),n===!0?void 0:n).coords),r.type==="custom")if(a.precision=e,r.serialize)s=r.serialize(o,t.alpha,a);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,e):e!==null&&(o=o.map(m=>ae(m,e)));let h=[...o];if(c==="color"){let m=r.id||((f=r.ids)==null?void 0:f[0])||t.space.id;h.unshift(m)}let g=t.alpha;e!==null&&(g=ae(g,e));let p=t.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${g}`:"";s=`${c}(${h.join(r.commas?", ":" ")}${p})`}return s}const rt=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],nt=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],at=new J({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:rt,fromXYZ_M:nt}),st=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],it=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],ot=new J({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:st,fromXYZ_M:it,formats:{color:{}}}),Ce={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ke=Array(3).fill("<percentage> | <number>[0, 255]"),Be=Array(3).fill("<number>[0, 255]");const V=new J({id:"srgb",name:"sRGB",base:ot,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ke},rgb_number:{name:"rgb",commas:!0,coords:Be,noAlpha:!0},color:{},rgba:{coords:ke,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Be},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Ce.black,e.alpha=0):e.coords=Ce[t],e.coords)return e}}}}),lt=new J({id:"p3",name:"P3",base:at,fromBase:V.fromBase,toBase:V.toBase,formats:{color:{id:"display-p3"}}}),ut=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],dt=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],ht=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],ct=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Ne=new d({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:O,fromBase(t){let r=v(ut,t).map(n=>Math.cbrt(n));return v(ht,r)},toBase(t){let r=v(ct,t).map(n=>n**3);return v(dt,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),Ae=new d({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:V,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,a,s]=t,[i,o,l]=[NaN,0,(r+e)/2],u=e-r;if(u!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:i=(a-s)/u+(a<s?6:0);break;case a:i=(s-n)/u+2;break;case s:i=(n-a)/u+4}i=i*60}return[i,o*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function a(s){let i=(s+e/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(i-3,9-i,1))}return[a(0),a(8),a(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ft=new d({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ae,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let a=n+r*Math.min(n,1-n);return[e,a===0?0:200*(1-n/a),100*a]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let a=n*(1-r/2);return[e,a===0||a===1?0:(n-a)/Math.min(a,1-a)*100,a*100]},formats:{color:{toGamut:!0}}}),mt=new d({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ft,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let a=r+n;if(a>=1){let o=r/a;return[e,0,o*100]}let s=1-n,i=s===0?0:1-r/s;return[e,i*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),gt=new d({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ne,fromBase(t){let[e,r,n]=t,a;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?a=NaN:a=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ie(a)]},toBase(t){let[e,r,n]=t,a,s;return isNaN(n)?(a=0,s=0):(a=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,a,s]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});d.register(V);d.register(lt);d.register(S);d.register(Ne);d.register(gt);d.register(mt);d.register(Ae);const le=document.createElement("div");le.classList.add("container");document.body.appendChild(le);function R(t,e){const r=tt(I(t,`${e}`)),n=document.createElement("div");n.classList.add("box",`box-${e}`),n.style.backgroundColor=r;const a=document.createElement("p");a.textContent=r,n.appendChild(a),le.appendChild(n)}function pt(t){R(t,"sRGB"),R(t,"P3"),R(t,"Lab"),R(t,"hwb"),R(t,"hsl"),R(t,"OKLab"),R(t,"OKLCH")}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Color Tools Experiment</h1>

    <form id='colorForm'>
      <input type='text' id='colorInput' placeholder='Enter a color'>
      <input type='submit' value='Submit'>
      <input type='reset' value='Reset'>
    </form>
  

  </div>
`;function bt(t){const e=document.getElementById("colorInput").value;pt(e),t.preventDefault()}function yt(){document.querySelectorAll(".container").forEach(e=>{e.innerHTML!==""&&(e.innerHTML="")})}document.getElementById("colorForm").addEventListener("submit",bt);document.getElementById("colorForm").addEventListener("reset",yt);
