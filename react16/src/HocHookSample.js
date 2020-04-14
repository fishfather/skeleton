import React, { Component,useState, useEffect, useContext, useRef, useCallback,useMemo } from 'react'
import ContextHook from './component/ContextHook'

@entitlement('admin')
class Comp extends Component {
    render() {
        return (
            <App/>
        )
    }
}

function entitlement(func) {
    console.log("entitlement is hoc as well")
    return function (target) {
        target.prototype.isTest = true;
        target.isTest2 = true;
        console.log("entitlement is hoc as well 222", target)
        if (func != 'admin') {
            console.log('this is not admin -----')
            return () => <div>Not entitled</div>
        } else {
            //do nothing will keep call following logic
        }
    }
}

export const myContext = React.createContext();

function App(){
    const [count, setCount] = useState(0)

    return <myContext.Provider value={count}>
    <div>test hooks {count}
    <div><button onClick={() => {setCount(count + 1)}}>Click me</button></div>
    <ContextHook/>
    </div>

    </myContext.Provider>
}

// export {
//     myContext
// }

export default Comp;