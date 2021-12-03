import React from "react";
import CSS from "csstype";

interface Props {
  handleClick(el: string): void;
  handleSubmit(): void;
}

const Operators = ({ handleClick, handleSubmit }: Props) => {
  const operators = ["+", "-", "/", "*", "="];
  const operatorComponents = operators.map(
    (operator: string, index: number) => {
      const onClick = operator === "=" ? handleSubmit : () => handleClick(operator);

      return (
        <button
          key={index}
          onClick={onClick}
          style={operatorStyle}
        >
          {operator}
        </button>
      );
    }
  );

  return <div style={style}>{operatorComponents}</div>;
};

export default Operators;

const style: CSS.Properties = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  columnGap: "20px",
  marginBottom: "20px",
};

const operatorStyle: CSS.Properties = {
  width: "100%",
  height: "100px",
  backgroundColor: "#ADAEAD",
  borderRadius: "10px",

  padding: "0",
  border: "none",
  color: "#FFFCF9",
  cursor: "pointer",

  fontWeight: "600",
  fontFamily: "helvetica",
  fontSize: "x-large",
};
