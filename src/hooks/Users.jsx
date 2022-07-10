import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(data);
        }
        getUsers();
    });

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
