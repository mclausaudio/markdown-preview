import React, { Component } from 'react';
import marked from 'marked';

import Header from '../components/Header'
import InputTextArea from './InputTextArea';
import Settings from './Settings';

import ResultTextArea from '../components/ResultTextArea';


const SETTING_OPTIONS = {
    RenderHtml: "RenderHtml",
    ShowHtml: "ShowHtml"
}

class Previewer extends Component {
    constructor(props){
        super(props)
        
        let startingText = "Heading\n=======\nSub-heading\n-----------\n### Another deeper heading\nParagraphs are separated by a blank line.\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~. \n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\n";
        
        this.state = {
            InputText: startingText,
            ResultText: marked(startingText),
            mode: SETTING_OPTIONS.RenderHtml
        }
        
        this.InputTextChange = this.InputTextChange.bind(this);
        this.onSettingChange = this.onSettingChange.bind(this);
    }
    
    InputTextChange(text){
        let markedText = marked(text)
        this.setState({
            InputText: text,
            ResultText: markedText
        })
    }
    
    onSettingChange(mode){
        this.setState({
            mode
        })
    }
    
    render(){
        return (
            <div className="container">
                <Header />
                <Settings 
                    changeMode={this.onSettingChange}
                    DefaultMode={this.state.mode}
                    SETTING_OPTIONS={SETTING_OPTIONS}
                />
                <div className="row text-center display-fields">
                    <InputTextArea
                        startingText={this.state.InputText}
                        InputTextChange={this.InputTextChange}
                    />
                    <ResultTextArea 
                        ResultText={this.state.ResultText}
                        SettingsMode={this.state.mode}
                    />
                </div>
                <footer>
                    Created by <a href="http://www.michaelclaus.io" target="_blank" rel="noopener noreferrer">Michael Claus</a> with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
                </footer>
            </div>
        )
    }
}

export default Previewer;