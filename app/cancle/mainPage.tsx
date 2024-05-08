import React from "react";
import FormPage from "./formPage";
const Mainapge = () => {
  return (
    <section className="cancel-pg">
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="w-full">
            <div className="box-one">
              <FormPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mainapge;
