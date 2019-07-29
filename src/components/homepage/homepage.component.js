import React from 'react';

import '../homepage/homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>VESTIDOS</h1>
                    <span className='subtitle'>COMPRAR AHORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BLUSAS</h1>
                    <span className='subtitle'>COMPRAR AHORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PANTALONES</h1>
                    <span className='subtitle'>COMPRAR AHORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HOMBRES</h1>
                    <span className='subtitle'>COMPRAR AHORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MUJERES</h1>
                    <span className='subtitle'>COMPRAR AHORA</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;