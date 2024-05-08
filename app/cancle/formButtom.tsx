import React, { useState } from "react";
import PassangerDetails from "./passangerDetails";
import RouteDetails from "./routeDetails";
const FormButtom = ({ selectedType }) => {
  return (
    <div className="full-cancel">
      <div className="box-one">
        {selectedType === "cancel_conplete_trip" && (
          <h3 className="full-cancel">Ticket Details</h3>
        )}
        {selectedType === "cancel_traveller" && (
          <>
            <h3 className="cancel-traveller">Passenger Details</h3>
            <PassangerDetails />
          </>
        )}
        {selectedType === "cancel_route" && (
          <>
            <h3 className="cancel-route">Route Details</h3>
            <RouteDetails />
          </>
        )}
      </div>
    </div>
  );
};

export default FormButtom;
