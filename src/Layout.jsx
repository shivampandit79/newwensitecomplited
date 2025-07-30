import React from 'react'
import Header from './componnents/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componnents/Footer/Footer'
import Home from './Home/Home'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
