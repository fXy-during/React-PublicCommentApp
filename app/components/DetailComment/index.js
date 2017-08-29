import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item';

import './style.less'

class DetailComment extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data;
        return(
            <div className='clear-fix' id='comment-wrap'>
            <p className='comment-title'>用户评价</p>
                {data.map((item, index) => {
                    return <Item data={item} key={index}/>
                })}
            </div>
        )
    }
}

export default DetailComment;