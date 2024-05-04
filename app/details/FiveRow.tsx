import React from 'react';

const FiveRow = () => {
    return (
        <div className="md:w-1/3">
            <ul className="filter-list space-y-2">
                <li className="mb-2">
                    <label className="custom-checkbox flex items-center">
                        <input type="checkbox" name="isDirectFlight" value="True" />
                        <span className="ml-2">Non Stop Flights</span>
                    </label>
                </li>
                <li className="mb-2">
                    <label className="custom-checkbox flex items-center">
                        <input id="STU" type="checkbox" name="Special" value="STU" />
                        <span className="ml-2">Student Fare</span>
                    </label>
                </li>
                <li className="mb-2">
                    <label className="custom-checkbox flex items-center">
                        <input type="checkbox" name="Special" value="MIL" id="MIL" />
                        <span className="ml-2">Armed Forces</span>
                    </label>
                </li>
                <li className="mb-2">
                    <label className="custom-checkbox flex items-center">
                        <input type="checkbox" name="Special" value="YCD" id="YCD" />
                        <span className="ml-2">Senior Citizen</span>
                    </label>
                </li>
            </ul>
        </div>


    );
};

export default FiveRow;
