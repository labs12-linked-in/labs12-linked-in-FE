import axios from 'axios';

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


export const getUser = () => dispatch => {
    dispatch({ type: GET_USER_START });
    axios
        .get('http://localhost:9001/api/user')
        .then(res => res.data)
        .then(users => {
            console.log("data", users);
            dispatch({ type: GET_USER_SUCCESS, payload: users });
        })
        .catch(err => dispatch({type: GET_USER_FAILURE, ERROR: err }));
};
