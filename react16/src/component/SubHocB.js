import React, { Component } from 'react'
import ProxyHoc2 from './hoc/ProxyHoc2';
import FunctionHoc from './hoc/functionHoc';

function entitlement(func) {
    console.log("entitlement is hoc as well")
    return function (target) {
        target.prototype.isTest = true;
        target.isTest2 = true;


        console.log("entitlement is hoc as well 222", target)
        if (func != 'admin') {
            console.log('this is not admin -----')
            return () => <div>Not entitled</div>

            // return class NotEntitled extends Component {
            //     render() {
            //         return (
            //            <div>Not entitled.</div>
            //         )
            //     }
            // }
        } else {
            //do nothing will keep call following logic
        }


    }
}

@entitlement('admin')
@FunctionHoc
@ProxyHoc2('Title Param')
class SubHocB extends Component {

    getName() {  //will be called by hoc
        console.log("SubHocB getName called.")
    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.value} onInput={this.props.onInput} />
                <div>THis is SubHocA with - {this.props.title} - {this.props.age}</div>
            </div>
        )
    }
}

// export default ProxyHoc(SubHocA)
export default SubHocB