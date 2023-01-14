import React from "react";
import { useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

//order of the parameters are matter here.
const Button = forwardRef((props,ref) => {
  const [toggle, setToggle] = useState(false);


  //for useImperativeHandle we need to pass ref and a function which returns an object of function as shown in below.
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      {/* <button onClick={onClickHandler}>Child Button</button><br/> */}

      <button>Child Button</button>
      <br />
      {toggle && <span>This text displayed.</span>}
    </>
  );
});

export default Button;
