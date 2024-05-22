import React from 'react'
import Transaction from './Transaction'

const SavaariCashSummary = () => {
    return (
        <>
            <div className="mx-auto p-4 bg-white shadow rounded-md box-one profile-box w-4/5 mr-36">
                <h2 className="text-xl font-semibold mb-4">View Savaari Cash Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 border rounded-md flex flex-col items-center">
                        <p className="text-red-500 text-lg font-medium">Savaari Balance</p>
                        <p className="text-3xl font-bold">
                            ₹ 993529089.771
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Recharge
                        </button>
                    </div>
                    <div className="p-6 border rounded-md flex flex-col items-center">
                        <p className="text-red-500 text-lg font-medium">Credit Amount</p>
                        <p className="text-3xl font-bold">
                            ₹ 0
                        </p>
                    </div>
                </div>
                <Transaction />
            </div>

        </>
    )
}

export default SavaariCashSummary
