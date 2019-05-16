import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteForm, addFormToUpdate } from "../../../actions/formActions.js";
import styled from 'styled-components';

const FormWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
`;

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
      <FormWrapper>
        <div>Name: {name}</div>
        <div>Field Count: {field_count}</div>
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
      </FormWrapper>
    );
  }
}

export default connect(
  null,
  { deleteForm, addFormToUpdate }
)(Form);
