import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("Api called.");
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;

      if (currentName.length > longestName.length) longestName = currentName;
    }

    setCount((prevState) => prevState + 1);
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <>
      <div>
        {getLongestName}
        <br></br>

        <button
          onClick={() => {
            // findLongestName(data);
            getLongestName()
            
          }}
        >
          get longest Name.
        </button>
        <br></br>

        <p>{count } Many Times Consumed. </p>

        <p> Function <code>findLongestName</code> will execute every time we click on Toggle button.</p>
       <p>To avoid redundent executions and increase the perfomance we can use useMemo Hook.</p>
       <p>Implimentation of useMemo Hook: <code>const getLongestName = useMemo(() => findLongestName(data), [data]);</code></p>
       <p>Reffer getLongestName this const to execute the <code>findLongestName</code> function</p>
      </div>
    </>
  );
};

export default UseMemoHook;
