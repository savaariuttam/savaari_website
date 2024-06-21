import React from 'react';

const FiveRow = () => {
    return (
        //........................................... top container five row (select flight category)............................................................
        <div className="sm:w-full md:w-full lg:w-full w-full">
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
