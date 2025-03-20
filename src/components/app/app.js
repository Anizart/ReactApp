import React from "react";

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

const App = () => {

    const data = [
        {label: 'Hello World!', important: true, id: 1},
        {label: 'Hello World!', important: true, id: 2},
        {label: 'Hello World!', important: true, id: 3},
    ];

    return (
        <AppStyle>
            <AppSectionStatus posts={data}/>
        </AppStyle>
    )
}

export default App;