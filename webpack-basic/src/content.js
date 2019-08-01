
function Content() {
  var div = document.getElementById('div');
  var content = document.createElement('div');
  content.innerText = 'Content';
  div.append(content);
}

export default Content;