import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){
    return (
        <div className='footer-div'>
            <footer>
                <ul>
                    <a href='https://github.com/ashrean' target='blank'>
                        <li>
                            <FaGithub/>
                        </li>
                    </a>

                    <a href='https://www.linkedin.com/in/ashleyrean/' target='blank'>
                        <li>
                            <FaLinkedin/>
                        </li>
                    </a>

                    <a href='https://www.instagram.com/ashleyrean/' target='blank'>
                        <li>
                            <FaInstagram/>
                        </li>
                    </a>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
