import React from "react";

import SectionStatusHeader from './section-status-header';
import SectionStatusFilter from './section-status-filter';
import AppStatusContent from './section-status-content';
import SectionStatusAdd from './section-status-add';

import {Container} from '../app';

const AppSectionStatus = ({posts, onDelete, onAdd}) => { // ...сюда и отдаёт...
    return (
        <section className="app-section-status">
            <Container>
                <SectionStatusHeader />
                <SectionStatusFilter />
                <AppStatusContent
                    posts={posts}
                    onDelete={onDelete} // ...и активирует этот onDelete куда и приходит id, который передаётся...
                />
                <SectionStatusAdd
                    onAdd={onAdd}
                />
            </Container>
        </section>
    )
}

export default AppSectionStatus;