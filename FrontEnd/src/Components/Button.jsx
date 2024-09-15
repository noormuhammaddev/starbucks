import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` text-white bg-[#1a6d1e] p-2 m-2 rounded-sm min-w-[30%] ${className}` }
    >
      {label}
    </button>
  );
};

export default Button;
