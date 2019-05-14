import axios from "axios";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";
const deployedApp = "https://linkedinextension.netlify.com";
const localApp = "http://localhost:3000";

export const GET_FIELDS_START = "GET_FIELDS_START";
export const GET_FIELDS_SUCCESS = "GET_FIELDS_SUCCESS";
export const GET_FIELDS_FAILURE = "GET_FIELDS_FAILURE";

export const getField = id => async dispatch => {
  console.log(id, "start fields");
  dispatch({ type: GET_FIELDS_START });
  await axios
    .get(`${deployedDb}/api/fields/field/${id}`)
    .then(res => res.data)
    .then(fields => {
      console.log(fields, "fields");
      dispatch({ type: GET_FIELDS_SUCCESS, payload: fields });
    })
    .catch(err => dispatch({ type: GET_FIELDS_FAILURE, ERROR: err }));
};

export const DELETE_FIELD_START = "DELETE_FIELD_START";
export const DELETE_FIELD_SUCCESS = "DELETE_FIELD_SUCCESS";
export const DELETE_FIELD_FAILURE = "DELETE_FIELD_FAILURE";

export const deleteField = (userId, formId) => dispatch => {
  dispatch({ type: DELETE_FIELD_START });
  return axios
    .delete(`${deployedDb}/api/fields`)
    .then(res => {
      dispatch({ type: DELETE_FIELD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FIELD_FAILURE, payload: err.response });
      alert("Failed to delete form, please try again");
    });
};
