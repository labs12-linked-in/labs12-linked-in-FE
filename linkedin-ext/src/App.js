import React, { Component } from 'react';
<<<<<<< HEAD
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
=======
import { Route, withRouter, Switch, Redirect }  from 'react-router-dom';
import axios from './axios-instance';
>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589

import classes from './App.module.css'

// import Home from './components/views/Home';
import Login from './components/views/Login';
import Forms from './components/views/Forms/Forms';
import NewForm from './components/views/Forms/NewForm.js';
import Departments from './components/views/Departments/Departments';
<<<<<<< HEAD
=======

>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589


class App extends Component {

<<<<<<< HEAD
=======
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
>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589
  render() {

    let routes = (
      <Switch>
        {/* <Route path='/' component={asyncAuth}  />
        <Redirect to='/' /> */}
      </Switch>
    )

    if (!this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='/dept' component={Departments} />
          <Redirect to='/form' />
        </Switch>
      )
    }

   return (
<<<<<<< HEAD
     <div className={classes.App}>
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          {/* <Route path="/home" render={(props) => <Home {...props} /> } /> */}
          <Route path='/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='api/departments' component={Departments} />
          <Redirect to='/forms' />
=======
     <div>
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          <Route path="/home" render={(props) => <Home {...props} /> } />
          <Route path='api/forms' component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path='api/departments' component={Departments} />
          <Redirect to='/home' component={Home} />
>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589
        </Switch>
     </div>
   );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token === null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignin: () => dispatch(actions.checkAuthState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
