import React from 'react';

const FourRow = () => {
    return (
        <div className="md:w-1/3">
            <ul className="filter-list">
                <li>
                    <label className="custom-radio flex items-center">
                        <input id="ECONOMY" name="cabinClass" type="radio" value="ECONOMY" />
                        <span className="ml-2">Economy</span>
                    </label>
                </li>
                <li>
                    <label className="custom-radio flex items-center">
                        <input id="PREMIUM_ECONOMY" name="cabinClass" type="radio" value="PREMIUM_ECONOMY" />
                        <span className="ml-2">Premium Economy</span>
                    </label>
                </li>
                <li>
                    <label className="custom-radio flex items-center">
                        <input id="BUSINESS" name="cabinClass" type="radio" value="BUSINESS" />
                        <span className="ml-2">Business</span>
                    </label>
                </li>
            </ul>
        </div>

    );
};

export default FourRow;