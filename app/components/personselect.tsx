import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

const PersonSelect = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="person-select">
            <label htmlFor="">Traveller(s), Class</label>

            <div className="accordion-two" id="accordiontraveller">
                <h2
                    id="countData"
                    onClick={toggleAccordion}
                    className={`collapsed ${isOpen ? 'open' : ''}`}
                >
                    1 Traveller, Economy <SlArrowDown />
                </h2>

                {isOpen && (
                    <div id="collapse1" className="collapse" aria-labelledby="countData">
                        <div className="add-person">
                            <div className="person-box">
                                <span>Adult</span>
                                <div className="quantity-box">
                                    <button type="button" className="sub adult-sub">-</button>
                                    <input type="number" id="three-max" value="1" min="1" max="9" name="ADULT" />
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                            <div className="person-box">
                                <span>Child<small> [2-12 YRS] </small></span>
                                <div className="quantity-box">
                                    <button type="button" className="sub">-</button>
                                    <input type="number" id="nine-max" value="0" min="0" max="9" name="CHILD" />
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                            <div className="person-box">
                                <span>Infant<small>[Below 2 YRS]</small></span>
                                <div className="quantity-box">
                                    <button type="button" className="sub">-</button>
                                    <input type="number" id="six-max" value="0" min="0" max="9" name="INFANT" />
                                    <button type="button" className="add">+</button>
                                </div>
                            </div>
                        </div>
                        <ul className="filter-list">
                            <li>
                                <label className="custom-radio">
                                    Economy
                                    <input id="economy" checked="checked" name="cabinClass" type="radio" value="ECONOMY" onClick={() => checkRadio('Economy')} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-radio">
                                    Premium Economy
                                    <input id="premimum_economy" name="cabinClass" type="radio" value="PREMIUM_ECONOMY" onClick={() => checkRadio('Premium Economy')} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-radio">
                                    Business
                                    <input id="business" name="cabinClass" type="radio" value="BUSINESS" onClick={() => checkRadio('Business')} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};


const checkRadio = (value) => {

    console.log(value);
};

export default PersonSelect;
