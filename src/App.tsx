import React, {FC} from 'react';
import CSS from "csstype"
import Calculator from "./Components/Calculator"

const App: FC = () => {
  return (
    <div style={style}>
      <Calculator />
    </div>
  )
}

export default App;

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  border: "1px solid black",
  marginTop: "200px",

  fontWeight: "600",
  fontFamily: "helvetica",
  fontSize: "x-large"
}
