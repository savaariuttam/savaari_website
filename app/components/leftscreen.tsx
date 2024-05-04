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

    const setResults = (results, isDepartFrom) => {
        if (isDepartFrom) {
            setResultsDepartFrom(results);
        } else {
            setResultsDepartTo(results);
        }
    };
    return (
        <main className="left_main w-full md:w-1/2">
            <div className="left-box box-one">
                <form>
                    <h4>Book Flights and Hotels</h4>
                    <ul className="trip-type-radio">
                        <li>
                            <label className="text-radio">
                                <input
                                    id="one-way"
                                    type="radio"
                                    name="radio1"
                                    value="one-way"
                                    defaultChecked
                                />
                                <span className="checkmark"></span>
                                <span className="trip-label">One Way</span>
                            </label>
                        </li>
                        <li>
                            <label className="text-radio">
                                <input
                                    id="round-trip"
                                    type="radio"
                                    name="radio1"
                                    value="two-way"
                                />
                                <span className="checkmark"></span>
                                <span className="trip-label">Round Trip</span>
                            </label>
                        </li>
                        <li>
                            <label className="text-radio">
                                <input
                                    id="multi-city"
                                    type="radio"
                                    name="radio1"
                                    value="multi-way"
                                />
                                <span className="checkmark"></span>
                                <span className="trip-label">Multi-City</span>
                            </label>
                        </li>
                    </ul>
                    <SearchFlight setResults={setResults} />
                    <SearchResultList results={resultsDepartFrom} />
                    <SearchResultList results={resultsDepartTo} />

                    <DateDiv />

                    <PersonSelect />
                    <ul className="filter-list bt_filter">
                        <li>
                            <label className="custom-checkbox-radio">
                                <input type="checkbox" name="isDirectFlight" value="True" />
                                <span className="checkmark"></span>
                                Non Stop Flights
                            </label>
                        </li>
                        <li>
                            <label className="custom-checkbox-radio">
                                <input id="student_box" type="checkbox" name="Special" value="STUDENT" />
                                <span className="checkmark"></span>
                                Student Fare
                            </label>
                        </li>
                        <li>
                            <label className="custom-checkbox-radio">
                                <input id="armed_box" type="checkbox" name="Special" value="MIL" />
                                <span className="checkmark"></span>
                                Armed Forces
                            </label>
                        </li>
                        <li>
                            <label className="custom-checkbox-radio">
                                <input id="senior_box" type="checkbox" name="Special" value="SENIOR_CITIZEN" />
                                <span className="checkmark"></span>
                                Senior Citizen
                            </label>
                        </li>
                    </ul>
                    <SearchFlightsButton />
                </form>

            </div>

        </main>
    )
}



export default Leftscreen;