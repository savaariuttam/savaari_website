import React from "react";


const Loader = () => {
    return (
        <div className="loader">
            <div className="wait"></div>
            <div className="iata_code departure_city"></div>
            <div className="plane">
                <img
                    src="https://zupimages.net/up/19/34/4820.gif"
                    alt="loading plane"
                    className="plane-img"
                />
            </div>
            <div className="earth-wrapper">
                <div className="earth"></div>
            </div>
            <div className="iata_code arrival_city"></div>
        </div>
    );
};

export default Loader;

