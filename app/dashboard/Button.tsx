// ButtonComponent.js
import React from "react";

const ButtonComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="btn btn-red inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-red"
        data-toggle="modal"
        data-target="#markupModal"
      >
        Add Markup
      </button>
    </div>
  );
};

export default ButtonComponent;
