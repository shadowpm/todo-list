import React, { Component } from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Todo List</h2>
          <CreateTaskComponent />
      </div>
    );
  }
}

export default App;
