import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/info/detail';
import './style.less';
import LoadMore from '../../../components/LoadMore';

import DetailComment from '../../../components/DetailComment';

class Comment extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            comment: [],            
            page: 0, // 下一页
            isLoading: false,
            hasMore: false
        }
    }
    // 加载首屏收据
    firstCommentData() {
        const id = this.props.id // 商户ID
        const result = getCommentData(0, id);
        this.resultHandle(result)
    }
    // 加载更多数据 
    commentData() {
        this.setState({
            isLoading: true
        })

        const id = this.props.id;
        const page = this.state.page;
        console.log('state :', this.state);
        const result = getCommentData(page, id);

        this.resultHandle(result)

        this.setState({
            isLoading: false,
        })
    }
    // result处理
    resultHandle(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            const { hasMore, data } = json;
            const page = this.state.page;

            this.setState({
                comment: this.state.comment.concat(data),
                hasMore: hasMore,
                page: page + 1
            })
        }).catch(ex => {
            if (__DEV__) { // 如果当前是开发环境
                console.log('店家评语加载发生错误', ex.message);
            }
        })
    }

    componentDidMount() {
        this.firstCommentData();
    }

    render(){
        return(
            <div id="detail-comment-container">
                {
                    this.state.comment.length ? <DetailComment data={this.state.comment}/> : <div>loading...</div>
                }
                {
                    this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoading} loadMoreFn={this.commentData.bind(this)} />
                    : ' '
                }
            </div>

        )
    }
}

export default Comment;

