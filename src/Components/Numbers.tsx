import React from "react";
import CSS from "csstype";

interface Props {
  handleClick(el: string): void;
}

const Numbers = ({ handleClick }: Props) => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberComponents = numbers.map((number: number, index: number) => {
    return (
      <button
        key={index}
        onClick={() => handleClick(String(number))}
        style={numberStyle}
      >
        {number}
      </button>
    );
  });

  return <div style={style}>{numberComponents}</div>;
};

export default Numbers;

const style: CSS.Properties = {
  width: "100%",
  height: "100px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: "20px",
  rowGap: "20px",
};

const numberStyle: CSS.Properties = {
  width: "100%",
  height: "100px",
  backgroundColor: "#FFFCF9",
  borderRadius: "10px",

  padding: "0",
  border: "none",
  color: "lightcoral",
  cursor: "pointer",

  fontWeight: "600",
  fontFamily: "helvetica",
  fontSize: "x-large",
};
