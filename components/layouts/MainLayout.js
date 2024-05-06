import React, {useEffect, useState} from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
// import fetch from 'isomorphic-unfetch';
const MainLayout = ({children}) => {
 



  return (
    <>
    <Header/>
    {children || ''}
    <Footer/>
    </>
  )
}


export default MainLayout