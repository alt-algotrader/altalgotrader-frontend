import React, { useEffect } from 'react';
import { Home } from '../components/Home';

const HomePage = () => {
    useEffect(() => {
        document.title = "Alt's Algo Trading Room";
    }, []);

    return (
        <div className="home">
            <Home />
        </div>
    );
};

export default HomePage;