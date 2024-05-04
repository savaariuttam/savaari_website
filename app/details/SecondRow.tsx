import React from 'react';

const SecondRow = () => {
    return (
        <div className="md:w-1/3">
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