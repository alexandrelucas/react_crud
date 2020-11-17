import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default props =>
    <Link className="navItem" to={`/${props.path || ''}`}>
        <i className={`fa fa-${props.icon}`}></i>
        {props.children && props.children}
    </Link>