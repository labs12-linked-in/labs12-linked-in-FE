import React, { Component } from 'react';

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
                </header>
                <form>
                    <input
                        required
                        type="text"
                        value={this.state.title}
                        name="title"
                        placeholder="Enter Title Name"
                        onChange={this.handleChange}
                    />
                    <button>Select</button>

                </form>
            </div>
        )
    }
}

export default AddField;

