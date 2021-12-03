import React from "react";
import CSS from "csstype";
import "../App.css";

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
          className="button-operator"
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