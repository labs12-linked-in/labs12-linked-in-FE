import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './App.module.css'

import Forms from './components/views/Forms/Forms';
import NewForm from './components/views/Forms/NewForm.js';
import Departments from './components/views/Departments/Departments'

class App extends Component {

  render() {
   return (
     <div className={classes.App}>
        <Switch>
          <Route path="/forms" component={Forms} />
          <Route path="/new-form" component={NewForm} />
          <Route path='/dept' component={Departments} />
        </Switch>

     </div>
   );
  }
}

export default App;
