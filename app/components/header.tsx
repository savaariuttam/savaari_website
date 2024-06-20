"use client"
import { GiCommercialAirplane } from "react-icons/gi";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Logo from "./UI/Logo";
import MidIcon from "./UI/MidIcon";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpen2(false);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen(false);
    };
    const menuItems = [
        { href: '#', icon: GiAirplaneDeparture, label: 'Flights' },
        { href: '#', icon: RiHotelLine, label: 'Hotels' },
        { href: '#', icon: MdOutlinePolicy, label: 'Insurance' },
    ];
    const countryImages = {
        India: 'https://flagicons.lipis.dev/flags/4x3/in.svg',
        USA: 'https://flagicons.lipis.dev/flags/4x3/us.svg',
        England: 'https://flagicons.lipis.dev/flags/4x3/gb-eng.svg',
        Australia: 'https://flagicons.lipis.dev/flags/4x3/au.svg',
        Bangladesh:'https://flagicons.lipis.dev/flags/4x3/bd.svg',
    };
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (
        // ..................................savaari header start.................................................
        <div className="main-header">
            <div className="flex justify-start items-center mx-24 sm:mx-[0] sm:gap-6 lg:gap-0">
                {/* .........................logo sec ........................................................ */}
                <div className="sm:w-48 md:w-48 lg:w-1/3">
                    <div className="left-sec flex justify-center">
                        <Logo />
                    </div>
                </div>
                 {/* .........................icon sec ........................................................ */}
                <div className="sm:w-48 md:w-64 lg:w-1/3 pr-4 pl-4">
                    <div className="center-sec">
                        <ul className="menu-items flex justify-center align-middle gap-8">
                            {menuItems.map((item, index) => (
                                <MidIcon
                                    key={index}
                                    href={item.href}
                                    icon={item.icon}
                                    label={item.label}
                                    isActive={index === activeIndex}
                                    onClick={() => handleItemClick(index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {/* .........................left header (dropdown) sec ........................................................ */}
                <div className="sm:w-48 md:w-64 lg:w-1/3 pr-4 pl-4">
                    <div className="right-sec flex justify-start gap-2">
                        <div className="region-select flex justify-between gap-2">
                            <img
                                src={countryImages[selectedCountry]}
                                alt={selectedCountry}
                                style={{ height: '20px' }}
                            />
                            <select value={selectedCountry} onChange={handleCountryChange}>
                                {Object.keys(countryImages).map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
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
                                    <div className="border-t border-gray-300 my-2"></div>
                                    <Link href="" className="dropdown-item">For Business</Link>
                                    <Link href="" className="dropdown-item">For Agents</Link>
                                    <Link href="savaaricash" className="dropdown-item">Savaari Cash</Link>
                                </div>
                            )}
                        </div>
                        <div className="dropdown w-40">
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
