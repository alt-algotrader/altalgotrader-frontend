import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Bash } from '../components/Bash';
import { Home } from '../components/Home';

const HomePage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Room";
    }, []);

    const children = (
        <>
            <Home />
        </>
    );

    return (
        <div className="main">
            <Navbar />
            <Bash children={children} />
        </div>
    );
};

export default HomePage;