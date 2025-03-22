import React, { Component } from "react";

import styled from 'styled-components';

import AppSectionStatus from '../app-section-status';

const AppStyle = styled.div`
    box-sizing: border-box;

    min-height: 100vh;
    width: 100%;
    background: #121212;

    color: #fff;
`;

export const Container = styled.div`
    max-width: 1110px;
    padding: 0 15px;
    padding: 35px 0;
    margin: 0 auto;
`;

export default class App extends Component {
    state = {
        data: [
            {label: 'Hello World!', important: true, id: 1}, // элемент массива data
            {label: 'React App', important: true, id: 2},
            {label: 'Hy! My neme\'s...', important: true, id: 3},
        ]
    }

    maxId = 4; // ????? свойство

    deleteItem = (id) => { // ...сюда и обрабатывается
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); // elem - каждый элемент массива data. elem.id беру id из этих элементов и сравниваю с пришедшем id( который получаю при нажатии на кнопку удл. )
            
            // Т.к. напрямую state менять нелязя, нужно старый масив ( data ) разбить на до и после, а потом соединиь их в один масив:
            const before = data.slice(0, index); // ( это до ) используя метод slice копирую часть масива и создаю новый масив
            const after = data.slice(index + 1); // ( это после, 2-я часть массива )

            const newArr = [...before, ...after]; // Соединяю в один массив

            return { // Т.к. команда setState должна что-то вернуть
                data: newArr
            }
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render = () => {
        const {data} = this.state;
        return (
            <AppStyle>
                <AppSectionStatus
                    posts={data}
                    onDelete={this.deleteItem} // ...сюда. Тут происходит вызов фун-ии, поэтому id передаётся...
                    onAdd={this.addItem}
                />
            </AppStyle>
        )
    }
}