import React, {Component} from 'react';

class departments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dept: [
                {'name': 'Sales'},
                {'name': 'Manufacturing'},
                {'name': 'Personal'},
                {'name': 'Engineering'}
            ]
        }
    }

    

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default departments