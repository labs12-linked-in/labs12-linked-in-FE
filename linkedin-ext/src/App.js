import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./App.module.css";

// import Home from './components/views/Home';
import Login from "./components/views/Login";
import Forms from "./components/views/Forms/Forms";
import NewForm from "./components/views/Forms/NewForm.js";
import Departments from "./components/views/Departments/Departments";
import UserHome from "./components/views/UserHome";

class App extends Component {
  componentDidMount() {
    console.log("mounted");
    // axios
    //   .get("/api/auth/authenticate")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    const cookies = document.cookie;
    let session;
    cookies
      .split(";")
      .filter(sess => sess.includes("session="))
      .forEach(
        ses => (session = ses.includes("session=") ? ses.split("=")[1] : null)
      );
    if (session && session !== "null") {
      const decodedSession = JSON.parse(atob(session));
      console.log("hi", decodedSession.passport);
    }

    // logout = () => {
    //   document.cookie = 'session=null';
    //   document.cookie = 'session.sig=null';
    // }
  }
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/api/auth/login" component={Login} />
          {/* <Route path="/home" render={(props) => <Home {...props} /> } /> */}
          <Route path="/api/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
          <Route path="/dept" component={Departments} />
          <Route path="/api/user" component={UserHome} />
          {/* <Redirect to="/api/auth/login" /> */}
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
