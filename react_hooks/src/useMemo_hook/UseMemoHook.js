import React, { useState,useEffect } from "react";
import axios from "axios";


const UseMemoHook = () => {
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

    console.log("computed");
    return longestName;
  };
  

  return(<>
   <div>{findLongestName(data)}</div>
  </>);
};

export default UseMemoHook;
