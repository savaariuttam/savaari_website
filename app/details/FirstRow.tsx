import React, { useState } from 'react';
import { GoArrowSwitch } from "react-icons/go";
const FirstRow = () => {
    const [isResultVisible, setResultVisible] = useState(false);

    const switchText = () => {
        setResultVisible(!isResultVisible);
    };

    return (
        <div className="md:w-1/3 pos_rel">
            <div className="flight-input">
                <div className="flight-group">
                    <label htmlFor="departFrom">Depart From</label>
                    <input
                        id="departFrom"
                        type="text"
                        placeholder="New Delhi"
                        className="text-white bg-transparent text-base p-0 border-none border-b border-white font-semibold outline-none"
                    />
                </div>
                <GoArrowSwitch style={{ width: '140px', height: '20px' }} />

                <div className="flight-group">
                    <label htmlFor="departTo">Going To</label>
                    <input
                        id="departTo"
                        type="text"
                        placeholder="Mumbai"
                        className="text-white bg-transparent text-base p-0 border-none border-b border-white font-semibold outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstRow;