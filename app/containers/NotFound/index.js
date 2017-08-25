import  React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component{
    constructor(props, context){
        super(props, context);
        
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