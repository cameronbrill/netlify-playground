(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,t,r){"use strict";r.r(t);r(38),r(21),r(27),r(28),r(13),r(50);var n=r(0),a=r.n(n),o=r(189),i=(r(65),r(87),r(29),r(52)),c=r.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(p(t)),t.handleErrored=t.handleErrored.bind(p(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(p(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(e)},5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",s({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:c.a.string.isRequired,onChange:c.a.func,grecaptcha:c.a.object,theme:c.a.oneOf(["dark","light"]),type:c.a.oneOf(["image","audio"]),tabindex:c.a.number,onExpired:c.a.func,onErrored:c.a.func,size:c.a.oneOf(["compact","normal","invisible"]),stoken:c.a.string,hl:c.a.string,badge:c.a.oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d=r(202),u=r.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h={},m=0;function y(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}var g,b,v="onloadcallback",w=y(),E=(g=function(){var e=y(),t=e.lang?"&hl="+e.lang:"";return"https://"+(e.useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+v+"&render=explicit"+t},b=(b={callbackName:v,globalName:"grecaptcha",removeOnUnmount:w.removeOnUnmount||!1})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,a;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}a=t,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof g?g():g,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[b.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=b,a=n.globalName,o=n.callbackName,i=n.scriptId;if(a&&void 0!==window[a]&&(h[t]={loaded:!0,observers:{}}),h[t]){var c=h[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:s};var p=document.createElement("script");p.src=t,p.async=!0,i&&(p.id=i);var l=function(e){if(h[t]){var r=h[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!=typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=h[t];e&&(e.loaded=!0,l(function(t){return!o&&(t(e),!0)}))},p.onerror=function(){var e=h[t];e&&(e.errored=!0,l(function(t){return t(e),!0}))},document.body.appendChild(p)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===b.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=h[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===b.removeOnUnmount&&delete h[e])},i.render=function(){var t=b.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(o[t]=void 0!==window[t]?window[t]:void 0),o.ref=a,Object(n.createElement)(e,o)},o}(n.Component),a=Object(n.forwardRef)(function(e,t){return Object(n.createElement)(r,f({},e,{forwardedRef:t}))});return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:c.a.func},u()(a,e)})(l),S=r(190);r.d(t,"default",function(){return _});var O={}.GATSBY_SITE_RECAPTCHA_KEY;if(console.log(O),void 0===O)throw new Error("\n  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! \n  You probably forget to set it in your Netlify build environment variables. \n  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings\n  Note this demo is specifically for Recaptcha v2\n  ");function _(){var e=a.a.useState({}),t=e[0],r=e[1],n=a.a.createRef(),i=function(e){var n;r(Object.assign({},t,((n={})[e.target.name]=e.target.value,n)))};return a.a.createElement(S.a,null,a.a.createElement("h1",null,"reCAPTCHA 2"),a.a.createElement("form",{name:"contact-recaptcha",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-recaptcha":"true",onSubmit:function(e){e.preventDefault();var r,a=e.target,i=n.current.getValue();fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(r=Object.assign({"form-name":a.getAttribute("name"),"g-recaptcha-response":i},t),Object.keys(r).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])}).join("&"))}).then(function(){return Object(o.b)(a.getAttribute("action"))}).catch(function(e){return alert(e)})}},a.a.createElement("noscript",null,a.a.createElement("p",null,"This form won’t work with Javascript disabled")),a.a.createElement("p",null,a.a.createElement("label",null,"Your name:",a.a.createElement("br",null),a.a.createElement("input",{type:"text",name:"name",onChange:i}))),a.a.createElement("p",null,a.a.createElement("label",null,"Your email:",a.a.createElement("br",null),a.a.createElement("input",{type:"email",name:"email",onChange:i}))),a.a.createElement("p",null,a.a.createElement("label",null,"Message:",a.a.createElement("br",null),a.a.createElement("textarea",{name:"message",onChange:i}))),a.a.createElement("p",null,a.a.createElement("label",null,"File:",a.a.createElement("br",null),a.a.createElement("input",{type:"file",name:"attachment",onChange:function(e){var n;r(Object.assign({},t,((n={})[e.target.name]=e.target.files[0],n)))}}))),a.a.createElement(E,{ref:n,sitekey:O}),a.a.createElement("p",null,a.a.createElement("button",{type:"submit"},"Send"))))}},188:function(e,t,r){var n;e.exports=(n=r(191))&&n.default||n},189:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(63),i=r.n(o);r.d(t,"a",function(){return i.a}),r.d(t,"b",function(){return o.navigate});r(188),r(7).default.enqueue,a.a.createContext({})},190:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(0),a=r.n(n),o=r(189),i=r(192);r(193),r(194);function c(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(i.Helmet,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Gatsby + Netlify Forms")))),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))}},191:function(e,t,r){"use strict";r.r(t);r(21);var n=r(0),a=r.n(n),o=r(88);t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null}},202:function(e,t,r){"use strict";r(39),r(14);var n=r(203),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var p=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var a=f(r);a&&a!==h&&e(t,a,n)}var i=l(r);d&&(i=i.concat(d(r)));for(var c=s(t),m=s(r),y=0;y<i.length;++y){var g=i[y];if(!(o[g]||n&&n[g]||m&&m[g]||c&&c[g])){var b=u(r,g);try{p(t,g,b)}catch(v){}}}return t}return t}},203:function(e,t,r){"use strict";e.exports=r(204)},204:function(e,t,r){"use strict";r(53),r(39),r(14),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case u:case i:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case f:case p:return e;default:return t}}case y:case m:case o:return t}}}function b(e){return g(e)===u}t.typeOf=g,t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=p,t.Element=a,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===s||e===c||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===p||e.$$typeof===l||e.$$typeof===f)},t.isAsyncMode=function(e){return b(e)||g(e)===d},t.isConcurrentMode=b,t.isContextConsumer=function(e){return g(e)===l},t.isContextProvider=function(e){return g(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===h}}}]);
//# sourceMappingURL=component---src-pages-recaptcha-js-99fa8b38ce0b8cb65414.js.map