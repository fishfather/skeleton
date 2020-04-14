import React, { Component,useState, useEffect, useContext, useRef, useCallback,useMemo } from 'react'

@entitlement('admin')
export default class extends Component {
    render() {
        return (
            <this.props.component />
        )
    }
}

function entitlement(func) {
    return function (target) {
        if (func != 'admin') {
            console.log('this is not admin -----')
            return () => <div>Not entitled</div>
        } else {
            //do nothing will keep call following logic
        }
    }
}