"use client";
import React, { useState } from "react";
import PersonSelect from "./personselect";
import Button from "./UI/Button";
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
    const filterOptions = [
        { label: 'Non Stop Flights', value: 'isDirectFlight', name: 'isDirectFlight' },
        { label: 'Student Fare', value: 'STUDENT', name: 'Special' },
        { label: 'Armed Force', value: 'MIL', name: 'Special' },
        { label: 'Senior Citizen', value: 'SENIOR_CITIZEN', name: 'Special' },
    ];
    return (
// .................................................home page left screen..............................................................................................................

        <div className="left-box min-w-80 box-one flex flex-row justify-center h-[calc(100vh-120px)] mt-[30px] ml-0 lg:ml-[70px] sm:ml-[0px] sticky top-[100px]">
            <form>
        {/* .............................left screen route select start .....................................................................*/}
                <h2 className="text-xl font-bold mb-4">Book Flights and Hotels</h2>
                <div className="flex justify-start gap-4 mb-4">

                    {['One Way', 'Round Trip', 'Multi-City'].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleTripTypeChange(type.toLowerCase())}
                            className={`py-2 px-4 rounded-lg text-sm ${tripType === type.toLowerCase() ? 'bg-white text-[#ea2330] border border-[#ea2330]' : 'border border-[#999999] text-[#999999]'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
        {/* .............................left screen route select end .......................................................................*/}
        {/* .............................left screen Depart From and Going To sec start .....................................................*/}
                <SearchFlight setResults={setResults} />
                <SearchResultList results={resultsDepartFrom} />
                <SearchResultList results={resultsDepartTo} />
        {/* .............................left screen Depart From and Going To sec end .......................................................*/}
                <DateDiv type={tripType} />
                <PersonSelect />
        {/* ..............................flight category select start ......................................................................*/}
                <ul className="filter-list bt_filter">
                    {filterOptions.map((filter) => (
                        <li key={filter.value}>
                            <label className="custom-checkbox-radio flex gap-1">
                                <input
                                    type="checkbox"
                                    name={filter.name}
                                    value={filter.value}
                                />
                                <span className="checkmark"></span>
                                {filter.label}
                            </label>
                        </li>
                    ))}
                </ul>
        {/* ..............................flight category select start ......................................................................*/}

                <div className="text-right mt-4">
                    <Button href="/details" name="Search Flights" className='mt-2'/>
                </div>

            </form>
        </div>
    )
}



export default Leftscreen;