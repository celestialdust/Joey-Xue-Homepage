import React from 'react';
import background from '../img/Background.jpg';

const Logo = (props) => (
  <div className={props.className}>
    <img src={background} alt="Logo" className="w-full h-full" />
  </div>
);

export default Logo;