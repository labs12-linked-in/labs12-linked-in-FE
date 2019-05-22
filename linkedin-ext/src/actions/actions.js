import axios from "axios";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const GET_FORM_START = "GET_FORM_START";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

export const DELETE_FORM_START = "DELETE_FORM_START";
export const DELETE_FORM_SUCCESS = "DELETE_FORM_SUCCESS";
export const DELETE_FORM_FAILURE = "DELETE_FORM_FAILURE";

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

export const getForm = id => dispatch => {
  dispatch({ type: GET_FORM_START });
  axios
    .get(`https://linkedinextension.herokuapp.com/api/forms/${id}`, {
      headers: {
        Authorization: window.localStorage.token
      }
    })
    .then(res => res.data)
    .then(forms => {
      dispatch({ type: GET_FORM_SUCCESS, payload: forms });
    })
    .catch(err =>
      dispatch({ type: GET_FORM_FAILURE, ERROR: err, payload: null })
    );
};

export const addForm = newForm => async dispatch => {
  console.log(newForm.name);
  await axios
    .post(
      `https://linkedinextension.herokuapp.com/api/forms/${newForm.id}`,
      {
        name: newForm.name
      },
      {
        headers: {
          Authorization: window.localStorage.token
        }
      }
    )
    .then(form => {
      console.log(form);
    })
    .catch(err => console.log(err));
};

export const editForm = (userId, formId, name) => dispatch => {
  axios
    .post(
      `https://linkedinextension.herokuapp.com/api/forms/${userId}/${formId}`,
      {
        name: name
      },
      {
        headers: {
          Authorization: window.localStorage.token
        }
      }
    )
    .then(form => {
      console.log(form);
    })
    .catch(err => console.log(err));
};

export const deleteForm = (userId, formId) => {
  const deletedForm = axios.delete(
    `https://linkedinextension.herokuapp.com/api/forms/${userId}/${formId}`,
    {
      headers: {
        Authorization: window.localStorage.token
      }
    }
  );
  return dispatch => {
    dispatch({ type: DELETE_FORM_START });
    deletedForm
      .then(forms => {
        dispatch({ type: DELETE_FORM_SUCCESS, payload: forms });
      })
      .catch(err => {
        dispatch({ type: DELETE_FORM_FAILURE, payload: err });
      });
  };
};
