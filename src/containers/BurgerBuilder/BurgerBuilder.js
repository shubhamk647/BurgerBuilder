import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls'; 
class BurgerBuilder extends Component {

    state = {
        ingredients :{
            salad : 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        },
    }

    addIngredientsHandler = (type) => {

        console.log(type);
        console.log(this.state.ingredients);

       const oldCount = this.state.ingredients[type];
       
       const updatedCount = oldCount + 1;

       const updatedIngredients = {
           ...this.state.ingredients
       }

       updatedIngredients[type] = updatedCount;

       this.setState({ingredients: updatedIngredients});
    }
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;

       if(updatedCount >= 0){
        const updatedIngredients = {
            ...this.state.ingredients
        }
 
        updatedIngredients[type] = updatedCount;
 
        this.setState({ingredients: updatedIngredients});
       }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    addIngredients = {this.addIngredientsHandler}
                    removeIngredients = {this.removeIngredientsHandler} 
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;