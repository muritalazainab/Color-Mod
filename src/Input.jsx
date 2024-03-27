import colorNames from "colornames";
import React from "react";

const Input = ({
  colorValue,
  setColorValue,
  sethexValue,
  isDarkText,
  setisDarkText,
}) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {setColorValue(e.target.value)
            sethexValue(colorNames(e.target.value))
        }}
      />
      <button onClick={() => 
        setisDarkText(!isDarkText)
      }>
        Toggle Text Color</button>
    </form>
  );
};


export default Input;
