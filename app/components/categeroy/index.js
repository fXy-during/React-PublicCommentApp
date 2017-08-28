import  React from 'react';
import { Link } from 'react-router';

import './style.less';


import ReactSwipe from 'react-swipe';

class Category extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            index: 1
        }
    }

    handerClick(e){
        let page = e.target.innerText;
        console.log(page);
    }
    render(){
        var opt = {
            auto: 2000,
            callback: function(index) {
                this.setState({
                    index: index
                })
            }.bind(this)
        }
        return(
            <div>
                <ReactSwipe id='home-category' className="carousel" swipeOptions={opt}>
                    <div  className='carousel-item'>
                        <ul className='clear-fix'>
                        <Link to='/search/ribencai'><li className="float-left">日本菜</li></Link>
                            <li className="float-left">SPA</li>
                            <li className="float-left">结婚</li>
                            <li className="float-left">学习培训</li>
                            <li className="float-left">西餐</li>
                            <li className="float-left">火车机票</li>
                            <li className="float-left">烧烤</li>
                            <li className="float-left">家装</li>
                            <li className="float-left">宠物</li>
                            <li className="float-left">全部分类</li>
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul className='clear-fix'>
                            <li className="float-left">1</li>
                            <li className="float-left">2</li>
                            <li className="float-left">3</li>
                            <li className="float-left">4</li>
                            <li className="float-left">5</li>
                            <li className="float-left">6</li>
                            <li className="float-left">7</li>
                            <li className="float-left">8</li>
                            <li className="float-left">9</li>
                            <li className="float-left">10</li>
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul className='clear-fix'>
                            <li className="float-left">1</li>
                            <li className="float-left">2</li>
                            <li className="float-left">3</li>
                            <li className="float-left">4</li>
                            <li className="float-left">5</li>
                            <li className="float-left">6</li>
                            <li className="float-left">7</li>
                            <li className="float-left">8</li>
                            <li className="float-left">9</li>
                            <li className="float-left">10</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className='index-container'>
                    <ul>
                        <li className={this.state.index == 0 ? 'selected' :''}></li>
                        <li className={this.state.index == 1 ? 'selected' :''}></li>
                        <li className={this.state.index == 2 ? 'selected' :''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category;