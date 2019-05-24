import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getField, deleteField } from "../../../actions/formFieldActions.js";
import styled from "styled-components";

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140vh;
`;

const Cancel = styled.a`
  ${"" /* border: 1px solid red; */}
  max-width: 90%;
  width: 600px;
  margin: 20px 0;
  text-align: left;
  text-decoration: none;
  color: #0284b1;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    text-decoration: underline;
    color: #0284b1;
  }
`;

const Form = styled.form`
  ${"" /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  margin: 0 20px;
  max-width: 90%;
  width: 600px;
  ${"" /* max-height: 85%; */}

  input {
    ${"" /* border: 1px solid red; */}
    color: #0284b1;
    padding-left: 10px;
    width: 400px;
    height: 55px;
    font-size: 24px;
  }
`;

const Field = styled.div`
  ${"" /* border: 1px solid red; */}
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-top: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding: 10px 0;
`;

const FieldHeader = styled.div`
  ${"" /* border: 1px solid red; */}
  width: 250px;
  font-size: 20px;
  display: flex;
  justify-content: left;
`;

const FieldSelectDelete = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  margin-top: 5px;
  justify-content: space-around;
  width: 300px;
`;

const SelectField = styled.div`
  ${"" /* border: 1px solid red; */}

  select {
    width: 150px;
    height: 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const DeleteField = styled.button`
  ${"" /* border: 1px solid red; */}
  color: #b50707;
  border-color: #b50707;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #b50707;
    color: white;
  }
`;

const Buttons = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  align-items: center;
`;

const AddFieldBtn = styled.button`
  ${"" /* border: 1px solid red; */}
  height: 30px;
  width: 100px;
  margin: 20px 0;
  border: 1px solid #0284b1;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #0284b1;
  font-size: 14px;
  background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);
  font-weight: bold;

  &:hover {
    border: 1px solid #02659e;
    background-color: #0284b1;
    color: white;
  }
`;

const SubmitBtn = styled.button`
  ${"" /* border: 1px solid red; */}
  height: 30px;
  width: 100px;
  border: 1px solid #0284b1;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0284b1;
  color: white;
  font-size: 14px;
  background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);
  font-weight: bold;

  &:hover {
    border: 1px solid #02659e;
    background-image: linear-gradient(-180deg, #0284b1, #02659e 90%);
  }
`;
// ****************************************************

class UpdateIndivForm extends Component {
  state = {
    form: [],
    fields: [],
    fieldOptions: ["Job Title", "Name", "Location", "Skills", "Jobs", "Degrees"]
  };

  async componentDidMount() {
    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let id = url.searchParams.get("id");
    await this.props.getIndivForm(id);
    this.setState({ form: this.props.formToUpdate });
    await this.props.getField(id);
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
    console.log("form", this.state.form);
    await this.props.updateForm(this.state.form, this.state.fields);
    this.props.history.push("/forms");
  };

  cancel = () => {
    this.props.history.push("/forms");
  };

  render() {
    {
      console.log("state", this.state, "props", this.props);
    }
    if (this.state.form == null) {
      return <div> Loading</div>;
    } else {
      return (
        <PageWrapper>
          <Cancel href="" onClick={this.cancel}>
            &lt; back to Forms
          </Cancel>
          <Form>
            <h1>Update Form</h1>
            <input
              type="text"
              placeholder="Name your form..."
              name="name"
              value={this.state.form.name}
              onChange={this.handleChangeForm}
            />
            {this.state.fields.map((val, idx) => {
              let nameId = `name-${idx}`;
              return (
                <Field key={idx}>
                  <FieldHeader>
                    <label htmlFor={nameId}>{`Field #${idx + 1}`}</label>
                  </FieldHeader>
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
                      Delete
                    </DeleteField>
                  </FieldSelectDelete>
                </Field>
              );
            })}
            <Buttons>
              <AddFieldBtn>Add field</AddFieldBtn>
              <SubmitBtn onClick={e => this.updateForm(e)}>Submit</SubmitBtn>
            </Buttons>
          </Form>
        </PageWrapper>
      );
    }
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
