// console.log('hello')

// function sleep(ms) {
//     return new Promise(function (resolve, reject) {
//         console.log("AAA");
//         setTimeout(() => {
//             resolve("success")
//         }, ms);
//     })
// }
// sleep(500).then((s) => console.log("finished", s));

let p1 = new Promise((res, rej)=>{
    res('res obj')
}).then( s=> {console.log('ret', s); return "obj2"});
console.log(`p1 is ${p1}`)
p1.then(s => {console.log('re2t', s)})