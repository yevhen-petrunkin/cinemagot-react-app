"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(n,e,t){t.r(e);var r=t(439),c=t(791),a=t(689),o=t(87),u=t(628),s=t(240),i=t(184);e.default=function(){var n,e,t=(0,c.useState)(""),p=(0,r.Z)(t,2),f=p[0],l=p[1],h=(0,c.useState)(""),v=(0,r.Z)(h,2),d=v[0],m=v[1],x=(0,c.useState)(0),j=(0,r.Z)(x,2),w=j[0],g=j[1],y=(0,c.useState)(""),k=(0,r.Z)(y,2),b=k[0],_=k[1],P=(0,c.useState)(""),S=(0,r.Z)(P,2),U=S[0],Z=S[1],I=(0,a.UO)().movieId,L=null!==(n=null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,c.useEffect)((function(){(0,u.Pg)(I).then((function(n){var e=n.poster_path,t=n.title,r=n.popularity,c=n.overview,a=n.genres;l((0,u.LP)(e)),m(t),g(r),_(c),Z((0,s.WO)(a))}))}),[I]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{children:[(0,i.jsx)(o.rU,{to:L,children:"Go Back"}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:f,alt:d,width:"200px"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:d}),(0,i.jsxs)("p",{children:["User Score: ",w]}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsx)("p",{children:b}),(0,i.jsx)("h3",{children:"Genres"}),(0,i.jsx)("p",{children:U})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:"Additional Information"}),(0,i.jsx)("nav",{children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)(o.rU,{to:"cast",children:"Cast"}),(0,i.jsx)(o.rU,{to:"review",children:"Reviews"})]})})}),(0,i.jsx)(c.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."})}),(0,i.jsx)(a.j3,{})]})]})}},240:function(n,e,t){function r(n){return n.map((function(n){return{id:n.id,movieName:n.original_title}}))}function c(n){return n.map((function(n){return{profilePhoto:n.profile_path,actorName:n.name,charName:n.character}}))}function a(n){return n.map((function(n){return{author:n.author,content:n.content}}))}function o(n){return n.map((function(n){return n.name})).join(", ")}t.d(e,{Lu:function(){return r},WO:function(){return o},m5:function(){return c},tI:function(){return a}})},628:function(n,e,t){function r(n,e,t,r,c,a,o){try{var u=n[a](o),s=u.value}catch(i){return void t(i)}u.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var o=n.apply(e,t);function u(n){r(o,c,a,u,s,"next",n)}function s(n){r(o,c,a,u,s,"throw",n)}u(void 0)}))}}t.d(e,{Yc:function(){return d},Pg:function(){return h},oW:function(){return f},LP:function(){return w},fI:function(){return x},Df:function(){return i}});var a=t(757),o=t.n(a),u="https://api.themoviedb.org/3",s="ae692f579055feb645577941bd67daeb";function i(){return p.apply(this,arguments)}function p(){return(p=c(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(s));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=c(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=c(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=c(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function x(n){return j.apply(this,arguments)}function j(){return(j=c(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function w(n){return"".concat("https://image.tmdb.org/t/p/w500").concat(n)}}}]);
//# sourceMappingURL=961.eed61070.chunk.js.map