import React, { Component } from 'react';
import './App.css';
import LaunchList from './components/LaunchList/LaunchList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <LaunchList></LaunchList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
