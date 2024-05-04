import React, { useState } from 'react';

const ThirdRow = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    const handleIncrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount(adultCount + 1);
                break;
            case 'child':
                setChildCount(childCount + 1);
                break;
            case 'infant':
                setInfantCount(infantCount + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount(adultCount > 1 ? adultCount - 1 : 1);
                break;
            case 'child':
                setChildCount(childCount > 0 ? childCount - 1 : 0);
                break;
            case 'infant':
                setInfantCount(infantCount > 0 ? infantCount - 1 : 0);
                break;
            default:
                break;
        }
    };

    return (
        <div className="md:w-1/3">
            <div className="person-select">
                <label htmlFor="travelers">Traveller(s), Class</label>
                <div className="add-person">
                    <div className="person-box">
                        <div className="quantity-box">
                            <button type="button" className="sub adult-sub" onClick={() => handleDecrement('adult')}>-</button>
                            <input type="number" id="three-max" value={adultCount} min="1" max="9" name="ADULT" readOnly />
                            <button type="button" className="add" onClick={() => handleIncrement('adult')}>+</button>
                        </div>
                        <span>Adult (s)</span>
                    </div>
                    <div className="person-box">
                        <div className="quantity-box">
                            <button type="button" className="sub" onClick={() => handleDecrement('child')}>-</button>
                            <input type="number" id="nine-max" value={childCount} min="0" max="9" name="CHILD" readOnly />
                            <button type="button" className="add" onClick={() => handleIncrement('child')}>+</button>
                        </div>
                        <span>Child (s)</span>
                    </div>
                    <div className="person-box">
                        <div className="quantity-box">
                            <button type="button" className="sub" onClick={() => handleDecrement('infant')}>-</button>
                            <input type="number" id="six-max" value={infantCount} min="0" max="9" name="INFANT" readOnly />
                            <button type="button" className="add" onClick={() => handleIncrement('infant')}>+</button>
                        </div>
                        <span>Infant (s)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdRow;
