import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root'

import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export function bootstrap(props) {
  console.log('[App2] -- bootstrap...', props.customProps);
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  console.log('[App2] -- mount..1.');
  return reactLifecycles.mount(props);
}


export function unmount(props) {
  console.log('[App2] -- unmount...', props.customProps);
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  
  // Make sure there is a div for us to render into
  let el = document.getElementById('sample');
  if (!el) {
    console.log('[App2] -- domElementGetter is null...');
    el = document.createElement('div');
    el.id = 'sample';
    document.body.appendChild(el);
  }else {
    console.log('[App2] -- domElementGetter is not null...');
  }

  return el;
}


// ReactDOM.render(
//     <Root/>,
//     document.getElementById('root'), 
// )