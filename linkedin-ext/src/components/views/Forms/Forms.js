import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Form from "./Form";

import classes from "./Forms.module.css";
import { getForm } from "../../../actions/formActions";

class Forms extends Component {
  componentDidMount() {
    console.log("forms mount");
    this.props.getForm();
  }

  render() {
    let form = <div>loading</div>;
    console.log(this.props.forms);
    if (this.props.forms) {
      form = (
        <div className={classes.Forms}>
          <NavBar />
          <div>Forms</div>
          <div className={classes.Title}>
            <div className={classes.Name}>Name</div>
            <div className={classes.Field}>Fields</div>
            <div className={classes.Empty} />
          </div>
          {this.props.forms.map(form => (
            <Form form={form} />
          ))}
          <Link to={"/new-form"}>
            <button>Create New</button>
          </Link>
        </div>
      );
    }

    return <div className={classes.Forms}>{form}</div>;
  }
}

const mapStateToProps = state => {
  const forms = state.formReducer.forms;
  return { forms };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  { getForm }
)(Forms);
