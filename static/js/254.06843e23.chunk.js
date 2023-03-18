"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[254],{808:function(n,t,e){e.d(t,{Z:function(){return s}});var o,c=e(168),i=e(4313).ZP.button(o||(o=(0,c.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=(t.space,t.colors),o=(t.fontSizes,t.fontWeights,t.lineHeights,t.letterSpacings,t.sizes,t.borders),c=(t.radii,t.zIndices,t.shadows),i=(t.mediaQueries,n.top),a=n.right;return"\n  position: absolute;\n  top: ".concat(i,"px;\n  right: ").concat(a,"px;\n  width: 28px;\n  height: 28px;\n  color: ").concat(e.defaultWeak,";\n  background-color: rgba(0, 0, 0, 0.5);\n  border: ").concat(o.heroBtnSmall,";\n  border-radius: 50%;\n  box-shadow: ").concat(c.elevated,";\n  cursor: pointer;\n  transition: color 300ms ease, border 300ms ease;\n\n  &:hover,\n  &:focus {\n    color: ").concat(e.accent,";\n    border: ").concat(o.heroBtnSmallHover,";\n  }\n  ")})),a=e(860),r=e(184);var s=function(n){var t=n.onClick,e=n.top,o=n.right,c=n.title;return(0,r.jsx)(i,{type:"button",top:e,right:o,title:c||"Close",onClick:t,children:(0,r.jsx)(a.u5Z,{style:{width:"100%",height:"100%"}})})}},4254:function(n,t,e){e.r(t),e.d(t,{default:function(){return mn}});var o,c,i,a,r,s,d,l,u,f,h,p,m,x,g,v,b,w,Z=e(1413),j=e(9439),y=e(168),z=e(4313),k=e(1947),P=e(6543),S=z.ZP.section(o||(o=(0,y.Z)(["\n  padding: 20px 20px;\n  color: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.colors.defaultWeak}),(function(n){return n.theme.shadows.textOrdinary})),L=z.ZP.h2(c||(c=(0,y.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n  font-size: 24px;\n  text-shadow: ",";\n"])),(function(n){return n.theme.shadows.textOrdinary})),I=z.ZP.ul(i||(i=(0,y.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n"]))),W=z.ZP.div(a||(a=(0,y.Z)(["\n  aspect-ratio: 3 / 4.8;\n  border-radius: 12px;\n  box-shadow: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.shadows.ordinary})),C=z.ZP.div(r||(r=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.colors;t.radii,t.shadows;return"\n  position: relative;\n  height: 85%;\n  color: ".concat(e.defaultWeak,";\n  overflow: hidden;\n    \n  &:hover,\n  &:focus, &.show {\n    & > ").concat(X," {\n      transform: scale(1.1);\n    }\n\n    & > ").concat(R," {\n      transform: translateY(-100%);\n    }\n    & > ").concat(R," > ").concat(M," {\n      &::after {\n        width: 90%;\n      }\n    }\n  }\n  ")})),X=z.ZP.div(s||(s=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=(t.space,t.colors),o=(t.fontSizes,t.fontWeights,t.lineHeights,t.letterSpacings,t.sizes,t.borders,t.radii,t.zIndices,t.shadows,t.mediaQueries,n.bgImg);return"\n  width: 100%;\n  height: 100%;\n  background-image: url('".concat(o||P,"');\n  background-color: ").concat(e.secondaryStrong,";\n  background-size: cover;\n  background-position: center center;\n  opacity: 0.8;\n  transition: transform 750ms ease;\n  will-change: transform;\n   ")})),R=z.ZP.div(d||(d=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.space,o=t.colors;return"\n  position: absolute;\n  bottom: -100%;\n  padding: ".concat(e[3],"px;\n  padding-top: ").concat(e[5],"px;\n  width: 100%;\n  height: 100%;\n  transition: transform 750ms ease 500ms;\n  will-change: transform;\n  color: ").concat(o.defaultWeak,";\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow: hidden;\n  \n")})),M=z.ZP.h3(l||(l=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.space,o=t.fontSizes,c=t.sizes,i=t.colors,a=t.shadows,r=t.mediaQueries;return"\n  margin: ".concat(e[0],";\n  margin-bottom: ").concat(e[5],"px;\n  width: 90%;\n  font-size: ").concat(o[3],"px;\n  text-align: left;\n  box-shadow: ").concat(a.ordinary,";\n  \n\n  &::after {\n    content: '';\n    position: absolute;\n    left: ").concat(e[0],";\n    bottom: -").concat(e[1],"px;\n    width: ").concat(c[0],";\n    height: ").concat(c[1],"px;\n    transition: width 750ms ease;\n    background-color: ").concat(i.accent,";\n  }\n\n  ").concat(r.huge," {\n    padding-bottom: ").concat(e[3],"px;\n    font-size: ").concat(o[4],"px;\n  }\n\n  ").concat(r.extraLarge," {\n    padding-bottom: ").concat(e[3],"px;\n    font-size: ").concat(o[3],"px;\n  }\n  \n  ").concat(r.large," {\n    padding-bottom: ").concat(e[3],"px;\n    font-size: ").concat(o[3],"px;\n  }\n\n  ").concat(r.medium," {\n    padding-bottom: ").concat(e[3],"px;\n    font-size: ").concat(o[2],"px;\n  }\n\n  ").concat(r.small," {\n    padding-bottom: ").concat(e[3],"px;\n    font-size: ").concat(o[2],"px;\n  }\n\n  ").concat(r.tiny," {\n    padding: ").concat(e[2],"px ").concat(e[0],";\n    width: 90%;\n    font-size: ").concat(o[3],"px;\n  }\n  ")})),E=z.ZP.p(u||(u=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.space,o=t.fontSizes,c=t.mediaQueries;return"\n    margin: ".concat(e[3],"px ").concat(e[0],";\n    margin-bottom: ").concat(e[5],"px;\n    padding-right: ").concat(e[3],"px;\n    height: 50%;\n    overflow-y: auto;\n\n\n  ").concat(c.huge," {\n    font-size: ").concat(o[3],"px;\n  }\n\n  ").concat(c.extraLarge," {\n    font-size: ").concat(o[2],"px;\n  }\n\n  ").concat(c.large," {\n    font-size: ").concat(o[3],"px;\n  }\n\n  ").concat(c.medium," {\n    font-size: ").concat(o[2],"px;\n  }\n\n  ").concat(c.small," {\n    font-size: ").concat(o[2],"px;\n  }\n\n  ").concat(c.tiny," {\n    font-size: ").concat(o[2],"px;\n  }\n  \n  ")})),F=z.ZP.p(f||(f=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.space,o=t.fontSizes,c=t.mediaQueries;return"\n   margin: ".concat(e[0],";\n  font-size: ").concat(o[2],"px;\n  \n  ").concat(c.huge," {\n    font-size: ").concat(o[3],"px;\n  }\n\n  ").concat(c.extraLarge," {\n    font-size: ").concat(o[2],"px;\n  }\n\n   ").concat(c.small," {\n    font-size: ").concat(o[1],"px;\n  }\n\n  ").concat(c.tiny," {\n    font-size: ").concat(o[2],"px;\n  }\n  ")})),H=z.ZP.div(h||(h=(0,y.Z)(["\n  width: 33%;\n"]))),Q=(0,z.ZP)(k.rU)(p||(p=(0,y.Z)(["\n  ","\n"])),(function(n){var t=n.theme,e=t.space,o=t.colors,c=t.fontSizes,i=t.shadows,a=t.mediaQueries;return"\n  position: absolute;\n  bottom: ".concat(e[2],"px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: ").concat(e[5],"px ").concat(e[0],";\n  display: block;\n  text-decoration: underline;\n  color: ").concat(o.defaultWeak,";\n  text-shadow: ").concat(i.ordinary,";\n  transform: color 500ms ease;\n\n  &:hover, &:focus {\n    color: ").concat(o.accent,";\n  }\n  \n  ").concat(a.huge," {\n    font-size: ").concat(c[3],"px;\n  }\n\n  ").concat(a.extraLarge," {\n     font-size: ").concat(c[2],"px;\n  }\n\n  ").concat(a.large," {\n     font-size: ").concat(c[3],"px;\n  }\n\n  ").concat(a.medium," {\n     font-size: ").concat(c[2],"px;\n  }\n\n  ").concat(a.small," {\n     font-size: ").concat(c[2],"px;\n  }\n\n  ").concat(a.tiny," {\n     font-size: ").concat(c[3],"px;\n  }\n  ")})),T=e(2791),D=e(7689),O=e(9434),_=e(6351),B=e(673),Y=e(9692),q=e(3418),U=e(7589),A=e(958),J=e(5221),$=z.ZP.div(m||(m=(0,y.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  height: 15%;\n"]))),G=z.ZP.button(x||(x=(0,y.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font-size: 24px;\n  color: ",";\n  background-color: ",";\n  border: none;\n  outline: 1px solid ",";\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.defaultWeak}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondaryStrong}),(function(n){return n.theme.colors.accentWeak})),K=z.ZP.span(g||(g=(0,y.Z)(["\n  font-size: 12px;\n"]))),N=e(9337),V=e(7701),nn=e(6470),tn=z.ZP.ul(v||(v=(0,y.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n"]))),en=z.ZP.li(b||(b=(0,y.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n"]))),on=z.ZP.img(w||(w=(0,y.Z)(["\n  width: 100%;\n"]))),cn=e(184);var an=function(){var n=(0,O.v9)(_.Z0),t=(0,O.v9)(_.gb),e=(0,O.v9)(_.yw);return console.log(e),n?(0,cn.jsx)("div",{children:"Loading..."}):t?(0,cn.jsx)("div",{children:"Oops... Something went wrong!"}):(0,cn.jsx)(cn.Fragment,{children:e&&(0,cn.jsx)(tn,{children:e.map((function(n){var t=n.number,e=n.url;return(0,cn.jsx)(en,{children:(0,cn.jsx)(on,{src:e,alt:"Picture ".concat(t)})},t)}))})})},rn=e(6856),sn=e(6036),dn=e(8820);var ln=function(n){var t=n.movieData.movie.id,e=(0,O.I0)(),o=(0,D.s0)(),c=(0,O.v9)(_.Dc);(0,T.useEffect)((function(){("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&document.querySelectorAll(".MovieBox").forEach((function(n){n.addEventListener("touchstart",(function(){n.querySelector(".InfoBox").classList.toggle("show")}))}))}),[]),(0,T.useEffect)((function(){var n=document.querySelector("body");n.style.overflow=c?"hidden":"visible"}),[c]);var i=function(n){switch(n.currentTarget.id){case"recommend":e((0,V.a$)(t));break;case"similar":e((0,V.aY)(t));break;default:return}o("/movies")};return(0,cn.jsxs)($,{children:[(0,cn.jsxs)(G,{type:"button",id:"recommend",onClick:i,children:[(0,cn.jsx)(rn.xki,{}),(0,cn.jsx)(K,{children:"Recommended"})]}),(0,cn.jsxs)(G,{type:"button",id:"similar",onClick:i,children:[(0,cn.jsx)(sn.GFO,{}),(0,cn.jsx)(K,{children:"Similar"})]}),(0,cn.jsxs)(G,{type:"button",onClick:function(){e((0,V.YZ)(t)),e((0,N.JP)())},children:[(0,cn.jsx)(dn.Ypm,{}),(0,cn.jsx)(K,{children:"Posters"})]}),c&&(0,cn.jsx)(nn.Z,{children:(0,cn.jsx)(an,{})})]})},un=e(808),fn=e(1332),hn=J.h.movieRemovedFromListMessage,pn=J.h.errorRemovingMovieFromListMessage;var mn=function(){var n=(0,D.TH)(),t=(0,D.UO)().listId,e=(0,O.v9)(_.ib),o=(0,O.v9)(_.mS),c=(0,O.v9)(_.dy),i=(0,T.useState)(""),a=(0,j.Z)(i,2),r=a[0],s=a[1],d=(0,T.useState)({}),l=(0,j.Z)(d,2),u=l[0],f=l[1];(0,T.useEffect)((function(){switch(t){case"favorites":f((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{userList:A.X[1].listRef,caption:A.X[1].caption,content:A.X[1].content})}));break;case"watchlist":f((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{userList:A.X[2].listRef,caption:A.X[2].caption,content:A.X[2].content})}));break;case"seenlist":f((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{userList:A.X[3].listRef,caption:A.X[3].caption,content:A.X[3].content})}));break;default:return}}),[t]),(0,T.useEffect)((function(){c&&s(c.userId)}),[c]);var h=(0,q.D)((function(n){var t=n.list,e=n.movie,o=(0,Y.JU)(B.db,"userLists",r);return(0,U.Cl)(o,t,e)}),{onSuccess:function(){console.log(hn)},onError:function(){console.log(pn)}});return(0,cn.jsx)(S,{children:!o&&e&&u.userList?(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)(L,{children:u.caption}),(0,cn.jsx)(I,{children:e[u.userList].map((function(t){var e=t.id,o=t.title,c=t.poster,i=t.overview,a=t.popularity,s=t.score,d=t.date,l="/movies/"+e.toString();return(0,cn.jsxs)(W,{children:[(0,cn.jsxs)(C,{children:[(0,cn.jsx)(X,{bgImg:c}),(0,cn.jsxs)(R,{children:[(0,cn.jsx)(M,{children:o}),(0,cn.jsx)(E,{children:i}),(0,cn.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,cn.jsxs)(H,{children:[(0,cn.jsx)(fn.$P,{number:a}),(0,cn.jsx)(fn._H,{number:s})]}),(0,cn.jsx)(F,{children:d})]}),(0,cn.jsx)(Q,{to:l,state:{from:n},children:"See More"})]}),(0,cn.jsx)(un.Z,{title:"Delete from list",top:8,right:8,onClick:function(){return n={list:u.userList,movie:t},void h.mutate(n);var n}})]}),(0,cn.jsx)(ln,{movieData:{list:u,movie:t,userId:r}})]},e)}))})]}):(0,cn.jsx)("p",{children:"Loading..."})})}},958:function(n,t,e){e.d(t,{X:function(){return o}});var o=[{id:"info",listId:"",listRef:null,content:"Info",caption:"My Information"},{id:"favorites",listId:"favorites",listRef:"favList",content:"Favorites",caption:"My Favorites"},{id:"watchlist",listId:"watchlist",listRef:"watchList",content:"Watchlist",caption:"I Wanted to Watch These"},{id:"seenlist",listId:"seenlist",listRef:"seenList",content:"Seen",caption:"I Have Already Seen These"}]}}]);
//# sourceMappingURL=254.06843e23.chunk.js.map