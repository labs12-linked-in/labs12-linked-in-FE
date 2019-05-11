import {
  GET_FORM_START,
  GET_FORM_SUCCESS,
  GET_FORM_FAILURE,
  GET_INDIVFORM_START,
  GET_INDIVFORM_SUCCESS,
  GET_INDIVFORM_FAILURE,
  DELETE_FORM_START,
  DELETE_FORM_SUCCESS,
  DELETE_FORM_FAILURE,
  UPDATE_FORM_START,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_FAILURE,
  ADD_UPDATE_FORM_START,
  ADD_UPDATE_FORM_SUCCESS,
  ADD_UPDATE_FORM_FAILURE
} from "../actions/formActions.js";

const initialState = {
  forms: null,
  isLoading: true,
  gettingForm: false,
  isDeleting: false,
  isUpdating: false,
  formToUpdate: null,
  error: ""
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_FORM_SUCCESS:
      return {
        ...state,
        forms: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_FORM_FAILURE:
      return {
        ...state,
        isLoading: false,
        forms: action.payload,
        error: action.ERROR
      };

    case GET_INDIVFORM_START:
      return {
        ...state,
        gettingForm: true,
        error: ""
      };

    case GET_INDIVFORM_SUCCESS:
      return {
        ...state,
        gettingForm: false,
        error: ""
      };

    case GET_INDIVFORM_FAILURE:
      return {
        ...state,
        gettingForm: false,
        error: action.payload
      };

    case DELETE_FORM_START:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };
    case DELETE_FORM_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        error: ""
      };
    case DELETE_FORM_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };

    case UPDATE_FORM_START:
      return {
        ...state,
        isUpdating: true,
        error: ""
      };
    case UPDATE_FORM_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        error: ""
      };
    case UPDATE_FORM_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    case ADD_UPDATE_FORM_SUCCESS:
      return {
        ...state,
        formToUpdate: action.payload,
        error: ""
      };

    default:
      return state;
  }
};
