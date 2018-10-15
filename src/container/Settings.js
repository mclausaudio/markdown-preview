import React, { Component } from 'react';


class Settings extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            mode: this.props.DefaultMode
        }
        
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        e.preventDefault();
        this.setState({
            mode: e.target.value
        });
        this.props.changeMode(e.target.value);
    }
    
    render(){
        let { SETTING_OPTIONS } = this.props;
        return (
            <div>
            <form>
                <label>
                    <select onChange={this.onChange} value={this.state.mode}>
                        <option value={SETTING_OPTIONS.RenderHtml}>Render HTML</option>
                        <option value={SETTING_OPTIONS.ShowHtml}>Show HTML</option>
                    </select>
                </label>
            </form>
            </div>
        )
    }
}

export default Settings;