import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {ingredientsLabel: 'Salad', type: 'salad'},
    {ingredientsLabel: 'Bacon', type: 'bacon'},
    {ingredientsLabel: 'Meat', type: 'meat'},
    {ingredientsLabel: 'Cheese', type: 'cheese'},
];
const BuildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl key = {ctrl.ingredientsLabel}  
                ingredientsLabel = {ctrl.ingredientsLabel} />
            })}
        </div>
    );
};

export default BuildControls;