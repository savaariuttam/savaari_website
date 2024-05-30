import React, { useState } from 'react';
import AddPerson from '../components/AddPerson';

const ThirdRow = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
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
    return (
        <div className="sm:w-full md:w-full lg:w-full w-full">
            <div className="person-select">
                <label htmlFor="travelers">Traveller(s), Class</label>
                <div className='flex justify-between'>
                    <AddPerson type="Adult" count={adultCount} onChange={handlePersonChange} min={1} max={9} />
                    <AddPerson type="Child" count={childCount} onChange={handlePersonChange} min={0} max={9} />
                    <AddPerson type="Infant" count={infantCount} onChange={handlePersonChange} min={0} max={9} />
                </div>
            </div>
        </div>
    );
};

export default ThirdRow;
