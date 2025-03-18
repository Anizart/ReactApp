import React from "react";

import './app-status-item.css';

const AppStatusItem = () => {
    return (
        <li className="item-wrapper">
            <span className="item-label">
                Hello World!
            </span>
            <div className="icon-wrapper">
                <button className="btn btn-star">&#9733;</button>
                <button className="btn btn-trash">&#128465;</button>
                <button className="btn btn-hard">&#10084;</button>
            </div>
        </li>
    )
}

export default AppStatusItem;