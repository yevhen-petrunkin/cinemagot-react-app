"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{519:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(439),c=e(791),a=e(689),u=e(628),o=e(240),i=e(184);var s=function(n){var t=n.data,e=t.profilePhoto,r=t.actorName,c=t.charName,a=(0,u.LP)(e);return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a,alt:r,width:"100px"}),(0,i.jsx)("p",{children:r}),(0,i.jsxs)("p",{children:["Character: ",c]})]})};var p=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){f&&(0,u.Yc)(f).then((function(n){return p((0,o.m5)(n.cast))}))}),[f]),(0,i.jsx)("ul",{children:e.map((function(n){var t=n.actorName;return(0,i.jsx)(s,{data:n},t)}))})}},240:function(n,t,e){function r(n){return n.map((function(n){return{id:n.id,movieName:n.original_title}}))}function c(n){return n.map((function(n){return{profilePhoto:n.profile_path,actorName:n.name,charName:n.character}}))}function a(n){return n.map((function(n){return{author:n.author,content:n.content}}))}function u(n){return n.map((function(n){return n.name})).join(", ")}e.d(t,{Lu:function(){return r},WO:function(){return u},m5:function(){return c},tI:function(){return a}})},628:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Yc:function(){return m},Pg:function(){return l},oW:function(){return f},LP:function(){return y},fI:function(){return x},Df:function(){return s}});var a=e(757),u=e.n(a),o="https://api.themoviedb.org/3",i="ae692f579055feb645577941bd67daeb";function s(){return p.apply(this,arguments)}function p(){return(p=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function m(n){return d.apply(this,arguments)}function d(){return(d=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function y(n){return"".concat("https://image.tmdb.org/t/p/w500").concat(n)}}}]);
//# sourceMappingURL=519.dca6be11.chunk.js.map