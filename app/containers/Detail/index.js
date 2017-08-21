import  React from 'react';
import { Link } from 'react-router';


class Detail extends React.Component{
    render(){
        return(
            <div>
                <p>Home</p>
                <p>details</p>
                <p>Foot</p>

                <Link to='/'> Back Home</Link><br/>
            </div>
        )
    }
}

export default Detail;