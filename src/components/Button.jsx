import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat leading-none bg-coral-red rounded-full text-white ">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="hero right icon"
          className="rounded-full ml-2 w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
