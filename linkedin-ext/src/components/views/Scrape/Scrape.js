import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Scrape.module.css';
import NavBar from '../NavBar/NavBar';
import SelectBox from '../../../features/select-box/index.js';
import { getForm } from "../../../actions/formActions.js";
import { connect } from "react-redux";
import { getDept } from "../../../actions/deptActions.js";


class Scrape extends Component {

    state = {
        formOptions:[],
        departmentOptions: []
    }

    async componentDidMount() {
        await this.props.getForm(localStorage.getItem("id"));
        await this.props.getDept(localStorage.getItem("id"));
        
        for (let i = 0; i<this.props.forms.length; i++) {
            this.setState({
                formOptions: [
                    ...this.state.formOptions,
                    this.props.forms[i].name
                ]
            })
        }

        for (let i = 0; i<this.props.depts.length; i++) {
            this.setState({
                departmentOptions: [
                    ...this.state.departmentOptions,
                    this.props.depts[i].name
                ]
            })
        }
    }


    render() {
        return (
            <div className={classes.Scrape}>
                <NavBar />
                <div className = {classes.bold}>Scrape</div>
                <div className = {classes.name}>
                    <p>Name: </p>
                    <input 
                        required
                        type="text"
                        // defaultValue={this.state.form.name}
                        name="scrapeName"
                        placeholder="e.g. John's Resume"
                        // onChange={props.handleChange}
                    />
                </div>    
                <div className = {classes.dropDown}>
                    <p>Form: </p>
                    <SelectBox 
                        title={"Form"}
                        name={"form"}
                        options={this.state.formOptions}
                        // defaultValue={this.state.form.form}
                        placeholder={"Select Form"}
                        // handleChange={this.handleInput}
                    />
                </div>
                <div className = {classes.dropDown}>
                    <p>Department: </p>
                    <SelectBox 
                        title={"Department"}
                        name={"department"}
                        options={this.state.departmentOptions}
                        // defaultValue={this.state.form.department}
                        placeholder={"Select Department"}
                        // handleChange={this.handleInput}
                    />
                </div>
                <Link to={'/edit-scrape'}><button>Scrape</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      forms: state.formReducer.forms,
      getForm: state.formReducer.getForm,
      depts: state.deptReducer.depts,
      getDept: state.deptReducer.getDept
    };
  };
  
  export default connect(
    mapStateToProps,
    { getForm, getDept }
  )(Scrape);
  