import React from 'react'

const RecipesItems = (props) => {
 const {recipe, name, img, ingredientLines} = props;
 return (

  <div className="col-md-3">
  <div className="card py-2 text-center " id="mainCard">
    <img src={img} className="img-fluid w-60 mx-auto rounded-circle"/>
    <div className="card-body">
      <h5> {name} </h5>
    </div>
    <ul className="list-group list-group-flush">
      {
        ingredientLines.map(ingredient => (
          <li className="list-group-item" > {ingredient} </li>
        ))
      }
    </ul>
  </div>
</div> 

 );
};
export default RecipesItems;