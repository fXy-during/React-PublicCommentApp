import  React from 'react';
import { Link } from 'react-router';

import './style.less';
import Item from './Item';

class ListItem extends React.Component{

    render(){
        const data = this.props.data;
        console.log('fxy ',data);
        return(
            <div className='clear-fix'>
                {data.map((item, index) => {
                    return <Item data={item} key={index}/>
                })}
            </div>
        )
    }
}

export default ListItem;