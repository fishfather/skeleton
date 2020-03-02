import React, { Component } from 'react'

export default (title) => WrapperComponet => {
    console.log('This is ProxyHoc2 wrapper enter...')
    return class ProxyHoc2 extends Component {
        constructor(props) {
            super(props)
            console.log('This is ProxyHoc2 constructor enter...')
            this.state = {
                value: 'default',
            }
        }
    
        refFunc = (instance) => {
            console.log('ref called.')
            // instance.getName()
            this.getName = instance.getName;
        }

        callWrapperMethod = ()=>{
            this.getName && this.getName();
        }

        onTextInput = (e)=>{
            this.setState({
                value: e.target.value
            })
        }

        render() {
            console.log('This is ProxyHoc2 render enter...')
            const {age, ...otherProps} = this.props;        //remove age
            // console.log("props",this.props)


            const newProps = {
                value: this.state.value,
                onInput: this.onTextInput
            }


            return (
                <div>
                    <h1>ProxyHoc2 {title}</h1>
                    <button onClick={this.callWrapperMethod}>Call getName</button>
                    {/* <WrapperComponet {...otherProps} ref={this.refFunc.bind(this)} {...newProps}/> */}
                    {/* <WrapperComponet {...otherProps} {...newProps}/> */}
                    <WrapperComponet {...otherProps} />
                </div>
            )
        }
    }
}