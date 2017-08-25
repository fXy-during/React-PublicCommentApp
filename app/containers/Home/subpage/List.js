import  React from 'react';
import { Link } from 'react-router';

import './style.less';
import ListItem from '../../../components/HomeList';

import { getListData } from '../../../fetch/home/home.js';
class AdList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            hasMore: true,
            data: []
        }
    }
    componentDidMount() {
        this.loadFirstPageData()
    }
    //获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result);
    }
    //数据处理
    resultHandle(result){
        result.then(res =>{
            return res.json();
        }).then(json => {
            const { data, hasMore } = json;
            //储存数据
            this.setState({
                hasMore: hasMore,
                data: data
            })
        })
    }

    render(){
        return(
            <div id='' className='clear-fix'>
            <h2 className='home-list-title'>猜你喜欢</h2>
            <ListItem data={this.state.data} city={this.props.cityName}/>
            </div>
        )
    }
}

export default AdList;