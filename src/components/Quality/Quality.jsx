import React from "react";
import PropTypes from "prop-types";

const Quality = ({ name, color }) => {
    return <span className={`badge bg-${color} m-2 p-2`}>{name}</span>;
};

Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Quality;
