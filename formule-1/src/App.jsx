import NavBar from './component/navbar/navBar'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <div class="w-screen m-0 p-0"className="App">
        <NavBar />
        <Outlet />
    </div>
  )
}

export default App
