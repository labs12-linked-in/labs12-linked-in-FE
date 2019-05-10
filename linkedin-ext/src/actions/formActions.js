import axios from "axios";

export const GET_FORM_START = "GET_FORM_START";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

export const getForm = () => dispatch => {
  dispatch({ type: GET_FORM_START });
  axios
    .get(
      `https://linkedinextension.herokuapp.com/api/forms/${localStorage.getItem(
        "id"
      )}`
    )
    .then(res => res.data)
    .then(forms => {
      dispatch({ type: GET_FORM_SUCCESS, payload: forms });
    })
    .catch(err => dispatch({ type: GET_FORM_FAILURE, ERROR: err }));
};

export const DELETE_FORM_START = "DELETE_FORM_START";
export const DELETE_FORM_SUCCESS = "DELETE_FORM_SUCCESS";
export const DELETE_FORM_FAILURE = "DELETE_FORM_FAILURE";

export const deleteForm = (userId, formId) => dispatch => {
  dispatch({ type: DELETE_FORM_START });
  return axios
    .delete(
      `https://linkedinextension.herokuapp.com/api/forms/${userId}/${formId}`
    )
    .then(res => {
      // console.log(res);
      dispatch({ type: DELETE_FORM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FORM_FAILURE, payload: err.response });
      alert("Failed to delete form, please try again");
    });
};

export const addForm = newForm => async dispatch => {
  console.log(newForm, "begin new form");
  await axios
    .post(
      `https://linkedinextension.herokuapp.com/api/forms/${localStorage.getItem(
        "id"
      )}`,
      {
        name: newForm.name
      }
    )
    .then(async id => {
      console.log(id, "id");
      for (let i = 0; i < newForm.fields.length; i++) {
        await axios
          .post(`https://linkedinextension.herokuapp.com/api/fields/field`, {
            form_id: id.data,
            name: newForm.fields[i].name,
            type: newForm.fields[i].selected,
            selected: newForm.fields[i].selected
          })
          .then(res => {
            console.log(res, "field res");
          })
          .catch(err => {
            console.log("Failed to add form field", err);
          });
      }
    })
    .catch(err => console.log(err));
};
