import  React from 'react';
import { Link } from 'react-router';

// import './style.less';
import { getAdData } from '../../../fetch/home/home.js';
import AdList from '../../../components/HomeAd/index';

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const result = getAdData();
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json;
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        })
    }
    render(){
        return(
            <div className='clear-fix'>
            <AdList data={this.state.data}/>
            </div>
        )
    }

}
export default Ad;