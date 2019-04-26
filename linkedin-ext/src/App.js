import React, { Component } from 'react';
import classes from './App.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home';
import Forms from './components/views/Forms.js';
import NewForm from './components/views/NewForm.js';
import Departments from './components/views/Departments/Departments'


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
      <button onClick={this.goTo.bind(this, '/')}>Home</button>
      { !isAuthenticated() && ( <button onClick={this.login.bind(this)}>Log In</button> ) }
      { isAuthenticated() && ( <button onClick={this.logout.bind(this)}>Log Out</button> ) }

        <Switch>
          <Route path="/" render={(props) => <Home {...props} /> } />
          <Route path="/app" render={(props) => <App {...props} /> } />
          <Route path="/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
          <Route path='/dept' component={Departments} />
        </Switch>
     </div>
   );
  }
}

export default App;
