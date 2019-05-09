import axios from "axios";

export const GET_DEPT_START = "GET_DEPT_START";
export const GET_DEPT_SUCCESS = "GET_DEPT_SUCCESS";
export const GET_DEPT_FAILURE = "GET_DEPT_FAILURE";

export const getDept = () => dispatch => {
  dispatch({ type: GET_DEPT_START });
  axios
    .get(
      `https://linkedinextension.herokuapp.com/api/departments/${localStorage.getItem(
        "id"
      )}`
    )
    .then(res => res.data)
    .then(depts => {
      dispatch({ type: GET_DEPT_SUCCESS, payload: depts });
    })
    .catch(err => dispatch({ type: GET_DEPT_FAILURE, ERROR: err }));
};
