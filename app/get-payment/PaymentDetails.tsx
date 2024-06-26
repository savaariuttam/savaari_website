import React from 'react';

const PaymentDetails = () => {
    return (
        <>
        {/*................................. get-payment page right side (payment details ) ......................................*/}
            <div className="box-one w-3/4 min-w-72">
                <div>
                    <h2 className="text-xl font-semibold">Payment Details</h2>
                    <div className="bg-gray-100 p-4 rounded-md mt-2">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Convenience Fee</span>
                            <span className="text-gray-500">₹ None</span>
                        </div>
                        <div className="text-gray-500 mt-1">ghoshanupam001@gmail.com</div>
                        <div className="mt-4 border-t pt-2">
                            <div className="flex justify-between items-center font-bold text-lg">
                                <span>You Pay :</span>
                                <span>₹ 4222.0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Booking Summary</h2>
                    <div className="bg-gray-100 p-4 rounded-md mt-2">
                        <div className="flex justify-between">
                            <span className="text-gray-500">None- 709</span>
                            <span className="text-gray-500">None</span>
                        </div>
                        <div className="text-center mt-1">🚀</div>
                        <div className="text-center mt-1 text-gray-500">None</div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Contact Details</h2>
                    <div className="bg-gray-100 p-4 rounded-md mt-2 relative">
                        <button className="absolute top-2 right-2 bg-white border rounded-md px-2 py-1 text-gray-500">Edit</button>
                        <div className="mb-2 font-bold">1. Mr uttam</div>
                        <div className="text-gray-500">Email: test@gmail.com</div>
                        <div className="text-gray-500">Phone: +91-9000004116</div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PaymentDetails;

