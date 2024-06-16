import React, { useState } from 'react';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const clearInput = () => {
    setLocation('');
  };

  return (
    <div className="flex flex-col items-end">
      <div className="relative flex items-center border rounded-md p-2 w-96">
        <span className="material-icons text-gray-500 mr-2">
        <svg height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#9e9e9e" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        </span>
        <input 
          type="text" 
          value={location}
          onChange={handleInputChange}
          placeholder="Enter your location" 
          className="flex-grow outline-none"
        />
        {location && (
          <button onClick={clearInput} className="ml-2 text-gray-500">
            &times;
          </button>
        )}
      </div>
      <p className="text-gray-500 text-base mt-5 text-center flex">
        Your location will help us serve better and extend a personalised experience.
      </p>
    </div>
  );
};

export default LocationInput;
