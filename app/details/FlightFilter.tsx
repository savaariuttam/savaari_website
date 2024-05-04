import React from 'react';

const FlightFilter = () => {
    return (
        <>
            <div className="filter-box">
                <div className="sort-label">Sort By:</div>
                <div className="sort-nav flex">
                    <div className="s-li">
                        <p>DEPART</p>
                    </div>
                    <div className="s-li">
                        <p>ARRIVE</p>
                    </div>
                    <div className="s-li">
                        <p>DURATION</p>
                    </div>
                </div>
                <div className="price-filter">
                    <div className="s-li">PRICE PER ADULT</div>
                </div>
            </div>
        </>


    );
};

export default FlightFilter;