import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

import classes from './App.module.css'

// import Home from './components/views/Home';
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
     <div className={classes.App}>
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          {/* <Route path="/home" render={(props) => <Home {...props} /> } /> */}
          <Route path='/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='/dept' component={Departments} />
          <Redirect to='/forms' />
        </Switch>
     </div>
   );
  }
}


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignin: () => dispatch(actions.checkAuthState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
