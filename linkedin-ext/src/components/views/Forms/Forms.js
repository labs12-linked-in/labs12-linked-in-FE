import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './Forms.module.css'
import IndivForm from './IndivForm'
import {connect} from 'react-redux'
import { getForm, deleteForm } from '../../../actions/actions'

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
                            <IndivForm deleteForm={this.props.deleteForm} />
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
        fetching: state.formReducer.isLoading,
        deleteForm: state.formReducer.deleteForm
    }
}



export default connect(mapStateToProps, {getForm, deleteForm})(Forms);