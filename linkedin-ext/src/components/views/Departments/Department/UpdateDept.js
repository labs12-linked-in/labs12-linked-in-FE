import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIndivDept, updateDept } from '../../../../actions/deptActions.js';

class UpdateIndivDept extends Component {
    state = {
        depInfo: {
            name: this.props.depInfo[0].name,
            admin_email: this.props.depInfo[0].admin_email,
            supervisor_email: this.props.depInfo[0].supervisor_email,
            manager_email: this.props.depInfo[0].manager_email,
            director_email: this.props.depInfo[0].director_email,
            vp_email: this.props.depInfo[0].vp_email
        }
    }

    componentDidMount() {
        this.props.getIndivDept(this.props.depInfo[0].department_id)
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({ 
            depInfo: {
                ...this.state.depInfo,
                [e.target.name]: e.target.value 
            }
        })
    }

    updateDept = (e, id) => {
        const updatedDept = {
            name: this.state.depInfo.name, 
            admin_email: this.state.depInfo.admin_email, 
            supervisor_email: this.state.depInfo.supervisor_email,
            manager_email: this.state.depInfo.manager_email,
            director_email: this.state.depInfo.director_email,
            vp_email: this.state.depInfo.vp_email
        }
        e.preventDefault()
        this.props.updateDept(this.props.depInfo[0].department_id, updatedDept)
        this.setState({ 
            name: "", 
            admin_email: "", 
            supervisor_email: "", 
            manager_email: "", 
            director_email: "", 
            vp_email: "" 
        })
        this.props.history.push("/dept")
    }

    render() {
        const { name, admin_email, supervisor_email, manager_email, director_email, vp_email } = this.state.depInfo;
        const { department_id } = this.props.depInfo[0]
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="admin_email"
                        value={admin_email}
                        onChange={this.handleChange}
                        placeholder={admin_email}
                    />
                     <input
                        type="text"
                        name="supervisor_email"
                        value={supervisor_email}
                        onChange={this.handleChange}
                        placeholder={supervisor_email}
                    />
                     <input
                        type="text"
                        name="manager_email"
                        value={manager_email}
                        onChange={this.handleChange}
                        placeholder={manager_email}
                    />
                    <input
                        type="text"
                        name="director_email"
                        value={director_email}
                        onChange={this.handleChange}
                        placeholder={director_email}
                    />
                    <input
                        type="text"
                        name="vp_email"
                        value={vp_email}
                        onChange={this.handleChange}
                        placeholder={vp_email}
                    />
                    <div>
                        <button onClick={e => this.updateDept(e, department_id)}>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        getIndivDept: state.deptReducer.getIndivDept,
        updateDept: state.deptReducer.updateDept,
        isUpdating: state.deptReducer.isUpdating,
        depInfo: state.deptReducer.depts
    }
}

export default connect(mapStateToProps, { getIndivDept, updateDept })(UpdateIndivDept)