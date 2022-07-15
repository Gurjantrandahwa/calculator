import React, {useState} from "react";

const Calculator = () => {
    const [result, setResult] = useState("")
    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const Clear = () => {
        setResult("")
    }
    const Backspace = () => {
        setResult(result.slice(0, -1))
    }
    const Calculate = () => {
        try {
            setResult(eval(result).toString())
        }catch (e) {
            setResult("Error")
        }
    }

    return <div className={"container"}>
        <p>{result}</p>
        <div className={"keypad"}>
            <button className={"clear "} onClick={Clear}>Clear</button>
            <button className={"highlight"} onClick={Backspace}>C</button>
            <button className={"highlight"} name={"/"} onClick={handleClick}>/</button>
            <button name={"7"} onClick={handleClick}>7</button>
            <button name={"8"} onClick={handleClick}>8</button>
            <button name={"9"} onClick={handleClick}>9</button>
            <button className={"highlight"} name={"*"} onClick={handleClick}>X</button>
            <button name={"4"} onClick={handleClick}>4</button>
            <button name={"5"} onClick={handleClick}>5</button>
            <button name={"6"} onClick={handleClick}>6</button>
            <button className={"highlight"} name={"-"} onClick={handleClick}>-</button>
            <button name={"1"} onClick={handleClick}>1</button>
            <button name={"2"} onClick={handleClick}>2</button>
            <button name={"3"} onClick={handleClick}>3</button>
            <button className={"highlight"} name={"+"} onClick={handleClick}>+</button>
            <button name={"0"} onClick={handleClick}>0</button>
            <button name={"."} onClick={handleClick}>.</button>
            <button className={"result"} name={"="} onClick={Calculate}>=</button>
        </div>
    </div>
}
 export default Calculator