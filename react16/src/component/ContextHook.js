import React, { Component,useState, useEffect, useContext, useRef, useCallback,useMemo } from 'react'
import {myContext} from '../HocHookSample'

export default function(){
    const count = useContext(myContext);

    return <div>
    <h4>Count context value is : {count}</h4>
    </div>
}
