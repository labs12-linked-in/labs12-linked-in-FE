import {
    GET_FORM_START,
    GET_FORM_SUCCESS,
    GET_FORM_FAILURE,
    DELETE_FORM_START,
    DELETE_FORM_SUCCESS,
    DELETE_FORM_FAILURE
} from '../actions/formActions.js';

const initialState = {
    forms: null,
    isLoading: true,
    isDeleting: false,
    error: ''
}

export const formReducer = ( state = initialState, action) => {
    switch(action.type) {
        case GET_FORM_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_FORM_SUCCESS:
            return {
                ...state,
                forms: action.payload,
                isLoading: false,
                error: ''
            }
        case GET_FORM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case DELETE_FORM_START:
            return {
                ...state,
                isDeleting: true,
                error: ''
            }
        case DELETE_FORM_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: ''
            }
        case DELETE_FORM_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        
        default: return state
    }
}