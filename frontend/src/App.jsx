
import './App.css'


import Login from './pages/Login'

import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Layout from './Layout/Layout'
import Register from './pages/Register'
import Menu from './pages/Menu'
import UserHeader from './pages/UserHeader'
import Dashboard from './pages/Profile'
import YourReferal from './pages/YourReferal'
function App() {
  const router = createBrowserRouter([
    {
        path : '/',
        element: <Layout/>,
        children:[
            // {
            //     path: '/',
            //     element: <Home/>
            // },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element : <Register/>
            },
            {
              path: '/menu',
              element : <Menu/>
            },
            {
              path: 'user',
              element: <UserHeader/>
            },
            {
              path: 'dashboard',
              element: <Dashboard/>
            },
            {
              path: 'yourReferal',
              element: <YourReferal/>
            }
        ]
    }
])

  return (
   
      <>
    
  <RouterProvider router={router}/>
  
      </>
  
    
  )
}

export default App
