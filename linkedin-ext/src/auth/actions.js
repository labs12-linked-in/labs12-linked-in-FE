import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginUser = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
    .get("https://www.linkedin.com/oauth/v2/authorization", creds)
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch ({ type: LOGIN_FAILURE, payload: err.data }));
}
