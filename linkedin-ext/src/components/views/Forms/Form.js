import React, { Component } from "react";
import { connect } from 'react-redux'
import classes from "./Forms.module.css";
import { deleteForm } from '../../../actions/formActions.js'



class Form extends Component {

  deleteProject = (userId, formId) => {
    this.props.deleteForm(userId, formId)
  };

  render() {
    return (    
    <div className={classes.Title} key={this.props.form.id}>
      <div className={classes.Name}>{this.props.form.name}</div>
      <div className={classes.Field}>{this.props.form.field_count}</div>
      <div className={classes.Empty}><button>edit</button></div>
      <div className={classes.Delete}><button onClick={() => {
        if (window.confirm('Are you sure you want to delete this form?'))
        console.log(this.props)
          this.deleteProject(
            this.props.form.user_id, 
            this.props.form.form_id
          )

      }}>X</button></div>
    </div>
    )
  }
}

export default connect(
  null,
  { deleteForm }
)(Form)
