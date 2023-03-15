import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.css";


import { useReducer } from "react";

const Counter = () => {

//     const [count, setCount] = useState(0);

//     const incrCounter = () => {
//         setCount((prevState) => prevState + 1)
//     }
//     const decrCounter = () => {
//         setCount((prevState) => prevState - 1)
//     }

//------------------------------------------------------------- Reducer ------------------------------------------------------    
    
const initialState = {count: 0};
const reducer = (state, action) => {

    switch(action.type) {
        case "INCR":
            return {count: state.count + 1}
        case "DECR":
            return {count: state.count - 1}            
        case "RES":
            return {count: state.count = 0} 
            
        default:
            return {count: state.count}
    }

}

const [state, dispatch] = useReducer(reducer, initialState)

const callbackIncr = () => {
    dispatch({type: "INCR"})
}

const callbackDecr = () => {
    dispatch({type: "DECR"})
}

const callbackRes = () => {
    dispatch({type: "RES"})
}

    return (
        // <div className="counter">
        //     <Button clickFunction={incrCounter}>Incr</Button>
        //     <Button clickFunction={decrCounter}>Decr</Button>
        //     <h1 className="text">Counter: {count}</h1>
        // </div>

        <div className="counter">
                <h1 >Count: {state.count}</h1>
                <button className="btn" onClick={callbackIncr}>Incr</button>
                <button className="btn" onClick={callbackDecr}>Decr</button>
                <button className="btn" onClick={callbackRes}>Res</button>
        </div>
    )

}

export default Counter;