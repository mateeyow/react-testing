import React from 'react';

const Button = ({ variant = 'primary', children, onClick }) => (
  <button className={`button button-${variant}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
