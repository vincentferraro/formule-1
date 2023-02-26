import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DriversPage from './pages/drivers'
import TeamsPage from './pages/teams'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
     path: "/drivers",
     element:<DriversPage />
    },
      {
        path: "/teams",
        element: <TeamsPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
