import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, size, ...otherProps }) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${ size  || ''}`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;