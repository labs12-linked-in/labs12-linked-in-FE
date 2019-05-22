import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteForm, addFormToUpdate } from "../../../actions/formActions.js";
import styled from 'styled-components';

// **************** STYLED COMPONENETS ****************
const FormWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    ${'' /* background-color: red; */}
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Name = styled.div`
  ${'' /* border: 1px solid red; */}
  width: 150px;
`;

const FieldCount = styled.div`
  ${'' /* border: 1px solid red; */}
  width: 150px;
`;

const Delete = styled.button`
  color: #b50707;
  border-color: #b50707;
  width: 100px;
  
  &:hover {
    background-color: #b50707;
    color: white
  }
`;
// ****************************************************

class Form extends Component {

  deleteForm = (userId, formId) => {
    this.props.deleteForm(userId, formId);
  };

  addFormToUpdate = form => {
    this.props.addFormToUpdate(form);
    this.props.history.push("/update-form");
  };

  render() {
    console.log('form props',this.props)
    const { id, name, field_count } = this.props.form;
    return (
      <FormWrapper onClick={() => this.addFormToUpdate(this.props.form)}>
        <Name>{name}</Name>
        <FieldCount>Field Count: {field_count}</FieldCount>
        <div>
          <Delete
            onClick={(e) => {
              if (window.confirm("Are you sure you want to delete this form?"))
                this.deleteForm(
                  this.props.form.user_id,
                  this.props.form.form_id,
                  e.stopPropagation(),
                );
            }}
          >
            delete
          </Delete>
        </div>
      </FormWrapper>
    );
  }
}

export default connect(
  null,
  { deleteForm, addFormToUpdate }
)(Form);
