import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './App.module.css'

import Forms from './components/views/Forms.js';
import NewForm from './components/views/NewForm.js';

class App extends Component {
  render() {
   return (
     <div className={classes.App}>
      <header className={classes.Nav}>
        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/forms">Forms</NavLink>
  
        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/dept">Departments</NavLink>

        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/scrape">Scrape</NavLink>
      </header>
        <Switch>
          <Route path="/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
        </Switch>

     </div>
   );
  }
}

export default App;
