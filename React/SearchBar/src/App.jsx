import React from 'react'
import Search from './components/Search';
import { useState } from 'react';
const App = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <h1>{search}</h1>
    </div>
  )
}

export default App
