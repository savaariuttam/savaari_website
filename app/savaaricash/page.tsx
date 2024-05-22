import React from 'react'
import ProfileLeft from '../profile/ProfileLeft'
import '../components/css/savaaricash.css'
import SavaariCashSummary from './SavaariCashSummary'
import Transaction from './Transaction'
const page = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-col lg:flex-row w-screen'>
                <ProfileLeft />
                <SavaariCashSummary />
            </div>

        </>
    )
}

export default page
