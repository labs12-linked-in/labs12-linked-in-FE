import axios from "axios";


export const GET_FIELD_START = "GET_FIELD_START";
export const GET_FIELD_SUCCESS = "GET_FIELD_SUCCESS";
export const GET_FIELD_FAILURE = "GET_FIELD_FAILURE";

export const getField = () => dispatch => {
  dispatch({ type: GET_FIELD_START });
  axios
    .get(
      `https://linkedinextension.herokuapp.com/api/fields`
    )
    .then(res => res.data)
    .then(fields => {
      dispatch({ type: GET_FIELD_SUCCESS, payload: fields });
    })
    .catch(err => dispatch({ type: GET_FIELD_FAILURE, ERROR: err }));
};


export const DELETE_FIELD_START = "DELETE_FIELD_START";
export const DELETE_FIELD_SUCCESS = "DELETE_FIELD_SUCCESS";
export const DELETE_FIELD_FAILURE = "DELETE_FIELD_FAILURE";

export const deleteField = (userId, formId) => dispatch => {
    dispatch({ type: DELETE_FIELD_START });
    return axios
        .delete(
            `https://linkedinextension.herokuapp.com/api/fields`
        )
        .then(res => {
            dispatch({ type: DELETE_FIELD_SUCCESS, payload: res.data });
          })
        .catch(err => {
            dispatch({ type: DELETE_FIELD_FAILURE, payload: err.response });
            alert("Failed to delete form, please try again");
        });
}