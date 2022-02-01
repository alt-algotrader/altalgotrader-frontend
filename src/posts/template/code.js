import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../../styles/css/prism.css';

const Code = ({ language, code }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className="post__code">
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export { Code, };