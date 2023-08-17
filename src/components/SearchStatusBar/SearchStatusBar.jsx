import React from "react";
import PropTypes from "prop-types";

const SearchStatusBar = ({ length }) => {
    const formatPhrase = () => {
        const count = length;
        const lastChar = Number(count.toString().slice(-1));
        const lastTwoChar =
            count > 9 ? Number(count.toString().slice(-2)) : undefined;

        if (count > 4 && count < 10)
            return `${count} человек тусанет с тобой сегодня`;
        if ([2, 3, 4].includes(lastChar) && ![12, 13, 14].includes(lastTwoChar))
            return `${count} человека тусанут с тобой сегодня`;
        if (lastChar === 1) return `${count} человек тусанёт с тобой сегодня`;
        return `${count} человек тусанет с тобой сегодня`;
    };

    return (
        <>
            {length > 0 ? (
                <h1>
                    <span className="badge bg-primary m-2">
                        {formatPhrase()}
                    </span>
                </h1>
            ) : (
                <h1>
                    <span className="badge bg-warning m-2">
                        {"Никто с тобой не тусанет :("}
                    </span>
                </h1>
            )}
        </>
    );
};

SearchStatusBar.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatusBar;
