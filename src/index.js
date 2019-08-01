
import Header from './header';
import Content from './content';
import avatar from './avatar.jpg';
import createAvatar from './createAvatar';
// import style from './index.scss'; // css modulation

import './index.scss';

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

import _ from 'lodash';
import $ from 'jquery';

console.log(_.join(['a', 'b', 'c'], '*'));

// main.js get lodash.js and main.js, when working file changes, only load main.js

function getComponent() {
  return import('lodash').then(({default: _}) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['a', 'b'], '---');
    return element;
  })
}

getComponent().then(ele => {
  document.body.appendChild(ele);
})