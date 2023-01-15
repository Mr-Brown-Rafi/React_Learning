import React from "react";

const Login = (props) => {
  return (
    <>
      <input onChange={(event) => props.setName(event.target.value)}></input>
    </>
  );
};

export default Login;
