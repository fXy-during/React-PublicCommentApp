import  React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import BuyAndStore from '../../../components/BuyAndStore';
import * as storeActionsFromFile from '../../../actions/store';

class Buy extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render(){
        return(
            <div>
            <BuyAndStore isStore={this.state.isStore} 
            buyHandle={this.buyHandle.bind(this) }
            storeHandle={this.storeHandle.bind(this) }/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(123, this.props.store);
        // console.log(456, this.props.storeActions)
        this.checkStoreState(); // 检查是否被收藏
    }
    buyHandle() {
        const loginFlag = this.checkLogin();
        if(loginFlag) {
            return
        }
        // 购买
        

        hashHistory.push('/User');
    }
    storeHandle() {
        const loginFlag = this.checkLogin();
        if(loginFlag) {
            return
        }
        const id = this.props.id;
        const storeActions = this.props.storeActions
        if (this.state.isStore) { // 已被收藏
            storeActions.rm({
                id: id
            });
        } else {  // 未被收藏
            storeActions.add({
                id: id
            });
        }

        this.setState({
            isStore: !this.state.isStore
        })
    }
    // 检验当前商店是否已经收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;
        if (!!store.length) { return; }
        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                // 跳出循环
                return true
            }
        })
    }
    checkLogin() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            hashHistory.push('/Login/'+ encodeURIComponent('detail/' + id) )
            return true
        }
        return false
    }
}

// 连接redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);