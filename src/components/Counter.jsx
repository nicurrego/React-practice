import { useState } from "react";
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleAdd = () => {
        setCounter(counter + 1);
    };
    const handleSubstract = () => {
        setCounter(counter - 1);
    };
    const handleReset = () => {
        setCounter(0);
    };
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );
}

export default Counter;