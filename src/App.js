import React, { Component } from 'react';

import './App.css';

import Previewer from './container/Previewer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Previewer />
      </div>
    );
  }
}

export default App;
