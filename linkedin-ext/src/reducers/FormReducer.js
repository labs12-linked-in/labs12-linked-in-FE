import {
    GET_FORM_START,
    GET_FORM_SUCCESS,
    GET_FORM_FAILURE
} from '../actions/actions'

const initialState = {
    forms: null,
    isLoading: true,
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
        default: return state
    }
}