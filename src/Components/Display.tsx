import React from "react";
import CSS from "csstype";

interface Props {
  value: string;
}

const Display = ({ value }: Props) => {
  return <div style={style}>{value}</div>;
};

export default Display;

const style: CSS.Properties = {
  width: "100%",
  height: "150px",
  backgroundColor: "#50514F",

  textAlign: "right",
  borderRadius: "10px",
  marginBottom: "20px",
};
