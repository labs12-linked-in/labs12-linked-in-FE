import axios from "axios";

export const GET_FORM_START = "GET_FORM_START";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

export const DELETE_FORM_START = "DELETE_FORM_START";
export const DELETE_FORM_SUCCESS = "DELETE_FORM_SUCCESS";
export const DELETE_FORM_FAILURE = "DELETE_FORM_FAILURE";

export const getForm = () => dispatch => {
    dispatch({ type: GET_FORM_START });
    axios
      .get(
        `https://linkedinextension.herokuapp.com/api/forms/${localStorage.getItem(
          "id"
        )}`
      )
      .then(res => res.data)
      .then(forms => {
        dispatch({ type: GET_FORM_SUCCESS, payload: forms });
      })
      .catch(err => dispatch({ type: GET_FORM_FAILURE, ERROR: err }));
  };
  
  export const deleteForm = (userId, formId) => {
    const deletedForm = axios.delete(
      `https://linkedinextension.herokuapp.com/api/forms/${userId}/${formId}`
    );
    return dispatch => {
      dispatch({ type: DELETE_FORM_START });
      deletedForm
        .then(forms => {
          dispatch({ type: DELETE_FORM_SUCCESS, payload: forms });
        })
        .catch(err => {
          dispatch({ type: DELETE_FORM_FAILURE, payload: err });
        });
    };
  };