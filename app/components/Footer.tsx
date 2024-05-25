import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="main-footer mt-5 border-t border-gray-300 bg-gray-50">
            <div className="footer_widgets relative py-12">
                <div className="mx-4 md:mx-20">
                    <div className="flex flex-wrap gap-8 justify-between">
                        <div className="quick-links w-1/3 md:w-auto">
                            <h4 className="mb-3">Quick Links</h4>
                            <ul>
                                <li><a href="/" className='text-gray-500 hover:text-red-600'>Home</a></li>
                                <li><a href="/covid" className='text-gray-500 hover:text-red-600'>Covid Guidelines</a></li>
                            </ul>
                        </div>
                        <div className="partner w-1/3 md:w-auto">
                            <h4 className="mb-3">Be A Partner</h4>
                            <ul>
                                <li><a href="/register_corporatecust" className='text-gray-500 hover:text-red-600'>Travel agent signup</a></li>
                            </ul>
                        </div>
                        <div className="support w-1/3 md:w-auto">
                            <h4 className="mb-3">Support</h4>
                            <ul>
                                <li><a href="/faq" className='text-gray-500 hover:text-red-600'>FAQ</a></li>
                                <li><a href="/term" className='text-gray-500 hover:text-red-600'>Terms & Conditions</a></li>
                                <li><a href="/privacy" className='text-gray-500 hover:text-red-600'>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="more w-1/3 md:w-auto">
                            <h4 className="mb-3">More</h4>
                            <ul>
                                <li><a href="/about" className='text-gray-500 hover:text-red-600'>About</a></li>
                                <li><a href="/contact" className='text-gray-500 hover:text-red-600'>Contact us</a></li>
                            </ul>
                        </div>
                        <div className="address w-1/2 md:w-auto text-center md:text-left lg:text-left xl:text-right sm:text-left">
                            <address className='w-full mb-4 font-normal leading-normal'>
                                <p>302 & 1203 Range Heights,</p>
                                <p>New Link Road Oshiwara,</p>
                                <p>Jogeshwari West Mumbai, Maharashtra 400102</p>
                            </address>
                            <h2 className="mb-3">
                                <a href="tel:18004199066" className='text-gray-500 hover:text-red-600'>
                                    <span className="help-num text-2xl">1800 4199 066</span>
                                </a>
                            </h2>
                            <div className="social-list2 flex justify-center md:justify-start xl:justify-end sm:justify-start space-x-4">
                                <a href="https://www.facebook.com/OnlineSavaari" className='w-8 h-8 leading-8 mr-1 mb-1 text-gray-700 border border-gray-700 rounded cursor-pointer inline-block text-center hover:text-red-600' 
                                title="Facebook">
                                    <FaFacebookF className="w-7 h-7" />
                                </a>
                                <a href="https://twitter.com/OnlineSavaari" className='w-8 h-8 leading-8 mr-1 mb-1 text-gray-700 border border-gray-700 rounded cursor-pointer inline-block text-center hover:text-red-600 hover:border-red-600' title="Twitter">
                                    <FaTwitter className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info bg-gray-100 border-t border-b border-gray-300 py-5">
                <div className="main-container mx-4 md:mx-20">
                    <div className="content flex flex-wrap justify-between items-center">
                        <div className="trust flex items-center space-x-4">
                            <span>
                                <img src="https://onlinesavaari.website/static/main/images/ssl_logo.png" alt="SSL Logo" className="w-12 h-9" />
                            </span>
                            <span>
                                <img src="https://onlinesavaari.website/static/main/images/Iata_official_logo1.png" alt="IATA Logo" className="w-12 h-9" />
                            </span>
                        </div>
                        <div className="payment-option flex flex-wrap justify-center md:justify-start space-x-4 mt-4 md:mt-0">
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/visa.png" alt="Visa" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/american.png" alt="American Express" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/master.png" alt="MasterCard" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/diners.png" alt="Diners Club" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/rupay.png" alt="RuPay" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/emi.png" alt="EMI" className="w-12" /></span>
                            <span><img src="https://onlinesavaari.website/static/main/images/footer-icon/net-banking.png" alt="Net Banking" className="w-12" /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyrights py-4 text-white">
                <div className="main-container mx-4 md:mx-20">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                            <p className='text-gray-500'>
                                Copyrights © 2024 All Rights Reserved by
                                <b className='cursor-pointer'>
                                    <a className='text-gray-500 hover:text-red-600'> Online Savaari Private Limited</a>
                                </b>
                            </p>
                        </div>
                        <div className="w-full md:w-auto text-center md:text-right">
                            <div className="copyrights_links space-x-2">
                                <a href="/term" className="mr-2 text-gray-500 hover:text-red-600">Terms &amp; Conditions</a>
                                <span>/</span>
                                <a href="/privacy/" className='text-gray-500 hover:text-red-600'>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
