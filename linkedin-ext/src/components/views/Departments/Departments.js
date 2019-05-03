import React, {Component} from 'react';
import {connect} from 'react-redux'

import Department from './Department/Department'
import NavBar from '../NavBar/NavBar'
import classes from './Departments.module.css'
import NewDepartment from './NewDepartment/NewDepartment'
import {getDept} from '../../../actions/actions'

class Departments extends Component {

        state = {
            isAddNew: false
        }

        componentDidMount() {
            this.props.getDept()
        }

        addNewDepartment = () => {
            this.setState({isAddNew: true})
        }

        addNewDepartmentCancle = () => {
            this.setState({isAddNew: false})
        }

    render() {

        let dept = null;
        if (this.state.isAddNew) {
            dept=<NewDepartment cancle={this.addNewDepartmentCancle} />;
        } else if (!this.state.isAddNew && !this.props.fetching) {
            dept = (
                <div className={classes.Departments}>
                <div>
                    <NavBar />
                </div>
                <div>
                    <div className={classes.bold}>Department</div>
                    <div className={classes.TopSeparation}>
                        <div>Home</div>
                        <div></div>
                    </div>
                    {this.props.depts.map(dept => (
                        <Department
                            name={dept.name} />
                        )
                    )}
                <div className={classes.Button}>
                    <button onClick={this.addNewDepartment}>Create New</button>
                </div>
                </div>
                
            </div>
            )
        }

        return (
            <div>
            {dept}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        depts: state.deptReducer.depts,
        fetching: state.deptReducer.isLoading
    }
}

export default connect(mapStateToProps,{getDept})(Departments)