"use client";
import React, { useState } from "react";
import PersonSelect from "./personselect";
import SearchFlightsButton from "./button";
import SearchFlight from "./searchflight";
import SearchResultList from "./SearchResultList";

import DateDiv from "./DatePicker";
function Leftscreen() {
    const [resultsDepartFrom, setResultsDepartFrom] = useState([]);
    const [resultsDepartTo, setResultsDepartTo] = useState([]);
    const [tripType, setTripType] = useState('one way');
    
    const handleTripTypeChange = (type) => {
        event.preventDefault();
        setTripType(type);
    };
    const setResults = (results, isDepartFrom) => {
        if (isDepartFrom) {
            setResultsDepartFrom(results);
        } else {
            setResultsDepartTo(results);
        }
    };
    return (
        <div className="left-box min-w-80 box-one flex flex-row justify-center h-[calc(100vh-120px)] mt-[30px] ml-0 lg:ml-[70px] sm:ml-[0px] sticky top-[100px]">
            <form>
                <h2 className="text-xl font-bold mb-4">Book Flights and Hotels</h2>
                <div className="flex justify-start gap-4 mb-4">
                
            {['One Way', 'Round Trip', 'Multi-City'].map((type) => (
                <button
                    key={type}
                    onClick={() => handleTripTypeChange(type.toLowerCase())}
                    className={`py-2 px-4 rounded-lg ${tripType === type.toLowerCase() ? 'bg-white text-[#ea2330] border-2 border-rose-500' : 'bg-gray-200 text-gray-700'}`}
                >
                    {type}
                </button>
            ))}
        
                </div>

                <SearchFlight setResults={setResults} />
                <SearchResultList results={resultsDepartFrom} />
                <SearchResultList results={resultsDepartTo} />

                <DateDiv type={tripType}/>
                <PersonSelect />
                <ul className="filter-list bt_filter">
                    <li>
                        <label className="custom-checkbox-radio flex gap-1">
                            <input type="checkbox" name="isDirectFlight" value="True" />
                            <span className="checkmark"></span>
                            Non Stop Flights
                        </label>
                    </li>
                    <li>
                        <label className="custom-checkbox-radio flex gap-1">
                            <input id="student_box" type="checkbox" name="Special" value="STUDENT" />
                            <span className="checkmark"></span>
                            Student Fare
                        </label>
                    </li>
                    <li>
                        <label className="custom-checkbox-radio flex gap-1">
                            <input id="armed_box" type="checkbox" name="Special" value="MIL" />
                            <span className="checkmark"></span>
                            Armed Force
                        </label>
                    </li>
                    <li>
                        <label className="custom-checkbox-radio flex gap-1">
                            <input id="senior_box" type="checkbox" name="Special" value="SENIOR_CITIZEN" />
                            <span className="checkmark"></span>
                            Senior Citizen
                        </label>
                    </li>
                </ul>
                <SearchFlightsButton />
            </form>
        </div>
    )
}



export default Leftscreen;