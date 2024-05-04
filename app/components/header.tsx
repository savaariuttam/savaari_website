import { GiCommercialAirplane } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";


import React from 'react';

const Header = () => {
    return (
        <div className="main-header w-full">
            <div className="row">
                <div className="col-md-4">
                    <div className="left-sec">
                        <div className="logo-widget">
                            <a href="{% url 'index'%}">
                                <img className="img-fluid" src="https://onlinesavaari.website/static/main/images/logo.gif" alt="" style={{ height: "60px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="center-sec">
                        <ul className="menu-items">
                            <li>
                                <a href="#" className="active">
                                    <GiCommercialAirplane style={{ fontSize: '36px' }} />
                                    <span>Flights</span>
                                </a>
                            </li>
                            <li>
                                <a href="{% url 'hotel_home'%}">
                                    <RiHotelLine style={{ fontSize: '36px' }} />
                                    <span>Hotels</span>
                                </a>
                            </li>
                            <li>
                                <a href="{% url 'insurance_claim'%}">
                                    <MdOutlinePolicy style={{ fontSize: '36px', marginLeft: '10px' }} />
                                    <span>Insurance</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="{% url 'visa'%}">
                                    <img className="visa" src="https://i.pinimg.com/originals/0b/08/7c/0b087c9ad51a5c0a3afd57a05ebe4bee.png" alt="" style={{ height: "40px" }} />
                                    <span>Visa</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right-sec flex items-center justify-center">
                        <div className="region-select">
                            <select id="country-select">
                                <option data-icon="{% static 'main/images/flags/in.svg' %}">India</option>
                            </select>
                        </div>
                        <div className="links">
                            <a href="{% url 'offer_details' %}">offers </a>
                        </div>
                        <div className="dropdown ">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">
                                <img src="{% static 'main/images/avatar/1.jpg' %}" alt="" />
                                <span>Account</span>
                            </button>
                        </div>
                        <div className="links">
                            <a href="{% url 'offer_details' %}">Supports </a>
                        </div>
                        {/* Additional dropdowns go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
