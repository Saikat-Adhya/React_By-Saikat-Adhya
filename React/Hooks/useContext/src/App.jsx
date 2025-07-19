import React from 'react'
import { BioProvider } from './context/Contexti'
import Home from './components/Home'
import Button from './components/Button'
import Navbar from './donttouch/Navbar'
import Log from './donttouch/Log'

const App = () => {
  return (
    <>
    <Navbar value="jio beta"/>
    <Log value="jioew beta"/>
      <BioProvider>
        <Home />
        <Button/>
      </BioProvider>
    </>
  )
}

export default App
