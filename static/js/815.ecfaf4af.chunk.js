"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815],{4853:function(n,e,t){t.d(e,{M:function(){return a},G:function(){return c}});var r=t(9039),o=t(184);function c(){return(0,o.jsx)(r.Z,{style:{height:300,width:200,position:"absolute",borderRadius:"10px"},children:(0,o.jsx)(r.Z.Image,{})})}function a(){return(0,o.jsx)(r.Z,{style:{height:240,width:160,borderRadius:"10px"},children:(0,o.jsx)(r.Z.Image,{})})}},4815:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,c,a,i,s,u,p,f,l,x=t(9439),h=t(2791),d=t(7689),m=t(9128),v=t(7616),g=t(168),b=t(6444),j=t(1947),w=(0,b.ZP)(j.rU)(r||(r=(0,g.Z)(["\n  margin-bottom: 10px;\n  padding: 5px 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 16px;\n  background-color: #cce2ff;\n  border-color: #cce2ff;\n  border-radius: 6px;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    color: white;\n    background-color: #4183c4;\n    border-color: #4183c4;\n  }\n"]))),k=b.ZP.img(o||(o=(0,g.Z)(["\n  width: 200px;\n  height: 300px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n"]))),Z=b.ZP.h1(c||(c=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 28px;\n"]))),y=b.ZP.h2(a||(a=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 26px;\n"]))),P=b.ZP.h3(i||(i=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n"]))),_=b.ZP.h4(s||(s=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 22px;\n"]))),N=b.ZP.p(u||(u=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),z=b.ZP.ul(p||(p=(0,g.Z)(["\n  margin: 0;\n  padding: 5px 0;\n  font-size: 22px;\n  list-style: none;\n"]))),E=b.ZP.li(f||(f=(0,g.Z)(["\n  margin-bottom: 20px;\n"]))),F=(0,b.ZP)(j.rU)(l||(l=(0,g.Z)(["\n  padding: 10px 0;\n"]))),I=t(4853),G=t(3540),L=t(184);var O=function(){var n,e,t=(0,h.useState)({}),r=(0,x.Z)(t,2),o=r[0],c=r[1],a=(0,h.useState)(!1),i=(0,x.Z)(a,2),s=i[0],u=i[1],p=(0,d.UO)().movieId,f=null!==(n=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,h.useEffect)((function(){(0,v.Pg)(p).then((function(n){var e=n.poster_path,t=n.title,r=n.popularity,o=n.overview,a=n.genres;c({poster:(0,v.LP)(e),title:t,score:r,overview:o,genres:(0,v.WO)(a)})}))}),[p]),!o)return(0,L.jsx)(G.Z,{});var l=o.poster,g=o.title,b=o.score,j=o.overview,O=o.genres;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("section",{children:[(0,L.jsxs)(w,{to:f,children:[(0,L.jsx)(m.siY,{}),(0,L.jsx)("span",{children:"Go Back"})]}),(0,L.jsxs)("div",{children:[!s&&(0,L.jsx)(I.G,{}),(0,L.jsx)(k,{src:l,alt:g,onLoad:function(){return u(!0)}})]}),(0,L.jsxs)("div",{style:{padding:"20px 0"},children:[(0,L.jsx)(Z,{children:g}),(0,L.jsxs)(N,{children:["User Score: ",b]}),(0,L.jsx)(y,{children:"Overview"}),(0,L.jsx)(N,{children:j}),(0,L.jsx)(P,{children:"Genres"}),(0,L.jsx)(N,{children:O})]})]}),(0,L.jsxs)("section",{children:[(0,L.jsx)(_,{children:"Additional Information"}),(0,L.jsx)("nav",{children:(0,L.jsxs)(z,{children:[(0,L.jsx)(E,{children:(0,L.jsx)(F,{to:"cast",state:{from:f},children:"Cast"})}),(0,L.jsx)(E,{children:(0,L.jsx)(F,{to:"review",state:{from:f},children:"Reviews"})})]})}),(0,L.jsx)(h.Suspense,{fallback:(0,L.jsx)(G.Z,{}),children:(0,L.jsx)(d.j3,{})})]})]})}},7616:function(n,e,t){function r(n){return n.map((function(n){return{id:n.id,movieName:n.original_title}}))}function o(n){return n.map((function(n){return{id:n.id,profilePhoto:n.profile_path,actorName:n.name,charName:n.character}}))}function c(n){return n.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}function a(n){return n.map((function(n){return n.name})).join(", ")}t.d(e,{Yc:function(){return g},Pg:function(){return m},oW:function(){return h},LP:function(){return k},fI:function(){return j},Df:function(){return l},m5:function(){return o},Lu:function(){return r},tI:function(){return c},WO:function(){return a}});var i=t(5861),s=t(7757),u=t.n(s),p="https://api.themoviedb.org/3",f="ae692f579055feb645577941bd67daeb";function l(){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(p,"/trending/movie/day?api_key=").concat(f));case 3:if(!(e=n.sent).ok){n.next=10;break}return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Not Found");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(p,"/search/movie?api_key=").concat(f,"&query=").concat(e));case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Not Found");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(p,"/movie/").concat(e,"?api_key=").concat(f));case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Not Found");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(p,"/movie/").concat(e,"/credits?api_key=").concat(f));case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Not Found");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function j(n){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(p,"/movie/").concat(e,"/reviews?api_key=").concat(f));case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Not Found");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function k(n){return n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):""}}}]);
//# sourceMappingURL=815.ecfaf4af.chunk.js.map