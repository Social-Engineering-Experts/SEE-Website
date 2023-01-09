"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{5396:function(e,t,r){r.d(t,{x:function(){return w}});var n=r(7294),o=r(4574),i=r(6896),a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))0>t.indexOf(n)&&l.call(e,n)&&(r[n]=e[n]);return r},c=r(4215),s=r(2732),y=r(1686);function u(e,t){return"function"==typeof e?e(t):e}var d=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&h(e,r,t[r]);if(g)for(var r of g(t))m.call(t,r)&&h(e,r,t[r]);return e},v=(e,t)=>{var r={};for(var n in e)b.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))0>t.indexOf(n)&&m.call(e,n)&&(r[n]=e[n]);return r};let j=(0,n.forwardRef)((e,t)=>{var{className:r,component:o,style:a,sx:p}=e,l=v(e,["className","component","style","sx"]);let{systemStyles:d,rest:g}=function(e){let{m:t,mx:r,my:n,mt:o,mb:a,ml:p,mr:l,p:c,px:s,py:y,pt:u,pb:d,pl:g,pr:b,bg:m,c:h,opacity:O,ff:v,fz:j,fw:w,lts:k,ta:x,lh:z,fs:P,tt:S,td:E,w:N,miw:T,maw:A,h:$,mih:W,mah:F,bgsz:I,bgp:D,bgr:H,bga:B,pos:C,top:R,left:L,bottom:Z,right:_,inset:M,display:V}=e,q=f(e,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]),G=(0,i.L)({m:t,mx:r,my:n,mt:o,mb:a,ml:p,mr:l,p:c,px:s,py:y,pt:u,pb:d,pl:g,pr:b,bg:m,c:h,opacity:O,ff:v,fz:j,fw:w,lts:k,ta:x,lh:z,fs:P,tt:S,td:E,w:N,miw:T,maw:A,h:$,mih:W,mah:F,bgsz:I,bgp:D,bgr:H,bga:B,pos:C,top:R,left:L,bottom:Z,right:_,inset:M,display:V});return{systemStyles:G,rest:q}}(l);return n.createElement(o||"div",O({ref:t,className:function(e,t,r){let n=(0,c.rZ)(),{css:o,cx:i}=(0,s.Z)();return Array.isArray(e)?i(r,o((0,y.M)(t,n)),e.map(e=>o(u(e,n)))):i(r,o(u(e,n)),o((0,y.M)(t,n)))}(p,d,r),style:a},g))});j.displayName="@mantine/core/Box";let w=(0,o.F)(j)},1686:function(e,t,r){r.d(t,{M:function(){return y}});let n=["-xs","-sm","-md","-lg","-xl"],o={color:function(e,t){return"dimmed"===e?"dark"===t.colorScheme?t.colors.dark[2]:t.colors.gray[6]:t.fn.variant({variant:"filled",color:e,primaryFallback:!1}).background},default:function(e){return e},fontSize:function(e,t){return t.fn.size({size:e,sizes:t.fontSizes})},spacing:function(e,t){return n.includes(e)?-1*t.fn.size({size:e.replace("-",""),sizes:t.spacing}):t.fn.size({size:e,sizes:t.spacing})}},i={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"default",property:"opacity"},ff:{type:"default",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"default",property:"fontWeight"},lts:{type:"default",property:"letterSpacing"},ta:{type:"default",property:"textAlign"},lh:{type:"default",property:"lineHeight"},fs:{type:"default",property:"fontStyle"},tt:{type:"default",property:"textTransform"},td:{type:"default",property:"textDecoration"},w:{type:"default",property:"width"},miw:{type:"default",property:"minWidth"},maw:{type:"default",property:"maxWidth"},h:{type:"default",property:"height"},mih:{type:"default",property:"minHeight"},mah:{type:"default",property:"maxHeight"},bgsz:{type:"default",property:"background-size"},bgp:{type:"default",property:"background-position"},bgr:{type:"default",property:"background-repeat"},bga:{type:"default",property:"background-attachment"},pos:{type:"default",property:"position"},top:{type:"default",property:"top"},left:{type:"default",property:"left"},bottom:{type:"default",property:"bottom"},right:{type:"default",property:"right"},inset:{type:"default",property:"inset"},display:{type:"default",property:"display"}};var a=Object.defineProperty,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&c(e,r,t[r]);return e};function y(e,t,r=i){let n=Object.keys(r).reduce((n,i)=>(i in e&&void 0!==e[i]&&n.push(function({value:e,theme:t,getValue:r,property:n}){if(null==e)return;if("object"==typeof e){let o=(function(e,t){let r=Object.keys(e).filter(e=>"base"!==e).sort((e,r)=>t.fn.size({size:e,sizes:t.breakpoints})-t.fn.size({size:r,sizes:t.breakpoints}));return"base"in e?["base",...r]:r})(e,t).reduce((o,i)=>{if("base"===i&&void 0!==e.base){let a=r(e.base,t);return Array.isArray(n)?(n.forEach(e=>{o[e]=a}),o):(o[n]=a,o)}let p=r(e[i],t);return Array.isArray(n)?(o[t.fn.largerThan(i)]={},n.forEach(e=>{o[t.fn.largerThan(i)][e]=p}),o):(o[t.fn.largerThan(i)]={[n]:p},o)},{});return o}let i=r(e,t);return Array.isArray(n)?n.reduce((e,t)=>(e[t]=i,e),{}):{[n]:i}}({value:e[i],getValue:o[r[i].type],property:r[i].property,theme:t})),n),[]);return n.reduce((e,t)=>(Object.keys(t).forEach(r=>{"object"==typeof t[r]&&null!==t[r]&&r in e?e[r]=s(s({},e[r]),t[r]):e[r]=t[r]}),e),{})}},5117:function(e,t,r){r.d(t,{x:function(){return S}});var n=r(7294),o=r(4215),i=r(4574),a=r(6817),p=Object.defineProperty,l=Object.defineProperties,f=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))y.call(t,r)&&u(e,r,t[r]);return e},g=(e,t)=>l(e,f(t)),b=(0,a.k)((e,{color:t,variant:r,size:n,lineClamp:o,inline:i,inherit:a,underline:p,gradient:l,weight:f,transform:c,align:s,strikethrough:y,italic:u})=>{let b=e.fn.variant({variant:"gradient",gradient:l});return{root:d(g(d(d(d({},e.fn.fontStyles()),e.fn.focusStyles()),"number"==typeof o?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:o,WebkitBoxOrient:"vertical"}:null),{color:function({theme:e,color:t,variant:r}){return"dimmed"===t?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:t}).background:"link"===r?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:t||"inherit"}({color:t,theme:e,variant:r}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===n?"inherit":e.fn.size({size:n,sizes:e.fontSizes}),lineHeight:a?"inherit":i?1:e.lineHeight,textDecoration:function({underline:e,strikethrough:t}){let r=[];return e&&r.push("underline"),t&&r.push("line-through"),r.length>0?r.join(" "):"none"}({underline:p,strikethrough:y}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":f,textTransform:c,textAlign:s,fontStyle:u?"italic":void 0}),e.fn.hover("link"===r&&void 0===p?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:b.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}}),m=r(5396),h=Object.defineProperty,O=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&w(e,r,t[r]);if(O)for(var r of O(t))j.call(t,r)&&w(e,r,t[r]);return e},x=(e,t)=>{var r={};for(var n in e)v.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&O)for(var n of O(e))0>t.indexOf(n)&&j.call(e,n)&&(r[n]=e[n]);return r};let z={variant:"text"},P=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Text",z,e),{className:i,size:a,weight:p,transform:l,color:f,align:c,variant:s,lineClamp:y,gradient:u,inline:d,inherit:g,underline:h,strikethrough:O,italic:v,classNames:j,styles:w,unstyled:P,span:S}=r,E=x(r,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:N,cx:T}=b({variant:s,color:f,size:a,lineClamp:y,inline:d,inherit:g,underline:h,strikethrough:O,italic:v,weight:p,transform:l,align:c,gradient:u},{unstyled:P,name:"Text"});return n.createElement(m.x,k({ref:t,className:T(N.root,{[N.gradient]:"gradient"===s},i),component:S?"span":"div"},E))});P.displayName="@mantine/core/Text";let S=(0,i.F)(P)},9236:function(e,t,r){r.d(t,{D:function(){return z}});var n=r(7294),o=r(4215),i=r(6817),a=Object.defineProperty,p=Object.defineProperties,l=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))s.call(t,r)&&y(e,r,t[r]);return e},d=(e,t)=>p(e,l(t)),g=(0,i.k)((e,{element:t,weight:r,size:n,inline:o})=>({root:d(u({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:r||e.headings.sizes[t].fontWeight||e.headings.fontWeight,fontSize:void 0!==n?n in e.headings.sizes?e.headings.sizes[n].fontSize:n:e.headings.sizes[t].fontSize,lineHeight:o?1:void 0!==n&&n in e.headings.sizes?e.headings.sizes[n].lineHeight:e.headings.sizes[t].lineHeight,margin:0})})),b=r(5117),m=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&j(e,r,t[r]);if(h)for(var r of h(t))v.call(t,r)&&j(e,r,t[r]);return e},k=(e,t)=>{var r={};for(var n in e)O.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&v.call(e,n)&&(r[n]=e[n]);return r};let x={order:1},z=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Title",x,e),{className:i,order:a,children:p,unstyled:l,size:f,weight:c,inline:s}=r,y=k(r,["className","order","children","unstyled","size","weight","inline"]),{classes:u,cx:d}=g({element:`h${a}`,weight:c,size:f,inline:s},{name:"Title",unstyled:l});return[1,2,3,4,5,6].includes(a)?n.createElement(b.x,w({component:`h${a}`,ref:t,className:d(u.root,i)},y),p):null});z.displayName="@mantine/core/Title"},4574:function(e,t,r){r.d(t,{F:function(){return n}});function n(e){return e}},6817:function(e,t,r){r.d(t,{k:function(){return u}});var n=r(2732),o=r(4215),i=Object.defineProperty,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&f(e,r,t[r]);return e};function s(e){return`__mantine-ref-${e||""}`}function y(e,t,r){let n=e=>"function"==typeof e?e(t,r||{}):e||{};return Array.isArray(e)?e.map(e=>n(e.styles)).reduce((e,t)=>(Object.keys(t).forEach(r=>{e[r]?e[r]=c(c({},e[r]),t[r]):e[r]=c({},t[r])}),e),{}):n(e)}function u(e){let t="function"==typeof e?e:()=>e;return function(e,r){let i=(0,o.rZ)(),a=(0,o.O2)(null==r?void 0:r.name),p=(0,o.T1)(),{css:l,cx:f}=(0,n.Z)(),c=t(i,e,s),u=y(null==r?void 0:r.styles,i,e),d=y(a,i,e),g=Object.fromEntries(Object.keys(c).map(e=>{let t=f({[l(c[e])]:!(null==r?void 0:r.unstyled)},l(d[e]),l(u[e]));return[e,t]}));return{classes:function({cx:e,classes:t,context:r,classNames:n,name:o,cache:i}){let a=r.reduce((e,t)=>(Object.keys(t.classNames).forEach(r=>{"string"!=typeof e[r]?e[r]=`${t.classNames[r]}`:e[r]=`${e[r]} ${t.classNames[r]}`}),e),{});return Object.keys(t).reduce((r,p)=>(r[p]=e(t[p],a[p],null!=n&&n[p],Array.isArray(o)?o.filter(Boolean).map(e=>`${(null==i?void 0:i.key)||"mantine"}-${e}-${p}`).join(" "):o?`${(null==i?void 0:i.key)||"mantine"}-${o}-${p}`:null),r),{})}({cx:f,classes:g,context:a,classNames:null==r?void 0:r.classNames,name:null==r?void 0:r.name,cache:p}),cx:f,theme:i}}}},2732:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7906),o=r(444),i=r(7294),a=r(8417);let p=(0,a.Z)({key:"mantine",prepend:!0});var l=r(4215),f=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))y.call(t,r)&&u(e,r,t[r]);return e};let{cssFactory:g}={cssFactory:function(e){let{cache:t}=e,r=(...e)=>{let{ref:r,args:i}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[r]=e;if(!(r instanceof Object)||!("ref"in r))return{args:e,ref:t};t=r.ref;let n=d({},r);return delete n.ref,{args:[n],ref:t}}(e),a=(0,n.O)(i,t.registered);return(0,o.My)(t,a,!1),`${t.key}-${a.name}${void 0===r?"":` ${r}`}`},i=(...e)=>(function(e,t,r){let n=[],i=(0,o.fp)(e,n,r);return n.length<2?r:i+t(n)})(t.registered,r,function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}(e));return{css:r,cx:i}}};function b(){let e=function(){let e=(0,l.T1)();return e||p}();return function(e,t){let r=(0,i.useRef)();return(!r.current||t.length!==r.current.prevDeps.length||r.current.prevDeps.map((e,r)=>e===t[r]).indexOf(!1)>=0)&&(r.current={v:e(),prevDeps:[...t]}),r.current.v}(()=>g({cache:e}),[e])}}}]);