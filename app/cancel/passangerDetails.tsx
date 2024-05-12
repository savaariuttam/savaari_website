"use client";
import React from "react";
import Button from "./button";

const PassangerDetails = () => {
  return (
    <div className="block w-full overflow-auto scrolling-touch">
      <form action="/flight/cancel_booking/" method="POST">
        <table className="w-full max-w-full bg-transparent table-bordered table-hover table-striped table-checkable table-highlight-head mb-2">
          <thead>
            <tr>
              <th className="checkbox-column">
                <div className="custom-control custom-checkbox checkbox-primary"></div>
              </th>
              <th className="">Name</th>
              <th className="">Date</th>
              <th className="">Origin</th>
              <th className="">Destination</th>
            </tr>
          </thead>
          <tbody id="pax"></tbody>
        </table>
        <Button value="Cancel" />
      </form>
    </div>
  );
};

export default PassangerDetails;
