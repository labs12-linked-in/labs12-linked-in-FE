import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIndivForm, updateForm } from '../../../actions/formActions.js';

class UpdateIndivForm extends Component {
    state = {
        formInfo: {
            name: this.props.formInfo[0].name, 
            // ******************** need to add fields still ********************
        }
    }
    
    componentDidMount() {
        console.log(this.props)
        this.props.getIndivForm(this.props.formInfo[0].form_id)
    }
    
    handleChange = e => {
        this.setState({
            formInfo: {
                ...this.state.formInfo,
                [e.target.name]: e.target.value
            }
        })
    }
    
    updateForm = (e, id) => {
        const updatedForm = {
            name: this.state.formInfo.name,
            // ******************** need to add fields still ********************
        }
        e.preventDefault()
        this.props.updateForm(this.props.formInfo[0].form_id, updatedForm)
        this.setState({
            name: "",
            // ******************** need to add fields still ********************
        })
        this.props.history.push('/forms')
    }
    
    render() {
        console.log("UPDATE FORM PROPS", this.props)
        const { name } = this.state.formInfo;
        const { form_id } = this.props.formInfo[0]
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button onClick={e => this.updateForm(e, form_id)}>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        getIndivForm: state.formReducer.getIndivForm,
        updateForm: state.formReducer.updateForm,
        isUpdating: state.formReducer.isUpdating,
        formInfo: state.formReducer.forms,

    }
}

export default connect(mapStateToProps, { getIndivForm, updateForm })(UpdateIndivForm)