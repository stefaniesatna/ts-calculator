import React, { FC } from "react"
import CSS from "csstype"

const Display: FC = () => {
    return (
        <div style={style}>
            Display
        </div>
    )
}

export default Display

const style: CSS.Properties = {
    width: "100%",
    height: "150px",
    backgroundColor: "#50514F",

    textAlign: "right",
    borderRadius: "10px",
    marginBottom: "20px",
}