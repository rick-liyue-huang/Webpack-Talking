
function number() {
  var div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.style.cursor = 'pointer';
  div.innerHTML = 200;
  
  document.body.appendChild(div);
}

export default number;