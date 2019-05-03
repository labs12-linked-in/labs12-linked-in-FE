import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect }  from 'react-router-dom';
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
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          <Route path="/home" render={(props) => <Home {...props} /> } />
          <Route path='api/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='api/departments' component={Departments} />
          <Redirect to='/home' component={Home} />
        </Switch>
     </div>
   );
  }
}

export default withRouter(App);