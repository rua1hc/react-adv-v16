import React, { useContext } from "react";
import UserContext from "./userContext";

export default function MovieRow() {
    const currentUser = useContext(UserContext);
    console.log("currentUser", currentUser);
    return <div>{currentUser.name}</div>;
}
