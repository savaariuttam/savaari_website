"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../components/UI/Button';
import ButtonWithCross from "../components/UI/ButtonWithCross";

const PopUpBox = ({ isOpen, onClose }) => {

    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    if (!isOpen) return null;

    return (
        <div className="modal-dialog popup-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" role="document">
            <div className="modal-content popup bg-white p-10 md:p-16 rounded-lg animate-fade-in-up min-w-min">
                <div className="modal-header flex items-start justify-between p-4 border-b border-gray-300 rounded-t-lg" id="loginModalLabel">
                    <h4 className="modal-title mb-0 leading-6">Reschedule Query</h4>
                    <ButtonWithCross onClick={onClose} />
                </div>
                <div className="modal-body mt-10">
                    <form method="POST">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="mb-4">
                                    <label htmlFor="">Booking Id</label>
                                    <input
                                        type="text"
                                        name="bookingId"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        placeholder="Booking Id"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mb-4">
                                    <label htmlFor="startDate">Reschedule Date</label>
                                    <br></br>

                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="dd-MM-yyyy"
                                        className="datepicker hasDatepicker bg-white text-gray-800 border border-gray-200 rounded w-full"
                                        id="startDate"
                                        name="travelDate"
                                        minDate={currentDate}
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="mb-4">
                                    <label htmlFor="">Your query</label>
                                    <textarea
                                        name="Reschedule_query"
                                        rows="6"
                                        className="form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        placeholder="Your query"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <Button name="Send Query" href="" className='mt-2' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopUpBox;