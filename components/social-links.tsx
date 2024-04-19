'use client'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/amitesh197" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/amitesh-sawarkar/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
