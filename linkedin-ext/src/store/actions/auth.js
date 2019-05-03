import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.Auth_SUCCESS,
        idToken: token
    }
}

export const auth = () => {
    return dispatch => {
        dispatch(authStart())
        let url = 'https://linkedinextension.herokuapp.com/api/auth/login'
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = document.cookie
        if (!token) {
            console.log('fail')
        } else {
            dispatch(authSuccess(token))
        }
    }
}