import React from "react";

import './app-status-content.css';

import AppStatusItem from '../section-status-item';

const AppStatusContent = ({posts, onDelete}) => { // ... передаётся сюда с id

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="item">
                <AppStatusItem
                    {...itemProps}
                    onDelete={() => onDelete(id)} // ... сюда в этот onDelete поэтому запускается фун-я и собирает id...
                />
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