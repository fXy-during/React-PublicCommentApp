import React from 'react';
import { hashHistory } from 'react-router' ;
import { Link } from 'react-router';

class List extends React.Component {
    constructor(props){
        super(props);
    }
    handerClick(page){
        hashHistory.push('/detail/'+ page); // JS跳转 路由
    }
    render(){
        const arr = [1,2,3,4];
        return(

            <div>
            <ul>
                {
                    arr.map((item, index) => {
                        return <li key={index} onClick={this.handerClick}> 
                            to detail:{item} </li>
                    })
                }
            </ul>
                <p>one</p>
                <p>two</p>
                <Link to='/'> Back Home</Link><br/>
            </div>
        )
    }
}


export default List;