import React from 'react'

const WalletTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            Date
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            Transaction Type
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            TDS
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            Transaction Id
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">
                            Transaction Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                            No transactions found, please change the date.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WalletTable
