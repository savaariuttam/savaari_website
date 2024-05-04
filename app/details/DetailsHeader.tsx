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
            <section className="listing-banner" style={{ padding: '40px 0' }}>
                <form method="GET" action="">
                    <div className="flex flex-wrap">
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