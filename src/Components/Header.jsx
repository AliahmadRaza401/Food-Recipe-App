import React from 'react'

const Header = (props) => {
   return (
     <div className="Header">
       <h1 className="display-1">
         <span class="material-icons logo ">
            fastfoodsdfddddddddddddddddddddd
         </span>
         sdfffffffffffffffff</h1>
       <div class="input-group mb-3 w-50 m-auto">
          <input type="text" class="form-control " placeholder="Search your Recipe..."
            value={props.search}
            onChange={props.onInputChange}
          />
          <div class="input-group-append">
          <button type="button" class="btn btn-info" onClick={props.onSearchClick} >Search</button>
       </div>
      </div>
     </div>
   );
};

export default Header;
