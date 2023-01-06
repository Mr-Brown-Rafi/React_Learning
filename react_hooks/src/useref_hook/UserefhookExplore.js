import { useRef } from "react";

const UserefhookExplore = () => {
  const inputRef = useRef(null);

  const onClickHandler = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <h4>useRef Explore.</h4>
        <input placeholder="Type here..." ref={inputRef}></input>
        <button onClick={onClickHandler}>Clear</button>
      </div>
    </>
  );
};

export default UserefhookExplore;
