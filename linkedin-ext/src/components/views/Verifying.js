import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { getJsonFromUrl } from '../../utilities/helpers';
import { loginUser, getUserData } from '../../auth/actions';


import Loading from '../../components/Loading';


const VerifyingWrapper = styled.div`
  align-items: center;
  box-shadow: 1px 1px 1px 1px #C9C9C9;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  padding: 16px;
  width: 100%;
  width: 150px;
`;


class Verifying extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        loginUser: PropTypes.func.isRequired,
    }

    componentWillMount() {
        const data = getJsonFromUrl(this.props.location);
        this.props.loginUser(data, () => this.props.getUserData());
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={{ pathname: 'api/auth/home' }} />;
        }
        return(
            <VerifyingWrapper>
                <Loading text='Authenticating' />
            </VerifyingWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.data.isAuthenticated
    }
}

export default connect(mapStateToProps, { loginUser, getUserData })(Verifying);