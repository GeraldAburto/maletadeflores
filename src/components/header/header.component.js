import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header row center-xs start-sm middle-xs'>
        <Link className='logo-container col-xs-12 col-sm-4 col-md-4 center-sm' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options col-xs-12 col-sm-8 col-md-offset-4 col-md-4'>
            <div className='row around-xs'>
                <Link className='option col-xs-4' to='/colecciones'>COLECCIONES</Link>
                <Link className='option col-xs-4' to='/contacto'>CONTACTO</Link>
                {
                    currentUser ?
                        <div className='option col-xs-4' onClick={() => auth.signOut()}>CERRAR SESI&Oacute;N</div> :
                        <Link className='option col-xs-4' to='/registro'>REGISTRO</Link>
                }
            </div>
        </div>
    </div>
);

export default Header;