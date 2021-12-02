import React, { FC, useState } from "react"
import CSS from "csstype"
import Display from "./Display"
import Numbers from "./Numbers"
import Operators from "./Operators"


const Calculator: FC = () => {

    const [display, setDisplay] = useState<string[]>([])

    const handleClick = (el: string) => {
        setDisplay([...display, el])
        calculate(display)
    }

    return (
        <div style={style}>
            <Display value={display.join("")}/>
            <Operators handleClick={handleClick} />
            <Numbers handleClick={handleClick}/>
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

const calculate = (arr: string[]) => {
    console.log(arr)
    const reducedArr = []
    let num = ""
    let operator = ""

    for (let i = 0; i < arr.length; i++){
        if (isNaN(parseInt(arr[i]))){
            if (num !== ""){
                reducedArr.push(num)
                num = ""
            }
            operator = arr[i]
        } else {
            if (operator !== ""){
                reducedArr.push(operator)
            }
            num += arr[i]
        }
        console.log("Number: ", num)
        console.log("Operator: ", operator)
    }
    console.log(reducedArr)
    console.log(parseInt("+"))
    console.log(typeof parseInt("+"))
}