import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    onItemSelect,
    valueProperty,
    contentProperty,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((key) => (
                <li
                    className={
                        "list-group-item" +
                        (items[key] === selectedItem ? " active" : "")
                    }
                    key={items[key][valueProperty]}
                    role="button"
                    onClick={() => onItemSelect(items[key])}
                >
                    {items[key][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
