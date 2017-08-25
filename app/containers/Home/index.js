import React from 'react';

import { Link } from 'react-router';

// import getData from '../fetch/data';
import HomeHeader from '../../components/HomeHeader';
import { connect } from 'react-redux';
import Category from '../../components/Categeroy';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad />
                <div style={{height:'15px'}}></div>
                <List cityName={this.props.userinfo.cityName}/>

            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
 
export default connect(
    mapStateToProps
)(Home);

                // <Link to='/User'> to user</Link><br/>
                // <Link to='/detail/:id'>details</Link>