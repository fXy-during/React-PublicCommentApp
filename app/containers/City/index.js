import  React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js';
import { hashHistory } from 'react-router';
import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import LocalStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey'

class City extends React.Component{
    render(){
        return(
            <div>
                <Header title='选择城市'/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }

    changeCity(newCity) {
        //修改redux
        this.props.userinfo.cityName = newCity;
        this.props.userInfoActions.update({
            cityName: newCity
        })
        console.log('this.props.userinfo ', this.props.userinfo)
        console.log('newCity ', newCity);
        // 更新localStore
        LocalStore.setItem(CITYNAME, newCity);

        //跳转到首页
        hashHistory.push('/');

    }
}


// 连接到redux

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);