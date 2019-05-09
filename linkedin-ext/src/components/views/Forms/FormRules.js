import React, { Component } from 'react';
import SelectBox from '../../../features/select-box/index';

class FormRules extends Component {

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
                    <h3>Form Rules</h3>
                    <button>Save</button>
                </header>
                <div>
                    <h4>Default delivery should be to the </h4>
                    <SelectBox 
                        width={200}
                        name="default_delivery_id"
                        items = {[
                            { value: 'Supervisor', id: 1 },
                            { value: 'Manager', id: 2 },
                            { value: 'Director', id: 3 },
                            { value: 'VP', id: 4 },
                            { value: 'Admin', id: 5 },
                        ]}/>
                </div>
            </div>
        )
    }
}

export default FormRules