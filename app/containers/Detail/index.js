import  React from 'react';

import Header from '../../components/Header';
import Info from './subpage/info.js';
import Comment from './subpage/comment'
import Buy from './subpage/buy';

class Detail extends React.Component{
    render(){
        const id = this.props.params.id;

        return(
            <div>
                <Header title='详情页面'/>
                <Info id={id} />
                <Buy id={id}/>
                <Comment id={id} />


            </div>
        )
    }
}

export default Detail;