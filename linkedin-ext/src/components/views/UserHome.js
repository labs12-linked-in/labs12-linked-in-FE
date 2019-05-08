import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar/NavBar.js';
import { getUser } from '../../actions/actions';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar />
                </header>
                {JSON.parse(localStorage.getItem('Profile')).first_name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.userReducer.isFetching,
        userProfile: state.userReducer.userProfile
    }
}

export default connect(mapStateToProps, { getUser })(UserHome);