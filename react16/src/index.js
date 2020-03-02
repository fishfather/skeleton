import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SubHocA from './component/SubHocA'
import SubHocB from './component/SubHocB'

ReactDOM.render(
    <div>
    <SubHocA title='Hello SubhocA'/>
    {'----------------------------------------------'}
    <SubHocB title='Hello SubhocB' age='12'/>
    </div>,
    document.getElementById('root'), 
)