import React from 'react';

const DomesticFlight = () => {
    return (
        <div className="owl-item cloned pt-6" style={{ width: '166.667px', marginRight: '15px' }}>
            <div className="item">
                <form method="get" action="/flight/search_flight/">
                    <div className="journey-box box-one">
                        <div className="top-sec">
                            {/* Uncomment the next line if you have an image */}
                            {/* <img src="/static/main/images/airline/1.png" alt=""> */}
                            <h4>Delhi<i className="la la-exchange mx-2"></i>Mumbai</h4>
                        </div>
                        <p className="time" id="dep_date">23 Jan, 2024</p>
                        <div className="bottom-sec">
                            <span>From $ <b><i className="la la-rupee"></i>2499</b></span>
                        </div>
                        <div className="mt-4 ml-2">
                            <input type="submit" name="submit_btn" value="Explore" className="btn btn-red" />
                            <input type="hidden" value="DEL" name="fromCityOrAirport" />
                            <input type="hidden" value="BOM" name="toCityOrAirport" />
                            <input type="hidden" value="one-way" name="radio1" />
                            <input type="hidden" value="ECONOMY" name="cabinClass" />
                            <input type="hidden" value="23-01-2024" name="travelDate" />
                            <input type="hidden" value="1" name="ADULT" />
                            <input type="hidden" value="0" name="CHILD" />
                            <input type="hidden" value="0" name="INFANT" />
                            <input type="hidden" value="" name="Special" />
                            <input type="hidden" value="" name="isDirectFlight" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DomesticFlight;
