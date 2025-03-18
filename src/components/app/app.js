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
    return (
        <AppStyle>
            <AppSectionStatus />
        </AppStyle>
    )
}

export default App;