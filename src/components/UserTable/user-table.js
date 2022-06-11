import "./user-table.css";

export const UserTable = ({ users = [], handleSort }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort("name")}>Name</th>
                    <th onClick={() => handleSort("surname")}>Surname</th>
                    <th onClick={() => handleSort("age")}>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 &&
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
