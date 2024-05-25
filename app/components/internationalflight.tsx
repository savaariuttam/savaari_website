import React from 'react';

const InternationalFlight = () => {
    return (
        <div className="owl-item cloned pt-6" style={{ width: '166.667px', marginRight: '15px' }}>
            <div className="item">
                <form method="get" action="/flight/search_flight/">
                    <div className="journey-box box-one">
                        <div className="top-sec">
                            <h4>Delhi<i className="la la-exchange mx-2"></i>London</h4>
                        </div>
                        <p className="time" id="dep_date">23 Jan, 2024</p>
                        <div className="bottom-sec">
                            <span>From $ <b><i className="la la-rupee"></i>12499</b></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InternationalFlight;