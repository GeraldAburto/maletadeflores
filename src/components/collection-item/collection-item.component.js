import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl, price }) => (
    <div className='collection-item'>
        <div className='image' style={ { backgroundImage: `url(${imageUrl})` } } ></div>
        <div className='collection-item-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>C${ price }</span>
        </div>
    </div>
);

export default CollectionItem;