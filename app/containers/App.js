import React from 'react';
import { Link } from 'react-router';
// import PureRenderMixin from 'react-addons-pure-render-mixin';

class App extends React.Component { 
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        })
    }
    render() { 
        return ( 
            <div>
            {   this.state.initDone?
                this.props.children:
                 <div>加载中...</div>
            }
            </div> 
        ) 
    } 
}

export default App;
// <Link to='/'> Back Home</Link><br/>
// var obj = {a:1,b:2}
//  obj.c == null && console.log('123')
//  
//  等同于判断  obj.c === undefined //true  obj.c === null //false