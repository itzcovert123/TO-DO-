import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);

    function inClick(){
        setCount(count+1);
    }
    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={inClick}> Counter</button>
        </div>
    )
}