import  Button  from '../components/UI/Button';
import React from 'react';
import { GoArrowSwitch } from "react-icons/go";

const DomesticFlight = () => {
  const flights = [
    {
      id: 1,
      from: "Delhi",
      to: "Mumbai",
      date: "15 Dec, 2023",
      fare: 7899,
    },
    {
      id: 2,
      from: "Kolkata",
      to: "Delhi",
      date: "2 Jan, 2024",
      fare: 899,
    },
    {
      id: 3,
      from: "Bengaluru",
      to: "Kolkata",
      date: "27 May, 2024",
      fare: 2499,
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {flights.map(flight => (
        <div key={flight.id} className="border rounded-lg p-4 shadow-md w-48">
          <div className="text-base font-semibold flex items-center">
            <span>{flight.from}</span>
            <span className="mx-2"><GoArrowSwitch /></span>
            <span>{flight.to}</span>
          </div>
          <div className="text-gray-600 mt-1">{flight.date}</div>
          <div className="text-red-500 font-bold mt-2">₹ {flight.fare}</div>
          <Button href="" name="Explore" className='mt-2'/>
        </div>
      ))}
    </div>
  );
};

export default DomesticFlight;
