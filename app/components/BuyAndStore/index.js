import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class BuyAndStore extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){

        return(
            <div className='buy-store-container clear-fix'>
            <div className="item-container float-left">
            <button className='btn-store' onClick={this.storeHandle.bind(this)}>{ this.props.isStore? '已收藏' : '收藏' }</button>
            </div>
            <div className="item-container float-right">
            <button className='btn-buy'>购买</button>
            </div>
            </div>
        )
    }
    storeHandle() {
        this.props.storeHandle();
    }
}

export default BuyAndStore;