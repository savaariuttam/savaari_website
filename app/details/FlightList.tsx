import React from 'react';
import OfferSec from './OfferSec'
import FlightFilter from './FlightFilter'
import FlightListingBox from './FlightListingBox'
const FlightListing = () => {
    return (
        <>
            <div className="main_container">
                <div className="flight-sec gap-8 grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:col-span-2 sm:order-2">
                        <OfferSec />
                    </div>
                    <div id="flight-list" className="sm:col-span-10 sm:order-1">
                        <FlightFilter />
                        <FlightListingBox />
                    </div>
                </div>
            </div>

        </>
    );
};

export default FlightListing;