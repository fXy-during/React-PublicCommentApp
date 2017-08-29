import  React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import { connect } from 'react-redux'

import UserInfo from '../../components/UserInfo'
import OrderList from './subpage';

class User extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login');
        }
    }
    render(){
        const city = this.props.userinfo.cityName;
        const user = this.props.userinfo.username;
        return(
            <div>
                <Header title='用户中心' backRouter='/'/>
                <UserInfo cityName={city}
                    userName={user} />
                <OrderList userName={user}/>
            </div>
        )
    }
}

// 连接redux

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

export default connect(mapStateToProps)(User);