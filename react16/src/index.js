import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SubHocA from './component/SubHocA'
// import SubHocB from './component/SubHocB'
import Routers from './routers';

ReactDOM.render(
    // <div>
    // <SubHocA title='Hello SubhocA'/>
    // {'----------------------------------------------'}
    // <SubHocB title='Hello SubhocB' age='12'/>
    // </div>,
    <Routers/>,
    document.getElementById('root')
)

// import React from 'react'
// import ReactDOM from 'react-dom';
// import {
//     HashRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// const Home = () => <h2>Home</h2>
// const About = () => <h2>About</h2>
// const Dashboard = () => <h2>Dashboard</h2>
// const News = () => <h2>News</h2>
// const Games = () => <h2>Games</h2>

// const App = function () {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li> <Link to="/">Home</Link> </li>
//                     <li>  <Link to="/about">About</Link>  </li>
//                     <li>  <Link to="/dashboard">Dashboard</Link> </li>
//                     <li>  <Link to="/news">News</Link> </li>
//                     <li>  <Link to="/games">Games</Link> </li>
//                 </ul>
//                 <hr />
//                 <Switch>
//                     <Route exact path="/"> <Home /></Route>
//                     <Route path="/about" component={About} />
//                     <Route path="/dashboard" children={<Dashboard />} />
//                     <Route path="/news" render={()=><News />} />
//                     <Route path="/games" component={()=><Games/>} />
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// ReactDOM.render(<App/>, document.getElementById('root'));