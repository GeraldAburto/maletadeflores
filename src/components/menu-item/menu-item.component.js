import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageURL, size, linkURL, history, match }) => (
    <div className={ `menu-item col-xs-12 col-md-${size || '3'}` } onClick={() => history.push(`${match.url}${linkURL}`)}>
        <div className='background' style={ { backgroundImage: `URL(${imageURL || 'https://abeon-hosting.com/images/no-image-found-png-6.png'}` } }></div>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>{ (subtitle || 'COMPRAR AHORA').toUpperCase() }</span>
        </div>
    </div>
)

export default withRouter(MenuItem);