import  React from 'react';
import { Link } from 'react-router';

import './style.less';
import ListItem from '../../../components/HomeList';

import LoadMore from '../../../components/LoadMore';

import { getListData } from '../../../fetch/home/home.js';
class AdList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            hasMore: true,// 记录当前状态下, 还有没有更多的数据可供加载
            data: [], // 存储列表信息
            isLoadingMore: false, // 记录当前状态下, 加载中.或者加载完成
            page: 1 // 下一页的页码
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
    // 加载更多数据
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result)

        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
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
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) { // 如果当前是开发环境
                console.log('猜你喜欢加载过程发生错误', ex.message);
            }
        })
    }

    render(){
        return(
            <div id='' className='clear-fix'>
            <h2 className='home-list-title'>猜你喜欢</h2>
            <ListItem data={this.state.data} city={this.props.cityName}/>
            {
                this.state.hasMore ? <LoadMore isLoadingMore={
                    this.state.isLoadingMore}  loadMoreFn={this.loadMoreData.bind(this)}/> : <div></div>
            }

            </div>
        )
    }
}

export default AdList;