import React from 'react';
import './Jhero.css';

export default function Jhero({ heading }) {
  return (
    <div className="jhero-container">
      <div className="text-center text-white">
        <h1>{heading}</h1>
      </div>
    </div>
  );
}
