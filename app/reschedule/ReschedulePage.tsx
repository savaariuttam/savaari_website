"use client"
import React, { useState } from 'react';
import PopUpBox from './PopUpBox';
import Button from '../components/UI/Button';

const ReschedulePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        //............................................... Reschedule Query page................................................
        <section className="agent-form pt-5 flex justify-center items-center h-screen">
            <div className="box-one w-1/2">
                <div className="heading-one mb-4">
                    <h3>Reschedule Query</h3>
                </div>

                <div className="bg-gray-200 bg-opacity-20 reschedule flex flex-col items-center justify-center h-full min-h-[350px]">
                    <h1 className="opacity-50 text-lg">There is no query</h1>
                    <div className="text-center">
                        <Button name="Create Query" href="" className='mt-2' onClick={handleButtonClick}/>
                    </div>
                </div>
                {/* Reschedule Query create popup */}
                <PopUpBox isOpen={isOpen} onClose={handleClose} />
            </div>
        </section>
    );
};

export default ReschedulePage;