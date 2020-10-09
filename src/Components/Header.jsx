import React from 'react'

const Header = (props) => {
   return (
     <div className="Header">
       <h1 className="display-1">
         <span class="material-icons logo ">
           fastfood
         </span>
         Food Recipe</h1>
       <div class="ui action input ">
            <input type="text" placeholder="Search your Recipe..."
               value={props.search}
               onChange={props.onInputChange}
            />
            <button class="ui button" color='teal' onClick={props.onSearchClick}>Search</button>
        </div>
     </div>
   );
};

export default Header;
