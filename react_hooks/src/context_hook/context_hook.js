import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextHook = () => {
  const [name, setName] = useState("");
  return (
    <>
      <AppContext.Provider value={{name, setName}}>
        <Login></Login>
        <User></User>
      </AppContext.Provider>
    </>
  );
};

export default ContextHook;
