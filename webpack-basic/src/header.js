
function Header() {
  var div = document.getElementById('div');
  var header = document.createElement('div');
  header.innerText = 'Header';
  div.append(header);
}

export default Header;