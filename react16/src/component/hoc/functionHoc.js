import React, { Component } from 'react'

export default (WrapperComponent) => {
    console.log("This is function Hoc wrapper.");

    return class FuncHoc extends Component {
        render() {
            console.log("This is function render Hoc",this.isTest, FuncHoc.isTest2, WrapperComponent);

            return (
                <WrapperComponent {...this.props}/>
                // <div>Replace Wrapper.</div>  //replaced component
            )
        }
    }
}