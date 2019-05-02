import React, { Component } from 'react';
import { Route, withRouter, Switch, NavLink } from 'react-router-dom';
import axios from './axios-instance';


import Home from './components/views/Home';
import Login from './components/views/Login';
import Forms from './components/views/Forms/Forms';
import NewForm from './components/views/Forms/NewForm.js';
import Departments from './components/views/Departments/Departments';



class App extends Component {

componentDidMount() {
  axios
    .get('/api/auth/authenticate')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
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
          <Route path="/home" render={(props) => <Home {...props} /> } />
          <Route path="/" render={(props) => <App {...props} /> } /> 
          <Route path='api/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='api/departments' component={Departments} />
        </Switch>
     </div>
   );
  }
}

export default withRouter(App);