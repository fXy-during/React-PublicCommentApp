import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less';
class UserInfo extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{this.props.userName}</span>
                </p>
                <p>
                    <i className="icon-location"></i>
                    &nbsp;
                    <span>{this.props.cityName}</span>
                </p>
            </div>

        )
    }
}

export default UserInfo;