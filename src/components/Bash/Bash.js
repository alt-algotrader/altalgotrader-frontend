import React from 'react';
import './Bash.scss';
import { Link } from 'react-router-dom';

const Bash = ({ children, colorMode }) => {
    const containerClass = (colorMode == 'dark') ? 'bash__container dark' : 'bash__container light';

    return (
        <div className={containerClass}>
            <div className="bash__container--status">
                <div className="bash__container--buttons">
                    <Link to="/">
                        <div className="bash__container--button bash__container--button-close"></div>
                    </Link>
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