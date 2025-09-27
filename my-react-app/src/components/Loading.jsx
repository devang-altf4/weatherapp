// Loading.jsx  
import React from 'react';

const Loading = ({ size = 40, color = "#3498db" }) => {
  const spinnerStyle = {
    border: `4px solid #f3f3f3`,
    borderTop: `4px solid ${color}`,
    borderRadius: '50%',
    width: `${size}px`,
    height: `${size}px`,
    animation: 'spin 1s linear infinite',
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </>
  );
};

export default Loading;
