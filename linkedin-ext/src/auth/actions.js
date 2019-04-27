import { callApi } from '../utilities/apiHelpers';
import * as AuthConstants from './constants';

export const getUserData = (onSuccess) => callApi({
    endpoint: '/api/auth/linkedinData',
    method: 'GET',
    type: AuthConstants.GET_USER_DATA,
    onSuccess,
})

export const loginUser = (data, onSuccess) => callApi({
    endpoint: '/api/auth/login',
    method: 'POST',
    json: data,
    type: AuthConstants.LOGIN_USER,
    onSuccess
})

export const signOut = () => ({
    type: AuthConstants.SIGN_OUT,
})