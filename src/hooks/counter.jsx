import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <React.Fragment>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <div>
                {name} clicked Counter: {count} times!
            </div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </React.Fragment>
    );
}

export default Counter;
