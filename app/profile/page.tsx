import React from 'react'
import ProfileRight from './ProfileRight'
import ProfileLeft from './ProfileLeft'
import "../components/css/profile.css"
import Header from '../components/header'
import Footer from '../components/Footer'
const page = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col sm:flex-col lg:flex-row md:flex-row w-screen container mx-auto justify-center mt-28'>
                <ProfileLeft />
                <ProfileRight />
            </div>
            <Footer />
        </>
    )
}

export default page
