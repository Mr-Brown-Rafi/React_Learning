import { useRef, useState } from "react";

const UserefhookExplore = () => {
  const [todos, setTodos] = useState(['RAFI']);
  const inputRef = useRef(null);

  const onClickHandler = () => {
    setTodos([...todos , inputRef.current.value]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <h4>useRef Explore.</h4>
        <input placeholder="Type here..." ref={inputRef}></input>
        <button onClick={onClickHandler}>Add Todo</button>

        <br />
        <br />

        {todos.map(todo => <p key={todo}>{todo}</p>)}
      </div>
    </>
  );
};

export default UserefhookExplore;
