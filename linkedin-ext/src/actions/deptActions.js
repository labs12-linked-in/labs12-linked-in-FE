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
      // console.log("DEPTS FROM deptActions.js", depts);
      dispatch({ type: GET_DEPT_SUCCESS, payload: depts });
    })
    .catch(err => dispatch({ type: GET_DEPT_FAILURE, ERROR: err }));
};

export const DELETE_DEPT_START = "DELETE_DEPT_START";
export const DELETE_DEPT_SUCCESS = "DELETE_DEPT_SUCCESS";
export const DELETE_DEPT_FAILURE = "DELETE_DEPT_FAILURE";

export const deleteDept = (userId, deptId) => dispatch => {
  dispatch({ type: DELETE_DEPT_START });
  return axios
    .delete(
      `https://linkedinextension.herokuapp.com/api/departments/${userId}/${deptId}`
    )
    .then(res => {
      // console.log(res);
      dispatch({ type: DELETE_DEPT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_DEPT_FAILURE, payload: err.response });
      alert("Failed to delete department, please try again")
    })
};
