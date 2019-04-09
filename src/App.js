import React, { Component } from 'react';
import './App.css';
import ItunesContainer from './containers/ItunesContainer.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ItunesContainer />
      </div>
    );
  }
}

export default App;
