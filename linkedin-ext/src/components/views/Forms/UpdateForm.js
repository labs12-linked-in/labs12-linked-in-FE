import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getField, deleteField } from "../../../actions/formFieldActions.js";

class UpdateIndivForm extends Component {
  state = {
    form: this.props.formToUpdate,
    fields: []
  };

  async componentDidMount() {
    console.log(this.state, "1sa");
    console.log(this.props, "1pr");
    await this.props.getField(this.props.formToUpdate.form_id);
    this.setState({ fields: this.props.fieldsToUpdate });
    console.log(this.state, "2sa");
    console.log(this.props, "2pr");
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
    fields[e.target.dataset.id][e.target.className] = e.target.value;
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

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.form.name}
            onChange={this.handleChangeForm}
          />
          {this.state.fields.map((val, idx) => {
            let nameId = `name-${idx}`;
            return (
              <div key={idx}>
                <label htmlFor={nameId}>{`Field #${idx + 1}`}</label>
                <input
                  type="text"
                  name={nameId}
                  data-id={idx}
                  id={nameId}
                  value={this.state.fields[idx].name}
                  className="name"
                  onChange={this.handleChangeField}
                />
                <button
                  onClick={e => this.deleteField(e)}
                  value={this.state.fields[idx].id}
                >
                  Delete Field
                </button>
              </div>
            );
          })}
          <div>
            <button onClick={e => this.updateForm(e)}>Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getIndivForm: state.formReducer.getIndivForm,
    updateForm: state.formReducer.updateForm,
    isUpdating: state.formReducer.isUpdating,
    formToUpdate: state.formReducer.formToUpdate.form,
    fieldsToUpdate: state.formReducer.fieldsToUpdate
  };
};

export default connect(
  mapStateToProps,
  { getIndivForm, updateForm, getField, deleteField }
)(UpdateIndivForm);
