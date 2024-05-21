import React from 'react'
import ProfileRight from './ProfileRight'
import ProfileLeft from './ProfileLeft'
import "../components/css/profile.css"
const page = () => {
    return (
        <>

            <div className='flex flex-col lg:flex-row w-screen'>
                <ProfileLeft />
                <ProfileRight />
            </div>
        </>
    )
}

export default page
