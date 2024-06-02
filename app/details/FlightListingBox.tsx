
import React, { useState } from 'react';
import ViewFares from './ViewFares';
import MoreFilter from './MoreFilter';
import { IoMdCloseCircleOutline } from "react-icons/io";
const flights = [
    {
        id: 1,
        airlineLogo: 'https://onlinesavaari.website/static/flight/airline_logo/AI.png',
        airlineName: 'Air India',
        flightNumber: 'AI-805',
        price: 8636,
        departureTime: '2024-02-10 20:10',
        departureAirport: 'Delhi Indira Gandhi Intl',
        arrivalTime: '2024-02-10 22:25',
        arrivalAirport: 'Chhatrapati Shivaji',
        duration: '2h 15m',
        stops: '0Stop'
    },
    {
        id: 2,
        airlineLogo: 'https://onlinesavaari.website/static/flight/airline_logo/SG.png',
        airlineName: 'SpiceJet',
        flightNumber: 'SG-501',
        price: 3000,
        departureTime: '2024-02-10 08:00',
        departureAirport: 'Delhi Indira Gandhi Intl',
        arrivalTime: '2024-02-10 10:25',
        arrivalAirport: 'Chhatrapati Shivaji',
        duration: '2h 25m',
        stops: '0Stop'
    },
    {
        id: 3,
        airlineLogo: 'https://onlinesavaari.website/static/flight/airline_logo/UK.png',
        airlineName: 'Vistara',
        flightNumber: 'UK-847',
        price: 3850,
        departureTime: '2024-02-10 08:00',
        departureAirport: 'Delhi Indira Gandhi Intl',
        arrivalTime: '2024-02-10 10:25',
        arrivalAirport: 'Chhatrapati Shivaji',
        duration: '2h 25m',
        stops: '0Stop'
    }
];

const FlightListingBox = () => {
    const [openFaresId, setOpenFaresId] = useState(null);
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [showMoreFilter, setShowMoreFilter] = useState(false);
    const handleOpenFares = (id) => {
        setOpenFaresId(prevState => (prevState === id ? null : id));
    };

    const handleAirlineSelection = (airline) => {
        setSelectedAirlines((prevSelectedAirlines) => {
            if (prevSelectedAirlines.includes(airline)) {
                return prevSelectedAirlines.filter(a => a !== airline);
            } else {
                return [...prevSelectedAirlines, airline];
            }
        });
        console.log("FlightListingBox", airline);
    };

    const removeSelectedAirline = (airline) => {
        setSelectedAirlines((prevSelectedAirlines) => prevSelectedAirlines.filter(a => a !== airline));
    };

    const filteredFlights = flights.filter(flight =>
        selectedAirlines.length === 0 || selectedAirlines.includes(flight.airlineName)
    );
    

    const handleClose = () => {
        setShowMoreFilter(false);
    };
    const handleOpenFilter = () => {
        setShowMoreFilter(true);
    };
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <button onClick={handleOpenFilter} className="px-4 py-2 bg-red-500 text-white rounded">
                    Open Filters
                </button>
                <div className="selected-airlines flex justify-between items-center mb-4 gap-2">
                    {selectedAirlines.length > 0 && (
                        <>
                            {selectedAirlines.map((airline) => (
                                <span key={airline} className="selected-airline">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded flex justify-center gap-1 items-center" onClick={() => removeSelectedAirline(airline)}>{airline} <IoMdCloseCircleOutline /></button>
                                </span>
                            ))}
                        </>
                    )

                    }
                </div>
            </div>
            {showMoreFilter && <MoreFilter handleAirlineSelection={handleAirlineSelection} handleClose={handleClose} />}

            {filteredFlights.length > 0 ? (
                filteredFlights.map(flight => (
                    <div className="listing-box box-one" key={flight.id}>
                        <div className="basic-info">
                            <div className="basic-info">
                                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 grid-cols-2">
                                    <div className="firstt lg:col-span-2 md:order-1 lg:order-1">
                                        <div className="flight-name">
                                            <img src={flight.airlineLogo} alt={`${flight.airlineName} Logo`} />
                                            <div><b>{flight.airlineName}</b></div>
                                            <div className="small">{flight.flightNumber}</div>
                                        </div>
                                    </div>
                                    <div className="thirdd lg:col-span-3 md:order-2 lg:order-3">
                                        <div className="total-price flex items-center justify-end gap-1">
                                            <div><b>${flight.price}</b></div>
                                            <button className="btn btn-red" onClick={() => handleOpenFares(flight.id)}>
                                                {openFaresId === flight.id ? 'Hide Fares' : 'View Fares'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="midd lg:col-span-7 md:order-3 lg:order-2 md:w-[200%] sm:w-[190%] lg:w-full">
                                        <div className="flight-time flex">
                                            <div className="time">
                                                <div><b>{flight.departureTime}</b></div>
                                                <div className="small">{flight.departureAirport}</div>
                                            </div>
                                            <div className="stops mt-8">
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className="time">
                                                <div><b>{flight.arrivalTime}</b></div>
                                                <div className="small">{flight.arrivalAirport}</div>
                                            </div>
                                        </div>
                                        <div className="vl mx-1"></div>
                                        <div className="total-time ml-2">
                                            <div><b style={{ whiteSpace: 'nowrap' }}>{flight.duration}</b></div>
                                            <div className="small">{flight.stops}</div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="divider-sec pt-2">
                                    <span className="m-0 cashback">YOU CAN BOOK THIS FLIGHT</span>
                                    <button className="cursor-pointer">
                                        <a href="javascript:void(0)">Flights details</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {openFaresId === flight.id && <ViewFares />}
                    </div>
                ))
            ) : (
                <div className="no-flights-text">No flights available based on selected filters.</div>
            )}
        </>
    );
};

export default FlightListingBox;


























