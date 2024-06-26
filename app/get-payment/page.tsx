import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import PaymentMethod from './PaymentMethod'
import PaymentDetails from './PaymentDetails'

const page = () => {
    return (
        <>
            {/*......................................... get-payment page  ...............................................*/}
            <Header />
            <main className="flex flex-col lg:flex-row mt-28 gap-10">
                {/*................................. get payment left side ........................................... */}
                <div className="lg:w-2/3 flex justify-center lg:justify-end">
                    <PaymentMethod />
                </div>
                {/*................................. get payment right side ........................................... */}
                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                    <PaymentDetails />
                </div>
            </main>
            <Footer />

        </>
    )
}

export default page
