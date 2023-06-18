import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route/Route.jsx'
import AuthProvider from './Pages/AuthProvider/AuthProvider'
import {
 QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Container from './Hooks/Container/Container'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Container>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>  
      </QueryClientProvider>
    </Container>

  </React.StrictMode>,
)
