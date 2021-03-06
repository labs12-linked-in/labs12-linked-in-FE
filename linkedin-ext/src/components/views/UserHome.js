import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions/userActions';

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