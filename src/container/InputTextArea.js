import React, { Component } from 'react';

class InputTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.startingText
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
        this.props.InputTextChange(e.target.value)
    }
    
    render() {
        
        return (
            <textarea 
                className="col-md-5 border"
                value={this.state.text}
                onChange={this.handleChange}
            />
            
        )
    }
    
}


export default InputTextArea;