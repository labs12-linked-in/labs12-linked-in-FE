import React, {Component} from 'react';

import Department from './Department/Department'
import NavBar from '../NavBar/NavBar'

class departments extends Component {

        state = {
            depts: [
                {name: 'Sales'},
                {name: 'Manufacturing'},
                {name: 'Personal'},
                {name: 'Engineering'}
            ]
        }


    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <bold>Department</bold>
                    {this.state.depts.map(dept => (
                        <Department
                            name={dept.name} />
                        )
                    )}
                </div>
                
            </div>
        )
    }
}

export default departments