import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from '../../store/actions/index';

import signinLogo from './signin.png'

class Auth extends Component {


    render() {
        
        return(
            <div>
                <form>
                    <img src={signinLogo} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);