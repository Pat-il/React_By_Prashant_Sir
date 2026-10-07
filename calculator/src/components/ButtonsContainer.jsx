import React from "react";

const ButtonsContainer = ({ onButtonClicked }) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <div className="buttons-container">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className="button"
            onClick={() => onButtonClicked(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
