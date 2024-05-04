import React from 'react';
import { RiFilter3Line } from "react-icons/ri";
const ListingFilterBar = () => {
    return (
        <section className="listing-filter-bar" style={{ padding: '5px 0' }}>
            <div className="container">
                <div className="flex justify-end">
                    <button className="listing-filter-open flex">
                        <RiFilter3Line style={{ width: '60px', height: '30px' }} />
                        More Filters
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ListingFilterBar;