import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from "./Components/Recipe";
import Axios from "axios";
import {Spinner} from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState ([]);
  const [Loading, setLoading] = useState(false);

  const APP_ID = "112007ea"; 
  const APP_KEY = "991dc58b5cccab4f24e87eb6a1468874"; 

     useEffect( () => {
        getRecipes();
  },[]);

  const getRecipes = async () => {
    await Axios.get (
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    .then ( (responce) => {
      console.log(responce);
      setRecipe(responce.data.hits);
    })
    .catch ( (Error) => {
      console.log("Not Found Try Again Plzzzzzzzzzzzzzzzz");
      
      return;
    })
    
    setLoading(true);  
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
         { Loading ? <Recipe recipe = {recipe} /> : 
         
         <Spinner animation="grow" variant="secondary" />
         }
       
       </div>     
    </div>
  );
}

export default App;
