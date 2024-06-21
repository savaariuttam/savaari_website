import React from 'react';

const AddPerson = ({ type, count, onChange, min, max }) => {
    const handleChange = (e) => {
        const action = e.target.classList.contains('sub') ? 'sub' : 'add';
        onChange(type, action);
    };

    return (
        //.................................Traveller Add Person.................................................
        <div className="person-box w-1/3">
            <span className='block text-sm'>{type}</span>
            <div className="quantity-box flex">
                <button type="button" className="sub inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleChange}>-</button>
                <input type="number" className="inline-block w-1/2 text-center border-t border-b border-gray-300 border-l-0 border-r-0 focus:outline-none" value={count} min={min} max={max} readOnly />
                <button type="button" className="add inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleChange}>+</button>
            </div>
        </div>
    );
};

export default AddPerson;
