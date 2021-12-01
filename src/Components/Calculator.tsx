import React, { FC } from "react"
import CSS from "csstype"
import Display from "./Display"
import Numbers from "./Numbers"
import Operators from "./Operators"


const Calculator: FC = () => {
    return (
        <div style={style}>
            <Display />
            <Operators />
            <Numbers />
        </div>
    )
}

export default Calculator

const style: CSS.Properties = {
    display: "flex",
    flexDirection: "column",

    border: "1px green solid",
    width: "50%",
    color: "#f08080",
}