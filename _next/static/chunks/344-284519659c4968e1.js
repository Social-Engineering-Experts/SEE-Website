"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{4685:function(e,r,t){t.d(r,{e:function(){return y}});var o=t(7294),n=t(3264),a=t(8427),l=t(5117),i=(0,t(1485).k)(()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}})),s=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&p(e,t,r[t]);return e},m=(e,r)=>{var t={};for(var o in e)f.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>r.indexOf(o)&&u.call(e,o)&&(t[o]=e[o]);return t};let g={},b=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Anchor",g,e),{component:a,className:s,unstyled:c}=t,f=m(t,["component","className","unstyled"]),{classes:u,cx:p}=i(null,{name:"Anchor",unstyled:c});return o.createElement(l.x,d(d({component:a||"a",variant:"link",ref:r,className:p(u.root,s)},"button"===a?{type:"button"}:null),f))});b.displayName="@mantine/core/Anchor";let y=(0,a.F)(b)},6894:function(e,r,t){t.d(r,{r:function(){return D}});var o=t(7294),n=t(3264);let[a,l]=function(e){let r=(0,o.createContext)(null),t=()=>{let t=(0,o.useContext)(r);if(null===t)throw Error(e);return t},n=({children:e,value:t})=>o.createElement(r.Provider,{value:t},e);return[n,t]}("Grid component was not found in tree");var i=t(1699),s=t(1485),c=Object.defineProperty,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&d(e,t,r[t]);if(f)for(var t of f(r))p.call(r,t)&&d(e,t,r[t]);return e};let g=(e,r)=>"content"===e?"auto":"auto"===e?"0px":e?`${100/(r/e)}%`:void 0,b=(e,r,t)=>t||"auto"===e||"content"===e?"unset":g(e,r),y=(e,r)=>{if(e)return"auto"===e||r?1:0},O=(e,r)=>0===e?0:e?`${100/(r/e)}%`:void 0,v=(e,r)=>void 0!==e?r.fn.size({size:e,sizes:r.spacing})/2:void 0;var w=(0,s.k)((e,{gutter:r,gutterXs:t,gutterSm:o,gutterMd:n,gutterLg:a,gutterXl:l,grow:s,offset:c,offsetXs:f,offsetSm:u,offsetMd:p,offsetLg:d,offsetXl:w,columns:h,span:x,xs:j,sm:C,md:E,lg:P,xl:N,order:k,orderXs:S,orderSm:z,orderMd:L,orderLg:I,orderXl:M})=>({col:m({boxSizing:"border-box",flexGrow:y(x,s),order:k,padding:v(r,e),marginLeft:O(c,h),flexBasis:g(x,h),flexShrink:0,width:"content"===x?"auto":void 0,maxWidth:b(x,h,s)},function({sizes:e,offsets:r,orders:t,theme:o,columns:n,gutters:a,grow:l}){return i.j1.reduce((i,s)=>(i[`@media (min-width: ${o.breakpoints[s]}px)`]={order:t[s],flexBasis:g(e[s],n),padding:v(a[s],o),flexShrink:0,width:"content"===e[s]?"auto":void 0,maxWidth:b(e[s],n,l),marginLeft:O(r[s],n),flexGrow:y(e[s],l)},i),{})}({sizes:{xs:j,sm:C,md:E,lg:P,xl:N},offsets:{xs:f,sm:u,md:p,lg:d,xl:w},orders:{xs:S,sm:z,md:L,lg:I,xl:M},gutters:{xs:t,sm:o,md:n,lg:a,xl:l},theme:e,columns:h,grow:s}))})),h=t(5396),x=Object.defineProperty,j=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,P=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&P(e,t,r[t]);if(j)for(var t of j(r))E.call(r,t)&&P(e,t,r[t]);return e},k=(e,r)=>{var t={};for(var o in e)C.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&j)for(var o of j(e))0>r.indexOf(o)&&E.call(e,o)&&(t[o]=e[o]);return t};let S={},z=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("GridCol",S,e),{children:a,span:i,offset:s,offsetXs:c,offsetSm:f,offsetMd:u,offsetLg:p,offsetXl:d,xs:m,sm:g,md:b,lg:y,xl:O,order:v,orderXs:x,orderSm:j,orderMd:C,orderLg:E,orderXl:P,className:z,id:L,unstyled:I}=t,M=k(t,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled"]),X=l(),R=i||X.columns,{classes:G,cx:V}=w({gutter:X.gutter,gutterXs:X.gutterXs,gutterSm:X.gutterSm,gutterMd:X.gutterMd,gutterLg:X.gutterLg,gutterXl:X.gutterXl,offset:s,offsetXs:c,offsetSm:f,offsetMd:u,offsetLg:p,offsetXl:d,xs:m,sm:g,md:b,lg:y,xl:O,order:v,orderXs:x,orderSm:j,orderMd:C,orderLg:E,orderXl:P,grow:X.grow,columns:X.columns,span:R},{unstyled:I,name:"Grid"});return!("auto"===R||"content"===R||"number"==typeof R&&R>0&&R%1==0)||R>X.columns?null:o.createElement(h.x,N({className:V(G.col,z),ref:r},M),a)});z.displayName="@mantine/core/Col";var L=Object.defineProperty,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,G=(e,r)=>{for(var t in r||(r={}))M.call(r,t)&&R(e,t,r[t]);if(I)for(var t of I(r))X.call(r,t)&&R(e,t,r[t]);return e},V=(0,s.k)((e,{justify:r,align:t,gutter:o,gutterXs:n,gutterSm:a,gutterMd:l,gutterLg:s,gutterXl:c})=>{var f,u;return{root:G({margin:-e.fn.size({size:o,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:t},(f={xs:n,sm:a,md:l,lg:s,xl:c},u=e,i.j1.reduce((e,r)=>(void 0!==f[r]&&(e[`@media (min-width: ${u.breakpoints[r]}px)`]={margin:-u.fn.size({size:f[r],sizes:u.spacing})/2}),e),{})))}}),Z=Object.defineProperty,H=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,_=(e,r,t)=>r in e?Z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&_(e,t,r[t]);if(H)for(var t of H(r))$.call(r,t)&&_(e,t,r[t]);return e},B=(e,r)=>{var t={};for(var o in e)W.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&H)for(var o of H(e))0>r.indexOf(o)&&$.call(e,o)&&(t[o]=e[o]);return t};let F={gutter:"md",justify:"flex-start",align:"stretch",columns:12},D=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Grid",F,e),{gutter:l,gutterXs:i,gutterSm:s,gutterMd:c,gutterLg:f,gutterXl:u,children:p,grow:d,justify:m,align:g,columns:b,className:y,id:O,unstyled:v}=t,w=B(t,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled"]),{classes:x,cx:j}=V({gutter:l,justify:m,align:g,gutterXs:i,gutterSm:s,gutterMd:c,gutterLg:f,gutterXl:u},{unstyled:v,name:"Grid"});return o.createElement(a,{value:{gutter:l,gutterXs:i,gutterSm:s,gutterMd:c,gutterLg:f,gutterXl:u,grow:d,columns:b}},o.createElement(h.x,A({className:j(x.root,y),ref:r},w),p))});D.Col=z,D.displayName="@mantine/core/Grid"},2870:function(e,r,t){t.d(r,{E:function(){return X}});var o=t(7294),n=t(3264),a=t(7048),l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&f(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&f(e,t,r[t]);return e};function p(e){return o.createElement("svg",u({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var d=t(1485),m=Object.defineProperty,g=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&w(e,t,r[t]);if(y)for(var t of y(r))v.call(r,t)&&w(e,t,r[t]);return e},x=(e,r)=>g(e,b(r)),j=(0,d.k)((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:x(h({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:x(h({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})})),C=t(5396),E=t(5117),P=Object.defineProperty,N=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,L=(e,r)=>{for(var t in r||(r={}))k.call(r,t)&&z(e,t,r[t]);if(N)for(var t of N(r))S.call(r,t)&&z(e,t,r[t]);return e},I=(e,r)=>{var t={};for(var o in e)k.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&N)for(var o of N(e))0>r.indexOf(o)&&S.call(e,o)&&(t[o]=e[o]);return t};let M={fit:"cover",width:"100%",height:"auto",radius:0},X=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Image",M,e),{className:l,alt:i,src:s,fit:c,width:f,height:u,radius:d,imageProps:m,withPlaceholder:g,placeholder:b,imageRef:y,classNames:O,styles:v,caption:w,unstyled:h,style:x}=t,P=I(t,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:N,cx:k}=j({radius:d},{classNames:O,styles:v,unstyled:h,name:"Image"}),[S,z]=(0,o.useState)(!s);return(0,a.l)(()=>{z(!s)},[s]),o.createElement(C.x,L({className:k(N.root,l),ref:r,style:L({width:f},x)},P),o.createElement("figure",{className:N.figure},o.createElement("div",{className:N.imageWrapper},o.createElement("img",L({className:N.image,src:s,alt:i,style:{objectFit:c,width:f,height:u},ref:y,onError(e){z(!0),"function"==typeof(null==m?void 0:m.onError)&&m.onError(e)}},m)),g&&S&&o.createElement("div",{className:N.placeholder,title:i},b||o.createElement("div",null,o.createElement(p,{style:{width:40,height:40}})))),!!w&&o.createElement(E.x,{component:"figcaption",size:"sm",align:"center",className:N.caption},w)))});X.displayName="@mantine/core/Image"}}]);