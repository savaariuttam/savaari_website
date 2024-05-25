import React from 'react'
import Leftscreen from '../components/leftscreen'
import Rightscreen from '../components/rightscreen'

const MainHome = () => {
    return (
        <main className="flex flex-col lg:flex-row mt-20 container mx-auto gap-2">
            <div className="left_main w-full lg:w-2/5 flex justify-center">
                <Leftscreen />
            </div>
            <div className="right_main w-full lg:w-3/5 flex justify-start">
                <Rightscreen />
            </div>
        </main>
    )
}

export default MainHome
