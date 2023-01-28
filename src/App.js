import { useState } from 'react';
import './Calci.css';
import * as math from 'mathjs'
function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("0");
  const handleClick=(value)=>{
    setInputValue(prev=>prev+value)
  }
  const evaluate=()=>{
    const exp=inputValue;
    const result=math.evaluate(exp)
    setResult(result)
  }
  const clearInput=()=>{
    setInputValue("")
    setResult("0")
  }
  return (
    <div className='container'>
    <div className="Wrapper">
      <div className='inputWrapper'>
        <div className='input'>{inputValue}</div>
        <div className='result'>{result}</div>
      </div>
     
      <div>
        <button className='Button' onClick={()=>handleClick("1")}>1</button>
        <button className='Button' onClick={()=>handleClick("2")}>2</button>
        <button className='Button' onClick={()=>handleClick("3")}>3</button>
        <button className='Button' id='x' onClick={()=>handleClick("+")}>+</button>
      </div>
      <div>
        <button className='Button' onClick={()=>handleClick("4")}>4</button>
        <button className='Button' onClick={()=>handleClick("5")}>5</button>
        <button className='Button' onClick={()=>handleClick("6")}>6</button>
        <button className='Button' id='x' onClick={()=>handleClick("-")}>-</button>
      </div>
      <div>
        <button className='Button' onClick={()=>handleClick("7")}>7</button>
        <button className='Button' onClick={()=>handleClick("8")}>8</button>
        <button className='Button' onClick={()=>handleClick("9")}>9</button>
        <button className='Button' id='x' onClick={()=>handleClick("*")}>*</button>
      </div>
      <div>
        <button className='Button' onClick={()=>handleClick("0")}>0</button>
        <button className='Button' id="s" onClick={evaluate}>=</button>
        <button className='Button' id="y" onClick={clearInput}>Clear</button>
        <button className='Button' id='x' onClick={()=>handleClick("/")}>/</button>
      </div>
    </div>
    </div>
  );
}

export default App;
