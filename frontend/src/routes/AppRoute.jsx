import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../Layout/Layout'
 
const AppRoute = () => {
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
                // {
                //     path: '/register',
                //     element : <Register/>
                // }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute