import React, { Component } from "react";

import './section-status-filter.css';

export default class SectionStatusFilter extends Component {
    state = {
        term: ''
    }

    buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понраввилось'}
    ]

    onUpdatSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdatSearch(term); // Это не рекурсия, эта фун-я будет в App
    }

    render = () => {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-all' : 'btn-like';
            return (
                <button
                    key={name} // Чтоб React не ругался
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });

        return (
            <div className="form">
                <input
                    className="input"
                    type="text"
                    placeholder="Поиск по записям"
                    tabIndex={1}
                    onChange={this.onUpdatSearch}
                />
                <div className="btn-wrapper">
                    {buttons}
                </div>
            </div>
        )
    }
}