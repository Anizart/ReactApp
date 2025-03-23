import React, { Component } from "react";

export default class SectionStatusAdd extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({ // Не передаю колбэк фун-ю, т.к. state не зависит от предыдущего
            text: e.target.value
        }); 
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text); // Обнавляет state и добавляет элемент на стр.
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form
                className="form"
                onSubmit={this.onSubmit}
            >
                <input
                    className="input"
                    type="text"
                    placeholder="О чём Вы думаете сейчас?"
                    tabIndex={4}
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <div className="btn-wrapper">
                    <button
                        type="submit"
                        className="btn btn-like"
                        tabIndex={5}
                    >Добавить</button>
                </div>
            </form>
        )
    }
}