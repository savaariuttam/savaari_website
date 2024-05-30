import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FaCloudSun } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { PiSunHorizonFill } from "react-icons/pi";
import { RiMoonClearFill } from "react-icons/ri";

const MoreFilter = ({ handleClose }) => {
    const [price, setPrice] = useState(20000);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [selectedStops, setSelectedStops] = useState([]); 
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleTimeClick = (time) => {
        setSelectedTimes((prevSelectedTimes) => {
            if (prevSelectedTimes.includes(time)) {
                return prevSelectedTimes.filter(t => t !== time);
            } else {
                return [...prevSelectedTimes, time];
            }
        });
    };
    

    const handleStopClick = (stop) => {
        if (selectedStops.includes(stop)) {
            setSelectedStops(selectedStops.filter((selectedStop) => selectedStop !== stop));
        } else {
            setSelectedStops([...selectedStops, stop]);
        }
    };
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button onClick={handleClose}>
                        <AiOutlineClose className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Stops:</label>
                        <div className="flex space-x-2 mt-1">
                            {[0, 1, 2].map((stop) => (
                                <button
                                    key={stop}
                                    className={`border px-3 py-1 rounded ${selectedStops.includes(stop) ? 'bg-red-500 text-white' : ''}`}
                                    onClick={() => handleStopClick(stop)}
                                >
                                    {stop}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Price:</label>
                        <div className="mt-1">
                            <input
                                type="range"
                                className="w-full"
                                min="3955"
                                max="39770"
                                value={price}
                                onChange={handlePriceChange}
                            />
                            <div className="flex justify-between text-sm">
                                <span>₹3955</span>
                                <span>₹39770</span>
                            </div>
                            <div className="text-center mt-2 text-sm">
                                Selected Price: ₹{price}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Depart Time:</label>
                        <div className="flex space-x-2 mt-1">
                            {['00-06', '06-12', '12-18', '18-00'].map((time) => {
                                let iconClass;
                                switch (time) {
                                    case '00-06':
                                        iconClass = <FaCloudSun />;
                                        break;
                                    case '06-12':
                                        iconClass = <FaSun />;
                                        break;
                                    case '12-18':
                                        iconClass = <PiSunHorizonFill />;
                                        break;
                                    case '18-00':
                                        iconClass = <RiMoonClearFill />;
                                        break;
                                    default:
                                        iconClass = '';
                                }

                                return (
                                    <button
                                        key={time}
                                        className={`border px-3 py-1 rounded flex items-center space-x-2 ${selectedTimes.includes(time) ? 'bg-red-500 text-white' : ''}`}
                                        onClick={() => handleTimeClick(time)}
                                    >
                                        {iconClass}
                                        <span>{time}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Airlines:</label>
                        <div className="space-y-1 mt-1">
                            {['Vistara', 'Air India', 'SpiceJet', 'AI Express', 'AirAsia India'].map((airline) => (
                                <div key={airline} className="flex items-center">
                                    <input type="checkbox" id={airline} className="mr-2" />
                                    <label htmlFor={airline} className="text-sm text-gray-600">{airline}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button className="px-4 py-2 border rounded" onClick={handleClose}>Cancel</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded">Apply Filter</button>
                </div>
            </div>
        </div>
    );
};

export default MoreFilter;
