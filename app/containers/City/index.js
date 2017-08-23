import  React from 'react';
import { Link } from 'react-router';


class City extends React.Component{
    render(){
        return(
            <div>

                <p>City</p>

                <Link to='/'> Back Home</Link><br/>
            </div>
        )
    }
}

export default City;