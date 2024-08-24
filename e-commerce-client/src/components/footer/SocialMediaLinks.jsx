import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import brandImg from '../../assets/react.svg'

const SocialMediaLinks = () => {
    return (
        <>
            <div className="social-media-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} className="mx-2" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} className="mx-2" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} className="mx-2" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} className="mx-2" />
                </a>
            </div>
            <div className='mx-auto my-3'>
                <img src={brandImg} alt="Brand Image" width={100} height={100}/>
            </div>
        </>
    );
};

export default SocialMediaLinks;
