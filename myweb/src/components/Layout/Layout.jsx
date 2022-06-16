import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
const Layout = () => {
  return (
    <BrowserRouter>
        <div>
            <Header/>
                <div>
                    <Routers/>
                </div>
            <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default Layout