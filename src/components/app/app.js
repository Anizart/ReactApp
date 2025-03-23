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
            {label: 'Hello World!', important: true, like: false, id: 1}, // элемент массива data
            {label: 'React App', important: false, like: false, id: 2},
            {label: 'Hy! My neme\'s...', important: false, like: false, id: 3},
        ],
        term: '',
        filter: 'all'
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

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}; // Когда я указываю like: !old.like после разворота, то он ( like... ) перезапишет like в old
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items
        }
    }

    onUpdatSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render = () => {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length; // Прохожусь по всем элементам like ( item.like ) и если оно true, то я его возращаю ( получаю )
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppStyle>
                <AppSectionStatus
                    liked={liked}
                    allPosts={allPosts}

                    onUpdatSearch={this.onUpdatSearch}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}

                    posts={visiblePosts}
                    onDelete={this.deleteItem} // ...сюда. Тут происходит вызов фун-ии, поэтому id передаётся...
                    onAdd={this.addItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
            </AppStyle>
        )
    }
}