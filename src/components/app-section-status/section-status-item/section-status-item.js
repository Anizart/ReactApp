import React, { Component } from "react";

import './app-status-item.css';

export default class AppStatusItem extends Component {
    render = () => {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props; // через него ( onDelete ) прокидывается выше, то есть...

        let classNames = 'item-wrapper';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <div className={classNames}>
                <span className="item-label">
                    {label}
                </span>
                <div className="icon-wrapper">
                    <button
                        className="btn btn-star"
                        onClick={onToggleImportant}
                    >&#9733;</button>
                    <button
                        className="btn btn-trash"
                        onClick={onDelete} // сюда кликнули, и он передаёт 'на меня нажали'
                    >&#128465;</button>
                    <button
                        className="btn btn-hard"
                        onClick={onToggleLiked}
                    >&#10084;</button>
                </div>
            </div>
        )
    }
}