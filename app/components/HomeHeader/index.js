import  React from 'react';
import { Link, hashHistory } from 'react-router';

import './style.less';
import SearchInput from '../SearchInput';

class HomeHeader extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render(){
        return(
            <div id='home-header' className='clear-fix'>
                <div className='home-header-left float-left'>
                <Link to='/city'>
                <span>{this.props.cityName}</span>
                &nbsp;
                    <i className='icon-down'></i>
                </Link>
                </div>
                <div className='home-header-right float-right'>
                    <i className='icon-user'></i>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className='icon-search'></i>
                        <SearchInput keyword='' enterHandle={this.inputValueKey.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    // 接收回车
    inputValueKey(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value) );
        console.log(value);
    }
}

export default HomeHeader;