import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './Forms.module.css'
import IndivForm from './IndivForm'
import {connect} from 'react-redux'
import { getForm, deleteForm } from '../../../actions/actions'


class FormsList extends Component {
    constructor(props) {
        super(props)
            this.state = {
                forms: [
                    {'name': '', 'fields': ''}
                ]
            }
    }

    renderTableRows = () => {
        let rows = [];
        this.state.forms.forEach(function(form) {
            rows.push (
                <tr>
                    <td>{form.name}</td>
                    <td>{form.fields}</td>
                    <td>edit</td>
                </tr>
            )
        })

        let tby = null;
        tby = <tbody>
            {rows.map((forms, key) => {
                return (
                    forms
                )
            })}
            </tbody>
        return tby
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Fields</th>
                        </tr>
                    </thead>
                    {this.renderTableRows()}
                </table>
            </div>
        )
    }
}

export default FormsList;