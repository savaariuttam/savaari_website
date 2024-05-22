"use client"
import React, { useState } from 'react'

const ProfileLeft = () => {

    return (


        <div className="lg:w-1/4 md:w-2/3 pr-4 pl-4 w-1/5 left-sec ml-48">
            <div className="w-full pr-8 pl-8">
                <ul className="breadcumb">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><span>Your Profile</span></li>
                </ul>
            </div>
            <ul className='sidemenu w-56'>
                <li>
                    dashboard
                </li>
                <li>
                    <details className="dropdown">
                        <summary className="m-1 btn">Booking</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-white-800 rounded-box w-52">
                            <li><a>cancel</a></li>
                            <li><a>Reschedule</a></li>
                            <li><a>All Bookings</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    dashboard
                </li>
                <li>
                    <details className="dropdown">
                        <summary className="m-1 btn">Savaari Cash</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-white-800 rounded-box w-52">
                            <li><a>Check balance</a></li>
                            <li><a>All Transactions</a></li>
                        </ul>
                    </details>
                </li>
            </ul>

        </div>
    )
}

export default ProfileLeft
