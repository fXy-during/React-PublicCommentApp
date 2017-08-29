import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less';

class LoginComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: '',
            check: ''
        }
    }
    render(){
        return(
            <div id='login-container'>
                <div className='input-container phone-container'>
                    <i className='icon-phone'></i>
                    <input type='text' placeholder='手机号码'
                    onChange={e => {this.changeHandle(e)}}
                    value={this.state.phone}/>
                </div>
                <div className='input-container password-container'>
                    <i className='icon-key'></i>
                    <button>发送验证码</button>
                    <input type='text' placeholder='验证码'/>
                </div>
                <button className='btn-login' onClick={this.clickHandle.bind(this)}>登陆</button>
            </div>
        )
    }
    clickHandle() {
        const username = this.state.phone;
        this.props.loginHandle(username);
    }
    changeHandle(e) {
        this.setState({
            phone: e.target.value.trim()
        })
    }
}

export default LoginComponent;