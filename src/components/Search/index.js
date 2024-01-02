import React from 'react'
function Search({
  searchValue,
  setSearchValue
}) {
  return (
    <div>
      <form id="search-form">
        <label for="search">Search</label>
        <input placeholder="" id="search" type="search" value={searchValue} pattern=".*\S.*" onChange={(event) => {
          setSearchValue(event.target.value); }}></input>
        <span className="caret"></span>
      </form>
    </div>
  )
}

export {Search}