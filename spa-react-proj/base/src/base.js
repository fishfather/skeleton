import * as singleSpa from 'single-spa';

// import { createStore,combineReducers } from 'redux'
// import users from './reducers'

// const store = createStore(combineReducers({testData:(state, action)=>{return ['Sam1','Jack1','Johdan1']}}));
// const store = createStore(combineReducers({testData:users}));

let version = 3
console.log('spa root application init ...', version)

// let app1=SystemJS.import('test.json');
// console.log('testjson is:',app1)
// app1.then(m=>{
//     console.log("returned app1",m)
// })

let loadConfig = function () {
    var url = "test.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send();/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            console.log("request", request.responseText);
            var json = JSON.parse(request.responseText);
            console.log("response type", json instanceof Array);

            startSpa();
        }
    }
}

loadConfig();

console.log("after loadConfig ")

// let app1=SystemJS.import('./app.1.js');
// console.log('app1 is:',app1)
// app1.then(m => {
//     console.log("returned app1")
//     console.log("the rtn m is:",m)
// });


const sharedObj = { test: '111', store: {} };

function startSpa() {
    singleSpa.registerApplication('app-1', () =>
        SystemJS.import('./app.1.js'), pathPrefix('app1'), { sharedObj: sharedObj });
    singleSpa.registerApplication('app-2', () =>
        SystemJS.import('./app.2.js'), pathPrefix('app2'), { sharedObj: sharedObj });
    singleSpa.registerApplication('app-3', () =>
        SystemJS.import('./app.3.js'), pathPrefix('app3'), { sharedObj: sharedObj });
    singleSpa.registerApplication('app-4', () =>
        SystemJS.import('./app.4.js'), pathPrefix('app4'), { sharedObj: sharedObj });
    singleSpa.registerApplication('app-5', () =>
        SystemJS.import('./app.5.js'), pathPrefix('app5'), { sharedObj: sharedObj });
    // singleSpa.registerApplication('app-3', () =>
    // import ('../app3/app3.js'), pathPrefix('/app3'), {store:store});
    // singleSpa.registerApplication('app-4', () =>
    // import ('../app4/app4.js'), pathPrefix('/app4'), {store:store});
    // singleSpa.registerApplication('app-5', () =>
    // import ('../app5/app5.js'), pathPrefix('/app5'), {store:store});
    singleSpa.start();

}
function pathPrefix(prefix) {
    return function (location) {
        // return location.pathname.startsWith(`${prefix}`);
        return location.hash.startsWith(`#${prefix}`);
    }
}