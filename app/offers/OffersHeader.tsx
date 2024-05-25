import React from 'react'

const OffersHeader = () => {
    return (
        <section className="heading-banner bg-center bg-cover text-center bg-green-900">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <p className="m-0 text-white py-4 font-black text-xl" style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.6)" }}>
                            Great Offers &amp; Amazing Deals
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OffersHeader