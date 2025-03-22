import React, { Component } from "react";

import './app-status-item.css';

export default class AppStatusItem extends Component {
    state = {
        important: false,
        like: false
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render = () => {
        const {label, onDelete} = this.props, // через него ( onDelete ) прокидывается выше, то есть...
              {important, like} = this.state;

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
                        onClick={this.onImportant}
                    >&#9733;</button>
                    <button
                        className="btn btn-trash"
                        onClick={onDelete} // сюда кликнули, и он передаёт 'на меня нажали'
                    >&#128465;</button>
                    <button
                        className="btn btn-hard"
                        onClick={this.onLike}
                    >&#10084;</button>
                </div>
            </div>
        )
    }
}