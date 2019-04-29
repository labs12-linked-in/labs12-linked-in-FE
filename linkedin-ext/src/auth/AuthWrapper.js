import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function wrapper(WrappedComponent) {
     class extends Component {

        static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
        }

        
    }

        render() {
            if (!this.props.isAuthenticated) {
                return (
                    <Redirect to={{
                        pathname: '/api/auth/login',
                    }} />
                )
            } else {
                return (
                    <WrappedComponent {...this.props} />
                );
            }
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.data.isAuthenticated
        }
    }

    export default connect(mapStateToProps)(wrapper(comp));