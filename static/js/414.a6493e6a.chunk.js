(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{4853:function(e,n,r){"use strict";r.d(n,{M:function(){return i},G:function(){return s}});var t=r(9039),a=r(184);function s(){return(0,a.jsx)(t.Z,{style:{height:300,width:200,borderRadius:"10px"},children:(0,a.jsx)(t.Z.Image,{})})}function i(){return(0,a.jsx)(t.Z,{style:{height:240,width:160,borderRadius:"10px"},children:(0,a.jsx)(t.Z.Image,{})})}},6414:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t,a,s,i,c=r(7689),o=r(8404),u=r(2007),l=r.n(u),p=r(5703),d=r(168),h=r(4313),f=h.ZP.ul(t||(t=(0,d.Z)(["\n  margin: 0;\n  padding: 5px 0;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  font-size: 22px;\n  list-style: none;\n"]))),m=r(9439),Z=r(2791),g=h.ZP.li(a||(a=(0,d.Z)(["\n  width: 260px;\n"]))),x=h.ZP.img(s||(s=(0,d.Z)(["\n  width: 160px;\n  height: 240px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 3px black;\n"]))),v=h.ZP.p(i||(i=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),y=r(4853),P=r(184);var N=function(e){var n=e.data,r=(0,Z.useState)(!1),t=(0,m.Z)(r,2),a=t[0],s=t[1],i=n.profilePhoto,c=n.actorName,o=n.charName,u=(0,p.LP)(i);return(0,P.jsxs)(g,{children:[!a&&(0,P.jsx)(y.M,{}),u&&(0,P.jsx)(x,{src:u,alt:c,onLoad:function(){return s(!0)}}),(0,P.jsx)(v,{children:c}),(0,P.jsxs)(v,{children:["Character: ",o]})]})},j=r(1087),T=r(3540);var b=function(){var e=(0,c.UO)().movieId,n=(0,o.a)(["cast",e],(function(){return(0,p.CL)(e).then((function(e){return(0,p.m5)(e.cast)}))})),r=n.data,t=n.isLoading,a=n.isError;return t?(0,P.jsx)(T.Z,{}):a?(0,P.jsx)(j.Z,{}):(0,P.jsx)(f,{children:r.length?r.map((function(e){var n=e.id;return(0,P.jsx)(N,{data:e},n)})):(0,P.jsx)(j.Z,{})})};N.propTypes={data:l().shape({id:l().string.isRequired,profilePhoto:l().string,actorName:l().string.isRequired,charName:l().string.isRequired}).isRequired}},5703:function(e,n,r){"use strict";r.d(n,{CL:function(){return a.CL},LP:function(){return a.LP},Mc:function(){return a.Mc},WO:function(){return t.WO},m5:function(){return t.m5},tI:function(){return t.tI},wH:function(){return a.wH}});var t=r(7761),a=r(696);r(8630)},888:function(e,n,r){"use strict";var t=r(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,n,r,a,s,i){if(i!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,n,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9039:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(7462),a=r(8182),s=r(2791),i=r(2190),c=r(6755),o=r(6246),u=r(5831);function l(e){var n=e.children,r=e.className,p=e.content,d=e.image,h=(0,a.Z)((0,i.lG)(d,"image"),"header",r),f=(0,c.Z)(l,e),m=(0,o.Z)(l,e);return s.createElement(m,(0,t.Z)({},f,{className:h}),u.kK(n)?p:n)}l.handledProps=["as","children","className","content","image"],l.propTypes={};var p=l;function d(e){var n=e.className,r=e.square,u=e.rectangular,l=(0,a.Z)((0,i.lG)(r,"square"),(0,i.lG)(u,"rectangular"),"image",n),p=(0,c.Z)(d,e),h=(0,o.Z)(d,e);return s.createElement(h,(0,t.Z)({},p,{className:l}))}d.handledProps=["as","className","rectangular","square"],d.propTypes={};var h=d;function f(e){var n=e.className,r=e.length,i=(0,a.Z)("line",r,n),u=(0,c.Z)(f,e),l=(0,o.Z)(f,e);return s.createElement(l,(0,t.Z)({},u,{className:i}))}f.handledProps=["as","className","length"],f.propTypes={};var m=f;function Z(e){var n=e.children,r=e.className,i=e.content,l=(0,a.Z)("paragraph",r),p=(0,c.Z)(Z,e),d=(0,o.Z)(Z,e);return s.createElement(d,(0,t.Z)({},p,{className:l}),u.kK(n)?i:n)}Z.handledProps=["as","children","className","content"],Z.propTypes={};var g=Z;function x(e){var n=e.children,r=e.className,l=e.content,p=e.fluid,d=e.inverted,h=(0,a.Z)("ui",(0,i.lG)(p,"fluid"),(0,i.lG)(d,"inverted"),"placeholder",r),f=(0,c.Z)(x,e),m=(0,o.Z)(x,e);return s.createElement(m,(0,t.Z)({},f,{className:h}),u.kK(n)?l:n)}x.handledProps=["as","children","className","content","fluid","inverted"],x.propTypes={},x.Header=p,x.Image=h,x.Line=m,x.Paragraph=g;var v=x}}]);
//# sourceMappingURL=414.a6493e6a.chunk.js.map