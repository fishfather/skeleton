import React, { Component } from 'react'
import ProxyHoc from './hoc/ProxyHoc';

@ProxyHoc
class SubHocA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div>THis is SubHocA with - {this.props.title}</div>
        )
    }
}

// export default ProxyHoc(SubHocA)
export default SubHocA