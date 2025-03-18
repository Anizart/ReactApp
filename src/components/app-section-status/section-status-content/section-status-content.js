import React from "react";

import './app-status-content.css';

import AppStatusItem from '../section-status-item';

const AppStatusContent = () => {
    return (
        <ul className="status">
            <AppStatusItem />
            <AppStatusItem />
            <AppStatusItem />
        </ul>
    )
}

export default AppStatusContent;