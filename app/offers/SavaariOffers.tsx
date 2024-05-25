import React from 'react'
import OffersHeader from './OffersHeader'
import OffersCard from './OffersCard';


const SavaariOffers = () => {
    const menuItems = ["Domestic Hotels", "International Hotels", "Hotels"];
    return (
        <>
            <OffersHeader />
            <div className="offer-pg lg:mx-40 md:mx-32">
                <ul className="menu-list flex overflow-x-auto flex-nowrap">
                    {menuItems.map((item, index) => (
                        <li className="my-4" key={index}>
                            <a className="inline-block px-4 py-2 text-gray-800 border border-gray-300 bg-white whitespace-nowrap"
                                href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <OffersCard />

        </>
    )
}

export default SavaariOffers
