import React, { useState } from "react";
import Login from "./Login";
import User from "./User";


const ContextHook = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Login setName={setName}></Login>
      <User name={name}></User>
    </>
  );
};

export default ContextHook;
