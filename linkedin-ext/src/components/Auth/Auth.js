import React, {Component} from 'react';
import { connect} from 'react-redux'


class Auth extends Component {


    render() {
        return(
            <div>
                Hello World
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {

    }
}


export default connect(mapStateToProps)(Auth)