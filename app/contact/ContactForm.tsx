"use client"
import React, { useState } from 'react';
const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!', { email, query });
        setFormSubmitted(true);
        setEmail('');
        setQuery('');
    };

    return (
        <div className="mx-auto sm:px-4 mt-40 flex justify-center items-center ">
            <div className="lg:w-2/3 w-96 lg:mx-1/5">
                <form className="bg-white text-gray-700 rounded-lg shadow-lg px-20 overflow-hidden" onSubmit={handleSubmit}>
                    <div className="heading-one mb-4">
                        <h3>Contact Online Savaari</h3>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className='text-sm text-[#999999]'>Your email</label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="query" className='text-sm text-[#999999]'>Your query</label>
                        <textarea
                            name="query"
                            id="query"
                            rows="6"
                            className="form-control"
                            placeholder="Your query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full text-center">
                        {formSubmitted ? (
                            <p className="text-green-500">Thank you for your query!</p>
                        ) : (
                            <button
                                className="my-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-red"
                                type="submit"
                            >
                                Send Query
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

