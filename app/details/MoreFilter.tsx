import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MoreFilter = ({ handleClose }) => {
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
                        <label className="block text-sm font-medium">Stops:</label>
                        <div className="flex space-x-2 mt-1">
                            {[0, 1, 2].map((stop) => (
                                <button key={stop} className="border px-3 py-1 rounded">{stop}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Price:</label>
                        <div className="mt-1">
                            <input type="range" className="w-full" min="0" max="50000" />
                            <div className="flex justify-between text-sm">
                                <span>₹3955</span>
                                <span>₹39770</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Depart Time:</label>
                        <div className="flex space-x-2 mt-1">
                            {['00-06', '06-12', '12-18', '18-00'].map((time) => (
                                <button key={time} className="border px-3 py-1 rounded">
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Airlines:</label>
                        <div className="space-y-1 mt-1">
                            {['Vistara', 'Air India', 'SpiceJet', 'AI Express', 'AirAsia India'].map((airline) => (
                                <div key={airline} className="flex items-center">
                                    <input type="checkbox" id={airline} className="mr-2" />
                                    <label htmlFor={airline} className="text-sm">{airline}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button className="px-4 py-2 border rounded">Cancel</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded">Apply Filter</button>
                </div>
            </div>
        </div>
    );
};

export default MoreFilter;

