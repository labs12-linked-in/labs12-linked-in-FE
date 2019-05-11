import React, { Component } from "react";
import { connect } from 'react-redux'
import classes from "./Form.module.css";
import { deleteForm } from '../../../actions/formActions.js'
import { editForm } from '../../../actions/actions'

class Form extends Component {
  

  deleteProject = (userId, formId) => {
    this.props.deleteForm(userId, formId)
  };

  editForm = () => {
    console.log(this.props)
    // this.props.history.push('/editform?formid=' + this.props.form.id)
  }

  render() {
    return (    
    <div className={classes.Title} key={this.props.form.id}>
      <div className={classes.Name}>{this.props.form.name}</div>
      <div className={classes.Field}>{this.props.form.field_count}</div>
      <div className={classes.Empty}><button onClick={this.editForm}>edit</button></div>
      <div className={classes.Delete}><button onClick={() => {
        if (window.confirm('Are you sure you want to delete this form?'))
        // console.log("FORMS PROPS: ", this.props)
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
