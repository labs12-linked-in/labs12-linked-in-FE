import React from "react";
import classes from "./Forms.module.css";

const form = props => (
  <div className={classes.Title} key={props.form.id}>
    <div className={classes.Name}>{props.form.name}</div>
    <div className={classes.Field}>{props.form.field_count}</div>
    <div className={classes.Empty}>edit</div>
  </div>
);

export default form;
