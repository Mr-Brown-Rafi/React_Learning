import React, { useState, createContext } from "react";
//import Login from "./Login";
//import User from "./User";

import ChildComponent from "./child_comp";

export const AppContext = createContext(null);

const ContextHook = () => {
  const [age, setAge] = useState(24);
  //const [name, setName] = useState("");
  return (
    <>
      <AppContext.Provider value={{ age }}>
        <input value={age} readOnly />
        <button
          onClick={() => {
            setAge(age + 1);
          }}
        >
          Increment.
        </button>
        <br />
        <br />
        <br />

        <ChildComponent />

        {/* <Login></Login>
        <User></User> */}
      </AppContext.Provider>
    </>
  );
};

export default ContextHook;
