import React from "react";

import SectionStatusHeader from './section-status-header';
import SectionStatusFilter from './section-status-filter';
import AppStatusContent from './section-status-content';
import SectionStatusAdd from './section-status-add';

import {Container} from '../app';

const AppSectionStatus = ({posts, onDelete, onAdd, onToggleImportant, onToggleLiked, liked, allPosts, onUpdatSearch, filter, onFilterSelect}) => { // ...сюда и отдаёт...
    return (
        <section className="app-section-status">
            <Container>
                <SectionStatusHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <SectionStatusFilter
                    onUpdatSearch={onUpdatSearch}
                    filter={filter}
                    onFilterSelect={onFilterSelect}
                />
                <AppStatusContent
                    posts={posts}
                    onDelete={onDelete} // ...и активирует этот onDelete куда и приходит id, который передаётся...
                    onToggleImportant={onToggleImportant}
                    onToggleLiked={onToggleLiked}
                />
                <SectionStatusAdd
                    onAdd={onAdd}
                />
            </Container>
        </section>
    )
}

export default AppSectionStatus;