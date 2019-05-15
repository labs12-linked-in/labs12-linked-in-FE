import axios from "axios";

// const deployedDb = "https://linkedinextension.herokuapp.com";
// const localDb = "http://localhost:9001";
// const deployedApp = "https://linkedinextension.netlify.com";
// const localApp = "http://localhost:3000";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUser = () => dispatch => {
  dispatch({ type: GET_USER_START });
  const userData = JSON.parse(localStorage.getItem("Profile"));
  const { first_name, last_name } = userData;
  axios
    .get("https://linkedinextension.herokuapp.com/api/user", {
      first_name,
      last_name
    })
    .then(res => res.data)
    .then(users => {
      console.log("data", users);
      dispatch({ type: GET_USER_SUCCESS, payload: users });
    })
    .catch(err => dispatch({ type: GET_USER_FAILURE, ERROR: err }));
};
