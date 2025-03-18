import React from "react";

import './section-status-filter.css';

const SectionStatusFilter = () => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Поиск по записям"
                tabIndex={1}
            />
            <div className="btn-wrapper">
                <button
                    className="btn btn-all"
                    tabIndex={2}
                >Всё</button>
                <button
                    className="btn btn-like"
                    tabIndex={3}
                >Понраввилось</button>
            </div>
        </form>
    )
}

export default SectionStatusFilter;