import React from 'react';
import './loading.css'
const Loading = () => {
    return (
        <div className="loading-wrapper">
        <div className="loader">
            <span></span>
            <div id="dot-1" className="dot"></div>
            <div id="dot-2" className="dot"></div>
            <div id="dot-3" className="dot"></div>
            <div id="dot-4" className="dot"></div>
            <div id="dot-5" className="dot"></div>
        </div>
        </div>
    );
};

export default Loading;
