import React, { Component } from 'react';
class Button2 extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"Submit"
        }

        
    }
    componentDidMount(){
        this.setState({title:"Update"});
    }
    render() {
        return (
            <div>
                <button>{this.state.title}</button>
            </div>
        )
    }
}
export default Button2;