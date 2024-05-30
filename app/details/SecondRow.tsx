import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SecondRow = () => {
    const currentDate = new Date();
    const [departureDate, setDepartureDate] = useState(currentDate);


    const handleDepartureDateChange = (date) => {
        setDepartureDate(date);
    };

 
    return (
        <div className="sm:w-full md:w-full lg:w-full w-full">
            <div className="flight-input1">
                <div className="flight-group1">
                    <label className="text-xs leading-4 mb-1 text-white inline-block max-w-full font-normal" htmlFor="startDate">Departure Date</label>
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
            </div>
        </div>




    );
};

export default SecondRow;