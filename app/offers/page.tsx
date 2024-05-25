import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import "../components/css/offers.css"
import SavaariOffers from './SavaariOffers'


const page = () => {
    return (
        <>
            <Header /> 
            <SavaariOffers />
           <Footer /> 
        </>
    )
}

export default page
