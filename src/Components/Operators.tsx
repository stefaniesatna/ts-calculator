import React, { FC } from "react"
import CSS from "csstype"

const Operators: FC = () => {
    const operators = ["+", "-", "/", "x", "="]
    const operatorComponents = operators.map((operator:string) => <button style={operatorStyle}>{operator}</button>)
    return (
        <div style={style}>
            {operatorComponents}
        </div>
    )
}

export default Operators

const style: CSS.Properties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    columnGap: "20px",
    marginBottom: "20px"
}

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
    fontSize: "x-large"
}