import React, { useContext } from "react";
import UserContext from "./userContext";

export default function MovieRow() {
    const userContext = useContext(UserContext);
    console.log("currentUser", userContext);

    return (
        <div>
            MovieRow:{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
        </div>
    );
}
