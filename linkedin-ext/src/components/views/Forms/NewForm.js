import React, { Component } from 'react';

class NewForm extends Component {
    state ={
        newForm: ""
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <header>
                  <span onClick={() => this.props.history.push("/forms")}> Cancel </span>
                  <button>Save</button>
                </header>
                <form>
                    <input
                        required
                        type="text"
                        value={this.state.formName}
                        name="formName"
                        placeholder="Enter Form Name"
                        onChange={this.handleChange}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Fields</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                    </table>
                    <button>Add Field</button>
                </form>
                <footer>
                    <button>Create Form Rules</button>
                </footer>
            </div>
        )
    }
}

export default NewForm;