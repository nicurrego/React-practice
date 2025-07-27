import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers]  = useState([]);
    const [isLoading, setIsLoading]  = useState([true]);
    const [error, setError]  = useState([null]);

    useEffect(() => {
        const fetchUsers = async () => {

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                const data = await response.json();
                setUsers(data);
                fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.error(error));
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUsers();
    }, [])

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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