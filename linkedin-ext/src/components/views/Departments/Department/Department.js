// import React, { Component } from "react";
// import { connect } from 'react-redux'
// import { deleteDept, addDeptToUpdate } from '../../../../actions/deptActions.js'

// class Department extends Component {

//   deleteDepartment = (userId, deptId) => {
//     this.props.deleteDept(userId, deptId)
//   };

//   addDeptToUpdate = dept => {
//     this.props.addDeptToUpdate(dept);
//     this.props.history.push("/update-department");
//   };

//   render() {
//     const { department_id, name, user_id } = this.props.dept ;
//     return (    
//     <div>
//       <div>{name}</div>
//       <div>
    //       <button onClick={() => this.addDeptToUpdate(this.props.dept)}>
    //             edit
    //       </button>
//       </div>
//       <div><button onClick={() => {
//         if (window.confirm('Are you sure you want to delete this department?'))
//           this.deleteDepartment(
//             user_id, 
//             department_id
//           )
//       }}>X</button></div>
//     </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     deleteDept: state.deptReducer.deleteDept,
//     getIndivDept: state.deptReducer.getIndivDept
//   }
// }

// export default connect(
//   mapStateToProps,
//   { deleteDept, addDeptToUpdate}
// )(Department)
