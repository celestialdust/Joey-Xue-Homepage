import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => (
  <div className={`${className}`}>
    <img src="./background.jpg" alt="Logo" className="w-full h-full" />
  </div>
);

export default Logo;