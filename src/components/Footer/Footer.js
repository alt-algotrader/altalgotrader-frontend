import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Naver } from '../../styles/images/naver_icon.svg';

const Footer = () => {
    // https://icon-icons.com/ko/
    return (
        <div className="footer">
            <p>© 2022 Alt. All rights reserved. Email: alt.algotrader@gmail.com</p>
            <p>
                <a href="https://blog.naver.com/ppark9553" target="_blank">
                    <Naver />
                </a>
                <a href="https://github.com/alt-algotrader" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </p>
        </div>
    );
};

export default Footer;