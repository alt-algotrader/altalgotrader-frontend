import React, { useState } from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';
import { CommandLine } from '../Bash';
import { Footer } from '../Footer';
import posts from '../../posts';

const Blog = () => {
    const [category, setCategory] = useState('All');

    return (
        <div className="blog">
            <CommandLine emoji={'🌎'} location={'~/blog'} command={'ls blog'} />
            <BlogList setCategory={setCategory} />
            <BlogPostList category={category} />
            <CommandLine emoji={'🦄'} location={'~/blog'} command={'team'} />
            <Footer />
        </div>
    );
};

const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);

const BlogList = ({ setCategory }) => {
    const categories = [];
    let allCnt = 0

    for (let c in posts) {
        const cnt = Object.keys(posts[c]).length
        categories.push([capitalize(c), cnt]);
        allCnt += cnt;
    }

    categories.push(['All', allCnt]);

    const onClickCategory = (e) => {
        const category = e.target.innerText.split('\n')[0];
        setCategory(category);
    };

    return (
        <div className="blog__list">
            <div className="blog__list--title">
                Categories:
            </div>
            {
                categories.map((c, idx) => (
                    <BlogListCategory category={c} onClick={onClickCategory} key={idx} />
                ))
            }
        </div>
    );
};

const BlogListCategory = ({ category, onClick }) => {
    return (
        <div className="blog__list--category" onClick={onClick}>
            <p>{category[0]}</p>
            <div className="blog__list--category-cnt">{category[1]}</div>
        </div>
    );
};

const BlogPostList = ({ category }) => {
    let postObj;

    if (category !== 'All') {
        postObj = posts[category.toLowerCase()];
    } else {
        postObj = {};
        let allCnt = 0;
        for (let c in posts) {
            const p = posts[c];
            for (let slug in p) {
                const d = p[slug];
                postObj[allCnt] = d;
                allCnt += 1;
            }
        }
    }

    const postArr = Object.values(postObj);

    return (
        <div className="blog__postlist">
            {
                postArr.map((post, idx) => (
                    <BlogPostListItem post={post} key={idx} />
                ))
            }
        </div>
    );
};

const BlogPostListItem = ({ post }) => {
    const dateStr = (date) => {
        const Y = date.slice(0, 4);
        const m = date.slice(4, 6);
        const d = date.slice(6, 8);
        return `${Y}-${m}-${d}`;
    };

    const timeStr = (time) => {
        const H = time.slice(0, 2);
        const M = time.slice(2, 4);
        const S = time.slice(4, 6);
        return `${H}:${M}:${S}`;
    };

    const postURL = `/blog/${post.category}-${post.slug}`;

    return (
        <Link to={postURL}>
            <div className="blog__postlist--item">
                <div className="blog__postlist--item-category">+-|{capitalize(post.category)}|-+</div>
                <div className="blog__postlist--item-title">{post.title}</div>
                <div className="blog__postlist--item-summary">{post.summary}</div>
                <div className="blog__postlist--item-wrapper">
                    <div className="blog__postlist--item-writer">{post.writer},</div>
                    <div className="blog__postlist--item-datetime">{`${dateStr(post.upload_date)} ${timeStr(post.upload_time)}`}</div>
                </div>
            </div>
        </Link>
    );
};

export default Blog;