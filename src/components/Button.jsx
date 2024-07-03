import React from "react";

const Button = ({ text, onclick, dupa = "" }) => (
  <button
    className={`block bg-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 transform hover:scale-[110%] transition-transform duration-[5000] ${dupa}`}
    onClick={onclick}
  >
    {text}
  </button>
);

export default Button;
