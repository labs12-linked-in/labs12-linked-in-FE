import axios from "axios";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";
const deployedApp = "https://linkedinextension.netlify.com";
const localApp = "http://localhost:3000";

export const GET_DEPT_START = "GET_DEPT_START";
export const GET_DEPT_SUCCESS = "GET_DEPT_SUCCESS";
export const GET_DEPT_FAILURE = "GET_DEPT_FAILURE";

export const getDept = () => async dispatch => {
  dispatch({ type: GET_DEPT_START });
  await axios
    .get(`${localDb}/api/departments/${localStorage.getItem("id")}`)
    .then(res => res.data)
    .then(depts => {
      dispatch({ type: GET_DEPT_SUCCESS, payload: depts });
    })
    .catch(err => dispatch({ type: GET_DEPT_FAILURE, ERROR: err }));
};

export const GET_INDIVDEPT_START = "GET_INDIVDEPT_START";
export const GET_INDIVDEPT_SUCCESS = "GET_INDIVDEPT_SUCCESS";
export const GET_INDIVDEPT_FAILURE = "GET_INDIVDEPT_FAILURE";

export const getIndivDept = deptId => dispatch => {
  dispatch({ type: GET_INDIVDEPT_START });
  axios
    .get(`${localDb}/api/departments/${localStorage.getItem("id")}/${deptId}`)
    .then(res => res.data)
    .then(department => {
      dispatch({ type: GET_INDIVDEPT_SUCCESS, payload: department });
    })
    .catch(err => {
      dispatch({ type: GET_INDIVDEPT_FAILURE, payload: err });
    });
};

export const DELETE_DEPT_START = "DELETE_DEPT_START";
export const DELETE_DEPT_SUCCESS = "DELETE_DEPT_SUCCESS";
export const DELETE_DEPT_FAILURE = "DELETE_DEPT_FAILURE";

export const deleteDept = (userId, deptId) => dispatch => {
  dispatch({ type: DELETE_DEPT_START });
  return axios
    .delete(`${localDb}/api/departments/${userId}/${deptId}`)
    .then(res => {
      // console.log(res);
      dispatch({ type: DELETE_DEPT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_DEPT_FAILURE, payload: err.response });
      alert("Failed to delete department, please try again");
    });
};

export const UPDATE_DEPT_START = "UPDATE_DEPT_START";
export const UPDATE_DEPT_SUCCESS = "UPDATE_DEPT_SUCCESS";
export const UPDATE_DEPT_FAILURE = "UPDATE_DEPT_FAILURE";

export const updateDept = (deptId, updatedDept) => dispatch => {
  console.log("deptid", deptId);
  dispatch({ type: UPDATE_DEPT_START });

  axios
    .put(
      `${localDb}/api/departments/${localStorage.getItem("id")}/${deptId}`,
      updatedDept
    )
    .then(res => res.data)
    .then(department => {
      console.log("DEPARTMENT", department);
      dispatch({
        type: UPDATE_DEPT_SUCCESS,
        payload: { deptId, ...department }
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_DEPT_FAILURE, payload: err });
    });
};

export const ADD_UPDATE_DEPT_START = "ADD_UPDATE_DEPT_START";
export const ADD_UPDATE_DEPT_SUCCESS = "ADD_UPDATE_DEPT_SUCCESS";
export const ADD_UPDATE_DEPT_FAILURE = "ADD_UPDATE_DEPT_FAILURE";

export const addDeptToUpdate = dept => dispatch => {
  dispatch({ type: ADD_UPDATE_DEPT_START });
  dispatch({ type: ADD_UPDATE_DEPT_SUCCESS, payload: { dept } });
};
