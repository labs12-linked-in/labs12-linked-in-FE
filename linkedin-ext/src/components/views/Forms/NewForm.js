import React, { Component } from "react";
import { connect } from "react-redux";
import { addForm } from "../../../actions/formActions.js";
import styled from "styled-components";

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

class NewForm extends Component {
  state = {
    fields: [{ name: "" }],
    name: "",
    fieldOptions: ["Job Title", "Name", "Location", "Skills", "Jobs", "Degrees"]
  };

  handleChange = e => {
    if (e.target.name != "name") {
      let fields = [...this.state.fields];
      fields[e.target.dataset.key].name = e.target.value;
      this.setState({ fields }, () => console.log(this.state.fields));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  deleteField = e => {
    e.preventDefault();
    let fields = [...this.state.fields];
    fields.splice(e.target.value, 1);
    this.setState({ fields }, () =>
      console.log(this.state.fields, "after delete")
    );
  };

  addField = e => {
    e.preventDefault();
    this.setState(prevState => ({
      fields: [...prevState.fields, { name: "" }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addForm(this.state);
    this.props.history.push("/forms");
  };

  cancel = () => {
    this.props.history.push("/forms");
  };

  render() {
    let { name, fields } = this.state;
    return (
      <PageWrapper>
        <Cancel href="" onClick={this.cancel}>
          &lt; back to Templates
        </Cancel>
        <Form>
          <h1>New Template</h1>
          <input
            type="text"
            placeholder="Name your template..."
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          {fields.map((val, idx) => {
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
                      onChange={this.handleChange}
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
                  <DeleteField onClick={this.deleteField} value={idx}>
                    Delete
                  </DeleteField>
                </FieldSelectDelete>
              </Field>
            );
          })}
          <Buttons>
            <AddFieldBtn onClick={this.addField}>Add field</AddFieldBtn>
            <SubmitBtn onClick={this.handleSubmit}>Submit</SubmitBtn>
          </Buttons>
        </Form>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addForm: newForm => dispatch(addForm(newForm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewForm);
