import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.css";
const Counter = () => {

    const [count, setCount] = useState(0);

    const incrCounter = () => {
        setCount((prevState) => prevState + 1)
    }
    const decrCounter = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <div className="counter">
            <Button clickFunction={incrCounter}>Incr</Button>
            <Button clickFunction={decrCounter}>Decr</Button>
            <h1 className="text">Counter: {count}</h1>
        </div>
    )

}

export default Counter;