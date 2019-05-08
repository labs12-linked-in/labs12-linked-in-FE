import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={'/add-field'}><button>Add Field</button></Link>
                </form>
                <footer>
                    <Link to={'/form-rules'}><button>Create Form Rules</button></Link>
                </footer>
            </div>
        )
    }
}

export default NewForm;