"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{9128:function(t,e,r){r.d(e,{siY:function(){return h}});var n=r(2791),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=n.createContext&&n.createContext(s),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},i.apply(this,arguments)},o=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]])}return r};function a(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),a(t.child))}))}function l(t){return function(e){return n.createElement(c,i({attr:i({},t.attr)},e),a(t.child))}}function c(t){var e=function(e){var r,s=t.attr,u=t.size,a=t.title,l=o(t,["attr","size","title"]),c=u||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,s,l,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),t.children)};return void 0!==u?n.createElement(u.Consumer,null,(function(t){return e(t)})):e(s)}function h(t){return l({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}},3418:function(t,e,r){r.d(e,{D:function(){return b}});var n=r(1413),s=r(9439),u=r(2791),i=r(7413),o=r(5671),a=r(3144),l=r(136),c=r(7277),h=r(9054),f=r(9538),v=r(5511),d=r(3734),p=function(t){(0,l.Z)(r,t);var e=(0,c.Z)(r);function r(t,n){var s;return(0,o.Z)(this,r),(s=e.call(this)).client=t,s.setOptions(n),s.bindMethods(),s.updateResult(),s}return(0,a.Z)(r,[{key:"bindMethods",value:function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}},{key:"setOptions",value:function(t){var e=this.options;this.options=this.client.defaultMutationOptions(t),(0,d.VS)(e,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}},{key:"onUnsubscribe",value:function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))}},{key:"onMutationUpdate",value:function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"reset",value:function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}},{key:"mutate",value:function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,(0,n.Z)((0,n.Z)({},this.options),{},{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()}},{key:"updateResult",value:function(){var t=this.currentMutation?this.currentMutation.state:(0,h.R)(),e=(0,n.Z)((0,n.Z)({},t),{},{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset});this.currentResult=e}},{key:"notify",value:function(t){var e=this;f.V.batch((function(){var r,n,s,u;if(e.mutateOptions&&e.hasListeners())if(t.onSuccess)null==(r=(n=e.mutateOptions).onSuccess)||r.call(n,e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==(s=(u=e.mutateOptions).onSettled)||s.call(u,e.currentResult.data,null,e.currentResult.variables,e.currentResult.context);else if(t.onError){var i,o,a,l;null==(i=(o=e.mutateOptions).onError)||i.call(o,e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==(a=(l=e.mutateOptions).onSettled)||a.call(l,void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context)}t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))}}]),r}(v.l),m=r(6403),y=r(9608);function b(t,e,r){var o=(0,d.lV)(t,e,r),a=(0,m.NL)({context:o.context}),l=u.useState((function(){return new p(a,o)})),c=(0,s.Z)(l,1)[0];u.useEffect((function(){c.setOptions(o)}),[c,o]);var h=(0,i.$)(u.useCallback((function(t){return c.subscribe(f.V.batchCalls(t))}),[c]),(function(){return c.getCurrentResult()}),(function(){return c.getCurrentResult()})),v=u.useCallback((function(t,e){c.mutate(t,e).catch(O)}),[c]);if(h.error&&(0,y.L)(c.options.useErrorBoundary,[h.error]))throw h.error;return(0,n.Z)((0,n.Z)({},h),{},{mutate:v,mutateAsync:h.mutate})}function O(){}}}]);
//# sourceMappingURL=986.b752de19.chunk.js.map