import React from "react";

import './section-status-header.css';

const SectionStatusHeader = ({allPosts, liked}) => {
    return (
        <div className="section-wrapper">
            <div className="user-wrapper">
                <div className="user-img"></div>
                <h1 className="user-name">
                    Vlad
                </h1>
            </div>
            <h2 className="records">
                {allPosts} записи, из них {liked} понравилось
            </h2>
        </div>
    )
}

export default SectionStatusHeader;