import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Proptypes } from 'prop-types';
import styled from 'styled-components';

import { authWrapper } from './auth/AuthWrapper';
import Login from './components/views/Login';
import Verifying from './components/views/Verifying';
import Home from './components/views/Home';
import { getUserData } from './auth/actions';




const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

class App extends Component {

  //static propTypes = {
    //getUserData: Proptypes.func.isRequired,
    //history: Proptypes.object.isRequired,
    //location: Proptypes.object.isRequired,
  //}

  componentWillMount() {
    if (window.sessionStorage.getItem('token')) {
      const redirect = this.props.location.pathname;
      this.props.getUserData(
        () => {
          if (redirect !== this.props.location.pathname) {
            this.props.history.push(redirect);
          }
        }
      )
    }
  }

  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route  path='/login' component={Login} />
          <Route path='/home' component={authWrapper(Home)} />
          <Route path='/verifying' component={Verifying} />
          <Redirect from='/' to='/home' />
        </Switch>
      </AppWrapper>
    )
  }
}

export default withRouter(connect(null, { getUserData })(App));