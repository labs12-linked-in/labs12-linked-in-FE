import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import classes from './Forms.module.css'
import Form from './Form'
import {connect} from 'react-redux'
import { getForm } from "../../../actions/formActions.js";


class Forms extends Component {
  componentDidMount() {
    console.log("forms mount");
    this.props.getForm(localStorage.getItem('id'))
  }

    newForm = () => {
        this.props.history.push('/newform')
    }
    
    render() {
      
        let form = (
            <div>
                loading
            </div>
        )

        if(!this.props.fetching && this.props.forms !== null) {
            form = (
                <div className={classes.Forms}>
                    <NavBar />
                    <div className={classes.bold}>Forms</div>
                    <div className={classes.TopSeparation}>
                        <div className={classes.Name}>Name</div>
                        <div className={classes.Field}>Fields</div>
                        <div className={classes.Empty}></div>
                    </div>
                    <div>
                    
                    {this.props.forms.map(form => (
                            <Form form={form} />
                        ))}
                    </div>
                    <button onClick={this.newForm}>Create New</button>
                </div>
            )
        }

        else if(!this.props.fetching && this.props.forms === null) {
            form = (
                <div className={classes.Forms}>
                    <NavBar />
                    <div>Forms</div>
                    <div className={classes.Title}>
                    </div>
                    <div>
                        No Form was found please create a Form
                    </div>
                    <button onClick={this.newForm}>Create New</button>
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
  const forms = state.formReducer.forms;
  return { forms };
};

export default connect(
  mapStateToProps,
  { getForm }
)(Forms);
