import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import classes from "./Department.module.css";
import { deleteDept, addDeptToUpdate } from '../../../../actions/deptActions.js'

class Department extends Component {

  deleteDepartment = (userId, deptId) => {
    this.props.deleteDept(userId, deptId)
  };

  addDeptToUpdate = dept => {
    this.props.addDeptToUpdate(dept);
    this.props.history.push("/update-department");
  };

  render() {
    // DELETE THIS CONSOLE LOG **************************************
    console.log("DEPARTMENT PROPS", this.props)

    const { department_id, name, user_id } = this.props.dept ;
    return (    
    <div className={classes.Title} key={department_id}>
      <div className={classes.Name}>{name}</div>
      <div className={classes.Empty}>
      <button onClick={() => this.addDeptToUpdate(this.props.dept)}>
            edit
          </button>
      </div>
      <div className={classes.Delete}><button onClick={() => {
        if (window.confirm('Are you sure you want to delete this department?'))
          this.deleteDepartment(
            user_id, 
            department_id
          )
      }}>X</button></div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    deleteDept: state.deptReducer.deleteDept,
    getIndivDept: state.deptReducer.getIndivDept
  }
}

export default connect(
  mapStateToProps,
  { deleteDept, addDeptToUpdate}
)(Department)
