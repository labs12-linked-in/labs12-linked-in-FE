import React, { Component } from "react";
import { connect } from "react-redux";
import { addForm } from "../../../actions/formActions.js";

import classes from "./NewForm.module.css";

class NewForm extends Component {
  state = {
    fields: [{ name: "" }],
    name: "",
    fieldOptions: ["Job Title", "Name", "Location"]
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
      <div className={classes.Body}>
        <div className={classes.Header}>
          <div className={classes.Cancel} onClick={this.cancel}>
            Cancel
          </div>
        </div>

        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <button onClick={this.addField}>Add new form field</button>
          {fields.map((val, idx) => {
            let nameId = `name-${idx}`;
            return (
              <div key={idx}>
                <label htmlFor={nameId}>{`Field #${idx + 1}`}</label>
                <div>
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
                </div>

                <button onClick={this.deleteField} value={idx}>
                  Delete Field
                </button>
              </div>
            );
          })}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
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
