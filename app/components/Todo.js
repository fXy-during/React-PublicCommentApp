import React from 'react';



// class TodoItem extends React.Component{
//     constructor(props){
//         super(props);
//         this.onHandleDelet = this.onHandleDelet.bind(this);
//     }
//     onHandleDelet(e){   
//         this.props.onHandleDelete(e.target.innerHTML);
//         console.log(e);
//     }
//     render(){
//         return(
//             <p onClick={this.onHandleDelete}>{this.props.text}</p>
//         )
//     }
// }

class TodoItemList extends React.Component{
    constructor(props){
        super(props);
    }
    onHandleDelete(e){
        this.props.onHandleDelete(e);
        console.log(e);
    }
    render(){
        let todoList = this.props.todos;
        let todos = [];
        todoList.forEach((item,index)=>{
            todos.push(<li 
                key={item.id} 
                onClick = {this.onHandleDelete.bind(this, item.id)}>
                {item.text} 
                </li>);
        })
        return(
            <ul>{todos}</ul>
        )
    }
}

class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange(e){
        e.stopPropagation();
        this.setState({
            value: e.target.value
        })
    }
    handleIn(e){
        if (e.keyCode === 13) {
            this.props.onHandleIn(this.state.value);
            this.setState({
                value: ''
            })
        }
    }
    render(){
        return(
           <div>
                <input 
                type='text'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handleIn.bind(this)}/>
            </div>

        )
    }
}

class TodoWrap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    onHandleIn(item){
        let sampleTodo = this.state.todos;
        sampleTodo.push({
            text: item,
            id: sampleTodo.length
        });
        this.setState({
            todos: sampleTodo
        })
    }
    onHandleDelete(id){
        let sampleTodo = this.state.todos;
        this.setState({
            todos: sampleTodo.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
    render(){
        return(
            <div>
                <TodoInput 
                onHandleIn={this.onHandleIn.bind(this)} />

                <TodoItemList 
                todos={this.state.todos}
                onHandleDelete={this.onHandleDelete.bind(this)}/>
            </div>
        )
    }
}

export default TodoWrap;