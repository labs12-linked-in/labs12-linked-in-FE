import React, { Component } from 'react'
import classes from './Forms.module.css'
import { connect } from 'react-redux'

import { deleteForm } from '../../../actions/actions'



class IndivForm extends Component {
    //constructor(props) {
        //super(props);

    //deleteForm = (e, form_id) => {
        //e.preventDefault();
        //this.props.deleteForm(form_id)
    //}
//}

    render() {
        return(
            <div className={classes.Title}>
            <div className={classes.Name}>{form.name}</div>
            <div className={classes.Field}>2</div>
            <div className={classes.Empty} onClick={(e) => this.deleteForm(e, form_id)}>delete</div>
            </div>
            )
        }

    }

const mapStateToProps = state => {
    console.log('state', state.formReducer)
    return {
        deleteForm: state.formReducer.deleteForm,
    }
}


export default connect(mapStateToProps, { deleteForm} )(IndivForm)