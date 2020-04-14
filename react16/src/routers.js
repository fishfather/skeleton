import React from 'react';
import HocSample from './HocSample';
import HooksSample from './HooksSample';
import HocHookSample from './HocHookSample';
import Page404 from './Page404';
import Wrapper from './Wrapper';

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

export default () => (
    <Router>
        <div>
            <ul>
                <li> <Link to="/hoc">HocSample</Link> </li>
                <li>  <Link to="/hooks">Hooks</Link>  </li>
                <li>  <Link to="/hochooks">Hoc Hooks</Link> </li>
                <li>  <Link to="/news">News</Link> </li>
                <li>  <Link to="/wrapper">Wrapper</Link> </li>
            </ul>
        </div>
        <br></br>
        <hr></hr>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/hooks" push />} /> 
            <Route exact path="/hoc" component={HocSample} />
            <Route exact path="/hooks" component={HooksSample} />
            <Route exact path="/hochooks" component={HocHookSample} />
            <Route exact path="/news" render= {Comp} />
            <Route exact path="/wrapper" render= {() => <Wrapper component={()=>(<div>test</div>)} />} />
            <Route path="*" component={Page404} />
        </Switch>
    </Router>
);

function Comp(props) {
    console.log("-----------------",props);
    return <div>aaaaaaaaaa</div>
}

function func(){
    return <Wrapper component={()=>(<div>test</div>)} />;
}

// export default BasicRoute;