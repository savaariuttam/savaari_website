"use client"
import React, { useState } from 'react'
import WalletTable from './WalletTable'
import CreditTable from './CreditTable';

const Transaction = () => {
    const [activeTab, setActiveTab] = useState('wallet');
    return (
        <div className="mt-6">
            <div className="w-full bg-white shadow rounded-md p-4">
                <h2 className="text-xl font-semibold mb-4">All Transaction</h2>
                <div className="flex flex-wrap space-x-4 space-y-4 md:space-y-0 gap-6">
                    <button
                        onClick={() => setActiveTab('wallet')}
                        className={`px-4 py-2 rounded ${activeTab === 'wallet'
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-white text-blue-500 border border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        Wallet Transaction
                    </button>
                    <button
                        onClick={() => setActiveTab('credit')}
                        className={`px-4 py-2 rounded ${activeTab === 'credit'
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-white text-blue-500 border border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        Credit Transaction
                    </button>
                    <input
                        type="text"
                        placeholder="Today"
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Apply Filter
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Print
                    </button>
                </div>
            </div>
            {activeTab === 'wallet' ? <WalletTable /> : <CreditTable />}
        </div>
    );

}

export default Transaction
