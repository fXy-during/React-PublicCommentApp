import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js';

class Login extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render(){
        return(
            <div>
                <Header  title='登录'/>
                {
                    this.state.checking ? <div>loading...</div> :
                <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                    
                }
            </div>
        )
    }
    // 登陆成功
    loginHandle( username ) {
        // 保存用户名
        const action = this.props.userInfoAction;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        action.update(userinfo);

         // 跳转连接
         const params = this.props.params;
         const router = params.router;
         if (router) {
            // 跳转到之前页面
            hashHistory.push(router);
         } else {
            // 跳转到默认页面
            this.goUserPage();            
         }
    }
    componentDidMount() {
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登陆
            this.goUserPage();
        } else {
            // 尚未登陆
            this.setState({
                checking: false
            })
        }
    }
    goUserPage() {
        hashHistory.push('/User');
    }
}




// 连接redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispacth) {
    return {
        userInfoAction: bindActionCreators(userInfoActionsFormOtherFile, dispacth)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);