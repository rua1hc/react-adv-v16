import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./CartContext";

export default function MovieRow() {
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);
    console.log("currentUser", userContext);
    console.log("cartContext", cartContext);

    return (
        <div>
            MovieRow:{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
        </div>
    );
}
