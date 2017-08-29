import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star';

import './style.less'

class Item extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data;
        return(
            <div className='comment-container'>
            <div className='comment-userinfo'>
                <i className='icon-user'></i>
                &nbsp;
                <span className='comment-username'>{data.username}</span>
            </div>
            <p>
                <Star star={data.star}/>
            </p>
            <p className='comment-info'>
                {data.comment}
            </p>
            </div>
        )
    }
}

export default Item;