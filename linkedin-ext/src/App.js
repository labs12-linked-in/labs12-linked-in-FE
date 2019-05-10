import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./App.module.css";

import Login from "./components/views/Login";
import Forms from "./components/views/Forms/Forms";
import NewForm from "./components/views/Forms/NewForm";
import Departments from "./components/views/Departments/Departments";
import NewDepartment from "./components/views/Departments/NewDepartment/NewDepartment.js";
import UpdateIndivDept from "./components/views/Departments/Department/UpdateDept.js";
import AddField from "./components/views/FormFields/AddField";
import FormRules from "./components/views/Forms/FormRules";
import Scrape from "./components/views/Scrape/Scrape";
import EditScrape from "./components/views/Scrape/EditScrape";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/forms" component={Forms} />
          <Route path='/new-form' component={NewForm} />
          <Route path="/dept" component={Departments} />
          <Route path="/new-dept" component={NewDepartment} />
          <Route path="/add-field" component={AddField} />
          <Route path="/form-rules" component={FormRules} />
          <Route path="/scrape" component={Scrape} />
          <Route path="/edit-scrape" component={EditScrape} />
          <Route path="/update-department" component={UpdateIndivDept} />
        </Switch>
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
