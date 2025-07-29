import { useReducer } from "react";

type State = { count: number }
type Action = { type: "increment" | "decrement" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
    return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </>
    );
}