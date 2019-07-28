import React from 'react';

const Ingredients = ({ingredients}) => {
    return (
        <span className="ingredients">{'Ingredients: ' + ingredients.toString()}</span>
    )
}

export default Ingredients;