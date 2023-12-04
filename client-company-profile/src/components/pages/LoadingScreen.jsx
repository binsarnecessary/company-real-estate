import React, { useState, useEffect } from 'react';
import logo from "../data/images/logo2.gif";


const LoadingScreen = () => {

  return (
    <div className='loading-screen loading'>
      <img
        src={logo}
        alt="Company Logo"
        className="company-logo mr-10 loading-logo logo-appear"
        style={{maxWidth: '120px', maxHeight: '120px', marginTop: '-70px', marginRight: '10px'  }}
      />
      <div className='loading'></div>
    </div>
  );
};

export default LoadingScreen;
