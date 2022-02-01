import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Bash } from '../components/Bash';

const PostPage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Blog";
    }, []);

    const children = (
        <>
            blog post
        </>
    );

    return (
        <div className="main">
            <Navbar />
            <Bash children={children} colorMode={'light'} />
        </div>
    );
};

export default PostPage;