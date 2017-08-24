import React from 'react';
// import Header from './components/header';
// import Inner from './components/Inner';
// import BtnWithState from './components/BtnWithState';

// //key && list
// import List from './components/List';

// //受控表单组件
// import {NameForm, NameFormSelect, Reservation} from './components/Form';

// //状态提升
// import Calculator from './components/Calculator';

// //组件组合
// import SignUpDialog from './components/Combine';


// //littleApp
// import FilterableProductTable from './components/littleApp';


// //todo
// import TodoWrap from './components/Todo';



import { render } from 'react-dom' ;
import { hashHistory } from 'react-router' ;
import RouteMap from './router/routeMap' ;

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

let store = configureStore();

let Root = React.createClass({
    render(){
        return(
            <div>
                <Provider store={store}>
                    <RouteMap history={hashHistory}/>
                </Provider>
            </div>
        )
    }
})
            // <BtnWithState/>
            // <Header>
            //     <Inner />
            // </Header>
            // <SignUpDialog/>
            // <NameForm/>
            // <NameFormSelect/>
            // <Reservation/>
            // <FilterableProductTable/>
export default Root;