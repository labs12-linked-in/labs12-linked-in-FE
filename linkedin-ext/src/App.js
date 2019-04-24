import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
   return (
     <div className="App">
      <header>
        <NavLink to="/forms">Forms</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/dept">Departments</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/scrape">Scrape</NavLink>
      </header>
     
     </div>
   );
  }
}

export default App;
