import React from 'react';

const SearchFlightsButton = () => {
    return (
        <div className="text-right mt-4">
            <button className="btn btn-red">
                Search Flights
                <span><i className="la la-long-arrow-right la-lg"></i></span>
            </button>
        </div>
    );
};

export default SearchFlightsButton;
