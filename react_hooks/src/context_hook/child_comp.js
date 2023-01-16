import React, {useContext} from "react";
import { AppContext } from "./context_hook";


const ChildComponent = () => {

const {age} = useContext(AppContext);

    return <>
    <p>This value is taken from about input field state, which is in parent component, value passed via <b>Contextage</b> not props</p>

    {age}
    </>
}

export default ChildComponent;