import React from 'react'
import Leftscreen from '../components/leftscreen'
import Rightscreen from '../components/rightscreen'

const MainHome = () => {
    return (
        <main className="flex flex-col lg:flex-row mt-20">
            <div className="left_main w-full lg:w-1/2 flex justify-center">
                <Leftscreen />
            </div>
            <div className="right_main w-full lg:w-1/2">
                <Rightscreen />
            </div>
        </main>
    )
}

export default MainHome
