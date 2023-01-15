import React from "react";
import { useContext } from "react";
import { AppContext } from "./context_hook";

const User = (props) => {
  const { name } = useContext(AppContext);

  return (
    <>
      <h3>User Name Entered is: {name}</h3>
    </>
  );
};

export default User;
