import React, { Component } from 'react';
import './App.css';

import LaunchList from './components/LaunchList/LaunchList';

import Card from "./components/Card/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card></Card>
        <hr />
        <LaunchList></LaunchList>
      </div>
    );
  }
}

export default App;
