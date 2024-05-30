import React, { useState } from 'react';
import { RiFilter3Line } from "react-icons/ri";
import MoreFilter from './MoreFilter';

const ListingFilterBar = () => {
    const [openFilter, setOpenFilter] = useState(false);

    const handleToggleFilter = () => {
        setOpenFilter(!openFilter);
    };

    return (
        <section className="listing-filter-bar" style={{ padding: '5px 0' }}>
            <div className="container">
                <div className="flex justify-end">
                    <button className="listing-filter-open flex" onClick={handleToggleFilter}>
                        <RiFilter3Line style={{ width: '60px', height: '30px' }} />
                        More Filters
                    </button>
                    <div className={`${openFilter ? "block" : "hidden"}`}>
                    <MoreFilter handleClose={handleToggleFilter} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListingFilterBar;
