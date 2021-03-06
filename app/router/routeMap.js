import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../containers/Home'
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';
import App from '../containers/App';
import City from '../containers/City';
import Search from '../containers/Search';
import User from '../containers/User';
import Login from '../containers/Login';
class RouteMap extends React.Component {

updateHandle() { 
    console.log('每次router变化之后都会触发');
    //PV统计
}
     render() {
        return ( 
            <Router 
             history={this.props.history} 
             onUpdate={this.updateHandle.bind(this)}> 
                <Route path='/' component={App}> 
                    <IndexRoute component={Home}/> 
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/> 
                    <Route path='/login(/:router)' component={Login} /> 
                    <Route path="*" component={NotFound}/> 
                </Route> 
            </Router> 
            ) 
    } 
}

export default RouteMap;

