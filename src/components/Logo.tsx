import React from 'react';

function Logo({ className = "w-12 h-12" }){
     return (
        <div className={`${className}`}>
          <img src="./background.jpg" alt="Logo" className="w-full h-full" />
        </div>
      );
}

export default Logo;