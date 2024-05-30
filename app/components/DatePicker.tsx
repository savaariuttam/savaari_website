import { Hidden } from '@material-ui/core';
import { LuCalendarDays } from "react-icons/lu";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DateDiv = ({ type }) => {
    const currentDate = new Date();
    const [departureDate, setDepartureDate] = useState(currentDate);
    const [returnDate, setReturnDate] = useState(null);

    const handleDepartureDateChange = (date) => {
        setDepartureDate(date);
    };

    const handleReturnDateChange = (date) => {
        setReturnDate(date);
    };

    return (
        <div id="dateDiv" className="flight-input flex flex-row w-full ">
            <div className="flight-group w-1/2 border-b border-[#e4e4e4]">
                <label className="text-xs leading-4 mb-1 text-gray-400 inline-block max-w-full font-normal" htmlFor="startDate">Departure Date</label>
                <DatePicker
                    selected={departureDate}
                    onChange={handleDepartureDateChange}
                    dateFormat="dd-MM-yyyy"
                    className="datepicker"
                    id="startDate"
                    name="departureDate"
                    minDate={currentDate}
                />
            </div>
            <button type="button" className={`rounded-full border  border-gray-400 h-10 w-12 flex items-center justify-center mr-6 mt-6  ${type === "round trip" ? "show" : "hidden"}`}>
                    <LuCalendarDays style={{ width: '35px', height: '25px' }} />
            </button>

            <div className={`border-b border-[#e4e4e4] flight-group w-1/2 ${type === "round trip" ? "show" : "hidden"}`} id="returnGrp">
            <label className="text-xs leading-4 mb-1 text-gray-400 inline-block max-w-full font-normal" htmlFor="startDate">Return Date</label>
                <DatePicker
                    selected={returnDate}
                    onChange={handleReturnDateChange}
                    dateFormat="dd-MM-yyyy"
                    className="datepicker"
                    id="returnDate"
                    name="returnDate"
                    minDate={departureDate}
                    disabled={!departureDate}
                />
            </div>
        </div>
    );
};

export default DateDiv;
