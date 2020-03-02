import React, { Component } from 'react'

function hoc(WrapperComponet){
    console.log('This is wrapper enter.')
    return class ProxyHoc extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                
            }
        }
    
        render() {
            return (
                <div>
                    <h1>ProxyHoc Title</h1>
                    <WrapperComponet {...this.props}/>
                </div>
            )
        }
    }
}

export default hoc