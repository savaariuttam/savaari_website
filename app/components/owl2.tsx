import React from 'react';
import InternationalFlight from './internationalflight';

const OwlCarousel2 = () => {
    const numberOfItems = 3;

    const renderOwlItems = () => {
        const owlItems = [];

        for (let i = 0; i < numberOfItems; i++) {
            owlItems.push(<InternationalFlight key={i} />);
        }

        return owlItems;
    };

    return (
        <div className="owl-carousel owl-theme flights-slider owl-top-nav">
            {renderOwlItems()}
        </div>
    );
};

export default OwlCarousel2;