import React from 'react';
import './CommandLine.scss';

const CommandLine = ({ emoji, location, command }) => {
    return (
        <div className="command-line">
            <div className="command-line__wrapper">
                <div className="command-line__user">{'{alt-algotrader}'}</div>
                <div className="command-line__emoji">{emoji}</div>
                <div className="command-line__location">{location}</div>
            </div>
            <div className="command-line__command">{command}</div>
        </div>
    );
};

export default CommandLine;