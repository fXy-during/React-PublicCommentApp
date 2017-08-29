import  React from 'react';
import { Link } from 'react-router';

// import { getCommentData } from '../../../fetch/details';
import { getInfoData } from '../../../fetch/info/detail';
import DetailInfo from '../../../components/DetailInfo';
class Info extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            info: false,
        }
    }
    infoData(){
        const result = getInfoData(this.props.id);
        result.then(res =>{
            return res.json();
        }).then(json => {
            this.setState({
                info: json
            })
        })        
    }
    componentDidMount(){
        // 获取商户信息
        this.infoData();
    }
    render(){
        return(
            <div>

                {
                    this.state.info ? <DetailInfo data={this.state.info}/> : <div>loading.....</div>
                }
                
            </div>

        )
    }
}

export default Info;