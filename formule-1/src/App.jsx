
import './App.css'

import Header from '../src/component/header'
import NavBar from './component/navbar/navBar'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
        <Header />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
