import  React from 'react';
import { Link, hashHistory } from 'react-router';
import './style.less';

class Header extends React.Component{
    constructor(props, context){
        super(props, context);
        
    }
    render(){
        return(
            <div id='common-header'>
                <span className='back-icon' onClick={this.clickHander.bind(this)}>
                <i className='icon-arrow-left'></i>
                </span>
                <h1>
                    {this.props.title}
                </h1>
                <span className='header-home'>
                <Link to='/'>
                Home
                </Link>
                </span>
            </div>

        )
    }
    clickHander() {
        const backRouter = this.props.backRouter;
        if( !!backRouter ){
            hashHistory.push(backRouter);
        } else {
            window.history.back()
        }
    }
}

export default Header;