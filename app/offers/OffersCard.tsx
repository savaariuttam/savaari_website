import React from 'react';

const OffersCard = () => {
    const OfferSec = [
        {
            id: 1,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/1.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 2,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/2.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 3,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/3.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 4,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/1.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 5,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/2.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 6,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/3.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 7,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/1.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 8,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/2.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 9,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/3.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 10,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/1.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        },
        {
            id: 11,
            title: "Flat 12% OFF (up to Rs 1,600)",
            code: "YTRBOBCC",
            img: "https://onlinesavaari.website/static/hotel/images/offers/2.jpg",
            validity: "Aug 30, 2022",
            link: "offer-details.html"
        }
    ];

    return (
        //..................................... savaari Offers Card create..................................................
        <div className="flex flex-wrap lg:mx-40 md:mx-32">
            {OfferSec.map((offer) => (
                <div key={offer.id} className="lg:w-1/3 md:w-1/2 w-full px-4 mb-6 min-w-48">
                    <a href={offer.link} className="block text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hotel-offer-one">
                        <div className="img-sec">
                            <img src={offer.img} alt={offer.title} className="w-full h-auto" />
                        </div>
                        <div className="details-sec p-5">
                            <h5 className="font-normal mb-1">{offer.title}</h5>
                            <p className="text-xs">
                                Coupon Code: <b>{offer.code}</b>
                            </p>
                            <div className="bottom-sec flex items-center justify-between mt-5">
                                <p className="text-xs m-0">
                                    <span>Validity:</span> <b>{offer.validity}</b>
                                </p>
                                <span className="btns px-4 py-2 border border-gray-300 bg-white transition-all duration-600 ease-in-out hover:bg-gray-100 cursor-pointer">
                                    View Details
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default OffersCard;
