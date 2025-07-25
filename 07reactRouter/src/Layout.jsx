import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Header/>
      {/* Want to assign things dinamically
      how to do it?? --> Using Outlet
      */}
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
