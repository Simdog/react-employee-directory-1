import React, { Component } from 'react';
import Header from './Header';
import Employees from './Employees';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Employees /> 
    </div>
  );
}
}

export default App;
