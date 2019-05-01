import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from '../../App.module.css';

import Home from './components/views/Home';


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
          <Route path="/" render={(props) => <Home {...props} /> } />
          <Route path="/home" render={(props) => <App {...props} /> } />
         
        </Switch>
     </div>
   );
  }
}

export default App;