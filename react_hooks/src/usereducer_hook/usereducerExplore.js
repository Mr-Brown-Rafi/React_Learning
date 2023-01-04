import { useReducer } from "react";

const reduser = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

const UsereducerExplore = () => {
  const [state, dispatch] = useReducer(reduser, { count: 1, showText: true });

  const actionsHandler = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "toggleShowText" });
  };

  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={actionsHandler}>Click here</button>

        {state.showText && <p>This is text to showup.</p>}
      </div>
    </>
  );
};

export default UsereducerExplore;
