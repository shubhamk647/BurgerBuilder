import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label} >{props.ingredientsLabel}</div>
            <button className = {classes.More} onClick = {props.addIngredients}>More</button>
            <button className = {classes.Less} onClick = {props.removeIngredients}>Less</button>
        </div>
    );
};

export default BuildControl;