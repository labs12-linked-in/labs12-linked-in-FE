import axios from 'axios';

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


export const getUser = () => dispatch => {
    dispatch({ type: GET_USER_START });
    const userData = JSON.parse(localStorage.getItem(user));
    const { first_name, last_name, user_id } = userData;
    axios
        .post('https://linkedinextension.herokuapp.com/api/auth/login')
}
