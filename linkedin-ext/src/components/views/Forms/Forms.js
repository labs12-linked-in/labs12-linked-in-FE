import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import classes from './Forms.module.css'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forms: [
                {'name': 'Resume Builder', 'fields': 3 },
                {'name': 'Sales Contract', 'fields': 4 },
                {'name': 'Contact', 'fields': 7 }
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
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
            <div className={classes.Forms}>
            <NavBar />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Fields</th>
                        </tr>
                    </thead>
                    {this.renderTableRows()}
                </table>
                <Link to="/new-form" >{(<button>Create New</button>)}</Link>
            </div>
        )
    }
}    

export default Forms;