import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';

const BlogPage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Blog";
    }, []);

    return (
        <div className="main">
            <Navbar />
        </div>
    );
};

export default BlogPage;