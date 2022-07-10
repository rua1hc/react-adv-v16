import React from "react";
import { useState, useEffect } from "react";

import useDocumentTitle from "./useDocumentTitle";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect(() => {
    //     document.title = `${name} clicked: ${count} times`;

    //     return () => {
    //         console.log("Clean up");
    //     };
    // }, [count]);

    useDocumentTitle(`${name} clicked ${count} times!`);

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
