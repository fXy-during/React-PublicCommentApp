import React from 'react';


class Inner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: props.num
        }
    }
    componentDidUpdate(){
        alert(this.state.num);
    }
    render(){
        return(
            <div>{this.state.num}</div>
        )
    }
}

export default Inner;