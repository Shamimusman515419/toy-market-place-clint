import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route/Route.jsx'
import AuthProvider from './Pages/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div className=' max-w-7xl m-auto '>
    <AuthProvider>
    <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>  
    </div>

  </React.StrictMode>,
)
