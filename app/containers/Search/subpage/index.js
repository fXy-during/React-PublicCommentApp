import  React from 'react';
import { connect } from 'react-redux'


import ListItem from '../../../components/HomeList';
import LoadMore from '../../../components/LoadMore';
import { getSearchData } from '../../../fetch/search/search.js';

var initalState = {
            hasMore: true,// 记录当前状态下, 还有没有更多的数据可供加载
            data: [], // 存储列表信息
            isLoadingMore: false, // 记录当前状态下, 加载中.或者加载完成
            page: 1 // 下一页的页码
        }

class SearchList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = initalState;
    }

    componentDidMount() {
        this.loadFirstPageData()
    }
    //获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword || 0;

        const result = getSearchData(0, cityName, category, keyword);
        this.resultHandle(result);
    }
    // 加载更多数据
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const category = this.props.category;
        const keyword = this.props.keyword || 0;

        const result = getSearchData(page, cityName, category, keyword);
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
                //拼接数据
                data: this.state.data.concat(data)
            })
        })
    }

    componentDidUpdata(prevProps, preveState) {
        const keyword = this.props.keyword;
        const category = this.props.category;

        // 搜索条件相同时，忽略加载
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }
        // 重置 state
        this.setState(initalState);

        // 重新加载数据
        this.loadFirstPageData();
    }
    render(){
        return(
            <div className='clear-fix'>
            <ListItem data={this.state.data} city={this.props.cityName}/>
            {
                this.state.hasMore ? <LoadMore isLoadingMore={
                    this.state.isLoadingMore}  loadMoreFn={this.loadMoreData.bind(this)}/> : <div></div>
            }

            </div>
        )
    }
}

// 连接redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}


export default connect(
    mapStateToProps
)(SearchList);