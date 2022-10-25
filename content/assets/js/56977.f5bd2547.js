"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56977],{56977:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(63366),o=n(87462),a=n(67294),i=n(86010),s=n(94780),u=n(36622),c=n(81719),l=n(51650),p=n(40011),m=n(84771),d=n(59766),h=n(85578);const y=["sx"];function g(e){const{sx:t}=e,n=(0,r.Z)(e,y),{systemProps:a,otherProps:i}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{h.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let s;return s=Array.isArray(t)?[a,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,d.P)(n)?(0,o.Z)({},a,n):a}:(0,o.Z)({},a,t),(0,o.Z)({},i,{sx:s})}var f=n(1588),v=n(34867);function b(e){return(0,v.Z)("MuiTypography",e)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var Z=n(85893);const w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},B={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiTypography"}),a=(e=>B[e]||e)(n.color),c=g((0,o.Z)({},n,{color:a})),{align:p="inherit",className:m,component:d,gutterBottom:h=!1,noWrap:y=!1,paragraph:f=!1,variant:v="body1",variantMapping:S=k}=c,M=(0,r.Z)(c,w),C=(0,o.Z)({},c,{align:p,color:a,className:m,component:d,gutterBottom:h,noWrap:y,paragraph:f,variant:v,variantMapping:S}),P=d||(f?"p":S[v]||k[v])||"span",R=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,c={root:["root",a,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(c,b,i)})(C);return(0,Z.jsx)(x,(0,o.Z)({as:P,ref:t,ownerState:C,className:(0,i.Z)(R.root,m)},M))}));function M(e){return(0,v.Z)("MuiLink",e)}const C=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var P=n(54844),R=n(41796);const T={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=({theme:e,ownerState:t})=>{const n=(e=>T[e]||e)(t.color),r=(0,P.D)(e,`palette.${n}`,!1)||t.color,o=(0,P.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,R.Fq)(r,.4)},W=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,c.ZP)(S,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:A({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${C.focusVisible}`]:{outline:"auto"}}))),L=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiLink"}),{className:c,color:d="primary",component:h="a",onBlur:y,onFocus:g,TypographyClasses:f,underline:v="always",variant:b="inherit",sx:w}=n,x=(0,r.Z)(n,W),{isFocusVisibleRef:k,onBlur:B,onFocus:S,ref:C}=(0,p.Z)(),[P,R]=a.useState(!1),A=(0,m.Z)(t,C),L=(0,o.Z)({},n,{color:d,component:h,focusVisible:P,underline:v,variant:b}),N=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,M,t)})(L);return(0,Z.jsx)(E,(0,o.Z)({color:d,className:(0,i.Z)(N.root,c),classes:f,component:h,onBlur:e=>{B(e),!1===k.current&&R(!1),y&&y(e)},onFocus:e=>{S(e),!0===k.current&&R(!0),g&&g(e)},ref:A,ownerState:L,variant:b,sx:[...Object.keys(T).includes(d)?[]:[{color:d}],...Array.isArray(w)?w:[w]]},x))}))},84771:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(30067).Z},40011:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(99962).Z},7960:(e,t,n)=>{function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},30067:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(7960);function a(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.Z)(e,t)}))}),e)}},99962:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294);let o,a=!0,i=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function c(){a=!1}function l(){"hidden"===this.visibilityState&&i&&(a=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function m(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",l,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((()=>{i=!1}),100),t.current=!1,!0)},ref:e}}}}]);