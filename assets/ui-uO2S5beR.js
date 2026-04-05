var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),V=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),b=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function y(e,t,n){this.props=e,this.context=t,this.refs=M,this.updater=n||$}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=y.prototype;function C(e,t,n){this.props=e,this.context=t,this.refs=M,this.updater=n||$}var w=C.prototype=new O;w.constructor=C;j(w,y.prototype);w.isPureReactComponent=!0;var x=Array.isArray,P=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var u,o={},l=null,s=null;if(t!=null)for(u in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)P.call(t,u)&&!A.hasOwnProperty(u)&&(o[u]=t[u]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(u in i=e.defaultProps,i)o[u]===void 0&&(o[u]=i[u]);return{$$typeof:d,type:e,key:l,ref:s,props:o,_owner:S.current}}function Q(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function g(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var E=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function m(e,t,n,u,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case d:case V:s=!0}}if(s)return s=e,o=o(s),e=u===""?"."+_(s,0):u,x(o)?(n="",e!=null&&(n=e.replace(E,"$&/")+"/"),m(o,t,n,"",function(a){return a})):o!=null&&(g(o)&&(o=Q(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(s=0,u=u===""?".":u+":",x(e))for(var i=0;i<e.length;i++){l=e[i];var c=u+_(l,i);s+=m(l,t,n,c,o)}else if(c=J(e),typeof c=="function")for(e=c.call(e),i=0;!(l=e.next()).done;)l=l.value,c=u+_(l,i++),s+=m(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function h(e,t,n){if(e==null)return e;var u=[],o=0;return m(e,u,"","",function(l){return t.call(n,l,o++)}),u}function Y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},v={transition:null},ee={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:v,ReactCurrentOwner:S};function q(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:h,forEach:function(e,t,n){h(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=y;r.Fragment=D;r.Profiler=F;r.PureComponent=C;r.StrictMode=N;r.Suspense=G;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;r.act=q;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=j({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=S.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)P.call(t,c)&&!A.hasOwnProperty(c)&&(u[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){i=Array(c);for(var a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}return{$$typeof:d,type:e.type,key:o,ref:l,props:u,_owner:s}};r.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U,_context:e},e.Consumer=e};r.createElement=L;r.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:W,render:e}};r.isValidElement=g;r.lazy=function(e){return{$$typeof:Z,_payload:{_status:-1,_result:e},_init:Y}};r.memo=function(e,t){return{$$typeof:K,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};r.unstable_act=q;r.useCallback=function(e,t){return f.current.useCallback(e,t)};r.useContext=function(e){return f.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return f.current.useDeferredValue(e)};r.useEffect=function(e,t){return f.current.useEffect(e,t)};r.useId=function(){return f.current.useId()};r.useImperativeHandle=function(e,t,n){return f.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return f.current.useMemo(e,t)};r.useReducer=function(e,t,n){return f.current.useReducer(e,t,n)};r.useRef=function(e){return f.current.useRef(e)};r.useState=function(e){return f.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return f.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return f.current.useTransition()};r.version="18.3.1";R.exports=r;var k=R.exports;const oe=B(k);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const n=k.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:i="",children:c,...a},I)=>k.createElement("svg",{ref:I,...te,width:o,height:o,stroke:u,strokeWidth:s?Number(l)*24/Number(o):l,className:["lucide",`lucide-${re(e)}`,i].join(" "),...a},[...t.map(([z,T])=>k.createElement(z,T)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=p("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=p("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=p("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=p("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=p("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.375.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=p("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);export{ue as B,fe as C,ae as M,pe as P,oe as R,ye as S,se as a,ie as b,ne as c,ce as d,le as e,B as g,k as r};
//# sourceMappingURL=ui-uO2S5beR.js.map
