import  React from 'react';
import { Link, hashHistory } from 'react-router';

import './style.less';
class SearchInput extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            value: this.props.keyword || ''
        }
    }
    render(){
        return(
            <span>
            <input onChange={e => {this.inputValueHander(e)}}
            onKeyUp={e => { this.inputKeyHander(e)}}
            className='search-input' value={this.state.value} type='text' placeholder='请输入关键字'/>
            </span>
        )
    }
    inputValueHander(e) {
        this.setState({
            value: e.target.value.trim()
        })
    }
    inputKeyHander(e) {
        if (e.keyCode !== 13) {
            return;
        };
        let value = this.state.value;
        this.props.enterHandle(value);
    }
}

export default SearchInput;