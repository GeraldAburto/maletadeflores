import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/colecciones'>COLECCIONES</Link>
            <Link className='option' to='/contacto'>CONTACTO</Link>
            <Link className='option' to='/registro'>REGISTRO</Link>
        </div>
    </div>
);

export default Header;