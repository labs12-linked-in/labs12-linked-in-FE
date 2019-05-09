import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Department from "./Department/Department";
import NavBar from "../NavBar/NavBar";
import classes from "./Departments.module.css";
import { getDept } from "../../../actions/deptActions";

class Departments extends Component {
  componentDidMount() {
    console.log("dep mount");
    this.props.getDept();
  }

  render() {
    let dept = <div>Loading</div>;
    console.log(this.props);
    if (this.props.depts) {
      dept = (
        <div className={classes.Departments}>
          <div>
            <NavBar />
          </div>
          <div>
            <div className={classes.bold}>Departments</div>
            <div className={classes.TopSeparation}>
              <div>Name</div>
              <div />
            </div>
            {this.props.depts.map(dept => (
              <Department dept={dept} />
            ))}
            <Link to={"/new-dept"}>
              <button>Create New</button>
            </Link>
          </div>
        </div>
      );
    }

    return <div>{dept}</div>;
  }
}

const mapStateToProps = state => {
  const depts = state.deptReducer.depts;
  return { depts };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  { getDept }
)(Departments);
