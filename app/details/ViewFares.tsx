
import React from 'react';

const ViewFares = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Services</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Checked Bag</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Hand Bag</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Seat Selection</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Date Change</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Cancellation</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Meal</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 border border-gray-300 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-300 text-red-600 font-semibold">PUBLISHED<br /><span className="text-sm text-gray-600">(Available seat 1)</span></td>
              <td className="px-6 py-4 border border-gray-300">15 Kg</td>
              <td className="px-6 py-4 border border-gray-300">7 Kg</td>
              <td className="px-6 py-4 border border-gray-300">Extra Charge</td>
              <td className="px-6 py-4 border border-gray-300">Extra Charge</td>
              <td className="px-6 py-4 border border-gray-300">Extra Charge</td>
              <td className="px-6 py-4 border border-gray-300">Paid Meal</td>
              <td className="px-6 py-4 border border-gray-300">₹ 5178.5</td>
              <td className="px-6 py-4 border border-gray-300">
                <button className="btn btn-red"><p className='text-sm'>Book Now</p></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-600">
          <p>Available on additional charge. - Included in Fare - Not Included - Middle seat will be vacant.</p>
          <p>Disclaimer: Benefits shown are as per details shared by the Airline.</p>
          <p>* Full refund of Airline cancellation charges up to ₹ 5,000 (per passenger per sector) on cancellation</p>
          <p>* OFFER FARE & SERIES FARE ARE SUBJECT TO AVAILABILITY. BOOKING CONFIRMATION MAY TAKE UP TO 30 MINUTES.</p>
        </div>
      </div>
    </div>
  );
};

export default ViewFares;
