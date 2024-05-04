"use client";
import React, { useState } from "react";
import SwitchButton from '../components/SwitchButton';

const SearchFlight = ({ setResults }) => {
    const [inputDepartFrom, setInputDepartFrom] = useState("");
    const [inputDepartTo, setInputDepartTo] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state

    const fetchData = (value, isDepartFrom) => {
        setLoading(true); // Set loading to true before making the API call

        fetch("https://onlinesavaari.website/savaari_api/flight_code_list/")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results, isDepartFrom);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false after API call is complete
            });
    };

    const handleChange = (value, isDepartFrom) => {
        if (isDepartFrom) {
            setInputDepartFrom(value);
        } else {
            setInputDepartTo(value);
        }
        fetchData(value, isDepartFrom);
    };

    return (
        <>
            <div id="twoWay" className="flight-input mt-4">
                <div className="flight-group">
                    <label htmlFor="departFrom">Depart From</label>
                    <input
                        name="fromCityOrAirport"
                        id="departFrom"
                        type="text"
                        list="airport"
                        placeholder="Kolkata"
                        value={inputDepartFrom}
                        onChange={(e) => handleChange(e.target.value, true)}
                    />
                    <p className="small m-0">Kolkata</p>
                </div>

                <SwitchButton />

                <div className="flight-group">
                    <label htmlFor="departTo">Going To</label>
                    <input
                        name="toCityOrAirport"
                        id="departTo"
                        list="airport"
                        type="text"
                        placeholder="Mumbai"
                        value={inputDepartTo}
                        onChange={(e) => handleChange(e.target.value, false)}
                    />
                    <p className="small m-0">Mumbai</p>
                </div>
            </div>

            {loading && <p>Loading...</p>}
        </>
    );
};

export default SearchFlight;
