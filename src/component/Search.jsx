import React, {useState} from 'react'
import {BsSearch} from "react-icons/bs";
import '../Style/Search.css'

const Search = ({setCityName}) => {

    const [ city, setCity ] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setCityName(city)
    }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      
          <input type="text" className="search-input" placeholder="Enter City Name ....." value={city} onChange={(e) => setCity(e.target.value)} /> 
          <button type="submit" className='search-btn'><BsSearch /></button>
          
    </form>
  )
}

export default Search

