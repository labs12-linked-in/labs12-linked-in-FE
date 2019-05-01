import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import classes from './App.module.css'

import Forms from './components/views/Forms/Forms';
import NewForm from './components/views/Forms/NewForm.js';
import Departments from './components/views/Departments/Departments'
import * as actions from './store/actions/index'

class App extends Component {

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
     <div className={classes.App}>
        <Switch>
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
    isAuthenticated: state.auth.token === null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignin: () => dispatch(actions.checkAuthState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
