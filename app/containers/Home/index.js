import React from 'react';

import { Link } from 'react-router';

import getData from '../../fetch/data';
class Home extends React.Component {
    render(){
        return(
            <div>
                <Link to='/User'> to user</Link><br/>
                <Link to='/detail/:id'>details</Link>
            </div>
        )
    }
}


export default Home;