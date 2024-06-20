import React from "react";
import PassangerDetails from "./passangerDetails";
import RouteDetails from "./routeDetails";

interface FormButtonProps {
  selectedType: string;
}

const FormButton: React.FC<FormButtonProps> = ({ selectedType }) => {
  return (
    //* ........................................cancel page Passenger and route Details table ..................................
    <div className="full-cancel">
      <div className="box-one">
        {selectedType === "cancel_complete_trip" && (
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

export default FormButton;
