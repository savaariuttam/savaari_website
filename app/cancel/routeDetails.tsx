"use client";
import React from "react";
import Button from "./button";

const RouteDetails = () => {
  return (
    // .........................................................Route Details
    <div className="block w-full overflow-auto scrolling-touch">
      <form>
        <table className="w-full max-w-full bg-transparent table-bordered table-hover table-striped table-checkable table-highlight-head mb-4">
          <tbody>
            <tr>
              <th className="checkbox-column">
                <div className="custom-control custom-checkbox checkbox-primary"></div>
              </th>
              <th className="">Name</th>
              <th className="">Date</th>
              <th className="">Route</th>
            </tr>
          </tbody>
          <tbody id="route"></tbody>
        </table>
        <Button value="Cancel" />
      </form>
    </div>
  );
};

export default RouteDetails;
