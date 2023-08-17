import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import Quality from "../Quality/Quality";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookmark
}) => {
    const formatRate = (rate) => {
        return `${rate} / 5`;
    };

    return (
        <tr>
            <th scope="row">{name}</th>
            <td>
                {qualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{formatRate(rate)}</td>
            <td>
                <Bookmark
                    id={_id}
                    status={bookmark}
                    onToggleBookmark={onToggleBookmark}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default User;
