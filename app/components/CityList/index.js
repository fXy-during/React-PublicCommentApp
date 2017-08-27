import  React from 'react';
import { Link } from 'react-router';

import './style.less';
class CityList extends React.Component{
    constructor(props, context){
        super(props, context);
        
    }
    render(){
        return(
            <div id='city-list'>
            <h1>城市列表</h1>
            <ul className='clear-fix'>
            <li onClick={this.changeCityHander.bind(this, '成都')}>成都</li>
            <li onClick={this.changeCityHander.bind(this, '上海')}>上海</li>
            <li onClick={this.changeCityHander.bind(this, '北京')}>北京</li>
            <li onClick={this.changeCityHander.bind(this, '杭州')}>杭州</li>
            <li onClick={this.changeCityHander.bind(this, '南京')}>南京</li>
            <li onClick={this.changeCityHander.bind(this, '广州')}>广州</li>
            <li onClick={this.changeCityHander.bind(this, '苏州')}>苏州</li>
            <li onClick={this.changeCityHander.bind(this, '深圳')}>深圳</li>
            <li onClick={this.changeCityHander.bind(this, '天津')}>天津</li>
            <li onClick={this.changeCityHander.bind(this, '重庆')}>重庆</li>
            <li onClick={this.changeCityHander.bind(this, '厦门')}>厦门</li>
            <li onClick={this.changeCityHander.bind(this, '武汉')}>武汉</li>
            </ul>
            </div>
        )
    }
    changeCityHander(newCity){
        this.props.changeFn(newCity);
        console.log(newCity);
    }
}

export default CityList;