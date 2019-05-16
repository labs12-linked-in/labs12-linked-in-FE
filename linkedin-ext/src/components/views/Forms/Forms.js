import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Form from "./Form";
import { connect } from "react-redux";
import { getForm } from "../../../actions/formActions.js";

class Forms extends Component {
  componentDidMount() {
    this.props.getForm(localStorage.getItem("id"));
  }

  newForm = () => {
    this.props.history.push("/new-form");
  };

  render() {
    let form = <div>loading</div>;

    if (!this.props.fetching && this.props.forms !== null) {
      form = (
        <div>
          <NavBar />
          <div>Forms</div>
          <div>
            <div>Name</div>
            <div>Fields</div>
          </div>
          <div>
            {this.props.forms.map(form => (
              <Form form={form} history={this.props.history} />
            ))}
          </div>
          <button onClick={this.newForm}>Create New</button>
        </div>
      );
    } else if (!this.props.fetching && this.props.forms === null) {
      form = (
        <div>
          <NavBar />
          <div>Forms</div>
          <div>No Form was found please create a Form</div>
          <button onClick={this.newForm}>Create New</button>
        </div>
      );
    }

    return <div>{form}</div>;
  }
}

const mapStateToProps = state => {
  return {
    forms: state.formReducer.forms,
    getForm: state.formReducer.getForm
  };
};

export default connect(
  mapStateToProps,
  { getForm }
)(Forms);
