import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';

import Forms from './views/Forms.js';

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
        <Switch>
          <Route path="/forms" component={Forms} />
        </Switch>

     </div>
   );
  }
}

export default App;
