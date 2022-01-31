import React from 'react';
import './Bash.scss';

const Bash = ({ children }) => {
    return (
        <div className="bash__container">
            <div className="bash__container--status">
                <div className="bash__container--buttons">
                    <div className="bash__container--button bash__container--button-close"></div>
                    <div className="bash__container--button bash__container--button-min"></div>
                    <div className="bash__container--button bash__container--button-max"></div>
                </div>
                <div className="bash__container--title">
                    alt-algotrader@algotradingroom:~
                </div>
            </div>
            <div className="bash__container--body">
                {children}
            </div>
        </div>
    );
};

export default Bash;