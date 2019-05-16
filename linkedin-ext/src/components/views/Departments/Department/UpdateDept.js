// import React, { Component } from "react";
// import { connect } from "react-redux";

// import { getIndivDept, updateDept } from "../../../../actions/deptActions.js";

// class UpdateIndivDept extends Component {
//   state = {
//     departments: {
//       name: "",
//       admin_email: "",
//       supervisor_email: "",
//       manager_email: "",
//       director_email: "",
//       vp_email: ""
//     }
//   };

//   componentDidMount() {
//     this.setState({
//       departments: {
//         ...this.props.deptToUpdate.dept
//       }
//     });
//   }

//   handleChange = e => {
//     this.setState({
//       departments: {
//         ...this.state.departments,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   updateDept = (e, id) => {
//     const updatedDept = {
//       name: this.state.departments.name,
//       admin_email: this.state.departments.admin_email,
//       supervisor_email: this.state.departments.supervisor_email,
//       manager_email: this.state.departments.manager_email,
//       director_email: this.state.departments.director_email,
//       vp_email: this.state.departments.vp_email
//     };
//     e.preventDefault();
//     this.props.updateDept(
//       this.props.deptToUpdate.dept.department_id,
//       updatedDept
//     );
//     this.setState({
//       departments: {
//         name: "",
//         admin_email: "",
//         supervisor_email: "",
//         manager_email: "",
//         director_email: "",
//         vp_email: ""
//       }
//     });
//     this.props.history.push("/dept");
//   };

//   render() {
//     console.log("STATE", this.state);
//     console.log("PROPS", this.props);

//     const {
//       name,
//       admin_email,
//       supervisor_email,
//       manager_email,
//       director_email,
//       vp_email
//     } = this.state.departments;
//     const { department_id } = this.props.depInfo[0];
//     if (this.state.departments.name !== "") {
//       return (
//         <div>
//           <form>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//             <input
//               type="text"
//               name="admin_email"
//               value={admin_email}
//               onChange={this.handleChange}
//               placeholder={admin_email}
//             />
//             <input
//               type="text"
//               name="supervisor_email"
//               value={supervisor_email}
//               onChange={this.handleChange}
//               placeholder={supervisor_email}
//             />
//             <input
//               type="text"
//               name="manager_email"
//               value={manager_email}
//               onChange={this.handleChange}
//               placeholder={manager_email}
//             />
//             <input
//               type="text"
//               name="director_email"
//               value={director_email}
//               onChange={this.handleChange}
//               placeholder={director_email}
//             />
//             <input
//               type="text"
//               name="vp_email"
//               value={vp_email}
//               onChange={this.handleChange}
//               placeholder={vp_email}
//             />
//             <div>
//               <button onClick={e => this.updateDept(e, department_id)}>
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       );
//     }

//     return <div>Loading</div>;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     getIndivDept: state.deptReducer.getIndivDept,
//     updateDept: state.deptReducer.updateDept,
//     isUpdating: state.deptReducer.isUpdating,
//     depInfo: state.deptReducer.depts,
//     deptToUpdate: state.deptReducer.deptToUpdate
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getIndivDept, updateDept }
// )(UpdateIndivDept);
