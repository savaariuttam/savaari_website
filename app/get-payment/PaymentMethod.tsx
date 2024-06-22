"use client"
import React, { useState } from 'react';
import { MdPayments } from "react-icons/md";

const PaymentMethod = () => {
    const [selectedTab, setSelectedTab] = useState('UPI');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const tabs = ['UPI', 'Wallet', 'Net Banking', 'Debit Card', 'Credit Card', 'EMI'];

    return (
        <>
            {/*................................. get payment left side (Payment Method select)........................................... */}

            <div className="w-5/6">
                <h2 className="text-xl font-semibold text-[#ea2330] flex items-center">
                    <MdPayments className="mr-2" />
                    Payment Method None
                </h2>
                <div className='box-one'>
                    {/*................................. (Payment Method select)........................................... */}
                    <div className="border-b mb-4">
                        <ul className="flex w-full">
                            {tabs.map(tab => (
                                <li
                                    key={tab}
                                    className={`cursor-pointer p-2 ${selectedTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'rounded-none border-b border-gray-300 text-center text-gray-800 bg-gray-200 whitespace-nowrap font-semibold py-2.8 px-5 hover:text-red-500 hover:border-b-2 hover:border-red-500 hover:bg-white'}`}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="text-center py-8">
                        <div className="flex justify-center mb-4">
                            {/* Placeholder for the payment logo or method */}
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                                <img src="https://via.placeholder.com/50" alt="Payment Logo" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Continue with Phonepe</button>
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={acceptedTerms}
                                onChange={() => setAcceptedTerms(!acceptedTerms)}
                            />
                            I accept the <a href="#" className="text-blue-500">Terms and Conditions</a>
                        </label>
                        <p className="text-xs text-gray-500 mt-2">
                            By clicking on Pay Now, you are agreeing to our Terms & Conditions, Privacy policy.
                        </p>
                    </div>
                    <div className="mt-4 text-2xl font-bold text-gray-700">
                        ₹ 4222.0
                    </div>
                </div>

            </div>
        </>

    );
};

export default PaymentMethod;

