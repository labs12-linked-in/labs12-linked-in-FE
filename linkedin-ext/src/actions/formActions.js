import axios from "axios";

const deployedDb = "https://linkedinextension.herokuapp.com";
const localDb = "http://localhost:9001";
// const deployedApp = "https://linkedinextension.netlify.com";
// const localApp = "http://localhost:3000";

export const GET_FORM_START = "GET_FORM_START";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

export const getForm = () => async dispatch => {
  dispatch({ type: GET_FORM_START });
  await axios
    .get(`${deployedDb}/api/forms/${localStorage.getItem("id")}`, {
      headers: {
        Authorization: window.localStorage.token
      }
    })
    .then(res => res.data)
    .then(forms => {
      dispatch({ type: GET_FORM_SUCCESS, payload: forms });
    })
    .catch(err => dispatch({ type: GET_FORM_FAILURE, ERROR: err }));
};

export const GET_INDIVFORM_START = "GET_INDIVFORM_START";
export const GET_INDIVFORM_SUCCESS = "GET_INDIVFORM_SUCCESS";
export const GET_INDIVFORM_FAILURE = "GET_INDIVFORM_FAILURE";

export const getIndivForm = formId => async dispatch => {
  dispatch({ type: GET_INDIVFORM_START });
  console.log("after start");
  await axios
    .get(`${deployedDb}/api/forms/${localStorage.getItem("id")}/${formId}`, {
      headers: {
        Authorization: window.localStorage.token
      }
    })
    .then(form => {
      dispatch({ type: ADD_UPDATE_FORM_SUCCESS, payload: form.data });
    })
    .catch(err => {
      dispatch({ type: GET_INDIVFORM_FAILURE, payload: err });
    });
};

export const DELETE_FORM_START = "DELETE_FORM_START";
export const DELETE_FORM_SUCCESS = "DELETE_FORM_SUCCESS";
export const DELETE_FORM_FAILURE = "DELETE_FORM_FAILURE";

export const deleteForm = (userId, formId) => dispatch => {
  dispatch({ type: DELETE_FORM_START });
  return axios
    .delete(`${deployedDb}/api/forms/${userId}/${formId}`, {
      headers: {
        Authorization: window.localStorage.token
      }
    })
    .then(res => {
      dispatch({ type: DELETE_FORM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FORM_FAILURE, payload: err.response });
      alert("Failed to delete form, please try again");
    });
};

export const ADD_FORM_START = "ADD_FORM_START";
export const ADD_FORM_SUCCESS = "ADD_FORM_SUCCESS";
export const ADD_FORM_FAILURE = "ADD_FORM_FAILURE";
export const ADD_FIELD_START = 'ADD_FIELD_START'
export const ADD_FIELD_SUCCESS = 'ADD_FIELD_SUCCESS'
export const ADD_FIELD_FAILURE = 'ADD_FIELD_FAILURE'

export const addForm = newForm => async dispatch => {
  dispatch({ type: ADD_FORM_START });
  await axios
    .post(
      `${deployedDb}/api/forms/${localStorage.getItem("id")}`,
      {
        name: newForm.name
      },
      {
        headers: {
          Authorization: window.localStorage.token
        }
      }
    )
    .then(async id => {
      dispatch({ type: ADD_FORM_SUCCESS });
      console.log(id, "id");
      for (let i = 0; i < newForm.fields.length; i++) {
        dispatch({type: ADD_FIELD_START})
        await axios
          .post(
            `${deployedDb}/api/fields/field`,
            {
              form_id: id.data,
              name: newForm.fields[i].name
            },
            {
              headers: {
                Authorization: window.localStorage.token
              }
            }
          )
          .then(res => {
            console.log(res, "field res");
            dispatch({type: ADD_FIELD_SUCCESS})
          })
          .catch(err => {
            console.log("Failed to add form field", err);
            dispatch({type: ADD_FIELD_FAILURE})
          });
      }
    })
    .catch(err => {
      dispatch({ type: ADD_FORM_FAILURE });
    });
};

export const UPDATE_FORM_START = "UPDATE_FORM_START";
export const UPDATE_FORM_SUCCESS = "UPDATE_FORM_SUCCESS";
export const UPDATE_FORM_FAILURE = "UPDATE_FORM_FAILURE";

export const updateForm = (newForm, newField) => dispatch => {
  dispatch({ type: UPDATE_FORM_START });
  axios
    .put(`${deployedDb}/api/forms/${newForm.user_id}/${newForm.id}`, newForm, {
      headers: {
        Authorization: window.localStorage.token
      }
    })
    .then(res => res.data)
    .then(form => {
      dispatch({ type: UPDATE_FORM_SUCCESS, payload: { ...form } });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FORM_FAILURE, payload: err });
    });

  for (let i = 0; i < newField.length; i++) {
    axios
      .put(`${deployedDb}/api/fields/field`, newField[i], {
        headers: {
          Authorization: window.localStorage.token
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const ADD_UPDATE_FORM_START = "ADD_UPDATE_FORM_START";
export const ADD_UPDATE_FORM_SUCCESS = "ADD_UPDATE_FORM_SUCCESS";
export const ADD_UPDATE_FORM_FAILURE = "ADD_UPDATE_FORM_FAILURE";

export const addFormToUpdate = form => dispatch => {
  dispatch({ type: ADD_UPDATE_FORM_START });
  console.log("from formActions", form);
  dispatch({ type: ADD_UPDATE_FORM_SUCCESS, payload: form });
};


export const initialForm = none => dispatch => {
  dispatch({ type: GET_INDIVFORM_START });
};
