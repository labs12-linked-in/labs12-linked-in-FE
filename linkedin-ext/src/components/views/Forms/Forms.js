import React, { Component } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { getForm } from "../../../actions/formActions.js";
import styled from 'styled-components';

const FormsWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateFormBtn = styled.button`
  border: 1px solid #0284b1;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0284b1;
  color: white;
  font-size: 20px;
  background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);

  &:hover {
    border: 1px solid #02659e;
    background-image: linear-gradient(-180deg, #0284b1, #02659e 90%);
  }
`;

const H1 = styled.h1`
  ${'' /* border: 1px solid red; */}
  font-size: 24px;
  font-weight: normal;
`;

const FormDetails = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

const IndividualForm = styled.div`
  ${'' /* border: 1px solid red; */}
  margin: 5px 20px;
  margin-right: 20px;
  padding: 10px;
  width: 600px;
  max-width: 90%
  background-color: white;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 2px #0284b1;
    transition: all .3s;
  }
`;


class Forms extends Component {
  componentDidMount() {
    this.props.getForm(localStorage.getItem("id"));
  }

  newForm = () => {
    this.props.history.push("/new-form");
  };

  render() {
    let form = <div>loading</div>;

    if (!this.props.fetching && this.props.forms !== null) {
        form = (
          <FormsWrapper>
            <H1>Create forms to customize the fields you scrape</H1>
              {this.props.forms.map(form => (
                <IndividualForm>
                  <Form form={form} history={this.props.history} />
                </IndividualForm>
              ))}
            <CreateFormBtn onClick={this.newForm}>Create new form</CreateFormBtn>
          </FormsWrapper>
        );
      
    } else if (!this.props.fetching && this.props.forms === null) {
      form = (
        <FormsWrapper>
          <H1>Forms</H1>
          <FormDetails>No Form was found please create a Form</FormDetails>
          <CreateFormBtn onClick={this.newForm}>Create New</CreateFormBtn>
        </FormsWrapper>
      );
    }

    return (
      <div>
        {form}
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    forms: state.formReducer.forms,
    getForm: state.formReducer.getForm
  };
};

export default connect(
  mapStateToProps,
  { getForm }
)(Forms);
