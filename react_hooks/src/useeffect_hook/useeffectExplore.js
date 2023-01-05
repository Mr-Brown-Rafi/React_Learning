import React, { useEffect, useState } from "react";
import axios from "axios";

const UseeffectExplore = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("Api called.")
      });
  },[]);

  return <>
  <p>This email get via API call using useEffect hook.</p>
  <p>{data}</p>
  </>;
};

export default UseeffectExplore;
