import React, { Component } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { getForm } from "../../../actions/formActions.js";
import styled from "styled-components";
import axios from "axios";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";

// **************** STYLED COMPONENETS ****************
const FormsWrapper = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateFormBtn = styled.button`
  border: 1px solid #0284b1;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 120px;
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
  margin: 20px;
  text-align: center;
  margin: 10px;
`;

const IndividualForm = styled.div`
  ${'' /* border: 1px solid red; */}
  margin: 5px 20px;
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
// ****************************************************

class Forms extends Component {
  componentDidMount() {
    this.props.getForm(localStorage.getItem("id"));
  }

  newForm = async () => {
    await axios
      .get(`${deployedDb}/api/users/upgrade/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: window.localStorage.token
        }
      })
      .then(res => {
        if (res.data.pro == false && res.data.form_count >= 1) {
          if (
            window.confirm(
              "You have to have a premium account to make more than 1 form! \nWould you like to upgrade to a premium account?"
            )
          ) {
            this.props.history.push("/pricing");
          } else {
            this.props.history.push("/forms");
          }
        } else {
          this.props.history.push("/new-form");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let form = <div>loading</div>;

    if (!this.props.fetching && this.props.forms !== null) {
      form = (
        <FormsWrapper>
          <H1>Create scraping templates to customize the fields you scrape</H1>
          {this.props.forms.map(form => (
            <IndividualForm>
              <Form form={form} history={this.props.history} />
            </IndividualForm>
          ))}
          <CreateFormBtn onClick={this.newForm}>Create new template</CreateFormBtn>
        </FormsWrapper>
      );
    }

    return <div>{form}</div>;
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
