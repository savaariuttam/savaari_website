import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateDiv = () => {
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
        <div id="dateDiv" className="flight-input">
            <div className="flight-group">
                <label htmlFor="startDate">Departure Date</label>
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

            <div className="flight-group" id="returnGrp">
                <label htmlFor="returnDate">Return Date</label>
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
