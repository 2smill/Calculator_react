import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

  const handleAdd = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) + parseFloat(value2));
    }
  };

  const handleSubtract = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) - parseFloat(value2));
    }
  };

  const handleMultiply = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) * parseFloat(value2));
    }
  };

  const handleDivide = () => {
    if (value1 && value2) {
      setResult(parseFloat(value1) / parseFloat(value2));
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={value1}
        onChange={handleValue1Change}
        placeholder="Enter a number"
        className="input-field"
      />
      <input
        type="text"
        value={value2}
        onChange={handleValue2Change}
        placeholder="Enter a number"
        className="input-field"
      />
      <div className="buttons">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}> -</button>
        <button onClick={handleMultiply}>x</button>
        <button onClick={handleDivide}> /</button>
      </div>
      {result !== '' && <h1 className="result"> {result}</h1>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Activity Calculator P2</h1>
      <Calculator />
    </div>
  );
}

export default App;
