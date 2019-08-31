import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl, price }) => (
    <div className='collection-item col-xs-6 col-sm-3 col-md-3'>
        <div className='image' style={ { backgroundImage: `url(${imageUrl})` } } ></div>
        <div className='collection-item-footer row between-xs'>
            <span className='name col-xs-10'>{ name }</span>
            <span className='price col-xs-2'>C${ price }</span>
        </div>
    </div>
);

export default CollectionItem;