import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./App.module.css";

import Login from "./components/views/Login";
import Forms from "./components/views/Forms/Forms";
import NewForm from "./components/views/Forms/NewForm.js";
import Departments from "./components/views/Departments/Departments";
import UserHome from "./components/views/UserHome";
import AddField from "./components/views/Forms/AddField";

class App extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/api/auth/login" component={Login} />
          <Route path="/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
          <Route path="/dept" component={Departments} />
          <Route path="/api/user" component={UserHome} />
          <Route path="/addfield" component={AddField} />
          <Redirect to="/api/auth/login" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignin: () => dispatch(actions.checkAuthState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
