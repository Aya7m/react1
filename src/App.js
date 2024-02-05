import React from 'react'
import Navbar from './Componant/Navbar/Navbar'
import Home from './Componant/Home/Home'
import About from './Componant/About/About'
import Portfolio from './Componant/Portfolio/Portfolio'
import Contact from './Componant/Contact/Contact'
import Footor from './Componant/Footor/Footor'
import Layout from './Componant/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


export default function App() {

  let routers=createBrowserRouter([{path:"",element:<Layout/>,children:[{index:true,element:<Home/>},
{path:"about",element:<About/>},{path:"portofolio",element:<Portfolio/>},{path:"contact",element:<Contact/>}]}])
  return (
    <>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Portfolio/> */}
    {/* <Contact/> */}
    {/* <Footor/> */}
    <RouterProvider router={routers}></RouterProvider>
    


    </>
  )
}

