import React from 'react';
import './Logo.css';
import Logo from '../../assets/img/logo.png';

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="Logo"/>
        </a>
    </aside>