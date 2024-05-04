import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateDiv = () => {
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const handleDateChange = (date) => {
        // Handle the date change here if needed
        setSelectedDate(date);
    };

    return (
        <div id="dateDiv" className="flight-input">
            <div className="flight-group">
                <label htmlFor="startDate">Departure Date</label>

                {/* Use the DatePicker component */}
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd-MM-yyyy"
                    className="datepicker hasDatepicker"
                    id="startDate"
                    name="travelDate"
                    minDate={currentDate} // Set the minimum date to the current date
                />
            </div>
            <img id="calImg" src="/static/main/images/icon/calendar.png" alt="" />

            <div className="flight-group" id="returnGrp">
                <label htmlFor="returnDate">Return Date</label>
                <input
                    id="returnDate"
                    type="text"
                    className="datepicker hasDatepicker"
                    value=""
                    name="travelDate1"
                />
            </div>
        </div>
    );
};

export default DateDiv;
