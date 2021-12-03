import React from "react";
import CSS from "csstype";
import "../App.css";

interface Props {
  handleClick(el: string): void;
}

const Numbers = ({ handleClick }: Props) => {
  const numbers: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
  ];

  const numberComponents = numbers.map((number: string, index: number) => {
    // const buttonStyle = number === "0" ? zeroStyle : numberStyle;
    const buttonStyle = number === "0" ? "button-zero" : "button-num";

    return (
      <button
        key={index}
        onClick={() => handleClick(number)}
        className={buttonStyle}
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
