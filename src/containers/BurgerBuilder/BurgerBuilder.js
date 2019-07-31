import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls'; 
class BurgerBuilder extends Component {

    state = {
        ingredients :{
            salad : 2,
            bacon: 1,
            meat: 3,
            cheese: 2,
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;