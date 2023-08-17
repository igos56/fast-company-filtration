import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ id, status, onToggleBookmark }) => {
    return (
        <>
            <i
                className={"bi bi-bookmark" + (status ? "-fill" : "")}
                onClick={() => onToggleBookmark(id)}
                style={{ cursor: "pointer" }}
            ></i>
        </>
    );
};

Bookmark.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default Bookmark;
