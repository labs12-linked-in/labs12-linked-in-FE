import React, {Component} from 'react';

import Department from './Department/Department'
import NavBar from '../NavBar/NavBar'
import classes from './Departments.module.css'
import NewDepartment from './NewDepartment/NewDepartment'

class departments extends Component {

        state = {
            depts: [
                {name: 'Sales'},
                {name: 'Manufacturing'},
                {name: 'Personal'},
                {name: 'Engineering'}
            ],
            isAddNew: false
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
        } else {
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
                    {this.state.depts.map(dept => (
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

export default departments