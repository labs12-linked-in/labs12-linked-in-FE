import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getField, deleteField } from "../../../actions/formFieldActions.js";
import styled from "styled-components";
import Spinner from "../../Spinner/Spinner";

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
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
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  margin: 0 20px 120px 20px;
  max-width: 90%;
  width: 600px;

  input {
    ${'' /* border: 1px solid red; */}
    color: #0284b1;
    padding-left: 10px;
    width: 400px;
    height: 55px;
    font-size: 24px;

    @media (max-width: 600px) {
      width: 90%;
      border: 1px solid grey;
    }
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

  @media (max-width: 600px) {
    width: 90%;
  }
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
    background-color: white;
  }
`;

const DeleteField = styled.button`
  ${"" /* border: 1px solid red; */}
  color: #b50707;
  border: 1px solid #b50707;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  background-color: white;
  box-shadow: none;

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

 {/* Add field button commented out until it's made to work properly */}
// const AddFieldBtn = styled.button`
//   ${"" /* border: 1px solid red; */}
//   height: 30px;
//   width: 100px;
//   margin: 20px 0;
//   border: 1px solid #0284b1;
//   margin-right: 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   color: #0284b1;
//   font-size: 14px;
//   background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);
//   font-weight: bold;

//   &:hover {
//     border: 1px solid #02659e;
//     background-color: #0284b1;
//     color: white;
//   }
// `;

const SubmitBtn = styled.button`
  ${"" /* border: 1px solid red; */}
  height: 30px;
  width: 100px;
  border: 1px solid #0284b1;
  margin: 20px 0;
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


  componentDidUpdate(prevProps) {
    if (this.props.fieldsToUpdate !== prevProps.fieldsToUpdate) {
      console.log("it fire");
      this.setState({
        form: this.props.formToUpdate,
        fields: this.props.fieldsToUpdate
      });
    }
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

  afterFormDelete = () => {
    let url_string = window.location.href; //window.location.href
    let url = new URL(url_string);
    let id = url.searchParams.get("id");
    if(this.props.forms.isDeleting === false) {
      this.props.getIndivForm(id);
      this.props.getField(id);
    }
  }

  render() {
    if (
      this.props.forms.gettingField === true &&
      this.state.form.length === 0 &&
      this.state.fields.length === 0 &&
      this.props.forms.isDelete === true) {
      return <div> <Spinner /></div>;
    } else if (
      this.props.forms.gettingField === false &&
      this.state.form.length !== 0 &&
      this.state.fields.length !== 0 &&
      this.props.forms.isDelete === false) {
      return (
        <PageWrapper>
          <Cancel href="" onClick={this.cancel}>
            &lt; back to Templates
          </Cancel>
          <Form>
            <h1>Update Template</h1>
            <input
              type="text"
              placeholder="Name your template..."
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
                      onClick={e => {
                        if (window.confirm("Are you sure you want to delete this field?"))
                        this.deleteField(e)
                        this.props.initialForm()
                        this.props.initialField()
                        this.afterFormDelete()
                        }}
                      value={this.state.fields[idx].id}
                    >
                      Delete
                    </DeleteField>
                  </FieldSelectDelete>
                </Field>
              );
            })}
            <Buttons>
              {/* Add field button commented out until it's made to work properly */}
              {/* <AddFieldBtn>Add field</AddFieldBtn> */}
              <SubmitBtn onClick={e => this.updateForm(e)}>Submit</SubmitBtn>
            </Buttons>
          </Form>
        </PageWrapper>
      );
    } else {
      return (
        <div><Spinner /></div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    formToUpdate: state.formReducer.formToUpdate,
    fieldsToUpdate: state.formReducer.fieldsToUpdate,
    forms: state.formReducer
  };
};

export default connect(
  mapStateToProps,
  { getIndivForm, updateForm, getField, deleteField }
)(UpdateIndivForm);
