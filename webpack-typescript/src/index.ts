
// install @types/lodash to let lodash know the type
import * as _ from 'lodash';

class Greeter {
  greeting: string;
  constructor(msg: string) {
    this.greeting = msg;
  }
  greet() {
    return _.join(['hello,', ' ', this.greeting], '')
    // return 'Hello ' + this.greeting;
  }
}

let greeter = new Greeter('world');

let btn = document.createElement('button');
btn.textContent = 'say hello';
btn.onclick = function() {
  console.log(greeter.greet());
}

document.body.appendChild(btn);