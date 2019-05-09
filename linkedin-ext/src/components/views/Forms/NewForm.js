import React, {Component } from 'react';
import {connect} from 'react-redux'
import {addForm} from '../../../actions/actions'
import { Redirect } from 'react-router-dom'

import classes from './NewForm.module.css'


class NewForm extends Component {

    state = {
        formName: '',
        fields: {
            name: null,
            type: null
        }
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    addFormName = event => {
        // event.preventDefault();

        const newForm = {
            id: localStorage.getItem('id'),
            name: this.state.formName,
            firstName: localStorage.getItem('first_name'),
            lastName: localStorage.getItem('last_name')
        }
        this.props.addForm(newForm)
        this.props.history.push('/forms')

        
    }

    cancel = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className={classes.Body}>
                <div className={classes.Header}>
                    <div className={classes.Cancel} onClick={this.cancel}>cancel</div>
                    <button className={classes.Save} onClick={this.addFormName}>Save</button>
                </div>

                <div className={classes.Title}>
                    Form Name
                </div>
                <form className={classes.FormInput}> 
                    <input type='text' name='formName' value={this.state.formName} onChange={this.handleInputChange}></input>
                </form>

                <div className={classes.SubTitle}>
                    <div>Fields:</div>
                    <div>Type:</div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addForm: (newForm) => dispatch(addForm(newForm))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewForm)