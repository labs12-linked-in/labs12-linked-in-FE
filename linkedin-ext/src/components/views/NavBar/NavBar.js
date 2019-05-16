import React from 'react';
import {NavLink} from 'react-router-dom'

import classes from './NavBar.module.css'

const navBar = (props) => (
    <div className={classes.Nav}>
    <NavLink 
          activeClassName={classes.active} 
          className={classes.NavLink}
          to="/forms" 
        >Forms</NavLink>
  
        {/* <NavLink 
          activeClassName={classes.active} 
          className={classes.NavLink}
          to="/dept" 
        >Departments</NavLink> */}
    </div>
)

export default navBar