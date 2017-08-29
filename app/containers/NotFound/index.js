import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
        return(
            <div>
                404
            <Link to='/'> Back Home</Link><br/>
            </div>

        )
    }
}

export default NotFound;