import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footor from '../Footor/Footor'
import { Outlet } from 'react-router-dom'

export default function 
() {
  return (
    <>
       < Navbar/>
       
       <Outlet/>

       <Footor/>


    </>
  )
}
