import React from 'react'
import ProfileLeft from '../profile/ProfileLeft'
import '../components/css/savaaricash.css'
import SavaariCashSummary from './SavaariCashSummary'
import Transaction from './Transaction'
import Footer from '../components/Footer'
import Header from '../components/header'
const page = () => {
    return (
        <>
            <Header />
            <div className='flex sm:flex-col md:flex-row lg:flex-row w-screen my-28 mx-auto container'>
                <ProfileLeft />
                <SavaariCashSummary />
            </div>
            <Footer />
        </>
    )
}

export default page
