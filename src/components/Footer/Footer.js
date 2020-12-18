import React from 'react';
import {Typography} from '@material-ui/core';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Typography variant="caption" display="block" align='center'>
                Created by <a href="https://github.com/marjia-anee">Marjia Zaman</a>
            </Typography>
            
        </div>
    );
}

export default Footer;