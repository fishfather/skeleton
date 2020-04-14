import React, { useState, useEffect, useContext } from 'react';
import Hook1 from './component/Hook1'
import Hook2 from './component/Hook2'

export default function () {
    const [count, setCount] = useState(1);
    const [stu, setStu] = useState({ name: 'Sam' });
    const [inputValue, setInputValue] = useState("")
    // console.log("input value is",inputValue)

    const [lable1, Label1] = useInput({type:'text'});
    const [lable2, Label2] = useInput({type:'text'});

    const onBtnClick = () => {
        setCount(count+1)
    }

    return <div>
        Hooks {stu.name} {count}
        <div><button onClick={onBtnClick}>Click me</button></div>
        Test Input: <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
        <div>
            Lable1: {Label1}
            <br/>
            Lable2: {Label2}
        </div>
        <hr></hr>
        <Hook1 count1={count}/>
        <Hook2/>
    </div>
}

//custom hooks function
function useInput({ type }){
    const [value, setValue] = useState("");
    const input = <input type={type} value={value} onChange={e=> setValue(e.target.value)} />
    return [ value, input];
}