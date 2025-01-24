import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        fetch("http://localhost:8081/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                setError('Failed to fetch users');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>

            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index} style={{ listStyle: 'none' }}>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
