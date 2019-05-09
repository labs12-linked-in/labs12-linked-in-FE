import React, { Component } from "react";
import { connect } from 'react-redux'
import classes from "./Department.module.css";
import { deleteDept } from '../../../../actions/deptActions.js'

class Department extends Component {

  deleteDepartment = (userId, deptId) => {
    this.props.deleteDept(userId, deptId)
  };

  render() {
    return (    
    <div className={classes.Department} key={this.props.dept.id}>
      <div className={classes.Name}>{this.props.dept.name}</div>
      <div className={classes.Empty}><button>edit</button></div>
      <div className={classes.Delete}><button onClick={() => {
        if (window.confirm('Are you sure you want to delete this department?'))
        // console.log("DEPT PROPS: ", this.props)
          this.deleteDepartment(
            this.props.dept.user_id, 
            this.props.dept.department_id
          )
      }}>X</button></div>
    </div>
    )
  }
}

export default connect(
  null,
  { deleteDept }
)(Department)
