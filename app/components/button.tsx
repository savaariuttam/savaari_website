import Link from 'next/link';
import React from 'react';

const SearchFlightsButton = () => {
    return (
        <div className="text-right mt-4">
            {/* <button className="btn btn-red">
                Search Flights
                <span><i className="la la-long-arrow-right la-lg"></i></span>
            </button> */}
            <Link href="/details" rel="noopener noreferrer" className="btn btn-red">
                    Search Flights
                    <span><i className="la la-long-arrow-right la-lg"></i></span>
                 </Link>
        </div>
    );
};

export default SearchFlightsButton;



// import React from 'react';
// import { Link } from 'react-router-dom'
// const SearchFlightsButton = () => {


//     return (
//         <>
//             <div className="text-right mt-4">
//                 <Link to="/DetailsPage" target="_blank" rel="noopener noreferrer" className="btn btn-red">
//                     Search Flights
//                     <span><i className="la la-long-arrow-right la-lg"></i></span>
//                 </Link>
//             </div>
//         </>
//     );
// };

// export default SearchFlightsButton;
