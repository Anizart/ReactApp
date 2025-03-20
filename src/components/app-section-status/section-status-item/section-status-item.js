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
        const {label} = this.props,
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
                    <button className="btn btn-trash">&#128465;</button>
                    <button
                        className="btn btn-hard"
                        onClick={this.onLike}
                    >&#10084;</button>
                </div>
            </div>
        )
    }
}