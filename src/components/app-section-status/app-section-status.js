import React from "react";

import SectionStatusHeader from './section-status-header';
import SectionStatusFilter from './section-status-filter';
import AppStatusContent from './section-status-content';
import SectionStatusAdd from './section-status-add';

import {Container} from '../app';

const AppSectionStatus = () => {
    return (
        <section className="app-section-status">
            <Container>
                <SectionStatusHeader />
                <SectionStatusFilter />
                <AppStatusContent />
                <SectionStatusAdd />
            </Container>
        </section>
    )
}

export default AppSectionStatus;