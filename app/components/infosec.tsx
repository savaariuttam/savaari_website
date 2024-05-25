import React from 'react';

const InformationSection = () => {
    return (
        <section className="information-sec pt-5">
        <div className="flex flex-wrap ">
            <div className="w-full">
                <div className="heading-one mb-6">
                    <h3>Why book with Online Savaari?</h3>
                </div>
                <ul>
                    <li className='my-10'>
                        <h5 className='mb-2'>Search flights and hotels</h5>
                        <p className="mb-0 text-justify text-gray-600 text-sm">
                            Search for exclusive deals on flights and hotels. Find cheap air tickets to
                            any destination you like. Choose from its vast
                            repository of hotels -
                            from budget, mid-range, five-star to niche boutique properties. Widen your
                            choices with options like flexi stay, pay directly at
                            hotel, and
                            guaranteed standard amenities. Extremely efficient and easy.
                        </p>
                    </li>
                    <li className='my-10'>
                        <h5 className='mb-2'>secure flight booking through Online Savaari</h5>
                        <p className="mb-0 text-justify text-gray-600 text-sm">
                            Enjoy cancellation protection on domestic flights. Benefit from fare drop
                            protection, same day cancellation protection, hold now -
                            pay later, on
                            international flight bookings. Great filters, fantastic navigation.
                        </p>
                    </li> 
                    <li className='my-10'>
                        <h5 className='mb-2'>New deal every season</h5>
                        <p className="mb-0 text-justify text-gray-600 text-sm">The onset of the festive season, an upcoming long weekend or a gazetted
                            holiday, expect an attractive deal on flights, hotels and
                            holidays coming
                            your way. From cashback offers to promo code discounts, you are in for a hot
                            deal.</p>
                    </li>
                    <li className='my-10'>
                        <h5 className='mb-2'>Online Savaari's customer service</h5>
                        <p className="mb-0 text-justify text-gray-600 text-sm">
                            Our expert customer service team supports you before, during and after the
                            booking.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default InformationSection;
