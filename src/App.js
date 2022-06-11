import { useState, useEffect } from "react";

import { AddUserModal } from "./components/AddUserModal/add-user-modal";
import { UserTable } from "./components/UserTable/user-table";

import "./App.css";

const localStorageKey = "users";
function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [users, setUsers] = useState(undefined);

    useEffect(() => {
        let users = JSON.parse(localStorage.getItem(localStorageKey));

        if (!users) {
            users = [];
            localStorage.setItem(localStorageKey, JSON.stringify(users));
        }

        setUsers(users);
    }, []);

    const toggleModal = () => setModalOpen((prevState) => !prevState);

    const handleAdd = (user) => {
        const newUser = {
            id: users.length + 1,
            ...user,
        };

        const newUsers = [newUser, ...users];

        localStorage.setItem(localStorageKey, JSON.stringify(newUsers));
        setUsers(newUsers);
        setModalOpen(false);
    };

    const handleRemove = () => {
        localStorage.setItem(localStorageKey, JSON.stringify([]));
        setUsers([]);
    };
    
    const handleSort = (sortField) => {
        const usersCopy = JSON.parse(JSON.stringify(users));

        const sortedUsers = usersCopy.sort((a, b) => {
            if (a[sortField] < b[sortField]) return -1;
            if (a[sortField] > b[sortField]) return 1;
            return 0;
        }); 

        setUsers(sortedUsers);
    };

    return (
        <div className="app-container">
            {modalOpen && <AddUserModal handleAdd={handleAdd} closeModal={toggleModal} />}
            <div className="user-component">
                <div className="button-container">
                    <button className="btn" onClick={toggleModal}>
                        Add
                    </button>
                    <button className="btn" onClick={handleRemove}>
                        Remove
                    </button>
                </div>
                <UserTable users={users} handleSort={handleSort} />
            </div>
        </div>
    );
}

export default App;
