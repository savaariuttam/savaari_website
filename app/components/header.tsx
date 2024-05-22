"use client"
import { GiCommercialAirplane } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpen2(false);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen(false);
    };
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
                            <Link href="offers">offers </Link>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" onClick={toggleDropdown}>
                                <span>Account</span>
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '29px', willChange: 'transform' }}>
                                    <Link href="profile" className="dropdown-item" >Profile</Link>
                                    <Link href="login" className="dropdown-item" >Login</Link>
                                    <Link href="login" className="dropdown-item">Sign Up</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link href="" className="dropdown-item">For Business</Link>
                                    <Link href="" className="dropdown-item">For Agents</Link>
                                    <Link href="savaaricash" className="dropdown-item">Savaari Cash</Link>
                                </div>
                            )}
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" onClick={toggleDropdown2}>
                                <span>support</span>
                            </button>
                            {isOpen2 && (
                                <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '29px', willChange: 'transform' }}>
                                    <Link href="" className="dropdown-item" >Call Us</Link>
                                    <Link href="" className="dropdown-item">Mail Us</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
