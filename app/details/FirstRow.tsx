import React, { useState } from 'react';
import { GoArrowSwitch } from "react-icons/go";
const FirstRow = () => {
    const [isResultVisible, setResultVisible] = useState(false);

    const switchText = () => {
        setResultVisible(!isResultVisible);
    };

    return (
    //........................................... top container first row (Depart From and Going To input)............................................................
        <div className="sm:w-full md:w-full lg:w-full w-full">
            <div className="flight-input">
            {/*................................... Depart From start ....................................................................*/}
                <div className="flight-group">
                    <label htmlFor="departFrom">Depart From</label>
                    <input
                        id="departFrom"
                        type="text"
                        placeholder="New Delhi"
                        className="text-white bg-transparent text-base p-0 border-none border-b border-white font-semibold outline-none"
                    />
                </div>
            {/*................................... Depart From end ....................................................................*/}
            {/*................................... switch icon start..........................................................................*/}
                <GoArrowSwitch style={{ width: '140px', height: '20px' }} />
            {/*................................... switch icon end..........................................................................*/}
            {/*................................... Going To start ....................................................................*/}
                <div className="flight-group">
                    <label htmlFor="departTo">Going To</label>
                    <input
                        id="departTo"
                        type="text"
                        placeholder="Mumbai"
                        className="text-white bg-transparent text-base p-0 border-none border-b border-white font-semibold outline-none"
                    />
                </div>
            {/*................................... Going To end ....................................................................*/}
            </div>
        </div>
    );
};

export default FirstRow;