"use client"
import React, { useState } from 'react';
import { MdPayments } from "react-icons/md";
import UpiPaymentOptions from './UpiPaymentOptions';

const PaymentMethod = () => {
    const [selectedTab, setSelectedTab] = useState('UPI');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const tabs = ['UPI', 'Wallet', 'Net Banking', 'Debit Card', 'Credit Card'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'UPI':
                return (
                    <UpiPaymentOptions />
                    
                );
            case 'Wallet':
                return (
                    <>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                                <img src="https://onlinesavaari.com/static/main/images/icon/upi/test1.png" alt="Wallet Logo" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Continue with Wallet</button>
                    </>
                );
            case 'Net Banking':
                return (
                    <>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                                <img src="https://onlinesavaari.com/static/main/images/icon/upi/test2.png" alt="Net Banking Logo" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Continue with Net Banking</button>
                    </>
                );
            case 'Debit Card':
                return (
                    <>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                                <img src="https://via.placeholder.com/50" alt="Debit Card Logo" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Continue with Debit Card</button>
                    </>
                );
            case 'Credit Card':
                return (
                    <>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                                <img src="https://via.placeholder.com/50" alt="Credit Card Logo" />
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Continue with Credit Card</button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {/*................................. get payment left side (Payment Method select)........................................... */}
            <div className="lg:w-5/6 w-3/4">
                <h2 className="text-xl font-semibold text-[#ea2330] flex items-center mb-4">
                    <MdPayments className="mr-2" />
                    Payment Method None
                </h2>
                <div className='box-one'>
                    {/*................................. (Payment Method select)........................................... */}
                    <div className="border-b mb-4">
                        <ul className="flex justify-around overflow-x-auto">
                            {tabs.map(tab => (
                                <li
                                    key={tab}
                                    className={`cursor-pointer p-2 w-40 text-center ${selectedTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'rounded-none border-b border-gray-300 text-center text-gray-800 bg-gray-200 whitespace-nowrap font-semibold py-2.8 px-5 hover:text-red-500 hover:border-b-2 hover:border-red-500 hover:bg-white'}`}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center tab-content">
                        {renderTabContent()}
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
