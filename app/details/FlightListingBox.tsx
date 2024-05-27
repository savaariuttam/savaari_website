import React from 'react';

const FlightListingBox = () => {
    return (
        <>
            <div className="listing-box box-one">
                <div className="basic-info">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12">
                        <div className="firstt lg:col-span-2 sm:order-1 md:order-1 lg:order-1">
                            <div className="flight-name">
                                <img src="https://onlinesavaari.website/static/flight/airline_logo/SG.png" alt="Air India Logo" />
                                <div><b>Air India</b></div>
                                <div className="small">AI-805</div>
                            </div>
                        </div>
                        <div className="thirdd lg:col-span-3 sm:order-2 md:order-2 lg:order-3">
                            <div className="total-price flex items-center justify-end gap-1">
                                <div><b>$ 4636</b></div>
                                <button className="btn btn-red">View Fares</button>
                            </div>
                        </div>
                        <div className="midd lg:col-span-7 sm:order-3 md:order-3 lg:order-2 md:w-[200%] sm:w-[190%] lg:w-full">
                            <div className="flight-time flex">
                                <div className="time">
                                    <div><b>2024-02-10 20:10</b></div>
                                    <div className="small">Delhi Indira Gandhi Intl</div>
                                </div>
                                <div className="stops mt-8">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="time">
                                    <div><b>2024-02-10 22:25</b></div>
                                    <div className="small">Chhatrapati Shivaji</div>
                                </div>
                            </div>
                            <div className="vl mx-1"></div>
                            <div className="total-time ml-2">
                                <div><b style={{ whiteSpace: 'nowrap' }}>2h 15m</b></div>
                                <div className="small">0Stop</div>
                            </div>
                        </div>
                    </div>


                    <hr></hr>
                    <div className="divider-sec pt-2">
                        <span className="m-0 cashback">YOU CAN BOOK THIS FLIGHT</span>
                        <button className="cursor-pointer"><a href="javascript:void(0)">Flights details</a></button>
                    </div>
                </div>
            </div>
        </>


    );
};

export default FlightListingBox;