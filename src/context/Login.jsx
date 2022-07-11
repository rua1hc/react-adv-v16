import React, { useContext } from "react";

import UserContext from "./userContext";

export default function Login() {
    const userContext = useContext(UserContext);

    return (
        // <button>Login</button>
        // <button onClick={userContext.onLoggedin}>Login</button>
        <button onClick={() => userContext.onLoggedin("rua5hc")}>Login</button>
    );
}
