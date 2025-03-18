import React from "react";

import './section-status-header.css';

const SectionStatusHeader = () => {
    return (
        <div className="section-wrapper">
            <div className="user-wrapper">
                <div className="user-img"></div>
                <div className="user-name">
                    Vlad
                </div>
            </div>
            <div className="records">
                3 записи, из них 0 понравилось
            </div>
        </div>
    )
}

export default SectionStatusHeader;