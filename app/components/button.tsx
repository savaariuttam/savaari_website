import Link from 'next/link';
import React from 'react';

const SearchFlightsButton = () => {
    return (
        <div className="text-right mt-4">

            <Link href="/details" rel="noopener noreferrer" className="btn btn-red">
                    Search Flights
            </Link>
        </div>
    );
};

export default SearchFlightsButton;




