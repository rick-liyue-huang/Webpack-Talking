
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

// import _ from 'lodash';
// import $ from 'jquery';

// import { ui } from './ui';

// ui();

// const dom = $('<div>');
// dom.html(_.join(['rick', 'huang'], '---'));
// $('body').append(dom);

// console.log(this === window);

// ------ PWA progressive web application -----

// console.log('hello rick');

// if('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         console.log('Service-work registed');
//       }).catch(e => {
//         console.log('Service-work un-registed')
//       })
//   })
// }


//  ----- webpackDevServer proxy -------

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// class App extends Component {

//   render() {
//     return (<div>Hello Rick</div>)
//   }

//   componentDidMount() {
//     // here the server setting allow cross-domain a
//     axios.get('/react/api/header.json')
//       .then((res) => {
//         console.log(res);
//       })
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// ------ webpackdevserver spa single page application ----


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './list';
import Home from './home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
