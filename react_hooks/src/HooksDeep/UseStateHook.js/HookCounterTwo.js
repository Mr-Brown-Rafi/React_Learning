import React, { useState } from "react";

const HookCounterTwo = () => {
  const intialcount = 0;
  const [count, setCount] = useState(intialcount);

  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1);
      //This will not work as we expected because React will schedule the execution it might take wrong snap shot of data(parallel execution)
      setCount((prevState) => prevState + 1)
    }
  }

  return (
    <div>
      Count : {count}
      <br />
      <br />
      <button onClick={() => setCount(intialcount)}>Reset</button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
};

export default HookCounterTwo;
