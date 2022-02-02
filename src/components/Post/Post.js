import React from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { CommandLine } from '../Bash';
import { Footer } from '../Footer';

const Post = ({ post }) => {
    return (
        <div className="post-wrapper">
            <div className="post-wrapper__action">
                <Link to="/blog">
                    [<FontAwesomeIcon icon={faChevronLeft} />] Go Back
                </Link>
            </div>
            <div className="post-wrapper__content">
                {post.post}
            </div>
            <CommandLine emoji={'🦄'} location={'~/blog'} command={'team'} />
            <Footer />
        </div>
    );
};

export default Post;