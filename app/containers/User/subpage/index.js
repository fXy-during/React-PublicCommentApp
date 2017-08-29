import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlsit'
import OrderListComponent from '../../../components/OrderList'

class OrderList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const user = this.props.userName;
        if (user) {
            this.loadOrederList(user);
        }
    }
    loadOrederList(username) {
        const result = getOrderListData(username);
        result.then(res =>{
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(ex => {
            console.log('用户主页获取订单列表数据失败', ex.message);
        })
    }
    render(){
        return(
            <div>
            <h2>您的订单</h2>
            {
                this.state.data.length ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/> : <div>loading....</div>
            }
            </div>

        )
    }
    submitComment(id, value, callback) {
        const result = postComment(id, value);
        result.then(res => {
            return res.json()
        }).then(json =>{
            if (json.errno === 0) {
                // 评论成功，回调
                callback();
            }
        })
    }
}

export default OrderList;