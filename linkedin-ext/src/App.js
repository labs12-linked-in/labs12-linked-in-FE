import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';

import Forms from './components/views/Forms.js';
import NewForm from './components/views/NewForm.js';
//import Auth from './auth/Auth.js';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;
    
   return (
     <div className={classes.App}>
      <header className={classes.Nav}>
        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/forms">Forms</NavLink>
        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/dept">Departments</NavLink>
        <NavLink activeClassName={classes.active} className={classes.NavLink}to="/scrape">Scrape</NavLink>
      </header>
      <button onClick={this.goTo.bind(this, 'home')}>Home</button>
      { !isAuthenticated() && ( <button onClick={this.login.bind(this)}>Log In</button> ) }
      { isAuthenticated() && ( <button onClick={this.logout.bind(this)}>Log Out</button> ) }

        <Switch>
          <Route path="/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
        </Switch>
     </div>
   );
  }
}

export default App;
