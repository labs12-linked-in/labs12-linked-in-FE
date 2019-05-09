import React, {Component } from 'react';
import {connect} from 'react-redux'
import {addForm} from '../../../actions/actions'

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
        event.preventDefault();

        const newForm = {
            id: localStorage.getItem('user_id'),
            name: this.state.formName,
            firstName: localStorage.getItem('first_name'),
            lastName: localStorage.getItem('last_name')
        }
        this.props.addForm(newForm)
    }

    render() {
        return (
            <div className={classes.Body}>
                <div className={classes.Header}>
                    <div className={classes.Cancel}>cancel</div>
                    <button className={classes.Save} type='submit'>Save</button>
                </div>

                <div className={classes.Title}>
                    Form Name
                </div>
                <form className={classes.FormInput} onSubmit={this.addFormName}> 
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