import React from "react";

const SectionStatusAdd = ({onAdd}) => {
    return (
        <div className="form">
            <input
                className="input"
                type="text"
                placeholder="О чём Вы думаете сейчас?"
                tabIndex={4}
            />
            <div className="btn-wrapper">
                <button
                    className="btn btn-like"
                    tabIndex={5}
                    onClick={() => onAdd('Hello')}
                >Добавить</button>
            </div>
        </div>
    )
}

export default SectionStatusAdd;