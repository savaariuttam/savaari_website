import React from 'react';

const SecondRow = () => {
    return (
        <div className="sm:w-full md:w-full lg:w-full">
            <div className="flight-input1">
                <div className="flight-group1">
                    <label htmlFor="travelDate">Departure Date</label>
                    <input type="text" className="datepicker" />
                </div>
            </div>
        </div>
    );
};

export default SecondRow;