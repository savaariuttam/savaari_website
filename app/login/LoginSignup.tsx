import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { IoTicketSharp } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import SignupElement from "../login/SignupElement";
import LoginElement from "../login/LoginElement";
const LoginSignupPage = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);

    const handleToggle = () => {
        setIsLoginActive(!isLoginActive);
    };
    return (
        <section className="login-pg">
            <div className="login-box box-one">
                <div className="flex flex-col md:flex-row">

                    <div className="w-full md:w-1/2 mb-6 md:mb-0 left-sec">

                        <div className="logo-widget">
                            <a href="/">
                                <img src="https://onlinesavaari.website/static/main/images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="info-box">
                            <h5>For more log In</h5>
                            <ul>
                                <li>
                                    <GrSchedules className='react-icon' />{' '}
                                    <b>View</b> / <b>Cancel</b> / <b>Reschedule</b> bookings
                                </li>
                                <li>
                                    <IoTicketSharp className='react-icon' /> Check booking <b>history</b>, manage{' '}
                                    <b>cancellations</b> &amp; print <b>e-Tickets</b>
                                </li>
                                <li>
                                    <SiGoogleforms className='react-icon' /> Book faster with{' '}
                                    <b>Pre-Filled Forms</b>, saved <b>Travellers</b> &amp; <b>Saved Cards</b>
                                </li>
                            </ul>
                        </div>
                        <h5>{isLoginActive ? 'Sign Up with' : 'Login with'}</h5>
                        <ul className="social-list">
                            <li>
                                <a href="#">
                                    <FaFacebookF style={{ width: '10px', height: '30px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaGooglePlusG style={{ width: '20px', height: '30px' }} />

                                </a>
                            </li>
                        </ul>
                        <a className="btn btn-red login-btn" style={{ color: 'white' }} onClick={handleToggle}>
                            {isLoginActive ? 'Login' : 'Sign Up'}
                        </a>
                    </div>

                    <div className={`w-full md:w-1/2 right-sec ${isLoginActive ? 'inactive' : 'active'}`}>
                        {isLoginActive ? <SignupElement /> : <LoginElement />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginSignupPage;
