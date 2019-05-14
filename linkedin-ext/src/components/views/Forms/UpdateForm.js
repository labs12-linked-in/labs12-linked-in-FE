import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getField } from "../../../actions/formFieldActions.js";

class UpdateIndivForm extends Component {
  state = {
    form: this.props.formToUpdate,
    fields: []
  };

  async componentDidMount() {
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
    fields[e.target.dataset.id][e.target.className] = e.target.value;
    this.setState({ fields }, () => console.log(this.state.fields));
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
            let nameId = `name-${idx}`,
              selectedId = `selected-${idx}`;
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
                <label htmlFor={selectedId}>Selected</label>
                <input
                  type="text"
                  name={selectedId}
                  data-id={idx}
                  id={selectedId}
                  value={this.state.fields[idx].selected}
                  className="selected"
                  onChange={this.handleChangeField}
                />
                <button onClick={this.deleteField} value={idx}>
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
  { getIndivForm, updateForm, getField }
)(UpdateIndivForm);
