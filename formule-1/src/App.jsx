import NavBar from './component/navbar/navBar'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <div class="w-screen h-screen m-0 p-0 bg-blue-formula1"className="App">
        <NavBar />
        <Outlet />
    </div>
  )
}

export default App
