import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../Pagination/Pagination";
import User from "../User/User";
import { paginate } from "../../utils/paginate";
import GroupList from "../groupList/groupList";
import API from "../../api";

const UsersList = ({ usersData, onDelete, onToggleBookmark }) => {
    const users = usersData;
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        API.professions
            .fetchAll()
            .then((professions) => setProfessions(professions));
    });

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users;

    const cropedUsers = paginate(filteredUsers, currentPage, pageSize);

    return (
        <>
            {professions && (
                <GroupList
                    items={professions}
                    selectedItem={selectedProf}
                    onItemSelect={handleProfessionSelect}
                />
            )}
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cropedUsers.map((user) => (
                            <User
                                key={user._id}
                                {...user}
                                onDelete={onDelete}
                                onToggleBookmark={onToggleBookmark}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

UsersList.propTypes = {
    usersData: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default UsersList;
