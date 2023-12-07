import React from 'react'
import Footer from '../components/Footer'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main_layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main_layout
