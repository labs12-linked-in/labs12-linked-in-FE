import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
}

const authStart = (state, action) => {
    return updateObject(state, {token: null})
}

const authSuccess = (state, action) => {
    return updateObject(state, {token: action.idToken})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.Auth_SUCCESS: return authSuccess(state, action)
        default:
            return state
    }
}

export default reducer
