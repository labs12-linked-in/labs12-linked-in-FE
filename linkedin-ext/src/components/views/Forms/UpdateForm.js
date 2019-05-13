import React, { Component } from "react";
import { connect } from "react-redux";

import { getIndivForm, updateForm } from "../../../actions/formActions.js";
import { getFields } from "../../../actions/formFieldActions.js";

class UpdateIndivForm extends Component {
  state = {
    forms: this.props.formInfo
  };

  componentDidMount() {
    this.props.getFields();
  }

  handleChange = e => {
    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  updateForm = (e, id) => {
    const updatedForm = {
      //name: this.state.formInfo.name
      // ******************** need to add fields still ********************
    };
    e.preventDefault();
    this.props.updateForm(this.props.formInfo[0].form_id, updatedForm);
    this.setState({
      name: ""
      // ******************** need to add fields still ********************
    });
    this.props.history.push("/forms");
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={this.props.formToUpdate.form.name}
            onChange={this.handleChange}
          />
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
    formInfo: state.formReducer.forms,
    formToUpdate: state.formReducer.formToUpdate,
    getFields: state.formReducer.getFields,
    gettingField: state.formReducer.gettingField,
    fields: state.formReducer.fields
  };
};

export default connect(
  mapStateToProps,
  { getIndivForm, updateForm, getFields }
)(UpdateIndivForm);
