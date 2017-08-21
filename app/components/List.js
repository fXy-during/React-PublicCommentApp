import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let li = [1,2,3,4,5,6];
        let list = li.map((num, index) =>{
            return <li key={index}>{num}</li>
        });
        return(
            <ul >{ list }</ul>
        )
    }
}

export default List;