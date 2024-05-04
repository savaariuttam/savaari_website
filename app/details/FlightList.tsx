import React from 'react';
import OfferSec from './OfferSec'
import FlightFilter from './FlightFilter'
import FlightListingBox from './FlightListingBox'
const FlightListing = () => {
    return (
        <>
            <div className="main-container">
                <div className="flight-sec flex gap-8">
                    <div id="flight-list" className="flex-1">
                        <FlightFilter />
                        <FlightListingBox />
                    </div>
                    <OfferSec />
                </div>
            </div>
        </>
    );
};

export default FlightListing;