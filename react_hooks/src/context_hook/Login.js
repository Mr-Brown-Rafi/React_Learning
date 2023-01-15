import React, { useContext } from "react";
import { AppContext } from "./context_hook";

const Login = (props) => {
  const { setName } = useContext(AppContext);
  return (
    <>
      <input onChange={(event) => setName(event.target.value)}></input>
    </>
  );
};

export default Login;
