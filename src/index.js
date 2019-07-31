
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

// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML = 'Click';
// document.body.appendChild(btn);

// btn.onclick = function() {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div);
// }

import counter from './counter';
import number from './number';

counter();
number();


// only hope the module no change by the other module change.
if(module.hot) {
  module.hot.accept('./number', () => {
    
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}

