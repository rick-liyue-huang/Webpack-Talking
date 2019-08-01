
import avatar from './avatar.jpg';

function createAvatar () {
  var img = new Image();
  img.src = avatar;
  // css modulation : so the following code doesn't work.
  img.classList.add('avatar');
  var root = document.getElementById('root');
  root.append(img);
}

export default createAvatar;
