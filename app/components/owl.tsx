import React from 'react';
import DomesticFlight from './domesticflight';

const OwlCarousel = () => {
    const numberOfItems = 3;

    const renderOwlItems = () => {
        const owlItems = [];

        for (let i = 0; i < numberOfItems; i++) {
            owlItems.push(<DomesticFlight key={i} />);
        }

        return owlItems;
    };

    return (
        <div className="owl-carousel owl-theme flights-slider owl-top-nav">
            {renderOwlItems()}
        </div>
    );
};

export default OwlCarousel;
