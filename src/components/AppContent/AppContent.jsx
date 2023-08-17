import React, { useState } from "react";

import API from "../../api";

import UsersList from "../UsersList/UsersList";
import SearchStatusBar from "../SearchStatusBar/SearchStatusBar";

import "./AppContent.css";

const AppContent = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (id) =>
        setUsers(users.filter((user) => user._id !== id));

    const handleTooggleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) return { ...user, bookmark: !user.bookmark };

            return user;
        });

        setUsers(newUsers);
    };

    return (
        <>
            <SearchStatusBar length={users.length} />
            <UsersList
                usersData={users}
                onDelete={handleDelete}
                onToggleBookmark={handleTooggleBookmark}
            />
        </>
    );
};

export default AppContent;
