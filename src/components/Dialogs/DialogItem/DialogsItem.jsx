import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path1 = "/dialogs/" + props.id;
    return <div className={classes.dialog}>
        <NavLink to={path1}>{props.name}</NavLink>
    </div>
}
export default DialogItem;