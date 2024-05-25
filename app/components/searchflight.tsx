"use client";
import React, { useState } from "react";
import SwitchButton from '../components/SwitchButton';

const SearchFlight = ({ setResults }) => {
    const [inputDepartFrom, setInputDepartFrom] = useState("");
    const [inputDepartTo, setInputDepartTo] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchData = (value, isDepartFrom) => {
        setLoading(true);

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
                setLoading(false);
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
            <div id="twoWay" className="flight-input mt-4 flex justify-between gap-4">
                <div className="flight-group border-b border-[#e4e4e4]">
                    <label className="text-xs leading-4 mb-1 text-gray-400 inline-block max-w-full font-normal"htmlFor="departFrom">Depart From</label>
                    <input
                     className="p-0 border-none text-xl font-semibold w-full"
                        name="fromCityOrAirport"
                        id="departFrom"
                        type="text"
                        list="airport"
                        placeholder="Kolkata"
                        value={inputDepartFrom}
                        onChange={(e) => handleChange(e.target.value, true)}
                    />
                    <p className="small m-0 text-xs">Kolkata</p>
                </div>

                <SwitchButton />

                <div className="flight-group border-b border-[#e4e4e4]">
                    <label className="text-xs leading-4 mb-1 text-gray-400 inline-block max-w-full font-normal"htmlFor="departTo">Going To</label>
                    <input
                     className="p-0 border-none text-xl font-semibold w-full"
                        name="toCityOrAirport"
                        id="departTo"
                        list="airport"
                        type="text"
                        placeholder="Mumbai"
                        value={inputDepartTo}
                        onChange={(e) => handleChange(e.target.value, false)}
                    />
                    <p className="small m-0 text-xs">Mumbai</p>
                </div>
            </div>

            {loading && <p>Loading...</p>}
        </>
    );
};

export default SearchFlight;
