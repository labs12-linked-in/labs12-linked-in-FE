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

        {/* <NavLink 
          activeClassName={classes.active} 
          className={classes.NavLink}
          to="/scrape" 
        >Scrape</NavLink> */}
    </div>
)

export default navBar