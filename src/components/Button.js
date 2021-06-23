import React from 'react';
import './Button.css';

export const Button = ({children, type, onClick}) => {
    
    return (
        <button onClick={onClick} type={type}>
          {children}
        </button>
    )
};

export default Button;
