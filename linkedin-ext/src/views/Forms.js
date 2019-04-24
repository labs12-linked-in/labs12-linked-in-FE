import React, { Component } from 'react';


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
            //let forms = this.state.forms
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
       

export default Forms;