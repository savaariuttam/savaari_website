import React from 'react';

const FlightListingBox = () => {
    return (
        <>
            <div className="listing-box box-one">
                <div className="basic-info">
                    <div className="flight-details flex items-center">
                        <div className="">
                            <div className="flight-name">
                                <img src="https://onlinesavaari.website/static/flight/airline_logo/SG.png" alt="Air India Logo" />
                                <div><b>Air India</b></div>
                                <div className="small">AI-805</div>
                            </div>
                        </div>
                        <div className="midd">
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
                            <div className="vl"></div>
                            <div className="total-time ml-2">
                                <div><b style={{ whiteSpace: 'nowrap' }}>2h 15m</b></div>
                                <div className="small">0Stop</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="total-price flex items-center gap-1">
                                <div><b> $ 4636</b></div>
                                <button className="btn btn-red">View Fares</button>
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