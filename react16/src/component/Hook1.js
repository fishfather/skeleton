import React, { useState, useEffect, useContext, useRef, useCallback  } from 'react';

const set = new Set()

function Hook1({count1}) {
    console.log("sub hook called", count1)
    const ref = useRef()

    set.add(ref)
    
    useEffect(()=>{
        console.log('useEffect called.')
    });

    useEffect(()=>{
        console.log('useEffect did mount.')
    }, []);

    const handleSubmit = useCallback((s) => {
        console.log('submit func ------------',s);
      }, []);

    function nextFunc(s) {
        console.log('submit func 222 ------------',s);
    }

    console.log(`******** ${handleSubmit} -- ${nextFunc}`)

    console.log('ref', ref.current)
    return <div>
        This is sub {set.size}
        <input type="text" ref={ref} onChange={ () => {console.log(`refv ${ref.current.value}`); handleSubmit('test') }} />
    </div>
}

export default Hook1;