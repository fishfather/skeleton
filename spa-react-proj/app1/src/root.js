import React, {Component} from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider, ReactReduxContext } from 'react-redux'
import { combineReducers } from 'redux'
import user from './reducer/reducers'
import UserComp from './comp/users'
// import PropTypes from 'prop-types'
import model from './model';

import './index.css';

const store = createStore(combineReducers({ testData: user }), {}, applyMiddleware(logger));

function logger(obj) { //obj is store
    return next => action => {
        console.log('App1 middleware start to dispatch action', action)

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        console.log('App1 middleware after dispatch', obj.getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

export default class Root extends Component{
    render() {
        console.log("Root get with this.props.customProps",this.props.customProps)
        return (
             <Provider store={store}>
                <Main globalstore={this.props.customProps}/>
            </Provider>
        );
    }
}

class Main extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        console.log('[App1] Root Main -- render with store',this.context.store)
        console.log('[App1] Root Main -- props.globalstore',this.props.globalstore)
        model.setStore(this.context.store);
        this.props.globalstore.sharedObj.test = "333";
        this.props.globalstore.sharedObj.store = this.context.store;
        // this.props.globalstore.app1Store.store = this.context.store;
        this.props.globalstore.newPropers = "1000000000000";
        
        return ( <div style={{marginTop: '100px'}}>
            <h1>React App 11</h1>
            <UserComp/>
        </div>
        )
    }
}

Main.contextType = ReactReduxContext;