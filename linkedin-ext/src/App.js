import React, { Component } from 'react';
import { Route, withRouter, Switch} from 'react-router-dom';


import Home from './components/views/Home';
import Login from './components/views/Login';


class App extends Component {

  render() {
    return (
        <Switch>
          <Route  path='/api/auth/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
    )
  }
}

export default withRouter(App);