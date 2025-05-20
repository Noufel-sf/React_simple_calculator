import { useState } from 'react';
import Keys from './Keys';
import './App.css';

function App() {
  const [input_val, setInput_val] = useState('');

  // calclulator keys 

  const Calculator_Keys = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C','CE', '+', '='
  ];

  // function to handle the keys clicks in the calculator

  const handle_onclick = (key) => {
    if (key === '=') {
      try {
        setInput_val(eval(input_val).toString());
         setTimeout(() => {
          setInput_val('');
        }, 1200);
      } catch {
        setInput_val('Error');
        setTimeout(() => {
          setInput_val('');
        }, 1000);
      }
    }else if (key === 'C') {
      setInput_val('');
    } else if (key === 'CE') {
      setInput_val(input_val.slice(0, -1));
    } else if (key === '.') {
      if (input_val.includes('.')) return;
      setInput_val((prev) => prev + key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      if (['+', '-', '*', '/'].includes(input_val.slice(-1))) return;
      setInput_val((prev) => prev + key) ;  // prev is just a name for the previous value of input_val .
    } 
    else {
      setInput_val((prev) => prev + key) ;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500'>
      <h1 className='text-4xl font-bold mb-4'>Calculator</h1>
      <div className="p-8 flex flex-col  gap-12 rounded-lg shadow-lg bg-black" >
        <input
          type="text"
          className='p-4 text-right text-2xl outline-none font-bold bg-white rounded'
          value={input_val}
          readOnly
        />
        <div className='grid grid-cols-3 gap-4'>
          {Calculator_Keys.map((key) => (
            <Keys key={key} value={key} handle_onclick={handle_onclick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
