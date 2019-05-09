import {
  GET_DEPT_START,
  GET_DEPT_SUCCESS,
  GET_DEPT_FAILURE,
  DELETE_DEPT_START,
  DELETE_DEPT_SUCCESS,
  DELETE_DEPT_FAILURE,

} from "../actions/deptActions.js";

const initialState = {
  depts: null,
  isLoading: true,
  isDeleting: false,
  error: ''
};

export const deptReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPT_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_DEPT_SUCCESS:
      return {
        ...state,
        depts: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_DEPT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      
    case DELETE_DEPT_START:
      return {
          ...state,
          isDeleting: true,
          error: ''
      }
    case DELETE_DEPT_SUCCESS:
      return {
          ...state,
          isDeleting: false,
          error: ''
      }
    case DELETE_DEPT_FAILURE:
      return {
          ...state,
          isDeleting: false,
          error: action.payload
      }
      
    default:
      return state;
  }
};
