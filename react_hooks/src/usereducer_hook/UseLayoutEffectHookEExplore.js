import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHookExplore = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() =>{
    inputRef.current.value = "Rajak."
  },[])

  return (
    <>
      <div>
        <input ref={inputRef} value="Rafi." readOnly></input>
      </div>
    </>
  );
};

export default UseLayoutEffectHookExplore;
