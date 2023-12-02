// LoadingScreen.js
import React from 'react';

const LoadingScreen = ( isLoading ) => {
  return (
    <div className="loading-screen">
        <div className="loading-spinner"></div>
      <p lassName="loading-text"></p>
    </div>
  );
};

export default LoadingScreen;
