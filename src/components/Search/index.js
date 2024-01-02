import React from 'react'
import { useContext } from "react"
import { SearchContext } from "../../context/search-context"
function Search() 
{ 
  const context = useContext(SearchContext);
  const handleChange = (event) => {
     context.setSearchValue(event.target.value);
  }
  return (
    <div>
      <form id="search-form">
        <label>Search</label>
        <input placeholder="" id="search" type="search" pattern=".*\S.*" onChange={handleChange}></input>
        <span className="caret"></span>
      </form>
    </div>
  )
}

export {Search}