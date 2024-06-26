import React, { useState } from 'react';

const UpiPaymentOptions = () => {
    const [selectedStep, setSelectedStep] = useState('razorpay');

    const paymentOptions = [
        { name: 'razorpay', imgSrc: 'https://onlinesavaari.com/static/main/images/icon/upi/test1.png', label: 'Continue with Razorpay' },
        { name: 'easybuzz', imgSrc: 'https://onlinesavaari.com/static/main/images/icon/upi/test2.png', label: 'Continue with Easybuzz' },
    ];

    const selectStep = (name) => {
        setSelectedStep(name);
    };

    return (
        <>
            <h2 className="flex justify-start text-sm my-10">Choose a payment method</h2>
            <div className="flex flex-wrap justify-center">
                {paymentOptions.map((option) => (
                    <div className="md:w-1/3 pr-4 pl-4 w-1/2" key={option.name}>
                        <div
                            className={`upi-step-box bg-white p-5 text-center cursor-pointer border border-transparent transition-all duration-300 flex flex-col items-center justify-center ${selectedStep === option.name ? 'selected rounded-lg shadow-md bg-gray-100' : ''}`}
                            name={option.name}
                            onClick={() => selectStep(option.name)}
                        >
                            <img src={option.imgSrc} alt={option.name} className="max-w-full h-auto max-h-10" />
                            <p className="mb-0 mt-3 text-sm">{option.label}</p>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-start text-sm mt-10">
                <span className='text-xl font-semibold text-[#ea2330]'> {selectedStep}</span>
            </div>
        </>
    );
};

export default UpiPaymentOptions;
