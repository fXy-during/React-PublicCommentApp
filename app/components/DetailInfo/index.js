import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class DetailInfo extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data
        return(
            <div id="detail-info-container">
                <img src={ data.img } style={{width: 100px }} />
                <h1>{data.title}</h1>
                <p>{data.star}</p>
                <p>{data.price}</p>
                <p>{data.subTitle}</p>
                <p>{data.dece}</p>
            </div>

        )
    }
}

export default DetailInfo;

