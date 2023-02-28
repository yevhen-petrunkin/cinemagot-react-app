"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[404],{4925:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}r.d(t,{Z:function(){return n}})},8404:function(e,t,r){r.d(t,{a:function(){return w}});var n=r(1413),s=r(4925),i=r(5671),u=r(3144),o=r(136),a=r(7277),c=r(3734),l=r(9538),h=r(1771),d=r(5511),f=r(3075),p=["refetchPage"],v=function(e){(0,o.Z)(r,e);var t=(0,a.Z)(r);function r(e,n){var s;return(0,i.Z)(this,r),(s=t.call(this)).client=e,s.options=n,s.trackedProps=new Set,s.selectError=null,s.bindMethods(),s.setOptions(n),s}return(0,u.Z)(r,[{key:"bindMethods",value:function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}},{key:"onSubscribe",value:function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),y(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}},{key:"onUnsubscribe",value:function(){this.listeners.length||this.destroy()}},{key:"shouldFetchOnReconnect",value:function(){return R(this.currentQuery,this.options,this.options.refetchOnReconnect)}},{key:"shouldFetchOnWindowFocus",value:function(){return R(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}},{key:"destroy",value:function(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}},{key:"setOptions",value:function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,c.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&b(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();var i=this.computeRefetchInterval();!s||this.currentQuery===n&&this.options.enabled===r.enabled&&i===this.currentRefetchInterval||this.updateRefetchInterval(i)}},{key:"getOptimisticResult",value:function(e){var t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"trackResult",value:function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){return t.trackedProps.add(n),e[n]}})})),r}},{key:"getCurrentQuery",value:function(){return this.currentQuery}},{key:"remove",value:function(){this.client.getQueryCache().remove(this.currentQuery)}},{key:"refetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refetchPage,r=(0,s.Z)(e,p);return this.fetch((0,n.Z)((0,n.Z)({},r),{},{meta:{refetchPage:t}}))}},{key:"fetchOptimistic",value:function(e){var t=this,r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then((function(){return t.createResult(n,r)}))}},{key:"fetch",value:function(e){var t,r=this;return this.executeFetch((0,n.Z)((0,n.Z)({},e),{},{cancelRefetch:null==(t=e.cancelRefetch)||t})).then((function(){return r.updateResult(),r.currentResult}))}},{key:"executeFetch",value:function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(c.ZT)),t}},{key:"updateStaleTimeout",value:function(){var e=this;if(this.clearStaleTimeout(),!c.sk&&!this.currentResult.isStale&&(0,c.PN)(this.options.staleTime)){var t=(0,c.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}}},{key:"computeRefetchInterval",value:function(){var e;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}},{key:"updateRefetchInterval",value:function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!c.sk&&!1!==this.options.enabled&&(0,c.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||h.j.isFocused())&&t.executeFetch()}),this.currentRefetchInterval))}},{key:"updateTimers",value:function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}},{key:"clearStaleTimeout",value:function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}},{key:"clearRefetchInterval",value:function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}},{key:"createResult",value:function(e,t){var r,n=this.currentQuery,s=this.options,i=this.currentResult,u=this.currentResultState,o=this.currentResultOptions,a=e!==n,l=a?e.state:this.currentQueryInitialState,h=a?this.currentResult:this.previousQueryResult,d=e.state,p=d.dataUpdatedAt,v=d.error,R=d.errorUpdatedAt,k=d.fetchStatus,S=d.status,g=!1,Q=!1;if(t._optimisticResults){var O=this.hasListeners(),I=!O&&y(e,t),E=O&&b(e,n,t,s);(I||E)&&(k=(0,f.Kw)(e.options.networkMode)?"fetching":"paused",p||(S="loading")),"isRestoring"===t._optimisticResults&&(k="idle")}if(t.keepPreviousData&&!d.dataUpdatedAt&&null!=h&&h.isSuccess&&"error"!==S)r=h.data,p=h.dataUpdatedAt,S=h.status,g=!0;else if(t.select&&"undefined"!==typeof d.data)if(i&&d.data===(null==u?void 0:u.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(d.data),r=(0,c.oE)(null==i?void 0:i.data,r,t),this.selectResult=r,this.selectError=null}catch(F){0,this.selectError=F}else r=d.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===S){var C;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==o?void 0:o.placeholderData))C=i.data;else if(C="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof C)try{C=t.select(C),this.selectError=null}catch(F){0,this.selectError=F}"undefined"!==typeof C&&(S="success",r=(0,c.oE)(null==i?void 0:i.data,C,t),Q=!0)}this.selectError&&(v=this.selectError,r=this.selectResult,R=Date.now(),S="error");var T="fetching"===k,U="loading"===S,w="error"===S;return{status:S,fetchStatus:k,isLoading:U,isSuccess:"success"===S,isError:w,isInitialLoading:U&&T,data:r,dataUpdatedAt:p,error:v,errorUpdatedAt:R,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>l.dataUpdateCount||d.errorUpdateCount>l.errorUpdateCount,isFetching:T,isRefetching:T&&!U,isLoadingError:w&&0===d.dataUpdatedAt,isPaused:"paused"===k,isPlaceholderData:Q,isPreviousData:g,isRefetchError:w&&0!==d.dataUpdatedAt,isStale:m(e,t),refetch:this.refetch,remove:this.remove}}},{key:"updateResult",value:function(e){var t=this,r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!(0,c.VS)(s,r)){this.currentResult=s;var i={cache:!0};!1!==(null==e?void 0:e.listeners)&&function(){if(!r)return!0;var e=t.options.notifyOnChangeProps;if("all"===e||!e&&!t.trackedProps.size)return!0;var n=new Set(null!=e?e:t.trackedProps);return t.options.useErrorBoundary&&n.add("error"),Object.keys(t.currentResult).some((function(e){var s=e;return t.currentResult[s]!==r[s]&&n.has(s)}))}()&&(i.listeners=!0),this.notify((0,n.Z)((0,n.Z)({},i),e))}}},{key:"updateQuery",value:function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}}},{key:"onQueryUpdate",value:function(e){var t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,f.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}},{key:"notify",value:function(e){var t=this;l.V.batch((function(){var r,n,s,i;if(e.onSuccess)null==(r=(n=t.options).onSuccess)||r.call(n,t.currentResult.data),null==(s=(i=t.options).onSettled)||s.call(i,t.currentResult.data,null);else if(e.onError){var u,o,a,c;null==(u=(o=t.options).onError)||u.call(o,t.currentResult.error),null==(a=(c=t.options).onSettled)||a.call(c,void 0,t.currentResult.error)}e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))}}]),r}(d.l);function y(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&R(e,t,t.refetchOnMount)}function R(e,t,r){if(!1!==t.enabled){var n="function"===typeof r?r(e):r;return"always"===n||!1!==n&&m(e,t)}return!1}function b(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&m(e,r)}function m(e,t){return e.isStaleByTime(t.staleTime)}var k=r(9439),S=r(2791),g=r(7248).useSyncExternalStore;function Q(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var O=S.createContext(Q()),I=r(6403),E=S.createContext(!1),C=(E.Provider,r(3433));var T=function(e){var t,r,n=e.result,s=e.errorResetBoundary,i=e.useErrorBoundary,u=e.query;return n.isError&&!s.isReset()&&!n.isFetching&&(t=i,r=[n.error,u],"function"===typeof t?t.apply(void 0,(0,C.Z)(r)):!!t)};function U(e,t){var r=(0,I.NL)({context:e.context}),n=S.useContext(E),s=S.useContext(O),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=l.V.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=l.V.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=l.V.batchCalls(i.onSettled)),function(e){e.suspense&&"number"!==typeof e.staleTime&&(e.staleTime=1e3)}(i),function(e,t){(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))}(i,s),function(e){S.useEffect((function(){e.clearReset()}),[e])}(s);var u=S.useState((function(){return new t(r,i)})),o=(0,k.Z)(u,1)[0],a=o.getOptimisticResult(i);if(g(S.useCallback((function(e){return n?function(){}:o.subscribe(l.V.batchCalls(e))}),[o,n]),(function(){return o.getCurrentResult()}),(function(){return o.getCurrentResult()})),S.useEffect((function(){o.setOptions(i,{listeners:!1})}),[i,o]),function(e,t,r){return(null==e?void 0:e.suspense)&&function(e,t){return e.isLoading&&e.isFetching&&!t}(t,r)}(i,a,n))throw function(e,t,r){return t.fetchOptimistic(e).then((function(t){var r=t.data;null==e.onSuccess||e.onSuccess(r),null==e.onSettled||e.onSettled(r,null)})).catch((function(t){r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)}))}(i,o,s);if(T({result:a,errorResetBoundary:s,useErrorBoundary:i.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return i.notifyOnChangeProps?a:o.trackResult(a)}function w(e,t,r){return U((0,c._v)(e,t,r),v)}}}]);
//# sourceMappingURL=404.55150d31.chunk.js.map