import axios from 'axios';

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

<<<<<<< HEAD
export const GET_FORM_START = "GET_FORM_START";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

=======
>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589

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
<<<<<<< HEAD

export const getForm = () => dispatch => {
    dispatch({type: GET_FORM_START});
    axios.get('https://linkedinextension.herokuapp.com/api/forms/5')
        .then(res => res.data)
        .then(forms => {
            // console.log('data', forms)
            dispatch({type: GET_FORM_SUCCESS, payload: forms})
        })
        .catch(err => dispatch({type: GET_FORM_FAILURE, ERROR: err}))
}
=======
>>>>>>> 2064c7223a5a9e9f8b088e04ce03999116f98589
