import React from "react";

const SectionStatusAdd = () => {
    return (
        <form className="form">
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
                >Добавить</button>
            </div>
        </form>
    )
}

export default SectionStatusAdd;