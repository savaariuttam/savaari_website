import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="main-footer mt-5">
            <div className="footer_widgets">
                <div className="main-container">
                    <div className="flex gap-8 justify-between">
                        <div className="quick-links">
                            <div className="">
                                <h4 className="mb-3">Quick Links</h4>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/covid">Covid Guidelines</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="partner">
                            <div className="">
                                <h4 className="mb-3">Be A Partner</h4>
                                <ul>
                                    <li>
                                        <a href="/register_corporatecust">Travel agent signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="support">
                            <div className="">
                                <h4 className="mb-3">Support</h4>
                                <ul>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/term">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/privacy">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="more">
                            <div className="">
                                <h4 className="mb-3">More</h4>
                                <ul>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="address md:text-right">
                            <div className="">
                                <address>
                                    <p>302 & 1203 Range Heights,</p>
                                    <p>New Link Road Oshiwara,</p>
                                    <p>Jogeshwari West Mumbai,Maharashtra 400102</p>
                                </address>
                                <h2 className="mb-3 ">
                                    <a href="tel:18004199066">
                                        <span className="help-num">1800 4199 066</span>
                                    </a>
                                </h2>
                                <div className="social-list2 justify-content-md-end">
                                    <a href="https://www.facebook.com/OnlineSavaari" title="Facebook">
                                        <FaFacebookF style={{ width: '30px', height: '18px', marginTop: '6px' }} />
                                    </a>
                                    <a href="https://twitter.com/OnlineSavaari" title="instagram">
                                        <FaTwitter style={{ width: '30px', height: '18px', marginTop: '6px' }} />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="more-info">
                <div className="main-container">
                    <div className="content flex justify-between">
                        <div className="trust flex">
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/ssl_logo.png" alt="" />
                            </span>
                            <span>
                                <img src="https://onlinesavaari.website/static/main/images/Iata_official_logo1.png" alt="" />
                            </span>
                        </div>
                        <div className="payment-option flex">
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/visa.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/american.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/master.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/diners.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/rupay.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/emi.png" alt="" />
                            </span>
                            <span className="mr-2">
                                <img src="https://onlinesavaari.website/static/main/images/footer-icon/net-banking.png" alt="" />
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="main-container">
                    <div className="flex justify-between items-center md:flex-row flex-col p-2">
                        <div className="md:w-1/2">
                            <p className="text-center md:text-left ">
                                Copyrights © 2024 All Rights Reserved by <b className='cursor-pointer'><a>Online Savaari Private Limited</a></b>
                            </p>
                        </div>
                        <div className="md:w-1/2 md:flex md:flex-col md:items-end mt-4 md:mt-0">
                            <div className="copyrights_links">
                                <a href="/term" className="mr-2">Terms &amp; Conditions</a>/ <a href="/privacy/">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
