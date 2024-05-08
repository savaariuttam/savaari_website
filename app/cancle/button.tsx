import React from "react";
const Button = ({ value }) => {
  return (
    <>
      <button
        id="submit"
        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-red"
        type="submit"
      >
        {value}
      </button>
    </>
  );
};

export default Button;
