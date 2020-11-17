import React from 'react';
import './Nav.css';

import NavItem from './NavItem';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home">Início</NavItem>
            <NavItem icon="users" path="users">Usuários</NavItem>
        </nav>
    </aside>