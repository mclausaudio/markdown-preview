import React from 'react'

const Header = (props)=> {
    return (
    <div>
        <h1>Markdown Previewer</h1>
        <h2>A simple and fast way to generate HTML</h2>
        <p>Quickly generate HTML by using 'shortcuts' in text area on the left side of the screen.  The text area's value will be 'translated' with <a href="https://marked.js.org" target="_blank" rel="noopener noreferrer">MarkedJS</a> and displayed in the area on the right.  You can change how the result is displayed by adjusting the disaply mode below.</p>
    </div>
    )
}

export default Header;