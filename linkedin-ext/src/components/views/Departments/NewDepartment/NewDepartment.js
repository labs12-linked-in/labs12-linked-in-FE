import React from 'react';
import classes from './NewDepartment.module.css';
import back from './left-arrow.svg';

const positions = [
    {position: 'Admin'},
    {position: 'Supervisor'},
    {position: 'Manager'},
    {position: 'Director'},
    {position: 'VP'}
]

const newDepartment = (props) => (
    <div className={classes.NewDepartment}>
        <div className={classes.TopPortion}>
        <div className={classes.Cancle} onClick={props.cancle}>
            <img className={classes.Img} src={back} alt='Go back'/>
            <p>Cancel</p>
        </div>
        <div className={classes.Save}>
            <button>Save</button>
        </div>
        </div>

        <div className={classes.Title}>Department Name</div>
        <input type='text' className={classes.Input} />
        <div className={classes.ButtonPortion}>
        <div className={classes.Name}>
            <p>Target</p>
            <p>Email adrress</p>
        </div>
        <div className={classes.Data}>
            <div className={classes.Target}>
                {positions.map(positon => (
                    <div>{positon.position}</div>
                ))}
            </div>
            <div className={classes.Email}>
            </div>
        </div>
        </div>
    </div>
)

export default newDepartment