
import React from 'react';
const Banner = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="https://t3.ftcdn.net/jpg/02/16/47/50/360_F_216475037_wB8Jn7uqtD1hqioRT0tmqTa2lbyHYw3L.jpg"
        alt="about"
        className="absolute inset-0 w-full h-96"
      />
      <div className="relative flex items-center justify-start">
        <h1 className="text-white text-2xl font-bold mb-22rem ml-40">
          trouble free travel for the travellers
        </h1>
      </div>
    </div>
  );
};

export default Banner;

