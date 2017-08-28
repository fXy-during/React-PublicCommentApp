import  React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchInput from '../SearchInput';

import './style.less';
class SearchHeader extends React.Component{
    constructor(props, context){
        super(props, context);
        
    }
    render(){
        return(
            <div id='search-header' className='clear-fix'>
            <span className='back-icon float-left' onClick={this.clickHander.bind(this)}>
                <i className='icon-arrow-left'></i>
            </span>
            <div className='input-container'>
            <i className='icon-search'></i>
            &nbsp;
            <SearchInput enterHandle={this.inputValueKey.bind(this)}  keyword={ this.props.keyword }/>
            </div>
            </div>

        )
    }
    clickHander() {
        window.history.back()
    }
    inputValueKey(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value) );
        console.log(value);
    }
}

export default SearchHeader;