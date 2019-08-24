import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageURL, size }) => (
    <div className={ `menu-item ${size || ''}` }>
        <div className='background' style={ { backgroundImage: `URL(${imageURL || 'https://abeon-hosting.com/images/no-image-found-png-6.png'}` } }></div>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>{ (subtitle || 'COMPRAR AHORA').toUpperCase() }</span>
        </div>
    </div>
)

export default MenuItem;