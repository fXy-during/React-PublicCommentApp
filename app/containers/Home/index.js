import React from 'react';
import { Link } from 'react-router';

class Home extend React.Component {
    render(){
        return(
            <div>
                <p>Home</p>
                <Link to='/list'> to list</Link>
            </div>

        )
    }
}


export default Home;