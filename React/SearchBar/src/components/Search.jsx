import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div>
      <h1>Hello Bro   {search} </h1>
      <input type="text" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
    </div>
  )
}

export default Search
