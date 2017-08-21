import React from 'react';
import './header.less';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            random: Math.round(Math.random()*10+1)
        }
        this.clickHander = this.clickHander.bind(this);
    }

    clickHander(e){
        this.setState({
            random: Math.round(Math.random()*10+1)
        })
    }

    componentDidUpdate(){
        console.log(this.state.random);
    }

    render(){ //兩種事件绑定的方法
        return(
            <div className='components-header'>
            <bottom onClick={(e)=>this.clickHander(e)}>Click Me</bottom>
            <bottom onClick={this.clickHander}>Click Me</bottom>
            </div>
        )
    }
}

export default Header;