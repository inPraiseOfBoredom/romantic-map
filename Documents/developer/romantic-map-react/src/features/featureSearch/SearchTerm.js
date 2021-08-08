import { div } from 'prelude-ls';
import React from 'react';
import { setSearchTerm , clearSearchTerm} from './featureSearchSlice';

export const SearchTerm = (props) => {

 const {searchTerm, dispatch} = props;

 const onSearchChangeHandler = (e) => {
     const userInput = e.target.value;
     dispatch(setSearchTerm(userInput));
 }

const onClearSearchHandler = () => {
    dispatch(clearSearchTerm());
}

return (
   <div id="search-container">
       <img id='search-icon' />
       <input 
        id='search'
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search romantic spots"
       />
       {searchTerm.length > 0 && (
         <button 
         onClick={onClearSearchHandler}
         type='button'
         id="search-clear-button"
         >
             <img />
             </button>
       )
       }

   </div>

)
}

