import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import PureRenderMixin from 'react-addons-pure-render-mixin';

import LocalStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey';
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js';


//icon
import '../static/css/style.less';
import '../static/css/common.less';


class App extends React.Component { 
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        }
        console.log(cityName);

        this.setState({
            initDone: true
        })

        this.props.userinfoActions.update({
            cityName: cityName
        })

    }



    render() { 
        return ( 
            <div>
            {   this.state.initDone?
                this.props.children:
                 <div>加载中...</div>
            }
            </div>
        ) 
    } 
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// <Link to='/'> Back Home</Link><br/>
// var obj = {a:1,b:2}
//  obj.c == null && console.log('123')
//  
//  等同于判断  obj.c === undefined //true  obj.c === null //false