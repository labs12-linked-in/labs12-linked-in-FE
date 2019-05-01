import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../auth/actions';

const initialState = {
    isAuthenticated: false,
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: 
            return {
                ...state,
                isAuthenticated: true,
            }

        case LOGIN_SUCCESS:
            window.sessionStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token
            }

        case LOGIN_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            error: action.payload
        }

        default: return state;
    }
}
