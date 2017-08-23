import  React from 'react';


class Detail extends React.Component{
    render(){
        return(
            <div>
                <p>details url参数：
                id:{this.props.params.id}
                type:{this.props.params.type}</p>

            </div>
        )
    }
}

export default Detail;