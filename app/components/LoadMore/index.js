import  React from 'react';
import { Link } from 'react-router';

import './style.less';
class LoadMore extends React.Component{
    constructor(props, context){
        super(props, context);
        
    }
    render(){
        return(
            <div className='load-more' ref='wrapper'>
            {
                !this.props.isLoadingMore ? <span onClick={this.loadMoreHandle.bind(this)}>
                加载更多...</span> : <span>加载中</span>
            }
            </div>
        )
    }
    loadMoreHandle(){
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn();
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper;
        let timeoutId;
        function callback() {
            const top = Math.floor(wrapper.getBoundingClientRect().top);
            const windowHeight = window.screen.height;
            console.log('windowHeight:',windowHeight,'top:',top);
            if (top && top < windowHeight) {
                loadMoreFn();
            };
            console.log(top);
        }
        window.addEventListener('scroll', function(){
            if( this.props.isLoadingMore ) {
                return
            }
            if ( timeoutId ) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 500)


        }.bind(this), false);
    }
}

export default LoadMore;