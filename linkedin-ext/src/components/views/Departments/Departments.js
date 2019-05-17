// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// import Department from "./Department/Department";
// import NavBar from "../NavBar/NavBar";
// import { getDept } from "../../../actions/deptActions";

// class Departments extends Component {
//   componentDidMount() {
//     this.props.getDept();
//   }

//   render() {
//     let dept = <div>Loading</div>;
//     if (this.props.depts) {
//       dept = (
//         <div >
//           <div>
//             <NavBar />
//           </div>
//           <div>
//             <divDepartments</div>
//             <div>
//               <div>Name</div>
//               <div />
//             </div>
//             {this.props.depts.map(dept => (
//               <Department dept={dept} history={this.props.history}  />
//             ))}
//             <Link to={"/new-dept"}>
//               <button>Create New</button>
//             </Link>
//           </div>
//         </div>
//       );
//     }

//     return <div>{dept}</div>;
//   }
// }

// const mapStateToProps = state => {
//   const depts = state.deptReducer.depts;
//   return { depts };
// };


// export default connect(
//   mapStateToProps,
//   { getDept }
// )(Departments);
