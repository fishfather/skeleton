import React, { useState, useEffect, useContext, useRef, useCallback,useMemo  } from 'react';

const callBackSet = new Set();
const normalFuncSet = new Set();

export default function WithMemo() {
    console.log('Render withMemo......')
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const [v2, setV2] = useState('')
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    useEffect(()=>{
        console.log('compute222222.')
        setV2(333333)
    }, [count]);

    const callBackFunc = useCallback(() => {
        console.log('callBackFunc set');
      }, [count]);

    function normalFunc(){
        console.log("normalFunc set")
    }

    //useCallBack 證明還是同一個引用
    normalFuncSet.add(normalFunc);
    callBackSet.add(callBackFunc);
 
    return <div>
        <br/>
            <h4>Count : {count}-{expensive} - {v2}</h4>
        {val}
            <h4>NormalSet: {normalFuncSet.size} callBackSet: {callBackSet.size} </h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+count1</button>
            
            <input value={val} onChange={event => setValue(event.target.value)}/>

            <button onClick={() => callBackFunc()}>Click</button>
        </div>
    </div>;
}