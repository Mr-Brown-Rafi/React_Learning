import React,{ useState } from "react";


const UsestateExplore  = () => {
    const [count, setCount] = useState(0);

    const onClickHandler =  () => {
        setCount( (prevState)  => prevState + 1);
    }

    return (
    <div>
        <h3>Counter App</h3>
        {count}<br/><br/>
        <button onClick={onClickHandler}>Increment</button>
    </div>
    );
}

export default UsestateExplore;