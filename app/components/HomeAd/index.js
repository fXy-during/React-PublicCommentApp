import  React from 'react';
import { Link } from 'react-router';

import './style.less';

class AdList extends React.Component{

    render(){
        const data =this.props.data;
        return(
            <div id='home-ad' className='clear-fix'>
            <h2>超值特惠</h2>
            <ul>
                {
                    data.map((item,index) => {
                        return <li key={index}>
                        <img src={item.img}/>
                        <p>{item.title}</p>
                        </li>
                    }
                )}
            </ul>
            </div>
        )
    }
}

export default AdList;