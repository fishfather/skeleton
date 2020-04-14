import React from 'react';
import SubHocA from './component/SubHocA'
import SubHocB from './component/SubHocB'

export default function(){
    return <div>
    <SubHocA title='Hello SubhocA'/>
    {'----------------------------------------------'}
    <SubHocB title='Hello SubhocB' age='12'/>
    </div>;
}
