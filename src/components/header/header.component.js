import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/colecciones'>COLECCIONES</Link>
            <Link className='option' to='/contacto'>CONTACTO</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>CERRAR SESI&Oacute;N</div> :
                    <Link className='option' to='/registro'>REGISTRO</Link>
            }
        </div>
    </div>
);

export default Header;