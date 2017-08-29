import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less';

class Star extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        let star = this.props.star || 0;
        if (star > 5) {
            star = star % 5 ;
        };

        return(
            <div className='star-container'>
            {
               [1,2,3,4,5].map((item, index) => {
                if (index < star) {
                    return <i key={index} className='icon-star-full light'></i>
                } else {
                    return <i key={index} className='icon-star-empty'></i>
                }
            })
            }

            </div>

        )
    }
}

export default Star;

