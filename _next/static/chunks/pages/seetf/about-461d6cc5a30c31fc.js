(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[819],{3940:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seetf/about",function(){return r(5623)}])},9130:function(e,n,r){"use strict";var o=r(5893),t=r(2445);let i=e=>{let{children:n,className:r}=e;return(0,o.jsx)(t.W,{size:"md",px:"md",className:r,children:n})};n.Z=i},977:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var o=r(5893),t=r(6817),i=r(9130),l=r(6137),s=r(1310),a=r(3923),c=r(1664),d=r.n(c),m=r(7294);let p=(0,t.k)(e=>({root:{postion:"relative",zIndex:1},header:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",[e.fn.smallerThan("sm")]:{justifyContent:"end"}},links:{display:"flex",flexDirection:"row",[e.fn.smallerThan("sm")]:{display:"none"}},mobileLinks:{display:"flex",flexDirection:"row",[e.fn.smallerThan("sm")]:{flexDirection:"column"}},link:{display:"block",lineHeight:1,padding:"8px 12px",borderRadius:e.radius.sm,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.md,fontWeight:500,fontFamily:"".concat(e.fontFamilyMonospace,", monospace"),"&:hover":{color:"#B5E853AA"},[e.fn.smallerThan("sm")]:{borderRadius:0,padding:e.spacing.md}},linkActive:{"&, &:hover":{color:"#B5E853"}},headerWrapper:{paddingBlock:e.spacing.md,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},contentMobile:{display:"none",[e.fn.smallerThan("sm")]:{display:"block"}}})),h=[{link:"/",label:"Home"},{link:"/seetf/about",label:"About"},{link:"/seetf/faq",label:"FAQs"},{link:"/seetf/rules",label:"Rules"},{link:"/seetf/prizes",label:"Prizes"},{link:"/seetf/archive",label:"Archive"}],u=()=>{let{classes:e,cx:n}=p(),[r,t]=(0,m.useState)(h[0].link),[c,u]=(0,m.useState)(!1);(0,m.useEffect)(()=>{t(window.location.pathname)},[]);let f=h.map(i=>(0,o.jsx)(d(),{href:i.link,className:n(e.link,{[e.linkActive]:r===i.link}),onClick(e){t(i.link),u(!1)},children:i.label},i.label));return(0,o.jsx)("header",{className:e.headerWrapper,children:(0,o.jsxs)(i.Z,{className:e.header,children:[(0,o.jsx)(l.Z,{spacing:5,className:e.links,children:f}),(0,o.jsxs)("div",{className:e.contentMobile,children:[(0,o.jsx)("div",{className:"burger-button",children:(0,o.jsx)(s.O,{opened:c,onClick:()=>u(e=>!e),title:c?"Close navigation":"Open navigation",size:"sm"})}),(0,o.jsx)(a.d,{transition:"slide-left",transitionDuration:250,transitionTimingFunction:"ease",overlayOpacity:.55,position:"right",closeButtonLabel:"Close drawer",padding:"xl",opened:c,onClose:()=>u(!1),children:(0,o.jsx)("div",{className:"menu",children:(0,o.jsx)(l.Z,{spacing:5,className:e.mobileLinks,children:f})})})]})]})})},f=(0,t.k)(e=>({contentWrapper:{paddingTop:e.spacing.xl,paddingBottom:e.spacing.lg}})),g=e=>{let{children:n}=e,{classes:r}=f();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),(0,o.jsx)(i.Z,{children:n})]})};var x=g},5623:function(e,n,r){"use strict";r.r(n),r.d(n,{DiscordButton:function(){return u},TwitterButton:function(){return f}});var o=r(5893),t=r(6869),i=r(6817),l=r(9236),s=r(5117),a=r(6137),c=r(3064),d=r(3055),m=r(2962),p=r(977),h=r(9130);function u(e){return(0,o.jsx)(t.z,{component:"a",leftIcon:(0,o.jsx)(c.D,{size:16}),sx:e=>({backgroundColor:(e.colorScheme,"#5865F2"),"&:hover":{backgroundColor:"dark"===e.colorScheme?e.fn.lighten("#5865F2",.05):e.fn.darken("#5865F2",.05)}}),...e})}function f(e){return(0,o.jsx)(t.z,{component:"a",leftIcon:(0,o.jsx)(d.Z,{size:16}),...e})}let g=(0,i.k)(e=>({sectionContainer:{marginBlockEnd:"5rem"},titleWrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"2.5rem",paddingBottom:"1.2rem"},mainTitle:{fontSize:"clamp(2rem, 1.6rem + 2vw, 4rem)",color:"dark"===e.colorScheme?"#B5E853":e.colors.gray[9]},secondaryTitle:{fontSize:"1.6875rem",marginTop:"2.5625rem",marginBottom:"0.8125rem",color:"dark"===e.colorScheme?"#B5E853":e.colors.gray[9]},paragraphText:{fontSize:"1.05rem",marginBottom:"1.4rem"}})),x=()=>{let{classes:e}=g();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.PB,{title:"About"}),(0,o.jsxs)(h.Z,{className:e.sectionContainer,children:[(0,o.jsx)("div",{className:e.titleWrapper,children:(0,o.jsx)(l.D,{order:1,className:e.mainTitle,children:"SEETF 2023"})}),(0,o.jsx)(l.D,{order:2,className:e.secondaryTitle,children:"Birds Aren't Real."}),(0,o.jsx)(s.x,{className:e.paragraphText,children:"They are actually drones used by the government to spy on you. The Super Evil Elite Intelligence Agency (SEE-IA) desperately wants to keep this a secret, but hacker and whistleblower rainbowpigeon is determined to expose them."}),(0,o.jsx)(s.x,{className:e.paragraphText,children:"Will you help rainbowpigeon expose the truth? Or will you help SEE-IA cover up their crimes? The choice is yours."}),(0,o.jsx)(l.D,{order:2,className:e.secondaryTitle,children:"Details Coming Soon."}),(0,o.jsx)(s.x,{className:e.paragraphText,children:"The competition will run from Sat, 03 June 2023, 10:00 SGT — Sun, 04 June 2023, 18:00 SGT. Please check back later for more details."}),(0,o.jsx)(l.D,{order:2,className:e.secondaryTitle,children:"Sponsorship"}),(0,o.jsx)(s.x,{className:e.paragraphText,children:(0,o.jsx)(s.x,{fw:700,children:"If you or your company is interested in sponsoring us, please contact us at sponsor [AT] seetf.sg."})}),(0,o.jsxs)(a.Z,{position:"center",mt:"xl",children:[(0,o.jsx)(t.z,{component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://ctftime.org/team/151372",styles:e=>({root:{backgroundColor:"#D02C22",border:0,"&:hover":{backgroundColor:e.fn.darken("#D02C22",.1)}},leftIcon:{marginRight:15}}),children:"CTFTime"}),(0,o.jsx)(f,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/seetf_sg",children:"Twitter"}),(0,o.jsx)(u,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/seetf_sg",children:"Join our Discord"}),(0,o.jsx)(t.z,{component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/social-engineering-experts/",styles:e=>({root:{backgroundColor:"#0072b1",border:0},leftIcon:{marginRight:15}}),children:"LinkedIn"})]})]})]})};x.getLayout=e=>(0,o.jsx)(p.Z,{children:e}),n.default=x}},function(e){e.O(0,[945,679,605,774,888,179],function(){return e(e.s=3940)}),_N_E=e.O()}]);