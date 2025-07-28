import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count +1};
        case "decrement":
            return { count: state.count -1};
        case "reset":
            return { count: 0};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispathc] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispathc({ type: "increment" })}>Incrementar</button>
            <button onClick={() => dispathc({ type: "decrement" })}>Decrementar</button>
            <button onClick={() => dispathc({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter;