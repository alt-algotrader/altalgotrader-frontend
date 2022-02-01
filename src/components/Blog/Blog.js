import React from 'react';
import './Blog.scss';
import { CommandLine } from '../Bash';
import { Footer } from '../Footer';

const Blog = () => {
    return (
        <div className="blog">
            <CommandLine emoji={'🌎'} location={'~/blog'} command={'ls blog'} />
            <BlogList />
            <CommandLine emoji={'🦄'} location={'~/blog'} command={'team'} />
            <Footer />
        </div>
    );
};

const BlogList = () => {
    const categories = [
        ['Trading', 0],
        ['Backtesting', 0],
        ['Solidity', 0],
        ['Defi', 0],
    ];

    return (
        <div className="blog__list">
            <div className="blog__list--title">
                Categories:
            </div>
            {
                categories.map(c => (
                    <BlogListCategory category={c} />
                ))
            }
        </div>
    );
};

const BlogListCategory = ({ category }) => {
    return (
        <div className="blog__list--category">
            <p>{category[0]}</p>
            <div>{category[1]}</div>
        </div>
    );
};

export default Blog;