import React from "react";
import DashboardBox from "./Dashboard";
import ButtonComponent from "./Button";
const MainDashboard = () => {
  return (
    <>
      <section className="user-pg mt-20">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="title-sec pr-4 pl-4">
                <h3>My Dashboard</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <DashboardBox
              headingname="Modify Booking"
              imageSrc="ModifyBooking"
              litext1="Cancel"
              litext2="Reschedule"
              litext3="All Bookings"
            />
            <DashboardBox
              headingname="Ticket"
              imageSrc="Ticket"
              litext1="SMS/Email Ticket"
              litext2="Print Ticket"
              litext3="Print Invoice/Receipt"
            />
            <DashboardBox
              headingname="Claim Refund"
              imageSrc="https://onlinesavaari.website/static/main/images/icon/claim-refund.svg"
              litext1="Track Flight Refund Status"
              litext2="Check your Refund"
              litext3=" "
            />
            <DashboardBox
              headingname="Profile"
              imageSrc="Profile"
              litext1="View profile"
              litext2="Edit profile"
              litext3=""
            />
            <DashboardBox
              headingname="Savaari Cash"
              imageSrc="https://onlinesavaari.website/static/main/images/icon/ecash.svg"
              litext1="Check balance"
              litext2="All Transactions"
              litext3="Recharge wallet"
            />
            <DashboardBox
              headingname="Sub User"
              imageSrc="SubUser"
              litext1="Add Sub User"
              litext2="View Sub User"
              litext3=""
            />
            <DashboardBox
              headingname="User Markup"
              imageSrc="https://onlinesavaari.website/static/main/images/icon/ecash.svg"
              litext1="Domestic Markup"
              litext2="International Markup"
              litext3=""
              btn={<ButtonComponent />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
