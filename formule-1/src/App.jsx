import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from '../src/component/header'
import NavBar from './component/navbar/navBar'
function App() {
  
  return (
    <div className="App">
        <Header />
        <NavBar />
    </div>
  )
}

export default App
