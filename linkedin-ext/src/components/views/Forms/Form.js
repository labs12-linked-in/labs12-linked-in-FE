import React from 'react';
import classes from './Forms.module.css'

import NavBar from '../../views/NavBar/NavBar'
import axios from 'axios'

function deleteForm (id) {    
    axios.delete('https://linkedinextension.herokuapp.com/api/forms/:id')
        .then(res => {
            console.log(res)
        })
}

const form = (props) => (
    <div className={classes.Title}>
        <div className={classes.Name}>{props.form.name}</div>
        <div className={classes.Field}>2</div>
        <div className={classes.Empty} onClick={deleteForm(props.form.form_id)}>delete</div>
    </div>
)

export default form