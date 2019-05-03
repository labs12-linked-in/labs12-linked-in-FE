import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import classes from './Forms.module.css'
import axios from 'axios'
import Form from './Form'
import {connect} from 'react-redux'
import { getForm } from '../../../actions/actions'

class Forms extends Component {
    

    componentDidMount() {
        this.props.getForm()
    }
    
    render() {

        let form = (
            <div>
                loading
            </div>
        )

        

        if(!this.props.fetching) {
            form = (
                <div className={classes.Forms}>
                    <NavBar />
                    <div>Forms</div>
                    <div className={classes.Title}>
                        <div className={classes.Name}>Name</div>
                        <div className={classes.Field}>Fields</div>
                        <div className={classes.Empty}></div>
                    </div>
                    {this.props.forms.map(form => (
                            <Form form={form} />
                        ))}
                    <button>Create New</button>
                </div>
            )
        }
        
        return (
            <div className={classes.Forms}>
            {form}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        forms: state.formReducer.forms,
        fetching: state.formReducer.isLoading
    }
}



export default connect(mapStateToProps, {getForm})(Forms);