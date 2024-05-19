import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout