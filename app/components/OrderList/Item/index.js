import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class Item extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 0,
            comment: ''
        }
    }
    componentDidMount() {
        console.log('this.props.data.commentState :',this.props.data.commentState);
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    render(){
        const data = this.props.data
        return(
            <div className='clear-fix order-item-container'>
                <div className='order-item-img float-left'>
                    <img  src={ data.img }/>
                </div>
                <div className='order-item-comment float-right'>
                    {
                        this.state.commentState === 0 ? // 未评价
                        <button className='btn' onClick={this.showComment.bind(this)}>评价</button> : 
                        this.state.commentState === 1 ?  // 评价中
                        '' :  // 已评价 
                        <button className='btn unseleted-btn'>已评价</button>
                    }
                </div>
                <div className='order-item-content'>
                    <span>商户: {data.title}</span>
                    <span>数量: {data.count}</span>
                    <span>价格: ￥{data.price}</span>
                </div>
            {
                this.state.commentState === 1 ?
                <div className="comment-text-container">
                    <textarea style={{width: '100%', height: '80px'}} className="comment-text" value={this.state.comment}
                    onChange={e => {this.changeComment(e)}}></textarea>
                    <button className="btn" onClick={this.submitCommentHandle.bind(this)}>提交</button>
                    <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                </div> : ''
            }
            </div>
        )
    }
    changeComment(e) {
        this.setState({
            comment: e.target.value.trim()
        })
    }
    hideComment() {
        this.setState({
            commentState: 0
        })
    }
    showComment() {
        this.setState({
            commentState: 1
        })
    }
    submitCommentHandle() {
        const data = this.props.data;
        const id = data.id;
        const comment = this.state.comment;
        const submit = this.props.submitComment;
        if (!comment) {
            return
        }
        // 提交评论内容
        submit(id, comment, this.commentOk.bind(this));
    }
    commentOk() {
        // 评论成功，回调函数
        this.setState({
            commentState: 2
        })
    }

}

export default Item;