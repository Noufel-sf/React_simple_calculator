import React from 'react';

function Keys({ value, handle_onclick }) {
  return (
    <button
      onClick={() => handle_onclick(value)}
      className='text-2xl font-bold cursor-pointer p-4 hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg shadow-md bg-white'
    >
      {value}
    </button>
  );
}

export default Keys;
