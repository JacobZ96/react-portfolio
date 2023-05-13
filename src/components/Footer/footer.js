import React, { useState } from "react";
import linkedin from './linkedin.png'
import github from './github.png'
import stackoverflow from './stackoverflow.png'


const Footer = () => {
    return (
        <footer>
            <div id='icons'>
                <a href='https://github.com/JacobZ96' target='_blank' rel="noopener noreferrer">
                    <img src={github} alt='github icon' target='_blank' rel="noopener noreferrer" className='icons'></img>
                </a>
                <a href='https://www.linkedin.com/in/jacob-zea-23612b261/' target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin icon' target='_blank' rel="noopener noreferrer" className='icons'></img>
                </a>
                <a href='https://stackoverflow.com/users/21894432/jacob-zea' target='_blank' rel="noopener noreferrer">
                    <img src={stackoverflow} alt='stackoverflow icon' target='_blank' rel="noopener noreferrer" className='icons'></img>
                </a>
            </div>
        </footer>
    )};

export default Footer;