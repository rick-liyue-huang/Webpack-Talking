(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, _) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ui; });
function ui() {
  $('body').css('background', _.join(['blue'], ''));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// import Header from './header';
// import Content from './content';
// import avatar from './avatar.jpg';
// import createAvatar from './createAvatar';
// import style from './index.scss'; // css modulation
// import './index.scss';
// ---------  css modulation in style loader ---------
// createAvatar();
// var img = new Image();
// img.src = avatar;
// // css modulation: let 
// img.classList.add(style.avatar);
// var root = document.getElementById('root');
// root.append(img);
// console.log(avatar);
// ------------ .js loader ---------
// new Header();
// new Content();
// -----------  font loader ----------
// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont iconicon_add">abc</div>';
// console.log('hello world -- Rick!!!!');
// ---- hot module replacement -----
// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = 'Click';
// document.body.appendChild(btn);
// btn.onclick = function() {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div);
// }
// import counter from './counter';
// import number from './number';
// counter();
// number();
// // only hope the module no change by the other module change.
// if(module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'));
//     number();
//   })
// }
// ----- es6 ------
// for some common code use...
// import "@babel/polyfill";
// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {})
// ];
// arr.map((item) => {
//   console.log(item);
// });
// ---- react loader ------
// import "@babel/polyfill";
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// class App extends Component {
//   render() {
//     return (<div>Hello world</div>)
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));
// import { add } from './math';
// add(1, 8);
// import _ from 'lodash';
// import $ from 'jquery';
// console.log(_.join(['a', 'b', 'c'], '*'));
// main.js get lodash.js and main.js, when working file changes, only load main.js
// function getComponent() {
//   return import('lodash').then(({default: _}) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['a', 'b'], '---');
//     return element;
//   })
// }
// async function getComponent() { // lazy loading
//   const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['a', 'b'], '---');
//   return element;
// }
// document.addEventListener('click', () => {
//   getComponent().then(ele => {
//     document.body.appendChild(ele);
//   });
// });
// ------- lazy load ----
// document.addEventListener('click', () => {
//   // const element = document.createElement('div');
//   // // element.innerHTML = _.join(['a', 'b'], '---');
//   // element.innerHTML = 'ok';
//   // document.body.appendChild(element);
//   import (/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
//     func();
//   })
// })
// -------- css chunks -------------
// import './style.css';
// import './style1.css';
// console.log('hello world');
// ------ cache --------



Object(_ui__WEBPACK_IMPORTED_MODULE_2__[/* ui */ "a"])();
const dom = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div>');
dom.html(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['rick', 'huang'], '---'));
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(dom);
console.log(undefined === window);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
],[[3,1,2,3]]]);
//# sourceMappingURL=main.b4b2fe4ad8b3f30c0f2c.chunk.js.map