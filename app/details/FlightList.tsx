import React from 'react';
import OfferSec from './OfferSec'
import FlightFilter from './FlightFilter'
import FlightListingBox from './FlightListingBox'
const FlightListing = () => {
    return (
        <>
        {/*........................................... Offer Sec and all flight show sec ...............................................*/}
            <div className="main_container">
                <div className="flight-sec gap-8 grid grid-cols-1 sm:grid-cols-12">
                    {/*............................... savaari offer sec start............................................*/}
                    <div className="sm:col-span-2 sm:order-2">
                        <OfferSec />
                    </div>
                    {/*............................... savaari offer sec end............................................*/}
                    {/*............................... all flight show and filter sec start............................................*/}
                    <div id="flight-list" className="sm:col-span-10 sm:order-1">
                        <FlightFilter />
                        <FlightListingBox />
                    </div>
                    {/*............................... all flight show and filter sec end............................................*/}
                </div>
            </div>

        </>
    );
};

export default FlightListing;