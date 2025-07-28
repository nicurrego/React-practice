import useCounter  from "../../hooks/useCounter";

const CounterCustomHook = () => {
    const {
        count,
        increment,
        decrement,
        reset,
    } = useCounter(10);

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={increment} >+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default CounterCustomHook;