import * as something from './module1';
import { test1 } from './a'
const greeter = require('./greet.js');
document.querySelector("#root").appendChild(greeter());
// something.show();
console.log('something call before', something.label)


test1()

Promise.resolve(test1).then(
    (hh) => { console.log('promise resolved'), hh(); }
);

import ('./asyncb.js').then(obj => {
    console.log('asyncb is', obj)
    obj.test1()
});
import ('./asyncc.js').then(obj => {
    console.log('asyncc is', obj)
});