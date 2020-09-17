import React from 'react'
import RecipesItems from './RecipesItems';

const Recipe = (props) => {
 
   return (
     <div className="row">
       {
         props.recipe.map(recipe => (
           <RecipesItems 
               name={recipe.recipe.label}
               img={recipe.recipe.image}
               ingredientLines={recipe.recipe.ingredientLines}
           />
         ))
       }
     </div>
   );
};

export default Recipe;