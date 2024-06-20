"use client";
import React, { useState } from "react";
import FormButtom from "./formButtom";
import Button from "./button";
const FormPage = () => {
  const [selectedType, setSelectedType] = useState("cancel_conplete_trip");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  return (
    <>
      {/* ..........................................cancel page ..............................................*/}
      <form id="form_submit">
        <h4>Cancellation request</h4>
        {/* ......................................cancel type select start..................................*/}
        <ul className="trip-type-radio flex gap-4">
          <li className="rounded-md border border-black">
            <label className="text-radio inline-block text-base leading-none capitalize text-center px-2.5 py-2 relative cursor-pointer select-none">
              <input
                id="one-way"
                type="radio"
                name="radio1"
                value="cancel_conplete_trip"
                checked={selectedType === "cancel_conplete_trip"}
                onChange={handleTypeChange}
              />
              <span className="checkmark checkmark absolute top-0 left-0 h-full w-full border-none"></span>
              <span className="trip-label">Cancel Complete trip</span>
            </label>
          </li>
          <li className="rounded-md border border-black">
            <label className="text-radio inline-block text-base leading-none capitalize text-center px-2.5 py-2 relative cursor-pointer select-none">
              <input
                id="round-trip"
                type="radio"
                name="radio1"
                value="cancel_traveller"
                checked={selectedType === "cancel_traveller"}
                onChange={handleTypeChange}
              />
              <span className="checkmark checkmark absolute top-0 left-0 h-full w-full border-none"></span>
              <span className="trip-label">Cancel Traveller</span>
            </label>
          </li>
          <li className="rounded-md border border-black">
            <label className="text-radio inline-block text-base leading-none capitalize text-center px-2.5 py-2 relative cursor-pointer select-none">
              <input
                id="multi-city"
                type="radio"
                name="radio1"
                value="cancel_route"
                checked={selectedType === "cancel_route"}
                onChange={handleTypeChange}
              />
              <span className="checkmark absolute top-0 left-0 h-full w-full border-none"></span>
              <span className="trip-label">Cancel Route</span>
            </label>
          </li>
        </ul>
        {/* ......................................cancel type select end.....................................*/}
        {/* ......................................cancel mid content start..................................*/}
        <div className="box-one">
          <div className="title-sec">
            {selectedType === "cancel_conplete_trip" && (
              <h3 className="full-cancel">
                Please fill out the form for Complete cancellation
              </h3>
            )}
            {selectedType === "cancel_traveller" && (
              <h3 className="cancel-traveller">
                Please fill out the form for Traveller cancellation
              </h3>
            )}
            {selectedType === "cancel_route" && (
              <h3 className="cancel-route">
                Please fill out the form for Route cancellation
              </h3>
            )}
          </div>
          <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <p>
                Enter your Savari booking reference number <span>*</span>
              </p>
            </div>
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <div className="mb-4">
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  placeholder="Savari Booking Reference Number"
                  name="bookingId1"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <p>Remark</p>
            </div>
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <div className="mb-4">
                <textarea
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="remark"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <div className="captcha">
                <img
                  className="main-img"
                  src="images/captchaImage.png"
                  alt=""
                />
                <a href="#">
                  <img src="images/refreshCaptchaIcon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 pr-4 pl-4 w-full">
              <div className="mb-4">
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  placeholder="Enter the captcha"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full text-center">
              <Button value="Submit" />
            </div>
          </div>
        </div>
        {/* ......................................cancel mid content start..................................*/}
      </form>
      {/* ........................................Passenger Details table ..................................*/}
      <FormButtom selectedType={selectedType} />
    </>
  );
};

export default FormPage;
