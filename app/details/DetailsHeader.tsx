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
import ScrollToTopButton from "../components/UI/Scroll-To-Top-Buttom";
const DetailsHeader = () => {
    return (
        <>
        {/*.................................... all flight show here ........................................................*/}
            <section className="listing-banner mt-24 py-6 w-full text-white">
                <form action="">
                    {/*........................ top container sec start.........................................................*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <FirstRow />
                        <SecondRow />
                        <ThirdRow />
                        <FourRow />
                        <FiveRow />
                        <SixRow />
                    </div>
                    {/*........................ top container sec end...........................................................*/}
                </form>
            </section>
            {/*........................ flight list sec start.................................................................*/}
            <ListingFilterBar />
            <FlightListing />
            <ScrollToTopButton />
            {/*........................ flight list sec end.................................................................*/}
        </>
    );
};

export default DetailsHeader;