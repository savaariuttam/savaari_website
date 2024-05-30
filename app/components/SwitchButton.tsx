// components/SwitchButton.js
import React from 'react';
import { GoArrowSwitch } from "react-icons/go";
const SwitchButton = () => {
    const switchText = () => {
        let obj1 = document.getElementById("departFrom");
        let obj2 = document.getElementById("departTo");

        let temp = obj1.value;
        obj1.value = obj2.value;
        obj2.value = temp;
    };

    return (
        <button type="button"className='mr-10 mt-10 rounded-full border  border-gray-400 h-10 w-14 flex items-center justify-center' onClick={switchText}>

            <GoArrowSwitch style={{ width: '35px', height: '25px' }} />

        </button>
    );
};

export default SwitchButton;
