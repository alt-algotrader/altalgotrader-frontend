import React from 'react';
import './styles.scss';

const H1 = ({ text }) => <h1 className="post post__header">{text}</h1>;
const H2 = ({ text }) => <h2 className="post post__header">{text}</h2>;
const H3 = ({ text }) => <h3 className="post post__header">{text}</h3>;
const H4 = ({ text }) => <h4 className="post post__header">{text}</h4>;
const H5 = ({ text }) => <h5 className="post post__header">{text}</h5>;
const H6 = ({ text }) => <h6 className="post post__header">{text}</h6>;

export { H1, H2, H3, H4, H5, H6, };