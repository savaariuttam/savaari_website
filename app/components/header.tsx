"use client"
import { GiCommercialAirplane } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import "../components/css/header.css"

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
        <div className="main-header">
        <div className="flex flex-wrap justify-center items-center mx-24 sm:gap-6 lg:gap-0">
            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3">
                <div className="left-sec flex justify-center">
                    <div className="logo-widget">
                        <a href="{% url 'index'%}">
                            <img className="max-w-full h-auto" src="https://onlinesavaari.website/static/main/images/logo.gif" alt="" style={{ height: "60px" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sm:w-2/3 md:w-1/3 lg:w-1/3 pr-4 pl-4">
                <div className="center-sec">
                    <ul className="menu-items flex justify-center align-middle gap-8">
                        <li>
                            <a href="#" className="active flex flex-col items-center">
                                <GiCommercialAirplane className="text-3xl sm:text-[36px] icon-sm-screen" />
                                <span className="ml-2">Flights</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-col items-center" href="">
                                <RiHotelLine className="text-3xl sm:text-[36px] icon-sm-screen" />
                                <span className="ml-2">Hotels</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-col items-center" href="">
                                <MdOutlinePolicy 
                                className="text-3xl sm:text-[36px] icon-sm-screen"
                                />
                                <span className="ml-2">Insurance</span>
                            </a>
                        </li>
                        {/* <li>
                            <a href="{% url 'visa'%}">
                                <img className="visa" src="https://i.pinimg.com/originals/0b/08/7c/0b087c9ad51a5c0a3afd57a05ebe4bee.png" alt="" style={{ height: "40px" }} />
                                <span>Visa</span>
                            </a>
                        </li>  */}
                    </ul>
                </div>
            </div>
            <div className="md:w-1/3 lg:w-1/3 pr-4 pl-4">
                <div className="right-sec flex justify-start gap-6">
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
                            <span>Account ▼</span>
                        </button>
                        {isOpen && (
                            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '29px', willChange: 'transform' }}>
                                <Link href="profile" className="dropdown-item" >Profile</Link>
                                <Link href="login" className="dropdown-item" >Login</Link>
                                <Link href="login" className="dropdown-item">Sign Up</Link>
                                <div className="border-t border-gray-300 my-2"></div>
                                <Link href="" className="dropdown-item">For Business</Link>
                                <Link href="" className="dropdown-item">For Agents</Link>
                                <Link href="savaaricash" className="dropdown-item">Savaari Cash</Link>
                            </div>
                        )}
                    </div>
                    <div className="dropdown w-40">
                        <button className="dropdown-toggle" type="button" onClick={toggleDropdown2}>
                            <span>support ▼</span>
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
