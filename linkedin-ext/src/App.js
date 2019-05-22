import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from './components/views/Homepage.js'
import Login from "./components/views/Login.js";
import Forms from "./components/views/Forms/Forms.js";
import NewForm from "./components/views/Forms/NewForm.js";
import AddField from "./components/views/FormFields/AddField.js";
import Checkout from './components/views/Checkouts/Checkout.js';
import UpdateIndivForm from './components/views/Forms/UpdateForm.js';
import NavBar from './components/views/NavBar/NavBar.js';
import Footer from './components/views/Footer.js';

// *************************************
// NOTE - everything related to departments and form rules throughout this codebase has been commented out. We decided it was out of scope but wanted to leave it for another group if they continued with the project.
// *************************************

// import FormRules from "./components/views/Forms/FormRules.js";
// import Departments from "./components/views/Departments/Departments.js";
// import NewDepartment from "./components/views/Departments/NewDepartment/NewDepartment.js";
// import UpdateIndivDept from "./components/views/Departments/Department/UpdateDept.js";

class App extends Component {
    render() {
      return (
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" exact component={Login} />
            <Route path="/forms" component={Forms} />
            <Route path='/new-form' component={NewForm} />
            <Route path="/update-form" component={UpdateIndivForm} />
            <Route path="/add-field" component={AddField} />
            <Route path='/vip' component={Checkout} />
            {/* <Route path="/account-type" component={Stripe} /> */}
            {/* <Route path="/dept" component={Departments} /> */}
            {/* <Route path="/new-dept" component={NewDepartment} /> */}
            {/* <Route path="/form-rules" component={FormRules} /> */}
            {/* <Route path="/update-department" component={UpdateIndivDept} /> */}
          </Switch>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
