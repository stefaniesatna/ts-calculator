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
  boxSizing: "border-box",
  backgroundColor: "#50514F",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  fontWeight: "600",
  fontFamily: "helvetica",
  fontSize: "xxx-large",
};