import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Bash } from '../components/Bash';
import { Blog } from '../components/Blog';

const BlogPage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Blog";
    }, []);

    const children = (
        <>
            <Blog />
        </>
    );

    return (
        <div className="main">
            <Navbar />
            <Bash children={children} colorMode={'light'} />
        </div>
    );
};

export default BlogPage;