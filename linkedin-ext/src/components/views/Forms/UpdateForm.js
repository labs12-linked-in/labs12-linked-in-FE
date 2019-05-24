import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getField, deleteField } from "../../../actions/formFieldActions.js";
import styled from 'styled-components';

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cancel = styled.a`
  ${'' /* border: 1px solid red; */}
  max-width: 1100px;
  width: 100%;
  margin: 20px 0;
  padding-left: 20px; 
  text-align: left;
  text-decoration: none;

  &:hover { 
    text-decoration: underline 
  }
`;

const FormWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  max-width: 1060px;
  width: 100%;
  height: 500px;
  margin: 0 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Form = styled.form`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: left;
  
  input {
    ${'' /* border: 1px solid red; */}
    color: #0284b1;
    padding-left: 10px;
    width: 300px;
    height: 50px;
    font-size: 24px;
  };
`;

const Field = styled.div`
  ${'' /* border: 1px solid red; */}
  margin-top: 20px; 
`;

const FieldSelectDelete = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  margin-top: 5px;
`;

const SelectField = styled.div`
  ${'' /* border: 1px solid red; */}

  select {
    width: 150px;
    height: 25px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const DeleteField = styled.button`
  ${'' /* border: 1px solid red; */}
  margin-left: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: red;
    border-color: red;
  }
`;

const AddFieldBtn = styled.button`
  ${'' /* border: 1px solid red; */}
  height: 30px;
  width: 75px;
  margin: 20px 0;
  border: 1px solid #0284b1;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0284b1;
  color: white;
  font-size: 14px;
  background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);

  &:hover {
    border: 1px solid #02659e;
    background-image: linear-gradient(-180deg, #0284b1, #02659e 90%);
  }
`;

const SubmitBtn = styled.button`
  ${'' /* border: 1px solid red; */}
  height: 30px;
  width: 100px;
  border: 1px solid #0284b1;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0284b1;
  color: white;
  font-size: 14px;
  background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);

  &:hover {
    border: 1px solid #02659e;
    background-image: linear-gradient(-180deg, #0284b1, #02659e 90%);
  }
`;
// ****************************************************

class UpdateIndivForm extends Component {
  state = {
    form: this.props.formToUpdate,
    fields: [],
    fieldOptions: ["Job Title", "Name", "Location"]
  };

  async componentDidMount() {
    console.log("update form props", this.props)
    await this.props.getField(this.props.formToUpdate.form_id);
    this.setState({ fields: this.props.fieldsToUpdate });
  }

  handleChangeForm = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleChangeField = e => {
    let fields = [...this.state.fields];
    fields[e.target.dataset.key].name = e.target.value;
    this.setState({ fields }, () => console.log(this.state.fields));
  };

  deleteField = e => {
    e.preventDefault();
    this.props.deleteField(e.target.value);
  };

  updateForm = async (e, id) => {
    e.preventDefault();
    await this.props.updateForm(this.state.form, this.state.fields);
    this.props.history.push("/forms");
  };

  cancel = () => {
    this.props.history.push("/forms");
  };

  render() {
    return (
      <PageWrapper>
        <Cancel href="" onClick={this.cancel}>
          &lt; Forms
        </Cancel>
        <FormWrapper>
          <Form>
            <input
              type="text"
              name="name"
              value={this.state.form.name}
              onChange={this.handleChangeForm}
            />
            {this.state.fields.map((val, idx) => {
              let nameId = `name-${idx}`;
              return (
                <Field key={idx}>
                  <label htmlFor={nameId}>{`Field #${idx + 1}`}</label>
                  <FieldSelectDelete>
                    <SelectField>
                      <select
                      data-key={idx}
                      value={this.state.fields[idx].name}
                      onChange={this.handleChangeField}
                    >
                      <option value="" disabled>
                        {"Select Field"}
                      </option>
                      {this.state.fieldOptions.map(option => {
                        return (
                          <option
                            type="text"
                            name={nameId}
                            data-key={idx}
                            id={nameId}
                            value={option}
                            className="name"
                          >
                            {option}
                          </option>
                        );
                      })}
                    </select>
                    </SelectField>
                    <DeleteField
                      onClick={e => this.deleteField(e)}
                      value={this.state.fields[idx].id}
                    >
                      Delete Field
                    </DeleteField>
                  </FieldSelectDelete>
                </Field>
              );
            })}
            <AddFieldBtn>Add field</AddFieldBtn>
            <SubmitBtn onClick={e => this.updateForm(e)}>Submit</SubmitBtn>
          </Form>
        </FormWrapper>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    formToUpdate: state.formReducer.formToUpdate,
    fieldsToUpdate: state.formReducer.fieldsToUpdate
  };
};

export default connect(
  mapStateToProps,
  { getIndivForm, updateForm, getField, deleteField }
)(UpdateIndivForm);
