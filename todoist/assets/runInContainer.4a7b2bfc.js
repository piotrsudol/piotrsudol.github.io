System.register(["./index.27c5179e.js","single-spa"],function(f){"use strict";var b,R,E;return{setters:[function(s){b=s.R,R=s.a,E=s.A},function(){}],execute:function(){function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(o){B(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function v(t){return(v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){return(y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function C(t,e){var n;if(typeof(n=e.domElement?function(){return e.domElement}:e.domElementGetter?e.domElementGetter:t.domElementGetter?t.domElementGetter:function(o){var r=o.appName||o.name;if(!r)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var a="single-spa-application:".concat(r);return function(){var i=document.getElementById(a);return i||((i=document.createElement("div")).id=a,document.body.appendChild(i)),i}}(e))!="function")throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(e.name,"'. Expected a function, received ").concat(y(n)));return function(){var o=n(e);if(!(o instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(e.name,"'. Expected HTMLElement, received ").concat(y(o)));return o}}var l=null;try{l=require("react").createContext()}catch{}var S={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function D(t){if(v(t)!=="object")throw new Error("single-spa-react requires a configuration object");var e=m(m({},S),t);if(!e.React)throw new Error("single-spa-react must be passed opts.React");if(!e.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!e.rootComponent&&!e.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(e.errorBoundary&&typeof e.errorBoundary!="function")throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&e.React.createContext&&(l=e.React.createContext()),e.SingleSpaRoot=function(o){function r(a){r.displayName="SingleSpaRoot(".concat(a.name,")")}return r.prototype=Object.create(o.React.Component.prototype),r.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},r.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},r.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},r}(e);var n={bootstrap:j.bind(null,e),mount:P.bind(null,e),unmount:T.bind(null,e)};return e.parcelCanUpdate&&(n.update=M.bind(null,e)),n}function j(t,e){return t.rootComponent?Promise.resolve():t.loadRootComponent(e).then(function(n){t.rootComponent=n})}function P(t,e){return new Promise(function(n,o){t.suppressComponentDidCatchWarning||!function(c){if(!(c&&typeof c.version=="string"&&c.version.indexOf(".")>=0))return!1;var u=c.version.slice(0,c.version.indexOf("."));try{return Number(u)>=16}catch{return!1}}(t.React)||t.errorBoundary||(t.rootComponent.prototype?t.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=O(t,e,function(){n(this)}),a=C(t,e)(),i=function(c){var u=c.opts,p=c.elementToRender,h=c.domElement,g=typeof u.renderType=="function"?u.renderType():u.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(g)>=0){var w=u.ReactDOM[g](h);return w.render(p),w}return g==="hydrate"?u.ReactDOM.hydrate(p,h):u.ReactDOM.render(p,h),null}({elementToRender:r,domElement:a,opts:t});t.domElements[e.name]=a,t.renderResults[e.name]=i})}function T(t,e){return new Promise(function(n){t.unmountFinished=n;var o=t.renderResults[e.name];o&&o.unmount?o.unmount():t.ReactDOM.unmountComponentAtNode(t.domElements[e.name]),delete t.domElements[e.name],delete t.renderResults[e.name]})}function M(t,e){return new Promise(function(n){t.updateResolves[e.name]||(t.updateResolves[e.name]=[]),t.updateResolves[e.name].push(n);var o=O(t,e,null),r=t.renderResults[e.name];if(r&&r.render)r.render(o);else{var a=C(t,e)();t.ReactDOM.render(o,a)}})}function O(t,e,n){var o=t.React.createElement(t.rootComponent,e),r=l?t.React.createElement(l.Provider,{value:e},o):o;return(t.errorBoundary||e.errorBoundary||t.errorBoundaryClass||e.errorBoundaryClass)&&(t.errorBoundaryClass=t.errorBoundaryClass||e.errorBoundaryClass||function(a,i){function c(u){a.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},c.displayName="SingleSpaReactErrorBoundary(".concat(u.name,")")}return c.prototype=Object.create(a.React.Component.prototype),c.prototype.render=function(){return this.state.caughtError?(a.errorBoundary||i.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},c.prototype.componentDidCatch=function(u,p){this.setState({caughtError:u,caughtErrorInfo:p})},c}(t,e),r=t.React.createElement(t.errorBoundaryClass,e,r)),r=t.React.createElement(t.SingleSpaRoot,m(m({},e),{},{mountFinished:n,updateFinished:function(){t.updateResolves[e.name]&&(t.updateResolves[e.name].forEach(function(a){return a()}),delete t.updateResolves[e.name])},unmountFinished:function(){setTimeout(t.unmountFinished)}}),r)}const d=D({React:b,ReactDOM:R,rootComponent:E,domElementGetter:N}),x=f("bootstrap",d.bootstrap),F=f("mount",d.mount),G=f("unmount",d.unmount);function N(){return console.info(document,d,document.getElementsByClassName("container-module")),document.getElementsByClassName("container-module")[0]}}}});
