import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from "./Components/Recipe";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState ([]);

  const APP_ID = "112007ea"; 
  const APP_KEY = "991dc58b5cccab4f24e87eb6a1468874"; 

     useEffect( () => {
        getRecipes();
  },[]);

  const getRecipes = async () => {
    const result = await Axios.get (
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    
    setRecipe(result.data.hits);
  };

  const onSearchClick = () => {
    getRecipes();
    console.log("btn clicked");
  }


  const onInputChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="App">
       <Header 
          search={ search } 
          onInputChange= {onInputChange}
          onSearchClick= {onSearchClick}
          />

       <div className="container">
       <Recipe recipe = {recipe} />
       </div>
     
    </div>
  );
}

export default App;
