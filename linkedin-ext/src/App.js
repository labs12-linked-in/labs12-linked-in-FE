import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import classes from './App.module.css'

import Forms from './components/views/Forms/Forms';
import NewForm from './components/views/Forms/NewForm.js';
import Departments from './components/views/Departments/Departments'
import Auth from './components/Auth/Auth'

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path='/' component={Auth} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
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
     <div className={classes.App}>
        {routes}
     </div>
   );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default  withRouter(connect(mapStateToProps)(App));
