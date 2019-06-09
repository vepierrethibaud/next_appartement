import React from 'react'
import { string, func, number } from 'prop-types'

const SearchBar = ({searchValue, handleInputText, found, total}) => (
  <div className="searchBar">
    <input type="text" placeholder="Found appartment" onChange={handleInputText}/>
    {found ?
     <p className="found">Found {found} out of {total}</p>
     :
     <p className="found">No appartment found</p>
    }
  </div>
)

export default SearchBar

SearchBar.propTypes = {
  searchValue: string.isRequired,
  handleInputText: func.isRequired,
  found: number.isRequired,
  total: number.isRequired,
}