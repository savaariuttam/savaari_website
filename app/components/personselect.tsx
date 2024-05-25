import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { CSSTransition } from 'react-transition-group';
import '../components/css/homepage.css';  // Create a CSS file for your animations

const PersonSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [travelClass, setTravelClass] = useState("Economy");

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleAdultChange = (e) => {
        if (e.target.classList.contains('sub')) {
            setAdultCount(Math.max(1, adultCount - 1));
        } else {
            setAdultCount(Math.min(9, adultCount + 1));
        }
    };

    const handleChildChange = (e) => {
        if (e.target.classList.contains('sub')) {
            setChildCount(Math.max(0, childCount - 1));
        } else {
            setChildCount(Math.min(9, childCount + 1));
        }
    };

    const handleInfantChange = (e) => {
        if (e.target.classList.contains('sub')) {
            setInfantCount(Math.max(0, infantCount - 1));
        } else {
            setInfantCount(Math.min(9, infantCount + 1));
        }
    };

    const handleClassChange = (e) => {
        setTravelClass(e.target.value);
    };

    return (
        <div className="person-select mt-6">
        <label className="text-sm" htmlFor="">Traveller(s), Class</label>
        <div className="accordion-two" id="accordiontraveller">
            <h2
                id="countData"
                onClick={toggleAccordion}
                className={`collapsed ${isOpen ? 'open' : ''} mb-5 text-lg pb-2 border-b border-gray-200 flex items-center justify-between cursor-pointer`}
            >
                {adultCount + childCount + infantCount} Traveller, {travelClass} <SlArrowDown />
            </h2>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="collapse"
                unmountOnExit
            >
                <div id="collapse1" aria-labelledby="countData">
                    <div>
                        <div className="add-person flex justify-between gap-5">
                            <div className="person-box w-1/3">
                                <span className='block text-sm'>Adult</span>
                                <div className="quantity-box flex">
                                    <button type="button" className="sub adult-sub inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleAdultChange}>-</button>
                                    <input type="number" className="inline-block w-1/2 text-center border-t border-b border-gray-300 border-l-0 border-r-0 focus:outline-none" id="three-max" value={adultCount} min="1" max="9" name="ADULT" readOnly />
                                    <button type="button" className="add inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleAdultChange}>+</button>
                                </div>
                            </div>
                            <div className="person-box w-1/3">
                                <span className='block text-sm'>Child</span>
                                <div className="quantity-box flex">
                                    <button type="button" className="sub sub adult-sub inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleChildChange}>-</button>
                                    <input type="number" className="inline-block w-1/2 text-center border-t border-b border-gray-300 border-l-0 border-r-0 focus:outline-none" id="nine-max" value={childCount} min="0" max="9" name="CHILD" readOnly />
                                    <button type="button" className="add inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleChildChange}>+</button>
                                </div>
                            </div>
                            <div className="person-box w-1/3">
                                <span className='block text-sm'>Infant</span>
                                <div className="quantity-box flex">
                                    <button type="button" className="sub sub adult-sub inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleInfantChange}>-</button>
                                    <input type="number" className="inline-block w-1/2 text-center border-t border-b border-gray-300 border-l-0 border-r-0 focus:outline-none" id="six-max" value={infantCount} min="0" max="9" name="INFANT" readOnly />
                                    <button type="button" className="add inline-block w-1/4 text-gray-800 bg-gray-100 border border-gray-300 text-center p-1.5 font-bold leading-none cursor-pointer" onClick={handleInfantChange}>+</button>
                                </div>
                            </div>
                        </div>
                        <ul className="filter-list flex flex-col my-8">
                            <li className='w-full'>
                                <input type="radio" id="economy" name="class" value="Economy" checked={travelClass === "Economy"} onChange={handleClassChange} />
                                <label className="custom-radio text-gray-800 text-base leading-6 inline-block relative pl-2 cursor-pointer select-none" htmlFor="economy">
                                    Economy
                                </label>
                            </li>
                            <li className='w-full'>
                                <input type="radio" id="premium-economy" name="class" value="Premium Economy" checked={travelClass === "Premium Economy"} onChange={handleClassChange} />
                                <label className="custom-radio text-gray-800 text-base leading-6 inline-block relative pl-2 cursor-pointer select-none" htmlFor="premium-economy">
                                    Premium Economy
                                </label>
                            </li>
                            <li className='w-full'>
                                <input type="radio" id="business" name="class" value="Business" checked={travelClass === "Business"} onChange={handleClassChange} />
                                <label className="custom-radio text-gray-800 text-base leading-6 inline-block relative pl-2 cursor-pointer select-none" htmlFor="business">
                                    Business
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </CSSTransition>
        </div>
    </div>
    );
};

export default PersonSelect;
