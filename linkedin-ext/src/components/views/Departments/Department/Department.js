import React from 'react';
import classes from './Department.module.css';

import NavBar from '../../NavBar/NavBar.js';

const department = (props) => (
    <div className={classes.Department}>
        <div>{props.name}</div>
        <button>Edit</button>
    </div>
)

export default department