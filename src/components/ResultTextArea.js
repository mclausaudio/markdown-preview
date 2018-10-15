import React, { Component } from 'react'

const ResultTextArea = (props) => {

        let { SettingsMode, ResultText } = props
        
        let style={
            overflow: 'scroll',
            backgroundColor: 'white'
        }

        return (
            <div className="col-md-5 border" style={style}>
                {SettingsMode === "RenderHtml" ? (
                    <div 
                        id="preview"

                        dangerouslySetInnerHTML={{__html : ResultText}}>
                    </div>   
                ) : (
                    <div
                        id="preview"
                    >
                    {ResultText}
                    </div>
                )}
            </div>
        ) 
}

// class ResultTextArea extends Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         let { SettingsMode, ResultText } = this.props
        
//         let style={
//             overflow: 'scroll'
//         }

//         return (
//             <div className="col-md-5" style={style}>
//                 {SettingsMode === "RenderHtml" ? (
//                     <div 
//                         id="preview"

//                         dangerouslySetInnerHTML={{__html : ResultText}}>
//                     </div>   
//                 ) : (
//                     <div
//                         id="preview"
//                     >
//                     {ResultText}
//                     </div>
//                 )}
//             </div>
//         ) 
//     }

// }

export default ResultTextArea;