import React from "react";
import Button from "./Button";
import { useRef } from "react";

const ImperativeHook = () => {
  const ButtonRef = useRef(null);
  const onClickHandler = () => {
    ButtonRef.current.alterToggle();
  };

  return (
    <>
      <button onClick={onClickHandler}>Parent Button</button>
      <br />
      <Button ref={ButtonRef} />
    </>
  );
};

export default ImperativeHook;
