import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers]  = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error(error));
    })
    return (
        <div>
            <h1>User list</h1>
            <ul>
                {users.map((user) => (
                    <li class="uppercase text-2xl overflow-auto whitespace-nowrap" key={user.id}>{user.name} - {user.address.city}</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;