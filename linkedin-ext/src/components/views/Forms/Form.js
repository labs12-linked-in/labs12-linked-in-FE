import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteForm, addFormToUpdate } from "../../../actions/formActions.js";

class Form extends Component {
  

  deleteForm = (userId, formId) => {
    this.props.deleteForm(userId, formId);
  };

  addFormToUpdate = form => {
    this.props.addFormToUpdate(form);
    this.props.history.push("/update-form");
  };

  render() {
    const { id, name, field_count } = this.props.form;
    return (
      <div>
        <div>{name}</div>
        <div>{field_count}</div>
        <div>
          <button onClick={() => this.addFormToUpdate(this.props.form)}>
            edit
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this form?"))
                this.deleteForm(
                  this.props.form.user_id,
                  this.props.form.form_id
                );
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteForm, addFormToUpdate }
)(Form);
