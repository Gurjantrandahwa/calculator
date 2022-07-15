import React, {useState} from "react";

const CalculatorL = () => {
    const [result, setResult] = useState("")
    const [calc, setCalc] = useState([])
    const Clear = () => {
        setCalc([])
        setResult("")
    }
    const Backspace = () => {
        setCalc(calc.slice(0, -1))
    }
    const handleClick = (value) => {
        setCalc([...calc, value])
    }
    const handleResult = () => {
        const result = calc
            .join("")
            .split(/(\D)/g)
            .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
            .reduce((ans, value, index, array) => {
                switch (value) {
                    case "+":
                        return (ans = ans + array[index + 1])
                    case "-":
                        return (ans = ans - array[index + 1])
                    case "*":
                        return (ans = ans * array[index + 1])
                    case "/":
                        return (ans = ans / array[index + 1])
                    default:
                        return ans
                }
            })
        setResult(result)
        setCalc([])
    }
    return <div>
        <div className={"container"}>
            <p>{calc}</p>
            <p>{result}</p>
            <div className={"keypad"}>
                <button className={"clear "} onClick={Clear}>Clear</button>
                <button className={"highlight"} onClick={Backspace}>C</button>
                <button className={"highlight"} onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick(7)}>7</button>
                <button onClick={() => handleClick(8)}>8</button>
                <button onClick={() => handleClick(9)}>9</button>
                <button className={"highlight"} onClick={() => handleClick("*")}>x</button>
                <button onClick={() => handleClick(4)}>4</button>
                <button onClick={() => handleClick(5)}>5</button>
                <button onClick={() => handleClick(6)}>6</button>
                <button className={"highlight"} onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(3)}>3</button>
                <button className={"highlight"} onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick(0)}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button className={"result"} onClick={() => handleResult()}> =</button>
            </div>
        </div>
    </div>
}
export default CalculatorL