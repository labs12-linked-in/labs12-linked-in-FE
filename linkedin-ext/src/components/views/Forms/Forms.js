import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Form from "./Form";
import { connect } from "react-redux";
import { getForm } from "../../../actions/formActions.js";
import styled from 'styled-components';

const FormsWrapper = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center
`;

const H1 = styled.h1`
  ${'' /* border: 1px solid red; */}
`;

const FormDetails = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

const IndividualForm = styled.div`
  ${'' /* border: 1px solid red; */}
  border-radius: 3px;
  margin: 5px;
  background-color: white;
  padding: 5px;
  width: 500px;

  a {
    width: 250px;
    background-color: white;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.1);
    
    &:hover {
      background-color: red;
      box-shadow: 0 8px 15px 0 rgba(0,0,0,.1);
    }
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
            <H1>Forms</H1>
            <FormDetails>
              {/* <div>Name</div> */}
              {/* <div>Fields</div> */}
            </FormDetails>
              {this.props.forms.map(form => (
                <IndividualForm>
                  <a href="">
                    <Form form={form} history={this.props.history} />
                  </a>
                </IndividualForm>
              ))}
            <button onClick={this.newForm}>Create New</button>
          </FormsWrapper>
        );
      
    } else if (!this.props.fetching && this.props.forms === null) {
      form = (
        <FormsWrapper>
          <H1>Forms</H1>
          <FormDetails>No Form was found please create a Form</FormDetails>
          <button onClick={this.newForm}>Create New</button>
        </FormsWrapper>
      );
    }

    return (
      <div>
        <NavBar />
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
