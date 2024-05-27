"use client";
import React, { useState } from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourRow from "./FourRow";
import FiveRow from "./FiveRow";
import SixRow from "./SixRow";
import FlightListing from "./FlightList"
import ListingFilterBar from "./ListingFilterBar"
const DetailsHeader = () => {
    return (
        <>
            <section className="listing-banner mt-24 py-6 w-full text-white">
                <form action="">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <FirstRow />
                        <SecondRow />
                        <ThirdRow />
                        <FourRow />
                        <FiveRow />
                        <SixRow />
                    </div>
                </form>
            </section>
            <ListingFilterBar />
            <FlightListing />
        </>
    );
};

export default DetailsHeader;