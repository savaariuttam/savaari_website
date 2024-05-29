import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { CSSTransition } from 'react-transition-group';
import AddPerson from './AddPerson';  
import '../components/css/homepage.css'; 

const PersonSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [travelClass, setTravelClass] = useState("Economy");

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handlePersonChange = (type, action) => {
        const maxCount = 9;
        let newCount;

        switch (type) {
            case 'Adult':
                newCount = action === 'sub' ? Math.max(1, adultCount - 1) : Math.min(maxCount, adultCount + 1);
                if (newCount >= infantCount && newCount + childCount <= maxCount) {
                    setAdultCount(newCount);
                }
                break;
            case 'Child':
                newCount = action === 'sub' ? Math.max(0, childCount - 1) : Math.min(maxCount, childCount + 1);
                if (adultCount + newCount <= maxCount) {
                    setChildCount(newCount);
                }
                break;
            case 'Infant':
                newCount = action === 'sub' ? Math.max(0, infantCount - 1) : Math.min(maxCount, infantCount + 1);
                if (newCount <= adultCount) {
                    setInfantCount(newCount);
                }
                break;
            default:
                break;
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
                                <AddPerson type="Adult" count={adultCount} onChange={handlePersonChange} min={1} max={9} />
                                <AddPerson type="Child" count={childCount} onChange={handlePersonChange} min={0} max={9} />
                                <AddPerson type="Infant" count={infantCount} onChange={handlePersonChange} min={0} max={9} />
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
