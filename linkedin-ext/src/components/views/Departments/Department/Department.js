import React from 'react';
import classes from './Department.module.css';


const department = (props) => (
    <div className={classes.Department}>
        <div>{props.name}</div>
        <button>Edit</button>
    </div>
)

export default department