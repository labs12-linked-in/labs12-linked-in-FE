import React, { Component } from 'react';
import { Route, withRouter, Switch, NavLink } from 'react-router-dom';


import Home from './components/views/Home';
import Login from './components/views/Login';



class App extends Component {


  render() {

   return (
     <div>
      <header>
        <NavLink to="/forms">Forms</NavLink>
        <NavLink to="/dept">Departments</NavLink>
        <NavLink to="/scrape">Scrape</NavLink>
      </header>
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          <Route path="/" render={(props) => <Home {...props} /> } />
          <Route path="/home" render={(props) => <App {...props} /> } /> 
        </Switch>
     </div>
   );
  }
}

export default withRouter(App);