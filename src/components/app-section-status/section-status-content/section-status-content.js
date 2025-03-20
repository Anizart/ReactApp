import React from "react";

import './app-status-content.css';

import AppStatusItem from '../section-status-item';

const AppStatusContent = ({posts}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="item">
                <AppStatusItem {...itemProps} />
            </li>
        )
    });

    return (
        <ul className="status">
            {elements}
        </ul>
    )
}

export default AppStatusContent;