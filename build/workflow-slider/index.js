(()=>{var e={1143:e=>{"use strict";e.exports=function(e,t,n,o,r,i,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},2703:(e,t,n)=>{"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}const o=window.wp.element,r=(window.wp.i18n,window.React),i=window.wp.blockEditor,a=window.wp.components,l=window.wp.serverSideRender;var s=n.n(l);const c=JSON.parse('{"u2":"ink-components/workflow-slider"}');function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}function g(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach((function(t){g(e,t,n[t])}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,p(o.key),o)}}function x(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}const T=window.ReactDOM;var C=n(1143),k=n.n(C);var I=n(5697),R=n.n(I),A=function(){function e(){m(this,e),g(this,"refs",{})}return x(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(D)}}]),e}();function D(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function P(e,t){return Object.keys(e).reduce((function(n,o){return-1===t.indexOf(o)&&(n[o]=e[o]),n}),{})}var N={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},j=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"ms"===t?"ms":t&&t.length?t[0].toUpperCase()+t.substr(1):""}();function M(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function W(e,t){e.style["".concat(j,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function L(e,t){e.style["".concat(j,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function _(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function B(e,t,n){return Math.max(e,Math.min(n,t))}function K(e){return"px"===e.substr(-2)?parseFloat(e):0}function H(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function G(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function F(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var o={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?o:U(e.parentNode,t,o)}}function X(e){var t=e.lockOffset,n=e.width,o=e.height,r=t,i=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);k()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),r=parseFloat(t),i=parseFloat(t),a=l[1]}return k()(isFinite(r)&&isFinite(i),"lockOffset value should be a finite. Given %s",t),"%"===a&&(r=r*n/100,i=i*o/100),{x:r,y:i}}function Y(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:Y(e.parentNode):null}var V={Anchor:"A",Button:"BUTTON",Canvas:"CANVAS",Input:"INPUT",Option:"OPTION",Textarea:"TEXTAREA",Select:"SELECT"};function $(e){return null!=e.sortableHandle}var q=function(){function e(t,n){m(this,e),this.container=t,this.onScrollCallback=n}return x(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,o=e.minTranslate,r=e.maxTranslate,i=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=this.container,u=c.scrollTop,d=c.scrollLeft,f=c.scrollHeight,h=c.scrollWidth,p=0===u,g=f-u-c.clientHeight==0,y=0===d,m=h-d-c.clientWidth==0;n.y>=r.y-a/2&&!g?(l.y=1,s.y=10*Math.abs((r.y-a/2-n.y)/a)):n.x>=r.x-i/2&&!m?(l.x=1,s.x=10*Math.abs((r.x-i/2-n.x)/i)):n.y<=o.y+a/2&&!p?(l.y=-1,s.y=10*Math.abs((n.y-a/2-o.y)/a)):n.x<=o.x+i/2&&!y&&(l.x=-1,s.x=10*Math.abs((n.x-i/2-o.x)/i)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),z={axis:R().oneOf(["x","y","xy"]),contentWindow:R().any,disableAutoscroll:R().bool,distance:R().number,getContainer:R().func,getHelperDimensions:R().func,helperClass:R().string,helperContainer:R().oneOfType([R().func,"undefined"==typeof HTMLElement?R().any:R().instanceOf(HTMLElement)]),hideSortableGhost:R().bool,keyboardSortingTransitionDuration:R().number,lockAxis:R().string,lockOffset:R().oneOfType([R().number,R().string,R().arrayOf(R().oneOfType([R().number,R().string]))]),lockToContainerEdges:R().bool,onSortEnd:R().func,onSortMove:R().func,onSortOver:R().func,onSortStart:R().func,pressDelay:R().number,pressThreshold:R().number,keyCodes:R().shape({lift:R().arrayOf(R().number),drop:R().arrayOf(R().number),cancel:R().arrayOf(R().number),up:R().arrayOf(R().number),down:R().arrayOf(R().number)}),shouldCancelStart:R().func,transitionDuration:R().number,updateBeforeSortStart:R().func,useDragHandle:R().bool,useWindowAsScrollContainer:R().bool},J={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},Q={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:J,shouldCancelStart:function(e){return-1!==[V.Input,V.Textarea,V.Select,V.Option,V.Button].indexOf(e.target.tagName)||!!_(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},Z=Object.keys(z),ee=(0,r.createContext)({manager:{}}),te={index:R().number.isRequired,collection:R().oneOfType([R().number,R().string]),disabled:R().bool},ne=Object.keys(te);const oe=function(e){var n,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return o=n=function(n){function o(e){var t;m(this,o),g(w(w(t=b(this,S(o).call(this,e)))),"state",{}),g(w(w(t)),"handleStart",(function(e){var n=t.props,o=n.distance,r=n.shouldCancelStart;if(2!==e.button&&!r(e)){t.touched=!0,t.position=F(e);var i=_(e.target,(function(e){return null!=e.sortableInfo}));if(i&&i.sortableInfo&&t.nodeIsChild(i)&&!t.state.sorting){var a=t.props.useDragHandle,l=i.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!_(e.target,$))return;t.manager.active={collection:c,index:s},function(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}(e)||e.target.tagName!==V.Anchor||e.preventDefault(),o||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),g(w(w(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),g(w(w(t)),"handleMove",(function(e){var n=t.props,o=n.distance,r=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var i=F(e),a={x:t.position.x-i.x,y:t.position.y-i.y},l=Math.abs(a.x)+Math.abs(a.y);t.delta=a,o||r&&!(l>=r)?o&&l>=o&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),g(w(w(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),g(w(w(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),g(w(w(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),o=function(){if(n){var o=function(){var n,o,r,c,v,x,w,b=p.sortableInfo.index,S=(n=p,{bottom:K((o=window.getComputedStyle(n)).marginBottom),left:K(o.marginLeft),right:K(o.marginRight),top:K(o.marginTop)}),O=function(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:K(t.gridColumnGap),y:K(t.gridRowGap)}:{x:0,y:0}}(t.container),E=t.scrollContainer.getBoundingClientRect(),T=a({index:b,node:p,collection:g});if(t.node=p,t.margin=S,t.gridGap=O,t.width=T.width,t.height=T.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=p.getBoundingClientRect(),t.containerBoundingRect=E,t.index=b,t.newIndex=b,t.axis={x:i.indexOf("x")>=0,y:i.indexOf("y")>=0},t.offsetEdge=U(p,t.container),t.initialOffset=F(m?y({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild((c="input, textarea, select, canvas, [contenteditable]",v=(r=p).querySelectorAll(c),(w=(x=r.cloneNode(!0)).querySelectorAll(c),function(e){if(Array.isArray(e))return u(e)}(w)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(w)||d(w)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){"file"!==e.type&&(e.value=v[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),e.tagName===V.Canvas&&v[t].width>0&&v[t].height>0&&e.getContext("2d").drawImage(v[t],0,0)})),x)),M(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-S.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-S.top,"px"),width:"".concat(t.width,"px")}),m&&t.helper.focus(),s&&(t.sortableGhost=p,M(p,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},m){var C=h?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,k=C.top,I=C.left,R=C.width,A=k+C.height,D=I+R;t.axis.x&&(t.minTranslate.x=I-t.boundingClientRect.left,t.maxTranslate.x=D-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=k-t.boundingClientRect.top,t.maxTranslate.y=A-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(h?0:E.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(h?t.contentWindow.innerWidth:E.left+E.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(h?0:E.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(h?t.contentWindow.innerHeight:E.top+E.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?e.target:t.contentWindow,m?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(N.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),N.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:b}),f&&f({node:p,index:b,collection:g,isKeySorting:m,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),m&&t.keyMove(0)},r=t.props,i=r.axis,a=r.getHelperDimensions,l=r.helperClass,s=r.hideSortableGhost,c=r.updateBeforeSortStart,f=r.onSortStart,h=r.useWindowAsScrollContainer,p=n.node,g=n.collection,m=t.manager.isKeySorting,v=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=function(t,n){try{var o=(r=p.sortableInfo.index,Promise.resolve(c({collection:g,index:r,node:p,isKeySorting:m},e)).then((function(){})))}catch(e){return n(!0,e)}var r;return o&&o.then?o.then(n.bind(null,!1),n.bind(null,!0)):n(!1,value)}(0,(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return v&&v.then?v.then(o):o()}}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),g(w(w(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),g(w(w(t)),"handleSortEnd",(function(e){var n=t.props,o=n.hideSortableGhost,r=n.onSortEnd,i=t.manager,a=i.active.collection,l=i.isKeySorting,s=t.manager.getOrderedRefs();t.listenerNode&&(l?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(N.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),N.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),o&&t.sortableGhost&&M(t.sortableGhost,{opacity:"",visibility:""});for(var c=0,u=s.length;c<u;c++){var d=s[c],f=d.node;d.edgeOffset=null,d.boundingClientRect=null,W(f,null),L(f,null),d.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof r&&r({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:l,nodes:s},e),t.touched=!1})),g(w(w(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var o=y({},t.translate),r=0,i=0;return t.axis.x&&(o.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),r=t.translate.x-o.x),t.axis.y&&(o.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),i=t.translate.y-o.y),t.translate=o,W(t.helper,t.translate),t.scrollContainer.scrollLeft+=r,void(t.scrollContainer.scrollTop+=i)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),g(w(w(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),g(w(w(t)),"handleKeyDown",(function(e){var n=e.keyCode,o=t.props,r=o.shouldCancelStart,i=o.keyCodes,a=y({},J,void 0===i?{}:i);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||a.lift.includes(n)&&!r(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(n)&&!t.manager.active?t.keyLift(e):a.drop.includes(n)&&t.manager.active?t.keyDrop(e):a.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):a.up.includes(n)?t.keyMove(-1):a.down.includes(n)&&t.keyMove(1))})),g(w(w(t)),"keyLift",(function(e){var n=e.target,o=_(n,(function(e){return null!=e.sortableInfo})).sortableInfo,r=o.index,i=o.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:r,collection:i},t.handlePress(e)})),g(w(w(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),o=n[n.length-1].node.sortableInfo.index,r=t.newIndex+e,i=t.newIndex;if(!(r<0||r>o)){t.prevIndex=i,t.newIndex=r;var a=function(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}(t.newIndex,t.prevIndex,t.index),l=n.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=t.containerScrollDelta,u=l.boundingClientRect||G(s,c),d=l.translate||{x:0,y:0},f=u.top+d.y-c.top,h=u.left+d.x-c.left,p=i<r,g=p&&t.axis.x?s.offsetWidth-t.width:0,y=p&&t.axis.y?s.offsetHeight-t.height:0;t.handleSortMove({pageX:h+g,pageY:f+y,ignoreTransition:0===e})}})),g(w(w(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),g(w(w(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),g(w(w(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,o=e.target,r=_(o,(function(e){return null!=e.sortableInfo}));return r&&r.sortableInfo&&!r.sortableInfo.disabled&&(n?$(o):o.sortableInfo)}));var n=new A;return function(e){k()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}(e),t.manager=n,t.wrappedInstance=(0,r.createRef)(),t.sortableContextValue={manager:n},t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return E(o,n),x(o,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var o=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof o?o():o,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:Y(e.container)||e.container,e.autoScroller=new q(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return N[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return N[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,o=t.lockOffset,r=t.lockToContainerEdges,i=t.transitionDuration,a=t.keyboardSortingTransitionDuration,l=void 0===a?i:a,s=this.manager.isKeySorting,c=e.ignoreTransition,u=F(e),d={x:u.x-this.initialOffset.x,y:u.y-this.initialOffset.y};if(d.y-=window.pageYOffset-this.initialWindowScroll.top,d.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=d,r){var h=function(e){var t=e.height,n=e.width,o=e.lockOffset,r=Array.isArray(o)?o:[o,o];k()(2===r.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",o);var i=f(r,2),a=i[0],l=i[1];return[X({height:t,lockOffset:a,width:n}),X({height:t,lockOffset:l,width:n})]}({height:this.height,lockOffset:o,width:this.width}),p=f(h,2),g=p[0],y=p[1],m={x:this.width/2-g.x,y:this.height/2-g.y},v={x:this.width/2-y.x,y:this.height/2-y.y};d.x=B(this.minTranslate.x+m.x,this.maxTranslate.x-v.x,d.x),d.y=B(this.minTranslate.y+m.y,this.maxTranslate.y-v.y,d.y)}"x"===n?d.y=0:"y"===n&&(d.x=0),s&&l&&!c&&L(this.helper,l),W(this.helper,d)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,o=e.onSortOver,r=this.containerScrollDelta,i=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+r.left,s=this.offsetEdge.top+this.translate.y+r.top,c=this.manager.isKeySorting,u=this.newIndex;this.newIndex=null;for(var d=0,f=a.length;d<f;d++){var h=a[d].node,p=h.sortableInfo.index,g=h.offsetWidth,y=h.offsetHeight,m={height:this.height>y?y/2:this.height/2,width:this.width>g?g/2:this.width/2},v=c&&p>this.index&&p<=u,x=c&&p<this.index&&p>=u,w={x:0,y:0},b=a[d].edgeOffset;b||(b=U(h,this.container),a[d].edgeOffset=b,c&&(a[d].boundingClientRect=G(h,r)));var S=d<a.length-1&&a[d+1],O=d>0&&a[d-1];S&&!S.edgeOffset&&(S.edgeOffset=U(S.node,this.container),c&&(S.boundingClientRect=G(S.node,r))),p!==this.index?(t&&L(h,t),this.axis.x?this.axis.y?x||p<this.index&&(l+i.left-m.width<=b.left&&s+i.top<=b.top+m.height||s+i.top+m.height<=b.top)?(w.x=this.width+this.marginOffset.x,b.left+w.x>this.containerBoundingRect.width-m.width&&S&&(w.x=S.edgeOffset.left-b.left,w.y=S.edgeOffset.top-b.top),null===this.newIndex&&(this.newIndex=p)):(v||p>this.index&&(l+i.left+m.width>=b.left&&s+i.top+m.height>=b.top||s+i.top+m.height>=b.top+y))&&(w.x=-(this.width+this.marginOffset.x),b.left+w.x<this.containerBoundingRect.left+m.width&&O&&(w.x=O.edgeOffset.left-b.left,w.y=O.edgeOffset.top-b.top),this.newIndex=p):v||p>this.index&&l+i.left+m.width>=b.left?(w.x=-(this.width+this.marginOffset.x),this.newIndex=p):(x||p<this.index&&l+i.left<=b.left+m.width)&&(w.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(v||p>this.index&&s+i.top+m.height>=b.top?(w.y=-(this.height+this.marginOffset.y),this.newIndex=p):(x||p<this.index&&s+i.top<=b.top+m.height)&&(w.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),W(h,w),a[d].translate=w):n&&(this.sortableGhost=h,M(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=u);var E=c?this.prevIndex:u;o&&this.newIndex!==E&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:E,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return k()(i.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,T.findDOMNode)(this):e(i.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var n=i.withRef?this.wrappedInstance:null;return(0,r.createElement)(ee.Provider,{value:this.sortableContextValue},(0,r.createElement)(e,t({ref:n},P(this.props,Z))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),o}(r.Component),g(n,"displayName",H("sortableList",e)),g(n,"defaultProps",Q),g(n,"propTypes",z),o}((({items:e,render:t,setAttributes:n})=>e?.length?(0,o.createElement)("ul",null,e.map(((o,r)=>t({value:o,sortIndex:r,index:r,items:e,setAttributes:n})))):(0,o.createElement)(o.Fragment,null))),re=({items:e,name:t,placeholder:n,render:r,setAttributes:i})=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(oe,{items:e,setAttributes:i,onSortEnd:({oldIndex:n,newIndex:o})=>{const r={};var a,l,s;r[t]=(a=e,l=n,s=o,function(e,t,n){const o=t<0?e.length+t:t;if(o>=0&&o<e.length){const o=n<0?e.length+n:n,[r]=e.splice(t,1);e.splice(o,0,r)}}(a=[...a],l,s),a),e=r[t],i({...r}),console.log(r,e)},render:r}),(0,o.createElement)(a.Button,{variant:"primary",onClick:o=>{const r={};r[t]=[...e],r[t].push(n),i(r),console.log(r,e)}},"Add Element")),{useState:ie,useEffect:ae}=wp.element,le=function(e){var n,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return o=n=function(n){function o(){var e,t;m(this,o);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return g(w(w(t=b(this,(e=S(o)).call.apply(e,[this].concat(i))))),"wrappedInstance",(0,r.createRef)()),t}return E(o,n),x(o,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,o=e.index,r=(0,T.findDOMNode)(this);r.sortableInfo={collection:t,disabled:n,index:o,manager:this.context.manager},this.node=r,this.ref={node:r},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return k()(i.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var n=i.withRef?this.wrappedInstance:null;return(0,r.createElement)(e,t({ref:n},P(this.props,ne)))}}]),o}(r.Component),g(n,"displayName",H("sortableElement",e)),g(n,"contextType",ee),g(n,"propTypes",te),g(n,"defaultProps",{collection:0}),o}((({sortIndex:e,value:t,items:n,setAttributes:r,name:i})=>{const[l,s]=ie(t);ae((()=>{s(n[e])}),[n]);const c=(e,t)=>{const o=[...n];o[t]={...o[t],...e},console.log("on change"),r({[i]:o})};return(0,o.createElement)(a.Flex,null,(0,o.createElement)(a.FlexItem,null,(0,o.createElement)(a.TextControl,{label:`Title ${e}`,value:l.title,onChange:e=>{s(e)},onBlur:t=>{c({title:t.target.value},e)},onKeyDown:t=>{console.log(t),"Enter"===t.key&&c({title:t.target.value},e)}}),(0,o.createElement)(a.TextareaControl,{label:`Content ${e}`,value:l.content,onChange:e=>{s(e)},onBlur:t=>{c({content:t.target.value},e)},onKeyDown:t=>{console.log(t),"Enter"===t.key&&c({content:t.target.value},e)}})),(0,o.createElement)(a.FlexItem,null,(0,o.createElement)(a.Button,{variant:"secondary",onClick:t=>(e=>{const t=[...n];t.splice(e,1),r({[i]:t})})(e)},"-")))}));(0,e.registerBlockType)(c.u2,{edit:function({attributes:e,setAttributes:n}){const{workflows:r,title:l}=e;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.InspectorControls,{key:"setting"},(0,o.createElement)(a.Panel,null,(0,o.createElement)(a.PanelBody,{title:"Title",initialOpen:!0},(0,o.createElement)("ul",null,(0,o.createElement)("li",null,(0,o.createElement)(a.TextControl,{label:"Title",value:l||"",onChange:e=>n({title:e})})))),(0,o.createElement)(a.PanelBody,{title:"Workflows",initialOpen:!0},(0,o.createElement)(re,{items:r,name:"workflows",placeholder:{name:"Name",content:"Content"},setAttributes:n,render:e=>(0,o.createElement)(le,t({},e,{name:"workflows",key:`workflow-${e.index}`}))})))),(0,o.createElement)("div",(0,i.useBlockProps)(),(0,o.createElement)(s(),{block:c.u2,attributes:e})))}})})()})();