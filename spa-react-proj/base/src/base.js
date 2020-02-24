import * as singleSpa from 'single-spa';

// import { createStore,combineReducers } from 'redux'
// import users from './reducers'

// const store = createStore(combineReducers({testData:(state, action)=>{return ['Sam1','Jack1','Johdan1']}}));
// const store = createStore(combineReducers({testData:users}));

let version = 2
console.log('spa root application init ...',version)

// let app1=SystemJS.import('./app.1.js');
// console.log('app1 is:',app1)
// app1.then(m => {
//     console.log("returned app1")
//     console.log("the rtn m is:",m)
// });

// const app1Store = {};
const sharedObj = {test:'111',store:{}};

singleSpa.registerApplication('app-1', () =>
    SystemJS.import('./app.1.js'), pathPrefix('app1'), {sharedObj:sharedObj});
singleSpa.registerApplication('app-2', () =>
    SystemJS.import('./app.2.js'), pathPrefix('app2'), {sharedObj:sharedObj});
singleSpa.registerApplication('app-3', () =>
    SystemJS.import('./app.3.js'), pathPrefix('app3'), {sharedObj:sharedObj});
singleSpa.registerApplication('app-4', () =>
    SystemJS.import('./app.4.js'), pathPrefix('app4'), {sharedObj:sharedObj});
singleSpa.registerApplication('app-5', () =>
    SystemJS.import('./app.5.js'), pathPrefix('app5'), {sharedObj:sharedObj});
// singleSpa.registerApplication('app-3', () =>
// import ('../app3/app3.js'), pathPrefix('/app3'), {store:store});
// singleSpa.registerApplication('app-4', () =>
// import ('../app4/app4.js'), pathPrefix('/app4'), {store:store});
// singleSpa.registerApplication('app-5', () =>
// import ('../app5/app5.js'), pathPrefix('/app5'), {store:store});
singleSpa.start();

function pathPrefix(prefix) {
    return function (location) {
        // return location.pathname.startsWith(`${prefix}`);
        return location.hash.startsWith(`#${prefix}`);
    }
}