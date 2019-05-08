import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from '../actions/actions.js';

const initialState = {
    userProfile: [],
    isFetching: false,
    error: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                userProfile: action.payload,
                isFetching: false,
                error: '',
            }

        case GET_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }    
        default: return state;
    }
}
