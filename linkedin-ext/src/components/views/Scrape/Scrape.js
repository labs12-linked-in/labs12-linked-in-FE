import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Scrape.module.css';
import NavBar from '../NavBar/NavBar';
import SelectBox from '../../../features/select-box/index.js';
import { getForm } from "../../../actions/formActions.js";
import { connect } from "react-redux";
import { getDept } from "../../../actions/deptActions.js";


// 1) loop through forms on state and match the name to the selected for name and grab the selected form id
// 2) do a call with the selected form id to get the fields and set those to the selecte form fields on state




class Scrape extends Component {

    state = {
        formOptions:[],
        selectedFormName: '',
        selectedFormId: '',
        selectedFormFields: []
        
        // ****************************
        //commented out until form rules and/or emailing is implemented and this is needed

        // departmentOptions: [],
        // selectedDept: ''
        // ****************************
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

        // ****************************
        //commented out until form rules and/or emailing is implemented and this is needed

        // for (let i = 0; i<this.props.depts.length; i++) {
            //     this.setState({
                //         departmentOptions: [
                    //             ...this.state.departmentOptions,
                    //             this.props.depts[i].name
                    //         ]
                    //     })
                    // }
        // ****************************
    }
    
    getSelectedFormFields = () => {
        for (let i = 0; i < this.props.forms.length; i++ ) {
            if (this.props.forms[i].name == this.state.selectedFormName) {
                this.setState({ selectedFormId: this.props.forms[i].form_id })
                console.log('ss')
            }
        }
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className={classes.Scrape}>
                <NavBar />
                <div className = {classes.bold}>Scrape</div>
            
                <div className = {classes.dropDown}>
                    <p>Form: </p>
                    <SelectBox 
                        title={"Form"}
                        name={"selectedFormName"}
                        options={this.state.formOptions}
                        value={this.state.selectedForm}
                        placeholder={"Select Form"}
                        onChange={this.handleInput}
                    />
                </div>

                {/* **************************** */}
                {/* commented out until form rules and/or emailing is implemented and this is needed */}

                {/* <div className = {classes.dropDown}>
                    <p>Department: </p>
                    <SelectBox 
                        title={"Department"}
                        name={"selectedDept"}
                        options={this.state.departmentOptions}
                        value={this.state.selectedDept}
                        placeholder={"Select Department"}
                        onChange={this.handleInput}
                    />
                </div> */}
                {/* **************************** */}

                <button onClick={() => this.getSelectedFormFields()}>Scrape</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      forms: state.formReducer.forms,
      getForm: state.formReducer.getForm,
      
      // ****************************
      //commented out until form rules and/or emailing is implemented and this is needed
      // depts: state.deptReducer.depts,
      // getDept: state.deptReducer.getDept
      // ****************************
    };
  };
  
  export default connect(
    mapStateToProps,
    { getForm, getDept }
  )(Scrape);
  