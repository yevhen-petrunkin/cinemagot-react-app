(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{5992:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r,i=t(168),o=t(4313).ZP.div(r||(r=(0,i.Z)(["\n  @media only screen and (min-width: 1200px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n  @media only screen and (max-width: 1199px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n  @media only screen and (max-width: 480px) {\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n  } ;\n"])),(function(n){return 7*n.theme.space[1]}),(function(n){return 7*n.theme.space[1]}),(function(n){return 3*n.theme.space[5]}),(function(n){return 3*n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return 2*n.theme.space[5]}),(function(n){return 2*n.theme.space[5]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),a=t(184);var s=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},6746:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r,i,o,a,s,p=t(168),c=t(4313),d=c.ZP.ul(r||(r=(0,p.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),u=t(7689),h=t(9439),x=t(2791),l=t(1947),f=(0,c.ZP)(l.rU)(i||(i=(0,p.Z)(["\n  padding: 8px 0;\n  display: inline-block;\n  text-decoration: none;\n  color: ",";\n  text-shadow: ",";\n"])),(function(n){return n.theme.colors.default}),(function(n){return n.theme.shadows.ordinary})),m=c.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),g=c.ZP.div(a||(a=(0,p.Z)(["\n  position: relative;\n  width: 260px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),v=c.ZP.h3(s||(s=(0,p.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 8px;\n  margin: 0;\n  width: 228px;\n  font-size: 12px;\n  text-align: left;\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.secondaryDark}),(function(n){return n.theme.shadows.ordinary})),b=t(2163),w=t(184);var j=function(n){var e=n.movie,t=n.location,r=(0,x.useState)(!1),i=(0,h.Z)(r,2),o=i[0],a=i[1],s=e.id,p=e.movieName,c=e.poster,d="";switch(t.state.page){case"home":d="movies/"+s.toString();break;case"movies":d=s.toString();break;default:return}return(0,w.jsx)("li",{children:(0,w.jsx)(f,{to:d,state:{from:t},children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:p}),!o&&(0,w.jsx)(b.Eh,{}),c&&(0,w.jsx)(m,{src:c,alt:"movieName",onLoad:function(){return a(!0)}})]})})})};var y=function(n){var e=n.movies,t=n.location;return(0,w.jsx)(w.Fragment,{children:e?(0,w.jsx)(d,{children:e.map((function(n){return(0,w.jsx)(j,{movie:n,location:t},n.id)}))}):(0,w.jsx)(u.Fg,{to:"/"})})}},2163:function(n,e,t){"use strict";t.d(e,{Eh:function(){return f},Mj:function(){return g},G9:function(){return m}});var r,i,o,a,s=t(168),p=t(4313),c=p.ZP.div(r||(r=(0,s.Z)(["\n  width: 260px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),d=p.ZP.div(i||(i=(0,s.Z)(["\n  width: 300px;\n  height: 460px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),u=p.ZP.div(o||(o=(0,s.Z)(["\n  width: 160px;\n  height: 240px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n  overflow: hidden;\n"]))),h=p.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),x=t(6543),l=t(184);function f(){return(0,l.jsx)(c,{children:(0,l.jsx)(h,{src:x,alt:"placeholder"})})}function m(){return(0,l.jsx)(d,{children:(0,l.jsx)(h,{src:x,alt:"placeholder"})})}function g(){return(0,l.jsx)(u,{children:(0,l.jsx)(h,{src:x,alt:"placeholder"})})}},5141:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(7689),i=t(9434),o=t(6351),a=t(5992),s=t(2007),p=t.n(s),c=t(6746),d=t(184);var u=function(){var n=(0,r.TH)();n.state={page:"movies"};var e=(0,i.v9)(o.gX),t=(0,i.v9)(o.UD),s=(0,i.v9)(o.pg),p=(0,i.v9)(o.wd);return(0,d.jsx)("section",{children:(0,d.jsxs)(a.Z,{children:[s&&(0,d.jsx)("span",{children:"Loading..."}),p&&(0,d.jsx)("span",{children:"Oops... Something went wrong!"}),(0,d.jsx)("h1",{children:t}),(0,d.jsx)(c.Z,{movies:e,location:n})]})})};c.Z.propTypes={location:p().shape({state:p().shape({page:p().string.isRequired}).isRequired}).isRequired}},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6543:function(n,e,t){"use strict";n.exports=t.p+"static/media/photoholder.bc7debfc682a5ddc60bf.jpg"}}]);
//# sourceMappingURL=141.665b16dc.chunk.js.map