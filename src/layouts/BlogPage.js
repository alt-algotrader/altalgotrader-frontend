import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Bash } from '../components/Bash';
import { Blog } from '../components/Blog';
import { Post } from '../components/Post';
import posts from '../posts';

const BlogPage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Blog";
    }, []);

    const location = useLocation();
    const pathname = location.pathname;
    const path = pathname.split('/');

    const defaultChildren = (
        <>
            <Blog />
        </>
    );

    let children = defaultChildren;

    if (path.length === 3 || path.length === 4) {
        const slug = path[2];
        if (slug !== '') {
            const category = slug.split('-')[0];
            const postName = slug.split('-')[1];
            const post = posts[category][postName];
            children = <Post post={post} />;
        }
    }

    return (
        <div className="main">
            <Navbar />
            <Bash children={children} colorMode={'light'} />
        </div>
    );
};

export default BlogPage;