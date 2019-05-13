import React, { Component } from 'react';
import SelectBox from '../../../features/select-box/index.js';

class AddField extends Component {
    state = {
        newField: ''
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
                    <span onClick={() => this.props.history.push("/new-form")}> Cancel </span>
                    <button>Save</button>
                    <h3>Add a new form field</h3>
                </header>
                <form>
                    <h4>Title:</h4>
                    <input
                        required
                        type="text"
                        value={this.state.title}
                        name="title"
                        placeholder="Enter Title Name"
                        onChange={this.handleChange}
                    />
                    <h4>Type:</h4>
                    <SelectBox
                        width={200}
                        name="field_id" 
                        items = {[
                            { value: 'Text', id: 1 },
                            { value: 'Image', id: 2 },
                            { value: 'Number', id: 3 },
                            { value: 'Yes/No', id: 4 },
                            { value: 'Short Text', id: 5 },
                            { value: 'Long Text', id: 6 },
                        ]}
                    />

                    <button>Select</button>

                </form>
            </div>
        )
    }
}

export default AddField;

