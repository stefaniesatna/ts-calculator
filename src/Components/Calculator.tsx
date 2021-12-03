import React, { FC, useState } from "react";
import CSS from "csstype";
import Display from "./Display";
import Numbers from "./Numbers";
import Operators from "./Operators";
import isOperator from "../helpers/isOperator";

const Calculator: FC = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (el: string): void => {
    const lastChar = display[display.length - 1];

    // design choice: if operator is repeating, record the last operator clicked
    if (display.length > 0 && isOperator(lastChar) && isOperator(el)) {
      setDisplay((prevDisplay: string): string => prevDisplay.slice(0, -1));
    }
    setDisplay((prevDisplay: string): string => prevDisplay + el);
  };

  const handleSubmit = (): void => {
    if (display.length > 2) {
      setDisplay((prevDisplay: string): string => eval(prevDisplay).toString());
    }
  };

  return (
    <div style={style}>
      <Display value={display} />
      <Operators handleClick={handleClick} handleSubmit={handleSubmit} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default Calculator;

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",

  border: "1px green solid",
  width: "50%",
  color: "#f08080",
};
