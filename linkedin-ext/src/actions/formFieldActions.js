import axios from "axios";

export const DELETE_FIELD_START = "DELETE_FIELD_START";
export const DELETE_FIELD_SUCCESS = "DELETE_FIELD_SUCCESS";
export const DELETE_FIELD_FAILURE = "DELETE_FIELD_FAILURE";

export const deleteField = (userId, formId) => dispatch => {
    dispatch({ type: DELETE_FIELD_START });
    return axios
        .delete(
            `https://linkedinextension.herokuapp.com/api/forms/${userId}/${formId}`
        )
        .then(res => {
            dispatch({ type: DELETE_FIELD_SUCCESS, payload: res.data });
          })
        .catch(err => {
            dispatch({ type: DELETE_FIELD_FAILURE, payload: err.response });
            alert("Failed to delete form, please try again");
        });
}