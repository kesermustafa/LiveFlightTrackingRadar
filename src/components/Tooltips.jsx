import React from 'react';
import './style/tooltip.css'; // CSS dosyasını ayrı tutuyoruz

const Tooltips = ({ title, tooltipText, desings }) => {
    return (
        <div className="tooltip-container">
            <h2 className={desings}>{title}</h2>
            <div className="tooltip-text">{tooltipText}</div>
        </div>
    );
};

export default Tooltips;
